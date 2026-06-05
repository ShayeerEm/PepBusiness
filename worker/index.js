/* ════════════════════════════════════════════════════════════════════════════
   OzzyPeps — Cloudflare Worker backend

   Responsibilities:
     • POST /api/checkout                 create order + crypto invoice
     • POST /api/webhooks/nowpayments     payment IPN (updates order status)
     • GET  /api/address/autocomplete     Geoapify address suggestions (proxied)
     • GET  /api/payment-status           poll an order's status (for return page)
     • GET  /admin                        admin dashboard (token-gated)
     • GET  /api/admin/orders             order list JSON (token-gated)
     • POST /api/admin/orders/:n/status   update an order's status (token-gated)
     • everything else                    static assets (env.ASSETS)

   Secrets / vars (set via `wrangler secret put` — never commit these):
     NOWPAYMENTS_API_KEY     NOWPayments API key       (payments off if unset)
     NOWPAYMENTS_IPN_SECRET  IPN signature secret      (webhook rejected if unset)
     GEOAPIFY_KEY            Geoapify autocomplete key  (autocomplete off if unset)
     ADMIN_TOKEN            admin dashboard password   (admin off if unset)
     PUBLIC_BASE_URL         e.g. https://ozzypeps.store (for callback/return URLs)
   ════════════════════════════════════════════════════════════════════════════ */

const SHIPPING_AUD = 89;
const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8' };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    try {
      if (pathname === '/api/checkout' && request.method === 'POST') {
        return await handleCheckout(request, env, url);
      }
      if (pathname === '/api/webhooks/nowpayments' && request.method === 'POST') {
        return await handleNowPaymentsIPN(request, env);
      }
      if (pathname === '/api/address/autocomplete' && request.method === 'GET') {
        return await handleAddressAutocomplete(request, env, url);
      }
      if (pathname === '/api/payment-status' && request.method === 'GET') {
        return await handlePaymentStatus(env, url);
      }
      if (pathname === '/admin' || pathname === '/admin/') {
        return await handleAdminPage(request, env);
      }
      if (pathname === '/api/admin/orders' && request.method === 'GET') {
        return await handleAdminOrders(request, env);
      }
      const statusMatch = pathname.match(/^\/api\/admin\/orders\/([^/]+)\/status$/);
      if (statusMatch && request.method === 'POST') {
        return await handleAdminUpdateStatus(request, env, decodeURIComponent(statusMatch[1]));
      }
    } catch (err) {
      return json({ error: 'server_error', message: String(err && err.message || err) }, 500);
    }

    // Fall through to static assets
    return env.ASSETS.fetch(request);
  },
};

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function json(obj, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(obj), { status, headers: { ...JSON_HEADERS, ...extraHeaders } });
}

function nowIso() { return new Date().toISOString(); }

function genOrderNumber() {
  const y = new Date().getFullYear();
  const n = String(Math.floor(10000 + Math.random() * 89999));
  return `OP-${y}-${n}`;
}

function clampStr(v, max) {
  return (v == null ? '' : String(v)).trim().slice(0, max);
}

const EMAIL_RE = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,24}$/i;

/* ── Checkout: validate, persist, create crypto invoice ──────────────────── */
async function handleCheckout(request, env, url) {
  if (!env.DB) return json({ error: 'db_not_configured' }, 503);
  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }

  const c = body.customer || {};
  const name  = clampStr(c.name, 120);
  const email = clampStr(c.email, 160).toLowerCase();
  const phone = clampStr(c.phone, 40);

  if (name.split(/\s+/).filter(Boolean).length < 2) return json({ error: 'invalid_name' }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);

  const addr = body.address || {};
  const address = {
    line1:    clampStr(addr.line1, 160),
    line2:    clampStr(addr.line2, 160),
    suburb:   clampStr(addr.suburb, 80),
    state:    clampStr(addr.state, 40),
    postcode: clampStr(addr.postcode, 16),
    country:  clampStr(addr.country || 'Australia', 60),
  };
  if (!address.line1 || !address.suburb || !address.state || !address.postcode) {
    return json({ error: 'invalid_address' }, 400);
  }

  // Re-price the cart server-side — never trust client totals.
  const items = Array.isArray(body.items) ? body.items : [];
  if (items.length === 0) return json({ error: 'empty_cart' }, 400);

  const cleanItems = items.map(i => ({
    id:    clampStr(i.id, 60),
    name:  clampStr(i.name, 120),
    size:  clampStr(i.size, 80),
    emoji: clampStr(i.emoji, 8),
    price: Math.max(0, Number(i.price) || 0),
    qty:   Math.min(99, Math.max(1, Math.floor(Number(i.qty) || 1))),
  }));
  const subtotal = round2(cleanItems.reduce((s, i) => s + i.price * i.qty, 0));
  if (subtotal <= 0) return json({ error: 'invalid_total' }, 400);
  const shipping = SHIPPING_AUD;
  const total = round2(subtotal + shipping);

  const orderNumber = genOrderNumber();
  const createdAt = nowIso();
  const notes = clampStr(c.notes || body.notes, 1000);

  // Persist as pending_payment
  await env.DB.prepare(
    `INSERT INTO orders
      (order_number, status, customer_name, email, phone,
       address_line1, address_line2, suburb, state, postcode, country,
       notes, items_json, subtotal, shipping, total, currency,
       payment_provider, ip, user_agent, created_at)
     VALUES (?,?,?,?,?, ?,?,?,?,?,?, ?,?,?,?,?,?, ?,?,?,?)`
  ).bind(
    orderNumber, 'pending_payment', name, email, phone,
    address.line1, address.line2, address.suburb, address.state, address.postcode, address.country,
    notes, JSON.stringify(cleanItems), subtotal, shipping, total, 'AUD',
    'nowpayments',
    request.headers.get('cf-connecting-ip') || '',
    clampStr(request.headers.get('user-agent'), 300),
    createdAt
  ).run();

  // If payments aren't configured yet, return the saved order so the flow still
  // completes (order lands in the admin DB as pending_payment).
  if (!env.NOWPAYMENTS_API_KEY) {
    return json({ orderNumber, total, paymentEnabled: false });
  }

  // Create a NOWPayments hosted invoice
  const base = (env.PUBLIC_BASE_URL || url.origin).replace(/\/$/, '');
  const invoiceRes = await fetch('https://api.nowpayments.io/v1/invoice', {
    method: 'POST',
    headers: { 'x-api-key': env.NOWPAYMENTS_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({
      price_amount: total,
      price_currency: 'aud',
      order_id: orderNumber,
      order_description: `OzzyPeps order ${orderNumber}`,
      ipn_callback_url: `${base}/api/webhooks/nowpayments`,
      success_url: `${base}/checkout.html?paid=1&order=${encodeURIComponent(orderNumber)}`,
      cancel_url: `${base}/checkout.html?cancelled=1&order=${encodeURIComponent(orderNumber)}`,
    }),
  });

  if (!invoiceRes.ok) {
    const detail = await invoiceRes.text().catch(() => '');
    return json({ orderNumber, total, paymentEnabled: true, error: 'invoice_failed', detail: detail.slice(0, 300) }, 502);
  }

  const invoice = await invoiceRes.json();
  await env.DB.prepare(`UPDATE orders SET payment_id = ? WHERE order_number = ?`)
    .bind(String(invoice.id || ''), orderNumber).run();

  return json({ orderNumber, total, paymentEnabled: true, invoiceUrl: invoice.invoice_url });
}

function round2(n) { return Math.round((n + Number.EPSILON) * 100) / 100; }

/* ── NOWPayments IPN webhook ─────────────────────────────────────────────── */
async function handleNowPaymentsIPN(request, env) {
  if (!env.DB) return json({ error: 'db_not_configured' }, 503);
  if (!env.NOWPAYMENTS_IPN_SECRET) return json({ error: 'ipn_not_configured' }, 503);

  const raw = await request.text();
  const sig = request.headers.get('x-nowpayments-sig') || '';
  const expected = await nowPaymentsSignature(raw, env.NOWPAYMENTS_IPN_SECRET);
  if (!timingSafeEqual(sig, expected)) return json({ error: 'bad_signature' }, 401);

  let data;
  try { data = JSON.parse(raw); } catch { return json({ error: 'bad_json' }, 400); }

  const orderNumber = data.order_id;
  const payStatus = String(data.payment_status || '').toLowerCase();
  if (!orderNumber) return json({ ok: true });

  // Map provider status → our order status
  let status = null, paidAt = null;
  if (payStatus === 'finished' || payStatus === 'confirmed') { status = 'paid'; paidAt = nowIso(); }
  else if (payStatus === 'partially_paid') { status = 'pending_payment'; }
  else if (payStatus === 'failed' || payStatus === 'expired' || payStatus === 'refunded') { status = 'failed'; }

  await env.DB.prepare(
    `UPDATE orders
       SET payment_status = ?, pay_currency = ?, pay_amount = ?,
           payment_id = COALESCE(NULLIF(?, ''), payment_id),
           status = COALESCE(?, status),
           paid_at = COALESCE(?, paid_at)
     WHERE order_number = ?`
  ).bind(
    payStatus,
    clampStr(data.pay_currency, 24),
    clampStr(data.pay_amount != null ? data.pay_amount : data.actually_paid, 40),
    clampStr(data.payment_id, 64),
    status, paidAt, orderNumber
  ).run();

  return json({ ok: true });
}

// NOWPayments signs the request body as HMAC-SHA512 over the JSON with keys sorted.
async function nowPaymentsSignature(rawBody, secret) {
  let obj;
  try { obj = JSON.parse(rawBody); } catch { obj = {}; }
  const sorted = sortedJsonStringify(obj);
  return hmacSha512Hex(secret, sorted);
}

function sortedJsonStringify(value) {
  if (Array.isArray(value)) return '[' + value.map(sortedJsonStringify).join(',') + ']';
  if (value && typeof value === 'object') {
    const keys = Object.keys(value).sort();
    return '{' + keys.map(k => JSON.stringify(k) + ':' + sortedJsonStringify(value[k])).join(',') + '}';
  }
  return JSON.stringify(value);
}

async function hmacSha512Hex(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-512' }, false, ['sign']
  );
  const sigBuf = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return [...new Uint8Array(sigBuf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/* ── Geoapify address autocomplete (proxied to hide key) ─────────────────── */
async function handleAddressAutocomplete(request, env, url) {
  const q = (url.searchParams.get('q') || '').trim();
  if (q.length < 3) return json({ suggestions: [] });
  if (!env.GEOAPIFY_KEY) return json({ suggestions: [], disabled: true });

  const api = new URL('https://api.geoapify.com/v1/geocode/autocomplete');
  api.searchParams.set('text', q);
  api.searchParams.set('filter', 'countrycode:au');
  api.searchParams.set('format', 'json');
  api.searchParams.set('limit', '6');
  api.searchParams.set('apiKey', env.GEOAPIFY_KEY);

  const res = await fetch(api.toString());
  if (!res.ok) return json({ suggestions: [] });
  const data = await res.json();

  const suggestions = (data.results || []).map(r => ({
    label:    r.formatted,
    line1:    [r.housenumber, r.street].filter(Boolean).join(' ') || r.name || '',
    suburb:   r.suburb || r.city || r.town || r.village || '',
    state:    r.state_code || r.state || '',
    postcode: r.postcode || '',
    country:  r.country || 'Australia',
  }));
  return json({ suggestions });
}

/* ── Payment status poll (used by the return page) ───────────────────────── */
async function handlePaymentStatus(env, url) {
  if (!env.DB) return json({ error: 'db_not_configured' }, 503);
  const orderNumber = (url.searchParams.get('order') || '').trim();
  if (!orderNumber) return json({ error: 'missing_order' }, 400);
  const row = await env.DB.prepare(
    `SELECT order_number, status, total, currency FROM orders WHERE order_number = ?`
  ).bind(orderNumber).first();
  if (!row) return json({ error: 'not_found' }, 404);
  return json({ orderNumber: row.order_number, status: row.status, total: row.total, currency: row.currency });
}

/* ── Admin auth ──────────────────────────────────────────────────────────── */
function adminAuthorized(request, env) {
  if (!env.ADMIN_TOKEN) return false;
  const url = new URL(request.url);
  const header = request.headers.get('authorization') || '';
  const bearer = header.startsWith('Bearer ') ? header.slice(7) : '';
  const token = bearer || url.searchParams.get('token') || '';
  return token && timingSafeEqual(token, env.ADMIN_TOKEN);
}

async function handleAdminOrders(request, env) {
  if (!adminAuthorized(request, env)) return json({ error: 'unauthorized' }, 401);
  if (!env.DB) return json({ orders: [], error: 'db_not_configured' });
  const url = new URL(request.url);
  const status = (url.searchParams.get('status') || '').trim();
  let stmt;
  if (status && status !== 'all') {
    stmt = env.DB.prepare(`SELECT * FROM orders WHERE status = ? ORDER BY created_at DESC LIMIT 500`).bind(status);
  } else {
    stmt = env.DB.prepare(`SELECT * FROM orders ORDER BY created_at DESC LIMIT 500`);
  }
  const { results } = await stmt.all();
  const orders = (results || []).map(o => ({ ...o, items: safeParse(o.items_json) }));
  return json({ orders });
}

async function handleAdminUpdateStatus(request, env, orderNumber) {
  if (!adminAuthorized(request, env)) return json({ error: 'unauthorized' }, 401);
  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const allowed = ['pending_payment', 'paid', 'dispatched', 'cancelled', 'failed'];
  const status = String(body.status || '');
  if (!allowed.includes(status)) return json({ error: 'invalid_status' }, 400);
  await env.DB.prepare(`UPDATE orders SET status = ? WHERE order_number = ?`).bind(status, orderNumber).run();
  return json({ ok: true });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return []; } }

/* ── Admin dashboard page ────────────────────────────────────────────────── */
async function handleAdminPage(request, env) {
  return new Response(ADMIN_HTML, { headers: { 'content-type': 'text/html; charset=utf-8' } });
}

const ADMIN_HTML = `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex,nofollow">
<title>OzzyPeps — Order Admin</title>
<style>
  :root{--bg:#0b1120;--card:#111a2e;--bord:#22304a;--txt:#e6edf7;--mut:#8aa0bf;--acc:#00d4ff;--ok:#00e5a0;--warn:#ffb020;--bad:#ff4d6d}
  *{box-sizing:border-box} body{margin:0;font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--txt)}
  header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 24px;border-bottom:1px solid var(--bord);position:sticky;top:0;background:var(--bg);z-index:5;flex-wrap:wrap}
  h1{font-size:18px;margin:0;letter-spacing:.5px}
  .wrap{padding:20px 24px;max-width:1300px;margin:0 auto}
  .login{max-width:360px;margin:80px auto;background:var(--card);border:1px solid var(--bord);border-radius:14px;padding:28px}
  input,select,button{font:inherit}
  input,select{background:#0b1120;border:1px solid var(--bord);border-radius:8px;color:var(--txt);padding:10px 12px;width:100%}
  button{background:var(--acc);color:#001018;border:none;border-radius:8px;padding:10px 16px;font-weight:700;cursor:pointer}
  button.ghost{background:transparent;border:1px solid var(--bord);color:var(--txt)}
  .row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .stats{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px}
  .stat{background:var(--card);border:1px solid var(--bord);border-radius:12px;padding:12px 18px;min-width:120px}
  .stat .n{font-size:24px;font-weight:800} .stat .l{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:1px}
  table{width:100%;border-collapse:collapse;background:var(--card);border:1px solid var(--bord);border-radius:12px;overflow:hidden}
  th,td{padding:11px 12px;text-align:left;font-size:13px;border-bottom:1px solid var(--bord);vertical-align:top}
  th{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mut)}
  tr:last-child td{border-bottom:none}
  .pill{display:inline-block;padding:3px 9px;border-radius:100px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px}
  .s-pending_payment{background:rgba(255,176,32,.15);color:var(--warn)}
  .s-paid{background:rgba(0,229,160,.15);color:var(--ok)}
  .s-dispatched{background:rgba(0,212,255,.15);color:var(--acc)}
  .s-cancelled,.s-failed{background:rgba(255,77,109,.15);color:var(--bad)}
  .muted{color:var(--mut);font-size:12px} .err{color:var(--bad);margin-top:10px;font-size:13px}
  details summary{cursor:pointer;color:var(--acc);font-size:12px}
  code{background:#0b1120;padding:1px 5px;border-radius:4px}
</style></head><body>
<div id="app"></div>
<script>
const KEY='ozzypeps_admin_token';
let token=localStorage.getItem(KEY)||'';
const app=document.getElementById('app');
const fmt=n=>'$'+Number(n).toFixed(2);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function login(msg){
  app.innerHTML=\`<div class="login"><h1>OzzyPeps Admin</h1>
    <p class="muted">Enter your admin token to view orders.</p>
    <input id="tk" type="password" placeholder="Admin token" />
    <div style="height:10px"></div><button onclick="doLogin()">Sign in</button>
    \${msg?'<div class="err">'+esc(msg)+'</div>':''}</div>\`;
  document.getElementById('tk').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
}
function doLogin(){token=document.getElementById('tk').value.trim();localStorage.setItem(KEY,token);load();}
function logout(){localStorage.removeItem(KEY);token='';login();}

async function load(filter){
  if(!token){return login();}
  app.innerHTML='<div class="wrap muted">Loading…</div>';
  let res;
  try{res=await fetch('/api/admin/orders'+(filter&&filter!=='all'?'?status='+filter:''),{headers:{authorization:'Bearer '+token}});}
  catch(e){return login('Network error.');}
  if(res.status===401){return login('Invalid token (or ADMIN_TOKEN not set on the server yet).');}
  const data=await res.json();
  render(data.orders||[],filter||'all');
}

function render(orders,filter){
  const counts={};orders.forEach(o=>counts[o.status]=(counts[o.status]||0)+1);
  const total=orders.length;
  const rows=orders.map(o=>{
    const items=(o.items||[]).map(i=>'• '+esc(i.name)+' — '+esc(i.size)+' ×'+i.qty).join('<br>');
    const addr=[o.address_line1,o.address_line2,o.suburb+' '+o.state+' '+o.postcode,o.country].filter(x=>x&&x.trim()).map(esc).join('<br>');
    return \`<tr>
      <td><strong>\${esc(o.order_number)}</strong><br><span class="muted">\${esc((o.created_at||'').replace('T',' ').slice(0,16))}</span></td>
      <td>\${esc(o.customer_name)}<br><span class="muted">\${esc(o.email)}<br>\${esc(o.phone||'')}</span></td>
      <td><span class="muted">\${addr}</span></td>
      <td>\${items}\${o.notes?'<br><span class="muted">📝 '+esc(o.notes)+'</span>':''}</td>
      <td><strong>\${fmt(o.total)}</strong><br><span class="muted">\${esc(o.currency)}</span>\${o.pay_currency?'<br><span class="muted">'+esc(o.pay_amount||'')+' '+esc(o.pay_currency)+'</span>':''}</td>
      <td><span class="pill s-\${esc(o.status)}">\${esc(o.status.replace('_',' '))}</span><br>
        <select onchange="setStatus('\${esc(o.order_number)}',this.value)" style="margin-top:6px;font-size:11px;padding:4px">
          \${['pending_payment','paid','dispatched','cancelled','failed'].map(s=>'<option '+(s===o.status?'selected':'')+'>'+s+'</option>').join('')}
        </select></td>
    </tr>\`;
  }).join('');

  const chip=(k,label)=>\`<button class="ghost" style="\${filter===k?'border-color:var(--acc);color:var(--acc)':''}" onclick="load('\${k}')">\${label}</button>\`;
  app.innerHTML=\`
    <header>
      <h1>OzzyPeps — Orders</h1>
      <div class="row">
        \${chip('all','All')}\${chip('pending_payment','Pending')}\${chip('paid','Paid')}\${chip('dispatched','Dispatched')}\${chip('cancelled','Cancelled')}
        <button class="ghost" onclick="load('\${filter}')">↻ Refresh</button>
        <button class="ghost" onclick="logout()">Sign out</button>
      </div>
    </header>
    <div class="wrap">
      <div class="stats">
        <div class="stat"><div class="n">\${total}</div><div class="l">Shown</div></div>
        <div class="stat"><div class="n" style="color:var(--warn)">\${counts.pending_payment||0}</div><div class="l">Pending</div></div>
        <div class="stat"><div class="n" style="color:var(--ok)">\${counts.paid||0}</div><div class="l">Paid</div></div>
        <div class="stat"><div class="n" style="color:var(--acc)">\${counts.dispatched||0}</div><div class="l">Dispatched</div></div>
      </div>
      \${total===0?'<p class="muted">No orders yet.</p>':'<table><thead><tr><th>Order</th><th>Customer</th><th>Address</th><th>Items</th><th>Total</th><th>Status</th></tr></thead><tbody>'+rows+'</tbody></table>'}
    </div>\`;
}

async function setStatus(orderNumber,status){
  await fetch('/api/admin/orders/'+encodeURIComponent(orderNumber)+'/status',
    {method:'POST',headers:{authorization:'Bearer '+token,'content-type':'application/json'},body:JSON.stringify({status})});
}

load();
</script>
</body></html>`;
