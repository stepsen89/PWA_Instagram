// register the service worker in every 

self.addEventListener('install', function(event){
  console.log('Service Worker* Installing Service Worker ...', event);
})

self.addEventListener('activate', function(event){
  console.log('Service Worker* Activating Service Worker ...', event);
  return self.clients.claim();
});
// that SW loaded correctly (and activated)
// in dev mode update on reload - not in production mode

self.addEventListener('fetch', function(event){
  console.log('*Service Worker* Fetching Something ...', event);
  event.respondWith(fetch(event.request));
})