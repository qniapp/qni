describe('quantum-circuit element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('quantum-circuit')
      assert.equal('QUANTUM-CIRCUIT', el.nodeName)
      assert(el instanceof window.QuantumCircuitElement)
    })

    it('creates from constructor', function () {
      const el = new window.QuantumCircuitElement()
      assert.equal('QUANTUM-CIRCUIT', el.nodeName)
    })
  })
})
