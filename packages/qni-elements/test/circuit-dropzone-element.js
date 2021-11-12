describe('circuit-dropzone element', function () {
  describe('element creation', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

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
