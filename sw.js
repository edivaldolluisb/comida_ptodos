
/**/ 
const cacheName = 'comida'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            cache.addAll([
                '/',
                './ver_produto.html',
                './reservas_categoria.html',
                './reserva.html',
                './registo_cliente.html',
                './processo_finalizado.html',
                './mais_info.html',
                './iniciar_sessao.html',
                './index.html',
                './favoritos.html',
                './doar_dinheiro.html',
                './css/',
                './css/doar_dianheiro.css',
                './css/favoritos.css',
                './css/index.css',
                './css/iniciar_sessao.css',
                './css/mais_info.css',
                './css/registo_cliente.css',
                './css/reserva.css',
                './css/reservas_categorias.css',
                './css/ver_produto.css',
                './estabelecimento',
                './estabelecimento/adicionar_produto.html',
                './estabelecimento/atualizar_produto.html',
                './estabelecimento/estabelecimento_index.html',
                './estabelecimento/estabelecimento_produtos.html',
                './estabelecimento/ver_reserva.html',
                './estabelecimento/css',
                './estabelecimento/css/adicionar_produto.css',
                './estabelecimento/css/atualizar_produto.css',
                './estabelecimento/css/estabelecimento_index.css',
                './estabelecimento/css/estabelecimento_produtos.css',
                './estabelecimento/css/ver_reserva.css',
                



            ])
        })
    )
    return self.skipWaiting()
})
self.addEventListener('activate', e =>{
    self.clients.claim()
})
self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if (url.login === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName)
    try{
        const refresh = await fetch(req)
        await cache.put(req, refresh.clone())
        return refresh
    }catch(e){
        const cached = await cache.match(req)
        return cached
    }
}