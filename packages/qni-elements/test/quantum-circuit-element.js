import {testElementCreation} from './common/test-element-creation'

describe('quantum-circuit element', function () {
  describe('element creation', function () {
    testElementCreation(window.QuantumCircuitElement, 'quantum-circuit')
  })

  describe('classical and quantum wires', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    // -|0>-H-•-M-
    //        |
    // -|0>---X-M-
    it('draws classical and quantum wires', function () {
      const container = document.createElement('div')
      container.innerHTML = `
<quantum-circuit>
  <circuit-step>
    <circuit-dropzone>
      <write-gate data-value="0"></write-gate>
    </circuit-dropzone>
    <circuit-dropzone>
      <write-gate data-value="0"></write-gate>
    </circuit-dropzone>
  </circuit-step>

  <circuit-step>
    <circuit-dropzone>
      <h-gate></h-gate>
    </circuit-dropzone>
    <circuit-dropzone></circuit-dropzone>
  </circuit-step>

  <circuit-step>
    <circuit-dropzone>
      <control-gate></control-gate>
    </circuit-dropzone>
    <circuit-dropzone>
      <x-gate></x-gate>
    </circuit-dropzone>
  </circuit-step>

  <circuit-step>
    <circuit-dropzone>
      <measurement-gate data-value="1"></measurement-gate>
    </circuit-dropzone>
    <circuit-dropzone>
      <measurement-gate data-value="1"></measurement-gate>
    </circuit-dropzone>
  </circuit-step>
</quantum-circuit>`
      document.body.append(container)

      const steps = document.querySelectorAll('circuit-step')

      assert.isFalse(steps.item(0).dropzones[0].inputWireQuantum)
      assert.isFalse(steps.item(0).dropzones[1].inputWireQuantum)
      assert.isTrue(steps.item(0).dropzones[0].outputWireQuantum)
      assert.isTrue(steps.item(0).dropzones[1].outputWireQuantum)

      assert.isTrue(steps.item(1).dropzones[0].inputWireQuantum)
      assert.isTrue(steps.item(1).dropzones[1].inputWireQuantum)
      assert.isTrue(steps.item(1).dropzones[0].outputWireQuantum)
      assert.isTrue(steps.item(1).dropzones[1].outputWireQuantum)

      assert.isTrue(steps.item(2).dropzones[0].inputWireQuantum)
      assert.isTrue(steps.item(2).dropzones[1].inputWireQuantum)
      assert.isTrue(steps.item(2).dropzones[0].outputWireQuantum)
      assert.isTrue(steps.item(2).dropzones[1].outputWireQuantum)

      assert.isTrue(steps.item(3).dropzones[0].inputWireQuantum)
      assert.isTrue(steps.item(3).dropzones[1].inputWireQuantum)
      assert.isFalse(steps.item(3).dropzones[0].outputWireQuantum)
      assert.isFalse(steps.item(3).dropzones[1].outputWireQuantum)
    })
  })
})
