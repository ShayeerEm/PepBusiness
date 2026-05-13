/* ════════════════════════════════════════════════════════════════════════════
   OzzyPeps — Theme Toggle
   Handles dark / light theme switching. Light theme is warm creamy
   yellowish-white with orange accents (driven by [data-theme="light"] on
   <html>). Dark is the default navy/cyan theme.
   Include this script as early as possible (ideally inline in <head>) to
   eliminate flash-of-wrong-theme. A second DOMContentLoaded listener updates
   any buttons that were painted before the script ran.
   ════════════════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const KEY = 'ozzypeps_theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'light' ? '🌙' : '☀️';
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    });
  }

  window.toggleTheme = function() {
    const next = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    apply(next);
  };

  // Apply immediately (called inline in <head> too for no-flash)
  const saved = localStorage.getItem(KEY) || 'dark';
  apply(saved);
  document.addEventListener('DOMContentLoaded', () => apply(saved));
})();
