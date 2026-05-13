/**
 * OzzyPeps Order Tracking Worker
 *
 * Routes:
 *   GET  /api/track?id=OP-2025-00001&email=x@y.com  → public order lookup
 *   GET  /api/orders                                  → admin: list all orders
 *   POST /api/orders                                  → admin: create/update order
 *   DELETE /api/orders/:id                            → admin: delete order
 *
 * Admin routes require header: X-Admin-Key: <ADMIN_KEY secret>
 *
 * KV binding:  ORDERS  (create via: wrangler kv namespace create ORDERS)
 * Secret:      ADMIN_KEY (set via: wrangler secret put ADMIN_KEY)
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
};

function json(data, status = 200) {
  return Response.json(data, { status, headers: CORS });
}

function isAdmin(request, env) {
  return request.headers.get('X-Admin-Key') === env.ADMIN_KEY;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // ── Public: track order ───────────────────────────────────────────────────
    if (url.pathname === '/api/track' && request.method === 'GET') {
      const id    = (url.searchParams.get('id')    || '').trim().toUpperCase();
      const email = (url.searchParams.get('email') || '').trim().toLowerCase();

      if (!id || !email) {
        return json({ error: 'missing_fields' }, 400);
      }

      const raw = await env.ORDERS.get(`order:${id}`);
      if (!raw) return json({ error: 'not_found' }, 404);

      const order = JSON.parse(raw);
      if (order.email.toLowerCase() !== email) {
        return json({ error: 'not_found' }, 404);
      }

      // Strip internal email before returning to client
      const { email: _hidden, ...pub } = order;
      return json(pub);
    }

    // ── Admin: list all orders ────────────────────────────────────────────────
    if (url.pathname === '/api/orders' && request.method === 'GET') {
      if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);

      const list   = await env.ORDERS.list({ prefix: 'order:' });
      const orders = await Promise.all(
        list.keys.map(async k => JSON.parse(await env.ORDERS.get(k.name)))
      );
      orders.sort((a, b) => b.id.localeCompare(a.id));
      return json(orders);
    }

    // ── Admin: create / update order ──────────────────────────────────────────
    if (url.pathname === '/api/orders' && (request.method === 'POST' || request.method === 'PUT')) {
      if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);

      let order;
      try { order = await request.json(); } catch { return json({ error: 'invalid_json' }, 400); }

      if (!order.id || !order.email) {
        return json({ error: 'id and email are required' }, 400);
      }

      order.id = order.id.trim().toUpperCase();
      order.email = order.email.trim().toLowerCase();

      // Auto-generate steps if not provided
      if (!order.steps || !order.steps.length) {
        order.steps = buildSteps(order.status, order.confirmedAt, order.packedAt, order.dispatchedAt, order.deliveredAt);
      }

      await env.ORDERS.put(`order:${order.id}`, JSON.stringify(order));
      return json({ success: true, id: order.id });
    }

    // ── Admin: delete order ───────────────────────────────────────────────────
    const deleteMatch = url.pathname.match(/^\/api\/orders\/([^/]+)$/);
    if (deleteMatch && request.method === 'DELETE') {
      if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);

      const id = deleteMatch[1].toUpperCase();
      await env.ORDERS.delete(`order:${id}`);
      return json({ success: true });
    }

    // ── Serve static assets ───────────────────────────────────────────────────
    return env.ASSETS.fetch(request);
  }
};

/**
 * Build a 6-step tracking timeline automatically from status + optional dates.
 * Pass dates as strings like "12 May 2026 · 9:30 AM"
 */
function buildSteps(status, confirmedAt, packedAt, dispatchedAt, deliveredAt) {
  const now = fmtNow();

  const STATUS_MAP = {
    processing: 2,  // up to step index 2 is active (packing)
    packed:     3,  // dispatching is active
    dispatched: 4,  // in transit is active
    shipped:    4,
    delivered:  5,  // all done
  };

  const activeIdx = STATUS_MAP[status] ?? 2;

  const labels = [
    'Order Confirmed',
    'Payment Received',
    'Packed & Ready',
    'Dispatched',
    'In Transit',
    'Delivered',
  ];

  const dates = [
    confirmedAt  || now,
    confirmedAt  || now,
    packedAt     || (activeIdx >= 2 ? now : 'Pending'),
    dispatchedAt || (activeIdx >= 3 ? now : 'Pending'),
    dispatchedAt || (activeIdx >= 4 ? now : 'Pending'),
    deliveredAt  || (status === 'delivered' ? now : 'Pending'),
  ];

  return labels.map((label, i) => {
    let state;
    if (i < activeIdx)       state = 'done';
    else if (i === activeIdx) state = status === 'delivered' ? 'done' : 'active';
    else                      state = 'pending';
    return { label, date: dates[i], state };
  });
}

function fmtNow() {
  return new Date().toLocaleString('en-AU', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZone: 'Australia/Sydney'
  }).replace(',', ' ·');
}
