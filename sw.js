const CACHE='taki-vs-estudio-v13-tamanho-6px';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
