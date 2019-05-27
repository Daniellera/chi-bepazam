self.addEventListener("install", e => {
    console.log("[Service worker]: service worker is installing....", e);
})

self.addEventListener("activate", e => {
    console.log("[Service Worker]: Service worker is ACTIVATING...", e);

    return self.clients.claim();
})

self.addEventListener("fetch", e => {
    if(e.request.url.includes("style")){
        console.log("style has been detected:",e);
    }
})