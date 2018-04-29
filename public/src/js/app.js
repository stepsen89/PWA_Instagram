if ('serviceWorker' in navigator){
  navigator.serviceWorker
    .register('/serviceworker.js')
    .then(function() {
      console.log('Service Worker registered!');
    });
}

// check if browser can add service workers