const staticGestionOrdenes= "dev-gestionOrdenes-site-v1"

const assets= [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
]

self.addEventListener("install", installEvent=>{
    installEvent.waitUntil(
        caches.open(staticGestionOrdenes)
            .then(cache=>{
                cache.addAll(assets)
            })
    )
})