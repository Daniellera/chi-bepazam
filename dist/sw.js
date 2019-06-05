const appShell,dynamic;
appShell = "appShell-v" + "1";
dynamic = "dynamic-v" + "1"
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(caches.open(appShell)
  .then( e => {
    e.addAll([
      "/",
      "index.html",
      "./js/bundle.js",
      "./css/style.css",
      "./img/chi-bepazam-logo-apple.png",
      "./img/chi-bepazam-logo.png",
      "./img/daniellera.png",
    ])
  }))
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
    .then(e => {
      return Promise.all(e.map(e => {
        if(e !== appShell && e !== dynamic){
          console.log("this old cache has been deleted:", e);
          return caches.delete(e);
        }
      }))
    })
  )


  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then( e => {
      if (e) {
        console.log("inha ro peida kardim ke offline estefade besehe:"+e);
        return e;
      }else{
        return fetch(event.request)
          .then(response => {
            return caches.open(dynamic)
              .then(e => {
                e.put(event.request.url,response.clone());
                return response;
            });
          })
          .catch(err => {
          })
      }
    })
  );
});