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

  describe('serialize', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('H', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <h-gate data-bit="0"></h-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'H', targets: [0]}])
    })

    it('X', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <x-gate data-bit="0"></x-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'X', targets: [0]}])
    })

    it('Y', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <y-gate data-bit="0"></y-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Y', targets: [0]}])
    })

    it('Z', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <z-gate data-bit="0"></z-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Z', targets: [0]}])
    })

    it('P', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <phase-gate data-bit="0"></phase-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'P', targets: [0]}])
    })

    it('√X', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rnot-gate data-bit="0"></rnot-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'X^½', targets: [0]}])
    })

    it('Rx', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rx-gate data-bit="0"></rx-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Rx', targets: [0]}])
    })

    it('Ry', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <ry-gate data-bit="0"></ry-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Ry', targets: [0]}])
    })

    it('Rz', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <rz-gate data-bit="0"></rz-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Rz', targets: [0]}])
    })

    it('Swap', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <swap-gate data-bit="0"></swap-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [])
    })

    it('•', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <control-gate data-bit="0"></control-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [])
    })

    it('Bloch', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <bloch-display data-bit="0"></bloch-display>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Bloch', targets: [0]}])
    })

    it('|0>', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <write-gate data-value="0" data-bit="0"></write-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: '|0>', targets: [0]}])
    })

    it('|1>', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <write-gate data-value="1" data-bit="0"></write-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: '|1>', targets: [0]}])
    })

    it('Measure', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<circuit-step>
  <circuit-dropzone>
    <measurement-gate data-bit="0"></measurement-gate>
  </circuit-dropzone>
</circuit-step>`
      document.body.append(container)

      const step = document.querySelector('circuit-step')
      assert.deepEqual(step.serialize(), [{type: 'Measure', targets: [0]}])
    })
  })
})
