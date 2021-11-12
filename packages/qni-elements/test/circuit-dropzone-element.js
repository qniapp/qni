describe('circuit-dropzone element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('circuit-dropzone')
      assert.equal('CIRCUIT-DROPZONE', el.nodeName)
      assert(el instanceof window.CircuitDropzoneElement)
    })

    it('creates from constructor', function () {
      const el = new window.CircuitDropzoneElement()
      assert.equal('CIRCUIT-DROPZONE', el.nodeName)
    })
  })

  describe('vertical wiring', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('connects to lower bit', function () {
      const el = document.createElement('circuit-dropzone')
      document.body.append(el)
      el.setAttribute('data-wire-top', '')

      const wireTopSvg = el.shadowRoot.querySelector('#wire-top')

      assert.isNotNull(wireTopSvg)
    })

    it('connects to upper bit', function () {
      const el = document.createElement('circuit-dropzone')
      document.body.append(el)
      el.setAttribute('data-wire-bottom', '')

      const wireBottomSvg = el.shadowRoot.querySelector('#wire-bottom')

      assert.isNotNull(wireBottomSvg)
    })
  })

  describe('operation', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('no circuit-dropzone[data-occupied]', function () {
      const dropzone = document.createElement('circuit-dropzone')

      assert(!dropzone.hasAttribute('data-occupied'))
    })

    it('circuit-dropzone[data-occupied]', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-dropzone>
  <h-gate></h-gate>
</circuit-dropzone>`
      document.body.append(container)

      const dropzone = document.querySelector('circuit-dropzone')
      assert(dropzone.hasAttribute('data-occupied'))
    })
  })
})
