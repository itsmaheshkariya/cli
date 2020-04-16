const cacheName = 'qcom';
const staticAssets = [
  './',
  './index.html',
  './index.js',
  './QcomApp.js',
  './node_modules/@qcom.io/qcom/index.js',
  './manifest.webmanifest',
  './favicon.ico',
  './images/icon-192x192.png',
  './images/icon-512x512.png',
  './sw.js'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
  } else {

    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  let cache = await caches.open(cacheName);
  let cached = await cache.match(req);
  if(cached == undefined && navigator.onLine == false)
  cached = await cache.match('/404');

   return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
