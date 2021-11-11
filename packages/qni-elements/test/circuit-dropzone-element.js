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
})
