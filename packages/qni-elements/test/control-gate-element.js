import {testDisableable} from './test-disableable'

describe('control-gate element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('control-gate')
      assert.equal('CONTROL-GATE', el.nodeName)
      assert(el instanceof window.ControlGateElement)
    })

    it('creates from constructor', function () {
      const el = new window.ControlGateElement()
      assert.equal('CONTROL-GATE', el.nodeName)
    })
  })

  describe('disableable', function () {
    testDisableable('control-gate')
  })

  describe('icon', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('default icon', function () {
      const controlGate = document.createElement('control-gate')
      document.body.append(controlGate)

      const iconSvg = controlGate.shadowRoot.querySelector('#icon svg')
      assert.isNotNull(iconSvg)
    })

    it('control-gate[data-icon]', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<template id="control-gate-icon">
   <svg id="custom-icon"></svg>
</template>

<control-gate data-icon="control-gate-icon"></control-gate>`
      document.body.append(container)
      const controlGate = document.querySelector('control-gate')

      const iconSvg = controlGate.shadowRoot.querySelector('#icon svg')

      assert.isNotNull(iconSvg)
      assert.equal('custom-icon', iconSvg.id)
    })
  })
})
