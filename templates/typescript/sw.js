const cacheName = 'qcom';
const staticAssets = [
  '.',
//   './',
  './index.html',
  './Home',
  './PageOne',
  './PageTwo',
  './PageNotFound',
//   './PageOne',
//   './PageTwo',
//   './404.html',
  './Layout.js',
  './App.js',
  './js/PageNotFound.js',
  './js/Home.js',
  './js/PageOne.js',
  './js/PageTwo.js',
  './js/PageThree.js',
  './js/PageFour.js',
  './js/Home.js',
  './robots.txt',
//   './material.css',
  './iconfont/material-icons.css',
  './iconfont/MaterialIcons-Regular.eot',
  './iconfont/MaterialIcons-Regular.ijmap',
  './iconfont/MaterialIcons-Regular.svg',
  './iconfont/MaterialIcons-Regular.ttf',
  './iconfont/MaterialIcons-Regular.woff',
  './iconfont/MaterialIcons-Regular.woff2',
  './iconfont/codepoints',
  './node_modules/@qcom.io/qcom/index.js',
  './manifest.webmanifest',
  './favicon.ico',
  './img/icon-192x192.png',
  './img/icon-512x512.png',
  './sw.js'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
//   console.log(staticAssets)
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
//   console.log('activating')
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);
    // console.log(location.origin)
//   if (url.origin === location.origin) {
//     console.log('fetch')
//         e.respondWith(cacheFirst(req));
//   } else {

    e.respondWith(networkAndCache(req));
//   }

});

async function cacheFirst(req) {
  let cache = await caches.open(cacheName);
  let cached = await cache.match(req);
//   if(cached == undefined && navigator.onLine == false)
//   cached = await cache.match('/404.html');

    // console.log(await caches.open('qcom'))
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
