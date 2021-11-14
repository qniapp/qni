import {testElementCreation} from './common/test-element-creation'

describe('circuit-step element', function () {
  describe('element creation', function () {
    testElementCreation(window.CircuitStepElement, 'circuit-step')
  })

  describe('update connections', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate><control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const controlGate = document.querySelector('control-gate')
      assert(controlGate.disabled)
    })

    it('H-•-1-H', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate><h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate><control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate><h-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      const dropzones = step.dropzones
      assert(!dropzones[0].wireTop && dropzones[0].wireBottom)
      assert(dropzones[1].wireTop && dropzones[1].wireBottom)
      assert(dropzones[2].wireTop && dropzones[2].wireBottom)
      assert(dropzones[3].wireTop && !dropzones[3].wireBottom)
    })
  })
})
