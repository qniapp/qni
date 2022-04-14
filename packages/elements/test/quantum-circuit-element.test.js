import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('quantum-circuit element', function () {
  describe('element creation', function () {
    testElementCreation(window.QuantumCircuitElement, 'quantum-circuit')
  })

  describe('quantum-circuit data-json attribute', function () {
    afterEach(function () {
      document.body.textContent = ''
    })

    it('renders a quantum circuit', function () {
      const circuit = new window.QuantumCircuitElement()
      document.body.append(circuit)

      // -|0>-H-•-M-
      //        |
      // -|0>---X-M-
      circuit.json = '{"cols":[["{entangle"],["|0>","|0>"],["H"],["•","X"],["}"],["Measure","Measure"]]}'

      assert.equal(circuit.stepAt(0).dropzoneAt(0).operationName, 'write-gate')
      assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '0')
      assert.equal(circuit.stepAt(0).dropzoneAt(1).operationName, 'write-gate')
      assert.equal(circuit.stepAt(0).dropzoneAt(1).operation.value, '0')

      assert.equal(circuit.stepAt(1).dropzoneAt(0).operationName, 'h-gate')
      assert.equal(circuit.stepAt(1).dropzoneAt(1).operation, null)

      assert.equal(circuit.stepAt(2).dropzoneAt(0).operationName, 'control-gate')
      assert.equal(circuit.stepAt(2).dropzoneAt(1).operationName, 'x-gate')

      assert.equal(circuit.stepAt(3).dropzoneAt(0).operationName, 'measurement-gate')
      assert.equal(circuit.stepAt(3).dropzoneAt(1).operationName, 'measurement-gate')
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
      const circuit = new window.QuantumCircuitElement()
      document.body.append(circuit)

      circuit
        .write('0', 0, 1)
        .h({targets: [0]})
        .cnot(0, 1)
        .measure(0, 1)

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
