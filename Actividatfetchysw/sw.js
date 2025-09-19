self.addEventListener(
  'fetch',
  function(event){
    console.log(event.request.url);
    if(/\.jpg$/.test(evento.request.url)){
      event.respondWith(
        fetch('unicorn.png')
      );
    }
    else if(/\.png$/.test(evento.request.url)){
      evento.respondWith(
        fetch('Gato.jpg')
      );
    }
  }
)

