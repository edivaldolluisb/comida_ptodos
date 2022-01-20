
const cacheName = 'Comida_pra_todos'

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      cache.addAll([
        '../ver_produto.html',
        '../reservas_categoria.html',
        '../reserva.html',
        '../registo_cliente.html',
        '../processo_finalizado.html',
        '../mais_info.html',
        '../iniciar_sessao.html',
        '../index.html',
        '../favoritos.html',
        '../doar_dinheiro.html',
        '../estabelecimento',
        '../estabelecimento/adicionar_produto.html',
      ])
    })
  )
  return self.skipWaiting()
})
self.addEventListener('activate', e => {
  self.clients.claim()
})
self.addEventListener('fetch', async e => {
  const req = e.request
  const url = new URL(req.url)

  if (url.login === location.origin) {
    e.respondWith(cacheFirst(req))
  } else {
    e.respondWith(networkAndCache(req))
  }
})

async function cacheFirst(req) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(req)

  return cached || fetch(req)
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName)
  try {
    const refresh = await fetch(req)
    await cache.put(req, refresh.clone())
    return refresh
  } catch (e) {
    const cached = await cache.match(req)
    return cached
  }
}