const CACHE_NAME = 'hardcover-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.webmanifest',
];

// On install — cache static shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// On activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch strategy:
// - API calls (/api/*) → network only (always fresh)
// - Images (assets.hardcover.app) → cache first, fallback network, store result
// - Everything else → network first, fallback cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // API → always network
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Book cover images → cache first
  if (url.hostname === 'assets.hardcover.app' || url.hostname === 'hardcover.app') {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        try {
          const response = await fetch(event.request);
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        } catch {
          return new Response('', { status: 408 });
        }
      })
    );
    return;
  }

  // App shell → network first, cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
