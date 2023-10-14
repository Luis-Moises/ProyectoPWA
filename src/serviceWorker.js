const staticGestionOrdenes= "dev-gestionOrdenes-site-v1"

const assets= [
    "/",
    "/index.html",
    "/app.js",
]

async function preCache() {
    const cache = await caches.open(staticGestionOrdenes);

    return cache.addAll(assets);
}

self.addEventListener("install", (installEvent)=>{
    installEvent.waitUntil(
        preCache()
    );
})

async function cacheFirst(request){
    const cacheResponse = await caches.match(request);

    if(cacheResponse){
        return cacheResponse;
    }
     try{
        const networkResponse = await fetch(request);
        if(networkResponse.ok){
            const cache = await caches.open(staticGestionOrdenes);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
     }
     catch(error){
        return Response.error
     }
}



self.addEventListener("fetch", fetchEvent=>{
    fetchEvent.respondWith(
        cacheFirst(fetchEvent.request)
        )
})