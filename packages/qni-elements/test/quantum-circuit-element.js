import {testElementCreation} from './common/test-element-creation'

describe('quantum-circuit element', function () {
  describe('element creation', function () {
    testElementCreation(window.QuantumCircuitElement, 'quantum-circuit')
  })

  describe('circuit API', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('h(0)', function () {
      circuit.h(0)

      assert.equal(1, circuit.steps.length)
      assert.equal(1, circuit.stepAt(0).dropzones.length)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.HGateElement)
    })

    it('h(1)', function () {
      circuit.h(1)

      assert.equal(1, circuit.steps.length)
      assert.equal(2, circuit.stepAt(0).dropzones.length)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.HGateElement)
    })

    it('h(0, 2)', function () {
      circuit.h(0, 2)

      assert.equal(1, circuit.steps.length)
      assert.equal(3, circuit.stepAt(0).dropzones.length)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.HGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.HGateElement)
    })

    it('x(0)', function () {
      circuit.x(0)

      assert.equal(1, circuit.steps.length)
      assert.equal(1, circuit.stepAt(0).dropzones.length)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.XGateElement)
    })

    it('x(1)', function () {
      circuit.x(1)

      assert.equal(1, circuit.steps.length)
      assert.equal(2, circuit.stepAt(0).dropzones.length)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.XGateElement)
    })

    it('x(0, 2)', function () {
      circuit.x(0, 2)

      assert.equal(1, circuit.steps.length)
      assert.equal(3, circuit.stepAt(0).dropzones.length)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.XGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.XGateElement)
    })

    it('measure(0)', function () {
      circuit.measure(0)

      assert.equal(1, circuit.steps.length)
      assert.equal(1, circuit.stepAt(0).dropzones.length)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.MeasurementGateElement)
    })

    it('measure(1)', function () {
      circuit.measure(1)

      assert.equal(1, circuit.steps.length)
      assert.equal(2, circuit.stepAt(0).dropzones.length)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.MeasurementGateElement)
    })

    it('measure(0, 2)', function () {
      circuit.measure(0, 2)

      assert.equal(1, circuit.steps.length)
      assert.equal(3, circuit.stepAt(0).dropzones.length)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.MeasurementGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.MeasurementGateElement)
    })
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
