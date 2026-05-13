const CACHE = 'ozzypeps-v1';
const ASSETS = [
  '/index.html',
  '/products.html',
  '/styles.css',
  '/product-data.js',
  '/cart.js',
  '/wishlist.js',
  '/theme.js',
  '/compare.js',
  '/recently-viewed.js',
  '/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Only handle same-origin
  if (url.origin !== location.origin) return;

  if (request.mode === 'navigate') {
    // Network-first for HTML navigation
    e.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Cache-first for assets
  e.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(request, clone));
      }
      return res;
    }))
  );
});
