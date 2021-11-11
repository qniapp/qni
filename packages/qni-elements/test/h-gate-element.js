describe('h-gate element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('h-gate')
      assert.equal('H-GATE', el.nodeName)
      assert(el instanceof window.HGateElement)
    })

    it('creates from constructor', function () {
      const el = new window.HGateElement()
      assert.equal('H-GATE', el.nodeName)
    })
  })

  describe('element serialization', function () {
    beforeEach(function () {
      const el = new window.HGateElement()
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('converts to JSON', function () {
      const hGate = document.querySelector('h-gate')
      assert.equal('"H"', hGate.toJson())
    })
  })

  describe('element status', function () {
    beforeEach(function () {
      const el = new window.HGateElement()
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('can be disabled', function () {
      const hGate = document.querySelector('h-gate')
      hGate.disable()

      assert(hGate.disabled)
      assert(hGate.hasAttribute('data-disabled'))
    })

    it('can be enabled', function () {
      const hGate = document.querySelector('h-gate')
      hGate.disable()

      hGate.enable()

      assert(hGate.enabled)
      assert(!hGate.hasAttribute('data-disabled'))
    })
  })

  describe('icon', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('default icon', function () {
      const hGate = document.createElement('h-gate')
      document.body.append(hGate)

      const iconSvg = hGate.shadowRoot.querySelector('#icon svg')
      assert.isNotNull(iconSvg)
    })

    it('h-gate[data-icon]', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<template id="h-gate-icon">
   <svg id="custom-icon"></svg>
</template>

<h-gate data-icon="h-gate-icon"></h-gate>`
      document.body.append(container)
      const hGate = document.querySelector('h-gate')

      const iconSvg = hGate.shadowRoot.querySelector('#icon svg')

      assert.isNotNull(iconSvg)
      assert.equal('custom-icon', iconSvg.id)
    })
  })
})
