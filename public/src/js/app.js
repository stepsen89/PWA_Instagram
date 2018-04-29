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

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    //resolve('This is after timer is done');
    reject({code: 500, message: 'An error occurred'});
    //console.log('timer is done');
  }, 3000);
});

// promise.then(function(text){
//   return text;
// }, function (err) {
//   console.log(err.code, err.message)
// }
// }).then(function(newText) {
//   console.log(newText);
// })

promise.then(function(text){
  return text;
}).then(function(newText) {
  console.log(newText);
}).catch(function(err){
  console.log(err.code, err.message);
})

// value of promises if you have more asynchronous code 

console.log('after settimeout');