self.addEventListener(
  'fetch',
  function(event){
    console.log(event.request.url);
    if(/\.jpg$/.test(event.request.url)){
      event.respondWith(
        fetch('unicorn.png')
      );
    }
    else if(/\.png$/.test(event.request.url)){
      evento.respondWith(
        fetch('Gato.jpg')
      );
    }
  }
)
