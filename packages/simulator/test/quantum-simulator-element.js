describe('quantum-circuit element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('quantum-simulator')
      assert.equal('quantum-simulator', el.nodeName.toLocaleLowerCase())
      assert(el instanceof window.QuantumSimulatorElement)
    })

    it('creates from constructor', function () {
      const el = new window.QuantumSimulatorElement()
      assert.equal('quantum-simulator', el.nodeName.toLocaleLowerCase())
    })
  })
})
