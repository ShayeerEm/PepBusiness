/* ════════════════════════════════════════════════════════════════════════════
   OzzyPeps — Recently Viewed
   Self-contained IIFE. Reads from the PRODUCTS global defined in
   product-data.js (must be loaded before this script renders, though
   record() works without it).

   localStorage key : ozzypeps_recent_v1
   Stores           : array of up to 10 product IDs, most-recent first

   Public API       : window.recentlyViewed
                        .record(id)               – track a product view
                        .render(containerId)       – paint carousel into element
                        .get()                     – returns copy of id array
   ════════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const STORAGE_KEY = 'ozzypeps_recent_v1';
  const MAX_ITEMS   = 10;

  // ── State ──────────────────────────────────────────────────────────────────
  let ids = [];
  try { ids = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch {}

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  function escapeJs(s) { return String(s).replace(/'/g, "\\'"); }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.recentlyViewed = {

    record(id) {
      // Remove existing entry (dedup), then prepend, then cap at MAX_ITEMS
      ids = ids.filter(x => x !== id);
      ids.unshift(id);
      if (ids.length > MAX_ITEMS) ids = ids.slice(0, MAX_ITEMS);
      save();
    },

    get() {
      return ids.slice();
    },

    render(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      // Guard: need PRODUCTS global
      const allProducts = typeof PRODUCTS !== 'undefined' ? PRODUCTS : null;

      if (!allProducts || ids.length === 0) {
        container.style.display = 'none';
        return;
      }

      // Resolve ids to product objects (skip any that no longer exist)
      const resolved = ids
        .map(id => ({ id, product: allProducts[id] }))
        .filter(({ product }) => !!product);

      if (resolved.length === 0) {
        container.style.display = 'none';
        return;
      }

      container.style.display = '';

      const cards = resolved.map(({ id, product: p }) => {
        const firstPrice = (p.specs && p.specs[0] && p.specs[0].price) ? p.specs[0].price : '—';
        return `
          <div class="rv-card" onclick="openProduct('${escapeJs(id)}')" role="button" tabindex="0"
               onkeydown="if(event.key==='Enter'||event.key===' ')openProduct('${escapeJs(id)}')">
            <div class="rv-emoji">${escapeHtml(p.emoji || '🧪')}</div>
            <div class="rv-name">${escapeHtml(p.name)}</div>
            <div class="rv-cat">${escapeHtml(p.category || '')}</div>
            <div class="rv-price">from ${escapeHtml(String(firstPrice))}</div>
          </div>`;
      }).join('');

      container.innerHTML = `
        <div class="rv-header">Recently Viewed</div>
        <div class="rv-row">${cards}</div>`;
    },
  };

  // ── Cross-tab sync ─────────────────────────────────────────────────────────
  window.addEventListener('storage', e => {
    if (e.key === STORAGE_KEY) {
      try { ids = JSON.parse(e.newValue) || []; } catch { ids = []; }
    }
  });
})();
