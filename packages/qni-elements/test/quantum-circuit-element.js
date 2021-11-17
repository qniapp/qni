import {testElementCreation} from './common/test-element-creation'

describe('quantum-circuit element', function () {
  describe('element creation', function () {
    testElementCreation(window.QuantumCircuitElement, 'quantum-circuit')
  })

  describe('circuit API', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('h(0)', function () {
      circuit.h(0)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 1)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.HGateElement)
    })

    it('h(1)', function () {
      circuit.h(1)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 2)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.HGateElement)
    })

    it('h(0, 2)', function () {
      circuit.h(0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.HGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.HGateElement)
    })

    it('x(0)', function () {
      circuit.x(0)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 1)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.XGateElement)
    })

    it('x(1)', function () {
      circuit.x(1)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 2)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.XGateElement)
    })

    it('x(0, 2)', function () {
      circuit.x(0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.XGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.XGateElement)
    })

    it('y(0)', function () {
      circuit.y(0)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 1)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.YGateElement)
    })

    it('y(1)', function () {
      circuit.y(1)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 2)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.YGateElement)
    })

    it('y(0, 2)', function () {
      circuit.y(0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.YGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.YGateElement)
    })

    it('cnot(0, 2)', function () {
      circuit.cnot(0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.ControlGateElement)
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.XGateElement)
    })

    it('write("0", 0)', function () {
      circuit.write('0', 0)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 1)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '0')
    })

    it('write("0", 1)', function () {
      circuit.write('0', 1)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 2)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(1).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(1).operation.value, '0')
    })

    it('write("0", 0, 2)', function () {
      circuit.write('0', 0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '0')
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(2).operation.value, '0')
    })

    it('write("1", 0)', function () {
      circuit.write('1', 0)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 1)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '1')
    })

    it('write("1", 1)', function () {
      circuit.write('1', 1)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 2)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(1).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(1).operation.value, '1')
    })

    it('write("1", 0, 2)', function () {
      circuit.write('1', 0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '1')
      assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.WriteGateElement)
      assert.equal(circuit.stepAt(0).dropzoneAt(2).operation.value, '1')
    })

    it('measure(0)', function () {
      circuit.measure(0)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 1)
      assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.MeasurementGateElement)
    })

    it('measure(1)', function () {
      circuit.measure(1)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 2)
      assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
      assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, window.MeasurementGateElement)
    })

    it('measure(0, 2)', function () {
      circuit.measure(0, 2)

      assert.equal(circuit.steps.length, 1)
      assert.equal(circuit.stepAt(0).dropzones.length, 3)
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
      const circuit = new window.QuantumCircuitElement()

      circuit.write('0', 0, 1).h(0).cnot(0, 1).measure(0, 1)
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
