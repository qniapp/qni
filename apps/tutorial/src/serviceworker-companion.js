if (navigator.serviceWorker) {
  if (location.hostname === 'localhost') {
    navigator.serviceWorker.register('/serviceworker.js', { scope: './' }).catch(function (error) {
      console.log('[Companion]', 'Service worker registration failed: ' + error)
    })
  } else {
    navigator.serviceWorker
      .register('/qni/serviceworker.js', { scope: '/qni/' })
      .catch(function (error) {
        console.log('[Companion]', 'Service worker registration failed: ' + error)
      })
  }
}
