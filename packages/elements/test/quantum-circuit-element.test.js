import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'

describe('quantum-circuit element', function () {
  testElementCreation(window.QuantumCircuitElement, 'quantum-circuit')
  testHoverable('quantum-circuit')

  describe('circuit-editor quantum-circuit', function () {
    it('automatically becomes hoverable = true when it is a child of <circuit-editor>', function () {
      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-editor>
      <quantum-circuit data-target="circuit-editor.circuit"></quantum-circuit>
    </circuit-editor>`
      document.body.append(container)
      const circuit = document.querySelector('quantum-circuit')

      assert.isTrue(circuit.hoverable)
    })
  })

  describe('circuit-editor quantum-circuit operation', function () {
    it('automatically set hoverable = true for descendant operations when it is a child of circuit-editor', function () {
      const container = document.createElement('div')
      container.innerHTML = `
    <circuit-editor>
      <quantum-circuit data-target="circuit-editor.circuit">
        <circuit-dropzone>
          <h-gate></h-gate>
        <circuit-dropzone>
      </quantum-circuit>
    </circuit-editor>`
      document.body.append(container)
      const operation = document.querySelector('h-gate')

      assert.isTrue(operation.hoverable)
    })
  })

  describe('quantum-circuit data-json attribute', function () {
    let circuit

    // -|0>-H-•-M-
    //        |
    // -|0>---X-M-
    const entanglementCircuitJson = '{"cols":[["{entangle"],["|0>","|0>"],["H"],["•","X"],["}"],["Measure","Measure"]]}'

    // -H-
    // -H-
    // -H-
    const superpositionCircuitJson = '{"cols":[["H", "H", "H"]]}'

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('renders a quantum circuit', function () {
      circuit.json = entanglementCircuitJson

      assert.equal(circuit.steps.length, 4)

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

    it('redraws the circuit when given a different json', function () {
      circuit.json = entanglementCircuitJson
      circuit.json = superpositionCircuitJson

      assert.equal(circuit.steps.length, 1)

      assert.equal(circuit.stepAt(0).dropzoneAt(0).operationName, 'h-gate')
      assert.equal(circuit.stepAt(0).dropzoneAt(1).operationName, 'h-gate')
      assert.equal(circuit.stepAt(0).dropzoneAt(2).operationName, 'h-gate')
    })

    it('does not change the circuit when given the same json', function () {
      circuit.json = entanglementCircuitJson
      circuit.json = entanglementCircuitJson

      assert.equal(circuit.steps.length, 4)

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
