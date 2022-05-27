if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js', {scope: '/'}).catch(function (error) {
    console.log('[Companion]', 'Service worker registration failed: ' + error)
  })
}
