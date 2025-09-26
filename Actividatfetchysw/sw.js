var cacheName = 'cache1';

self.addEventListener(
  'install',
  function(evento){
    evento.waitUntil(
      caches.open(nombreCache)
      .then(
        function(cache){
          cache.addA11([
            'index.html',
            'bootstrap-5.3.8-dist/css/bootstrap.min.css',
            'bootstrap-5.3.8-dist/js/bootstrap.min.js',
            'lib1.js',
            'lib2.js',
            'unicorn.jpg',

          ]
          );
        }
      )
    );
  }
);

self.addEventListener(
    'fetch',
    function (evento) {
        if (/\.jpg$/.test(evento.request.url)) {
            evento.respondWith(fetch('unicorn.jpg'));
        }
        else if (/\.png$/.test(evento.request.url)) {
            evento.respondWith(
                fetch('unicorn.png')
            );
        }
        else {
            evento.respondWith(
                caches.match(evento.request)
                    .then(
                        function (respuesta) {
                            if (respuesta) {
                                return respuesta;
                            }
                            return fetch(evento.request);
                        }
                    )
            );
        }
    }
);

