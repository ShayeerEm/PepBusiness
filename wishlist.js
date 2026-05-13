/* ════════════════════════════════════════════════════════════════════════════
   OzzyPeps — Wishlist
   Self-contained IIFE. No dependencies (works alongside cart.js /
   product-data.js but does not require them).

   localStorage key : ozzypeps_wishlist_v1
   Stores           : [{ id, name, emoji, category }, …]

   Public API       : window.wishlist  (toggle, has, add, remove, clear,
                                        items getter, count getter)
   Helpers          : window.updateWishlistHearts()
   ════════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const STORAGE_KEY = 'ozzypeps_wishlist_v1';

  // ── State ──────────────────────────────────────────────────────────────────
  let items = [];
  try { items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch {}

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateBadge();
    updateWishlistHeartsInternal();
    document.dispatchEvent(new CustomEvent('wishlist:changed'));
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.wishlist = {
    toggle(id, name, emoji, category) {
      if (items.some(i => i.id === id)) {
        this.remove(id);
        toast('Removed from wishlist');
      } else {
        this.add(id, name, emoji, category);
        toast('Added to wishlist!');
      }
    },

    has(id) {
      return items.some(i => i.id === id);
    },

    add(id, name, emoji, category) {
      if (items.some(i => i.id === id)) return;
      items.push({ id, name, emoji, category });
      save();
    },

    remove(id) {
      items = items.filter(i => i.id !== id);
      save();
    },

    clear() {
      items = [];
      save();
    },

    get items() { return items.map(i => ({ ...i })); },
    get count() { return items.length; },
  };

  // ── Badge ──────────────────────────────────────────────────────────────────
  function updateBadge() {
    const n = items.length;
    document.querySelectorAll('.wishlist-badge').forEach(b => {
      b.textContent = n;
      b.classList.toggle('visible', n > 0);
    });
  }

  // ── Heart buttons ──────────────────────────────────────────────────────────
  function updateWishlistHeartsInternal() {
    document.querySelectorAll('[data-wishlist-id]').forEach(el => {
      el.classList.toggle('wishlisted', window.wishlist.has(el.dataset.wishlistId));
    });
  }

  // Also exposed globally so pages can call it after dynamic renders
  window.updateWishlistHearts = updateWishlistHeartsInternal;

  // ── Toast ──────────────────────────────────────────────────────────────────
  function toast(msg) {
    let c = document.getElementById('wishlistToasts');
    if (!c) {
      c = document.createElement('div');
      c.id = 'wishlistToasts';
      c.className = 'wishlist-toasts';
      // Position bottom-left so it doesn't clash with the cart toast (bottom-right)
      Object.assign(c.style, {
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: '9999',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        pointerEvents: 'none',
      });
      document.body.appendChild(c);
    }

    const el = document.createElement('div');
    el.className = 'wishlist-toast';
    el.innerHTML = `<span class="wishlist-toast-icon">♡</span> ${escapeHtml(msg)}`;
    Object.assign(el.style, {
      background: 'rgba(20, 10, 20, 0.92)',
      border: '1px solid rgba(255, 100, 140, 0.55)',
      boxShadow: '0 0 18px rgba(255, 100, 140, 0.35)',
      color: '#fff',
      padding: '10px 18px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      opacity: '0',
      transform: 'translateY(8px)',
      transition: 'opacity 0.22s ease, transform 0.22s ease',
      pointerEvents: 'none',
    });
    c.appendChild(el);

    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      setTimeout(() => el.remove(), 300);
    }, 2400);
  }

  // ── Cross-tab sync ─────────────────────────────────────────────────────────
  window.addEventListener('storage', e => {
    if (e.key === STORAGE_KEY) {
      try { items = JSON.parse(e.newValue) || []; } catch { items = []; }
      updateBadge();
      updateWishlistHeartsInternal();
    }
  });

  // ── Boot ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    updateBadge();
    updateWishlistHeartsInternal();
  });
})();
