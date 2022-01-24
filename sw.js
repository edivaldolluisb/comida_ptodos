
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
                './fazer_reclamacao.html',
                './reservas_realizadas.html',
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
                './css/fazer_reclamacao.css',
                './estabelecimento',
                './estabelecimento/adicionar_produto.html',
                './estabelecimento/atualizar_produto.html',
                './estabelecimento/estabelecimento_index.html',
                './estabelecimento/estabelecimento_produtos.html',
                './estabelecimento/ver_reserva.html',
                './estabelecimento/pedidos.html',
                './estabelecimento/ver_pedido.html',
                './estabelecimento/ver_pedido_registado.html',
                './estabelecimento/pedidos_registados.html',
                './estabelecimento/css',
                './estabelecimento/css/adicionar_produto.css',
                './estabelecimento/css/atualizar_produto.css',
                './estabelecimento/css/estabelecimento_index.css',
                './estabelecimento/css/estabelecimento_produtos.css',
                './estabelecimento/css/processofinalizado.css',
                './estabelecimento/js',
                './estabelecimento/js/processo_finalizado.js',
                './associacao',
                './associacao/ver_produto.html',
                './associacao/ver_pedido.html',
                './associacao/reservas_categoria.html',
                './associacao/reserva.html',
                './associacao/pedidos.html',
                './associacao/js',
                './associacao/js/pedidos.js',
                './imagens',
                './imagens/alimentos.png',
                './imagens/box_logo.jpeg',
                './imagens/box_logo.png',
                './imagens/box_logo_50.png',
                './imagens/box_logo_512.png',
                './imagens/favicon.png',
                './imagens/fundo.png',
                './imagens/logo2.png',
                './imagens/maskable_icon.png',
                './imagens/maskable_icon_x192.png',
                './imagens/pexels-daria-shevtsova-704971.jpg',
                './imagens/pexels-nadin-trosh-4356100.jpg',
                './imagens/wavesNegative.svg',

                './js',
                './js/doar_dinheiro.js',
                './js/funcional.js',
                './js/menu.js',
                './js/ver_produto.js',
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