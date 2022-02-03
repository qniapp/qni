if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/qni/serviceworker.js', { scope: '/qni/' })
    .catch(function (error) {
      console.log('[Companion]', 'Service worker registration failed: ' + error)
    })
}
