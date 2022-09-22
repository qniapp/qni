import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testCircuitApi} from './common/test-circuit-api.js'
import {testControlledU} from './common/test-controlled-u.js'
import {testSimpleCircuitApi} from './common/test-simple-circuit-api.js'

describe('quantum-circuit element', function () {
  describe('simple API', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    describe('h', function () {
      testSimpleCircuitApi('h', window.HGateElement)
    })

    describe('x', function () {
      testSimpleCircuitApi('x', window.XGateElement)
    })

    describe('y', function () {
      testSimpleCircuitApi('y', window.YGateElement)
    })

    describe('z', function () {
      testSimpleCircuitApi('z', window.ZGateElement)
    })

    describe('phase', function () {
      testSimpleCircuitApi('phase', window.PhaseGateElement)
    })

    describe('t', function () {
      testSimpleCircuitApi('t', window.TGateElement)
    })

    describe('rnot', function () {
      testSimpleCircuitApi('rnot', window.RnotGateElement)
    })

    describe('rx', function () {
      testSimpleCircuitApi('rx', window.RxGateElement)
    })

    describe('ry', function () {
      testSimpleCircuitApi('ry', window.RyGateElement)
    })

    describe('rz', function () {
      testSimpleCircuitApi('rz', window.RzGateElement)
    })

    // describe('QFT', function () {
    //   testSimpleCircuitApi('qft', window.QftGateElement)
    // })

    // describe('QFT†', function () {
    //   testSimpleCircuitApi('qftDagger', window.QftDaggerGateElement)
    // })

    describe('swap', function () {
      testSimpleCircuitApi('swap', window.SwapGateElement)

      it('disabled (single swap)', function () {
        circuit.swap(0)

        const swap = circuit.stepAt(0).dropzoneAt(0).operation
        assert.isTrue(swap.disabled)
      })

      it('enabled (two swaps)', function () {
        circuit.swap(0, 2)

        const swapA = circuit.stepAt(0).dropzoneAt(0).operation
        assert.isFalse(swapA.disabled)

        const swapB = circuit.stepAt(0).dropzoneAt(2).operation
        assert.isFalse(swapB.disabled)
      })

      it('disabled (three swaps)', function () {
        circuit.swap(0, 1, 2)

        const swapA = circuit.stepAt(0).dropzoneAt(0).operation
        assert.isTrue(swapA.disabled)

        const swapB = circuit.stepAt(0).dropzoneAt(1).operation
        assert.isTrue(swapB.disabled)

        const swapC = circuit.stepAt(0).dropzoneAt(2).operation
        assert.isTrue(swapC.disabled)
      })
    })

    describe('control', function () {
      testSimpleCircuitApi('control', window.ControlGateElement)

      it('disabled (single control)', function () {
        circuit.control(0)

        const control = circuit.stepAt(0).dropzoneAt(0).operation
        assert.isTrue(control.disabled)
      })

      it('enabled (two controls)', function () {
        circuit.control(0, 2)

        const controlA = circuit.stepAt(0).dropzoneAt(0).operation
        assert.isFalse(controlA.disabled)

        const controlB = circuit.stepAt(0).dropzoneAt(2).operation
        assert.isFalse(controlB.disabled)
      })

      it('enabled (three controls)', function () {
        circuit.control(0, 1, 2)

        const controlA = circuit.stepAt(0).dropzoneAt(0).operation
        assert.isFalse(controlA.disabled)

        const controlB = circuit.stepAt(0).dropzoneAt(1).operation
        assert.isFalse(controlB.disabled)

        const controlC = circuit.stepAt(0).dropzoneAt(2).operation
        assert.isFalse(controlC.disabled)
      })
    })

    describe('bloch', function () {
      testSimpleCircuitApi('bloch', window.BlochDisplayElement)
    })

    describe('write', function () {
      it("value = '0', targets = 0", function () {
        circuit.write('0', 0)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 1)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '0')
      })

      it("value = '0', targets = 1", function () {
        circuit.write('0', 1)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 2)
        assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(1).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(1).operation.value, '0')
      })

      it("value = '0', targets = 0, 2", function () {
        circuit.write('0', 0, 2)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 3)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '0')
        assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(2).operation.value, '0')
      })

      it("value = '1', targets = 0", function () {
        circuit.write('1', 0)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 1)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '1')
      })

      it("value = '1', targets = 1", function () {
        circuit.write('1', 1)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 2)
        assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(1).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(1).operation.value, '1')
      })

      it("value = '1', targets = 0, 2", function () {
        circuit.write('1', 0, 2)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 3)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(0).operation.value, '1')
        assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
        assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, window.WriteGateElement)
        assert.equal(circuit.stepAt(0).dropzoneAt(2).operation.value, '1')
      })
    })

    describe('measure', function () {
      testSimpleCircuitApi('measure', window.MeasurementGateElement)
    })

    describe('ch', function () {
      testControlledU('h', window.HGateElement)
    })

    describe('cnot', function () {
      testControlledU('not', window.XGateElement)
    })

    describe('cx', function () {
      testControlledU('x', window.XGateElement)
    })

    describe('cy', function () {
      testControlledU('y', window.YGateElement)
    })

    describe('cz', function () {
      testControlledU('z', window.ZGateElement)
    })

    describe('cphase', function () {
      testControlledU('phase', window.PhaseGateElement)
    })

    describe('ct', function () {
      testControlledU('t', window.TGateElement)
    })

    describe('crnot', function () {
      testControlledU('rnot', window.RnotGateElement)
    })

    describe('crx', function () {
      testControlledU('rx', window.RxGateElement)
    })

    describe('cry', function () {
      testControlledU('ry', window.RyGateElement)
    })

    describe('crz', function () {
      testControlledU('rz', window.RzGateElement)
    })

    describe('cswap', function () {
      testControlledU('swap', window.SwapGateElement)
    })

    describe('cc', function () {
      it(`targets = 0`, function () {
        circuit.cc(0)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 1)

        const targetGate = circuit.stepAt(0).dropzoneAt(0).operation
        assert.instanceOf(targetGate, window.ControlGateElement)
        assert.isFalse(targetGate.dropzone.connectTop)
        assert.isFalse(targetGate.dropzone.connectBottom)
        assert.isTrue(targetGate.disabled)
      })

      it(`targets = 0, 2`, function () {
        circuit.cc(0, 2)

        assert.equal(circuit.steps.length, 1)
        assert.equal(circuit.stepAt(0).dropzones.length, 3)

        const targetGateA = circuit.stepAt(0).dropzoneAt(0).operation
        assert.instanceOf(targetGateA, window.ControlGateElement)
        assert.isFalse(targetGateA.dropzone.connectTop)
        assert.isTrue(targetGateA.dropzone.connectBottom)
        assert.isFalse(targetGateA.disabled)

        const dropzoneWire1 = circuit.stepAt(0).dropzoneAt(1)
        assert.isNull(dropzoneWire1.operation)
        assert.isTrue(dropzoneWire1.connectTop)
        assert.isTrue(dropzoneWire1.connectBottom)

        const targetGateB = circuit.stepAt(0).dropzoneAt(2).operation
        assert.instanceOf(targetGateB, window.ControlGateElement)
        assert.isTrue(targetGateB.dropzone.connectTop)
        assert.isFalse(targetGateB.dropzone.connectBottom)
        assert.isFalse(targetGateB.disabled)
      })
    })
  })

  describe('circuit API', function () {
    describe('h', function () {
      testCircuitApi('h', window.HGateElement)
    })

    describe('x', function () {
      testCircuitApi('x', window.XGateElement)
    })

    describe('y', function () {
      testCircuitApi('y', window.YGateElement)
    })

    describe('z', function () {
      testCircuitApi('z', window.ZGateElement)
    })

    describe('phase', function () {
      testCircuitApi('phase', window.PhaseGateElement)
    })

    describe('t', function () {
      testCircuitApi('t', window.TGateElement)
    })

    describe('rnot', function () {
      testCircuitApi('rnot', window.RnotGateElement)
    })

    describe('rx', function () {
      testCircuitApi('rx', window.RxGateElement)
    })

    describe('ry', function () {
      testCircuitApi('ry', window.RyGateElement)
    })

    describe('rz', function () {
      testCircuitApi('rz', window.RzGateElement)
    })

    // describe('QFT', function () {
    //   testCircuitApi('qft', window.QftGateElement)
    // })
  })
})
