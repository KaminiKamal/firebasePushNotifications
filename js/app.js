if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./firebase-messaging-sw.js',
  {
    scope: './'
  })
  .then(function(registration){
    console.log("service worker registration done", registration)
  })
  .catch(function(err){
    console.log("serviceWorker failed", err);
  })
}
