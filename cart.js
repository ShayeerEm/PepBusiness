/* ════════════════════════════════════════════════════════════════════════════
   OzzyPeps — Shopping Cart
   Self-contained: just include this script + an element with class
   "cart-icon-wrap" in your navbar. Everything else is auto-injected.
   ════════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const STORAGE_KEY  = 'ozzypeps_cart_v1';
  const SHIPPING_AUD = 89;

  // ── State ─────────────────────────────────────────────────────────────────
  let items = [];
  try { items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch {}

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateBadge();
    renderDrawer();
    document.dispatchEvent(new CustomEvent('cart:changed'));
  }

  function priceNum(s) { return parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0; }
  function totalItems() { return items.reduce((s, i) => s + i.qty, 0); }
  function subtotal()   { return items.reduce((s, i) => s + i.price * i.qty, 0); }
  function shipping()   { return items.length > 0 ? SHIPPING_AUD : 0; }
  function total()      { return subtotal() + shipping(); }
  function fmt(n)       { return '$' + n.toFixed(2); }

  // ── Public API ────────────────────────────────────────────────────────────
  window.cart = {
    add(productId, specIndex) {
      const p = (window.PRODUCTS || {})[productId];
      if (!p) return;
      const spec = p.specs[specIndex || 0];
      if (!spec) return;

      const key = `${productId}::${spec.size}`;
      const existing = items.find(i => i.key === key);
      if (existing) {
        existing.qty = Math.min(99, existing.qty + 1);
      } else {
        items.push({
          key, id: productId,
          name: p.name, emoji: p.emoji,
          size: spec.size, price: priceNum(spec.price),
          qty: 1
        });
      }
      save();
      toast(`Added: ${p.name} (${spec.size})`);
      pulseBadge();
    },

    remove(key) { items = items.filter(i => i.key !== key); save(); },

    inc(key) {
      const it = items.find(i => i.key === key);
      if (it) { it.qty = Math.min(99, it.qty + 1); save(); }
    },

    dec(key) {
      const it = items.find(i => i.key === key);
      if (!it) return;
      if (it.qty <= 1) items = items.filter(i => i.key !== key);
      else it.qty--;
      save();
    },

    clear() { items = []; save(); },

    open()  { document.getElementById('cartDrawer')?.classList.add('open');
              document.getElementById('cartBackdrop')?.classList.add('open');
              document.body.style.overflow = 'hidden'; },

    close() { document.getElementById('cartDrawer')?.classList.remove('open');
              document.getElementById('cartBackdrop')?.classList.remove('open');
              document.body.style.overflow = ''; },

    get items()      { return items.map(i => ({ ...i })); },
    get totalItems() { return totalItems(); },
    get subtotal()   { return subtotal(); },
    get shipping()   { return shipping(); },
    get total()      { return total(); },
    get isEmpty()    { return items.length === 0; },
  };

  // ── UI ────────────────────────────────────────────────────────────────────
  function updateBadge() {
    const n = totalItems();
    document.querySelectorAll('.cart-badge').forEach(b => {
      b.textContent = n;
      b.classList.toggle('visible', n > 0);
    });
  }

  function pulseBadge() {
    document.querySelectorAll('.cart-icon-wrap').forEach(el => {
      el.classList.remove('pulse');
      void el.offsetWidth;
      el.classList.add('pulse');
    });
  }

  function renderDrawer() {
    const list = document.getElementById('cartDrawerList');
    const foot = document.getElementById('cartDrawerFooter');
    if (!list || !foot) return;

    if (items.length === 0) {
      list.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <div class="cart-empty-title">Your cart is empty</div>
          <div class="cart-empty-sub">Browse our catalogue to add research compounds.</div>
          <a href="products.html" class="btn btn-primary" style="margin-top:18px;">Browse Products</a>
        </div>`;
      foot.style.display = 'none';
      return;
    }

    list.innerHTML = items.map(i => `
      <div class="cart-item">
        <div class="cart-item-emoji">${i.emoji || '🧪'}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(i.name)}</div>
          <div class="cart-item-size">${escapeHtml(i.size)}</div>
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button onclick="cart.dec('${escapeJs(i.key)}')" aria-label="Decrease">−</button>
              <span>${i.qty}</span>
              <button onclick="cart.inc('${escapeJs(i.key)}')" aria-label="Increase">+</button>
            </div>
            <div class="cart-item-price">${fmt(i.price * i.qty)}</div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="cart.remove('${escapeJs(i.key)}')" aria-label="Remove" title="Remove">×</button>
      </div>`).join('');

    foot.style.display = 'block';
    document.getElementById('cartSubtotal').textContent = fmt(subtotal());
    document.getElementById('cartShipping').textContent = fmt(shipping());
    document.getElementById('cartTotal').textContent    = fmt(total());
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }
  function escapeJs(s) { return String(s).replace(/'/g, "\\'"); }

  function injectDrawer() {
    if (document.getElementById('cartDrawer')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="cart-backdrop" id="cartBackdrop"></div>
      <aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">
        <div class="cart-drawer-header">
          <div class="cart-drawer-title">🛒 Your Cart</div>
          <button class="cart-drawer-close" onclick="cart.close()" aria-label="Close">✕</button>
        </div>
        <div class="cart-drawer-list" id="cartDrawerList"></div>
        <div class="cart-drawer-footer" id="cartDrawerFooter">
          <div class="cart-disclaimer">
            <span>ℹ️</span>
            <span>Prices shown are per-box estimates. Bulk discounts and final totals are confirmed via Telegram after submission.</span>
          </div>
          <div class="cart-summary-row">
            <span>Subtotal</span><span id="cartSubtotal">$0.00</span>
          </div>
          <div class="cart-summary-row">
            <span>Shipping (flat rate, insured)</span><span id="cartShipping">$0.00</span>
          </div>
          <div class="cart-summary-row total">
            <span>Estimated Total</span><span id="cartTotal">$0.00</span>
          </div>
          <a href="checkout.html" class="btn btn-primary cart-checkout-btn">Proceed to Checkout →</a>
          <button onclick="cart.close()" class="btn btn-ghost cart-continue-btn">Continue Shopping</button>
        </div>
      </aside>
    `);
    document.getElementById('cartBackdrop').addEventListener('click', () => window.cart.close());
    renderDrawer();
  }

  // ── Toast ─────────────────────────────────────────────────────────────────
  function toast(msg) {
    let c = document.getElementById('cartToasts');
    if (!c) {
      c = document.createElement('div');
      c.id = 'cartToasts';
      c.className = 'cart-toasts';
      document.body.appendChild(c);
    }
    const el = document.createElement('div');
    el.className = 'cart-toast';
    el.innerHTML = `<span class="cart-toast-check">✓</span> ${escapeHtml(msg)}`;
    c.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 2400);
  }

  // ── Boot ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    injectDrawer();
    updateBadge();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.cart.close();
  });

  window.addEventListener('storage', e => {
    if (e.key === STORAGE_KEY) {
      try { items = JSON.parse(e.newValue) || []; } catch { items = []; }
      updateBadge();
      renderDrawer();
    }
  });
})();
