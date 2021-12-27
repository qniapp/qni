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
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateConnections()

      const controlGate = document.querySelector('control-gate')
      assert.isTrue(controlGate.disabled)
    })

    it('•-•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateConnections()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && dropzones[0].connectBottom)
      assert.isTrue(dropzones[1].connectTop && !dropzones[1].connectBottom)
    })

    it('•-•-1-•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateConnections()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && dropzones[0].connectBottom)
      assert.isTrue(dropzones[1].connectTop && dropzones[1].connectBottom)
      assert.isTrue(dropzones[2].connectTop && dropzones[2].connectBottom)
      assert.isTrue(dropzones[3].connectTop && !dropzones[3].connectBottom)
    })

    it('P(π/2)-P(π/2)', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateConnections()

      assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
      assert.isTrue(step.dropzoneAt(1).connectTop && !step.dropzoneAt(1).connectBottom)
    })

    it('P(π/2)-P(π)', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-angle="π/2"></phase-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <phase-gate data-angle="π"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateConnections()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && !dropzones[0].connectBottom)
      assert.isTrue(!dropzones[1].connectTop && !dropzones[1].connectBottom)
    })

    it('H-•-1-H', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
  <circuit-dropzone>
    <control-gate></control-gate>
  </circuit-dropzone>
  <circuit-dropzone>
  </circuit-dropzone>
  <circuit-dropzone>
    <h-gate></h-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      step.updateConnections()

      const dropzones = step.dropzones
      assert.isTrue(!dropzones[0].connectTop && dropzones[0].connectBottom)
      assert.isTrue(dropzones[1].connectTop && dropzones[1].connectBottom)
      assert.isTrue(dropzones[2].connectTop && dropzones[2].connectBottom)
      assert.isTrue(dropzones[3].connectTop && !dropzones[3].connectBottom)
    })
  })
})
