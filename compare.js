/* ════════════════════════════════════════════════════════════════════════════
   OzzyPeps — Compare List
   Self-contained IIFE. Reads from the PRODUCTS global (product-data.js) for
   product names when building the sticky compare bar.

   localStorage key : ozzypeps_compare_v1
   Stores           : array of up to 3 product IDs

   Public API       : window.compareList
                        .toggle(id)         – add/remove; returns true=added
                        .has(id)            – boolean
                        .clear()            – empty the list
                        .ids getter         – copy of id array
   Helpers          : window.updateCompareButtons()
   ════════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const STORAGE_KEY = 'ozzypeps_compare_v1';
  const MAX_COMPARE = 3;

  // ── State ──────────────────────────────────────────────────────────────────
  let ids = [];
  try { ids = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch {}

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    renderBar();
    updateCompareButtonsInternal();
    document.dispatchEvent(new CustomEvent('compare:changed'));
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  function escapeJs(s) { return String(s).replace(/'/g, "\\'"); }

  function productName(id) {
    try {
      const allProducts = typeof PRODUCTS !== 'undefined' ? PRODUCTS : null;
      return (allProducts && allProducts[id] && allProducts[id].name) ? allProducts[id].name : id;
    } catch { return id; }
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.compareList = {

    toggle(id) {
      if (ids.includes(id)) {
        ids = ids.filter(x => x !== id);
        save();
        return false;
      }
      if (ids.length >= MAX_COMPARE) {
        toast(`You can compare up to ${MAX_COMPARE} products.`, true);
        return false;
      }
      ids.push(id);
      save();
      return true;
    },

    has(id) {
      return ids.includes(id);
    },

    clear() {
      ids = [];
      save();
    },

    get ids() { return ids.slice(); },
  };

  // ── Toast ──────────────────────────────────────────────────────────────────
  function toast(msg, isWarning) {
    let c = document.getElementById('compareToasts');
    if (!c) {
      c = document.createElement('div');
      c.id = 'compareToasts';
      Object.assign(c.style, {
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: '10001',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        pointerEvents: 'none',
      });
      document.body.appendChild(c);
    }

    const el = document.createElement('div');
    Object.assign(el.style, {
      background: isWarning ? 'rgba(20, 12, 0, 0.94)' : 'rgba(10, 18, 30, 0.94)',
      border: isWarning
        ? '1px solid rgba(255, 160, 50, 0.6)'
        : '1px solid rgba(0, 212, 255, 0.4)',
      boxShadow: isWarning
        ? '0 0 18px rgba(255, 160, 50, 0.3)'
        : '0 0 18px rgba(0, 212, 255, 0.25)',
      color: '#fff',
      padding: '10px 18px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      opacity: '0',
      transform: 'translateY(-8px)',
      transition: 'opacity 0.22s ease, transform 0.22s ease',
      pointerEvents: 'none',
    });
    el.textContent = msg;
    c.appendChild(el);

    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(-8px)';
      setTimeout(() => el.remove(), 300);
    }, 2800);
  }

  // ── Compare bar ────────────────────────────────────────────────────────────
  function injectBar() {
    if (document.getElementById('compareBar')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="compare-bar" id="compareBar" style="display:none;" aria-label="Compare products">
        <div class="compare-bar-items" id="compareBarItems"></div>
        <div class="compare-bar-actions">
          <button onclick="compareList.clear()" class="btn btn-ghost">Clear</button>
          <a href="#" id="compareBarLink" class="btn btn-primary">Compare (0) →</a>
        </div>
      </div>
    `);
  }

  function renderBar() {
    const bar   = document.getElementById('compareBar');
    const chips = document.getElementById('compareBarItems');
    const link  = document.getElementById('compareBarLink');
    if (!bar || !chips || !link) return;

    if (ids.length === 0) {
      bar.style.display = 'none';
      return;
    }

    bar.style.display = '';

    chips.innerHTML = ids.map(id => `
      <div class="compare-chip">
        <span class="compare-chip-name">${escapeHtml(productName(id))}</span>
        <button
          class="compare-chip-remove"
          onclick="compareList.toggle('${escapeJs(id)}')"
          aria-label="Remove ${escapeHtml(productName(id))} from compare">×</button>
      </div>`).join('');

    const idsParam = ids.map(id => encodeURIComponent(id)).join(',');
    link.href = `compare.html?ids=${idsParam}`;
    link.textContent = `Compare (${ids.length}) →`;
  }

  // ── Compare buttons ────────────────────────────────────────────────────────
  function updateCompareButtonsInternal() {
    document.querySelectorAll('.compare-btn[data-id]').forEach(btn => {
      const id       = btn.dataset.id;
      const selected = ids.includes(id);
      btn.classList.toggle('comparing', selected);
      btn.textContent = selected ? '✓ Comparing' : '+ Compare';
    });
  }

  window.updateCompareButtons = updateCompareButtonsInternal;

  // ── Cross-tab sync ─────────────────────────────────────────────────────────
  window.addEventListener('storage', e => {
    if (e.key === STORAGE_KEY) {
      try { ids = JSON.parse(e.newValue) || []; } catch { ids = []; }
      renderBar();
      updateCompareButtonsInternal();
    }
  });

  // ── Boot ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    injectBar();
    renderBar();
    updateCompareButtonsInternal();
  });
})();
