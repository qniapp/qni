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
      const circuit = new window.QuantumCircuitElement()

      circuit
        .write('0', 0, 1)
        .h({targets: [0]})
        .cnot(0, 1)
        .measure(0, 1)
      document.body.append(circuit)

      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).inputWireQuantum)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).inputWireQuantum)
      assert.isTrue(circuit.stepAt(0).dropzoneAt(0).outputWireQuantum)
      assert.isTrue(circuit.stepAt(0).dropzoneAt(1).outputWireQuantum)

      assert.isTrue(circuit.stepAt(1).dropzoneAt(0).inputWireQuantum)
      assert.isTrue(circuit.stepAt(1).dropzoneAt(1).inputWireQuantum)
      assert.isTrue(circuit.stepAt(1).dropzoneAt(0).outputWireQuantum)
      assert.isTrue(circuit.stepAt(1).dropzoneAt(1).outputWireQuantum)

      assert.isTrue(circuit.stepAt(2).dropzoneAt(0).inputWireQuantum)
      assert.isTrue(circuit.stepAt(2).dropzoneAt(1).inputWireQuantum)
      assert.isTrue(circuit.stepAt(2).dropzoneAt(0).outputWireQuantum)
      assert.isTrue(circuit.stepAt(2).dropzoneAt(1).outputWireQuantum)

      assert.isTrue(circuit.stepAt(3).dropzoneAt(0).inputWireQuantum)
      assert.isTrue(circuit.stepAt(3).dropzoneAt(1).inputWireQuantum)
      assert.isFalse(circuit.stepAt(3).dropzoneAt(0).outputWireQuantum)
      assert.isFalse(circuit.stepAt(3).dropzoneAt(1).outputWireQuantum)
    })
  })
})
