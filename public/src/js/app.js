let deferredPrompt;

if ('serviceWorker' in navigator){
  navigator.serviceWorker
    .register('/serviceworker.js')
    .then(function() {
      console.log('Service Worker registered!');
    });
}

// check if browser can add service workers

// next step: web app banner after clicking

window.addEventListener('beforeinstallprompt', function(event){
  event.preventDefault();
  deferredPrompt = event;
  return false;
})