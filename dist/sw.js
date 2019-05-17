self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          'index.html',
          'css/style.css',
          'js/bundle.js',
          'img/burger-menu.png',
          'img/chi-bepazam-logo.png',
          'https://fonts.googleapis.com/css?family=Lalezar',
          'https://fonts.gstatic.com/s/lalezar/v5/zrfl0HLVx-HwTP82YaL4IwD3VCnWiQ.woff2',
          'https://fonts.gstatic.com/s/lalezar/v5/zrfl0HLVx-HwTP82Yaf4IwD3VCk.woff2'
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});