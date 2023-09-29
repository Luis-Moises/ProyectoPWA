const container = document.querySelector(".container");


    container.innerHTML = output;



if("serviceWorker" in navigator){
    //console.log("Si soporta...")
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res=> console.log("Service worker registrado..."))
            .catch(err=>console.log("No se registo..."))
    })
} 

self.addEventListener("fetch", fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
            .then(res=>{
                return res || fetch (fetchEvent.request)
            })
        )
})