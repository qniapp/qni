describe('circuit-step element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('circuit-step')
      assert.equal('CIRCUIT-STEP', el.nodeName)
      assert(el instanceof window.CircuitStepElement)
    })

    it('creates from constructor', function () {
      const el = new window.CircuitStepElement()
      assert.equal('CIRCUIT-STEP', el.nodeName)
    })
  })
})
