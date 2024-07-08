// service-worker.js

// Nome do cache
const CACHE_NAME = 'novela-mania-cache-v1';

// Lista de recursos para cache com versões
const urlsToCache = [
  '/',
  '/css/bootstrap.min.css?v=1.0',
  '/css/animate.min.css?v=1.0',
  '/css/magnific-popup.css?v=1.0',
  '/css/fontawesome-all.min.css?v=1.0',
  '/css/owl.carousel.min.css?v=1.0',
  '/css/flaticon.css?v=1.0',
  '/css/odometer.css?v=1.0',
  '/css/aos.css?v=1.0',
  '/css/slick.css?v=1.0',
  '/css/default.css?v=1.0',
  '/css/style.css?v=1.0',
  '/css/responsive.css?v=1.0',
  '/js/vendor/jquery-3.6.0.min.js?v=1.0',
  '/js/popper.min.js?v=1.0',
  '/js/bootstrap.min.js?v=1.0',
  '/js/isotope.pkgd.min.js?v=1.0',
  '/js/imagesloaded.pkgd.min.js?v=1.0',
  '/js/jquery.magnific-popup.min.js?v=1.0',
  '/js/owl.carousel.min.js?v=1.0',
  '/js/jquery.odometer.min.js?v=1.0',
  '/js/jquery.appear.js?v=1.0',
  '/js/slick.min.js?v=1.0',
  '/js/ajax-form.js?v=1.0',
  '/js/wow.min.js?v=1.0',
  '/js/aos.js?v=1.0',
  '/js/plugins.js?v=1.0',
  '/js/main.js?v=1.0',
  '/img/banner/banner_bg01.jpg?v=1.0',
  '/img/bg/ucm_bg.jpg?v=1.0',
  '/img/bg/ucm_bg_shape.png?v=1.0',
  '/img/bg/services_bg.jpg?v=1.0',
  '/img/images/services_img.jpg?v=1.0',
  '/img/bg/live_bg.jpg?v=1.0',
  '/img/images/live_img.png?v=1.0',
  '/img/bg/movie_details_bg.jpg?v=1.0',
  '/img/images/play_icon.png?v=1.0',
  '/img/bg/episode_bg.jpg?v=1.0',
  '/img/images/episode_img.jpg?v=1.0',
  '/img/bg/breadcrumb_bg.jpg?v=1.0',
  '/img/bg/movie_bg.jpg?v=1.0',
];

// Tempo de expiração do cache em milissegundos (5 horas)
const CACHE_EXPIRATION = 5 * 60 * 60 * 1000; 

// Função para limpar caches antigos
const cleanUpOldCaches = () => {
  return caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        if (cacheName !== CACHE_NAME && cacheName.startsWith('novela-mania-cache-')) {
          console.log('Removendo cache antigo:', cacheName);
          return caches.delete(cacheName);
        }
      })
    );
  });
};

// Função para verificar a idade do cache
const isCacheExpired = (response) => {
  const dateHeader = response.headers.get('date');
  if (!dateHeader) return true; // Se não houver cabeçalho de data, considerar expirado

  const date = new Date(dateHeader);
  const age = Date.now() - date.getTime();
  return age > CACHE_EXPIRATION;
};

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(cleanUpOldCaches());
});

// Interceptação de requisições e cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response && !isCacheExpired(response)) {
          // Cache hit - retorna a resposta se o cache não estiver expirado
          return response;
        }

        // Não encontrou no cache ou cache expirado - fetch da rede
        return fetch(event.request)
          .then(response => {
            // Verifica se a requisição é para uma imagem ou recurso estático com versão
            if (
              event.request.url.includes('/img/') ||  // Verifica se é uma imagem
              event.request.url.includes('.css?v=') || // Verifica se é um CSS com versão
              event.request.url.includes('.js?v=')    // Verifica se é um JS com versão
            ) {
              // Clona a resposta para colocar no cache
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          });
      })
  );
});
