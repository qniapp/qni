import '../dist/index'
import {assert} from '@esm-bundle/chai'

function testMaxControlGates(gateType, gateMethodName, controlledGateClass) {
  let circuit
  const controlledGateMethodName = `c${gateMethodName}`

  beforeEach(function () {
    circuit = new window.QuantumCircuitElement()
    circuit.minStepCount = 0
    circuit[`${controlledGateMethodName}MaxControlGates`] = 2
    document.body.append(circuit)
  })

  afterEach(function () {
    document.body.textContent = ''
  })

  it(`•-•-•-${gateType}`, function () {
    circuit[controlledGateMethodName]([0, 1, 2], 3)

    const step = circuit.stepAt(0)
    assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(3).operation, controlledGateClass)
    assert.isTrue(step.dropzoneAt(2).operation.disabled)

    assert.deepEqual(circuit.serialize(), [[{type: gateType, targets: [3], controls: [0, 1]}]])
  })

  it(`•-•-${gateType} •`, function () {
    circuit[controlledGateMethodName]([0, 1, 3], 2)

    const step = circuit.stepAt(0)
    assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(2).operation, controlledGateClass)
    assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)

    assert.isFalse(step.dropzoneAt(2).connectBottom)
    assert.isTrue(step.dropzoneAt(3).operation.disabled)
    assert.isFalse(step.dropzoneAt(3).connectTop)

    assert.deepEqual(circuit.serialize(), [[{type: gateType, targets: [2], controls: [0, 1]}]])
  })

  it(`•-${gateType}-• •`, function () {
    circuit[controlledGateMethodName]([0, 2, 3], 1)

    const step = circuit.stepAt(0)
    assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(1).operation, controlledGateClass)
    assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)

    assert.isFalse(step.dropzoneAt(2).connectBottom)
    assert.isTrue(step.dropzoneAt(3).operation.disabled)
    assert.isFalse(step.dropzoneAt(3).connectTop)

    assert.deepEqual(circuit.serialize(), [[{type: gateType, targets: [1], controls: [0, 2]}]])
  })

  it(`${gateType}-•-• •`, function () {
    circuit[controlledGateMethodName]([1, 2, 3], 0)

    const step = circuit.stepAt(0)
    assert.instanceOf(step.dropzoneAt(0).operation, controlledGateClass)
    assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
    assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)

    assert.isFalse(step.dropzoneAt(2).connectBottom)
    assert.isTrue(step.dropzoneAt(3).operation.disabled)
    assert.isFalse(step.dropzoneAt(3).connectTop)

    assert.deepEqual(circuit.serialize(), [[{type: gateType, targets: [0], controls: [1, 2]}]])
  })
}

describe('quantum-circuit element', function () {
  describe('data-*-max-control-gates options', function () {
    describe('data-ch-max-control-gates', function () {
      testMaxControlGates('H', 'h', window.HGateElement)
    })

    describe('data-cnot-max-control-gates', function () {
      testMaxControlGates('X', 'not', window.XGateElement)
    })

    describe('data-cy-max-control-gates', function () {
      testMaxControlGates('Y', 'y', window.YGateElement)
    })

    describe('data-cz-max-control-gates', function () {
      testMaxControlGates('Z', 'z', window.ZGateElement)
    })

    describe('data-cphase-max-control-gates', function () {
      testMaxControlGates('P', 'phase', window.PhaseGateElement)
    })

    describe('data-ct-max-control-gates', function () {
      testMaxControlGates('T', 't', window.TGateElement)
    })

    describe('data-crnot-max-control-gates', function () {
      testMaxControlGates('X^½', 'rnot', window.RnotGateElement)
    })

    describe('data-crx-max-control-gates', function () {
      testMaxControlGates('Rx', 'rx', window.RxGateElement)
    })

    describe('data-cry-max-control-gates', function () {
      testMaxControlGates('Ry', 'ry', window.RyGateElement)
    })

    describe('data-crz-max-control-gates', function () {
      testMaxControlGates('Rz', 'rz', window.RzGateElement)
    })

    describe('data-cswap-max-control-gates', function () {
      let circuit

      beforeEach(function () {
        circuit = new window.QuantumCircuitElement()
        circuit.minStepCount = 0
        circuit.cswapMaxControlGates = 2
        document.body.append(circuit)
      })

      afterEach(function () {
        document.body.textContent = ''
      })

      it('•-•-•-Swap-Swap', function () {
        circuit.cswap([0, 1, 2], [3, 4])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(4).operation, window.SwapGateElement)
        assert.isTrue(step.dropzoneAt(2).operation.disabled)

        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [3, 4], controls: [0, 1]}]])
      })

      it('•-•-Swap-Swap •', function () {
        circuit.cswap([0, 1, 4], [2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(4).operation, window.ControlGateElement)

        assert.isFalse(step.dropzoneAt(3).connectBottom)
        assert.isTrue(step.dropzoneAt(4).operation.disabled)
        assert.isFalse(step.dropzoneAt(4).connectTop)

        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [2, 3], controls: [0, 1]}]])
      })

      it('•-Swap-Swap-• •', function () {
        circuit.cswap([0, 3, 4], [1, 2])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(4).operation, window.ControlGateElement)

        assert.isFalse(step.dropzoneAt(3).connectBottom)
        assert.isTrue(step.dropzoneAt(4).operation.disabled)
        assert.isFalse(step.dropzoneAt(4).connectTop)

        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [1, 2], controls: [0, 3]}]])
      })

      it('Swap-Swap-•-• •', function () {
        circuit.cswap([2, 3, 4], [0, 1])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.SwapGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(4).operation, window.ControlGateElement)

        assert.isFalse(step.dropzoneAt(3).connectBottom)
        assert.isTrue(step.dropzoneAt(4).operation.disabled)
        assert.isFalse(step.dropzoneAt(4).connectTop)

        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [0, 1], controls: [2, 3]}]])
      })
    })

    describe('multiple target gate types', function () {
      let circuit

      beforeEach(function () {
        circuit = new window.QuantumCircuitElement()
        circuit.minStepCount = 0
        document.body.append(circuit)
      })

      afterEach(function () {
        document.body.textContent = ''
      })

      it('•-H-•-X-X •', function () {
        circuit.chMaxControlGates = 1
        circuit.cnotMaxControlGates = 2

        circuit.cnot([0, 2, 5], [3, 4])
        circuit.stepAt(0).dropzoneAt(1).put(new window.HGateElement())
        circuit.stepAt(0).dispatchEvent(new Event('circuit-step:update', {bubbles: true}))

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.HGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.XGateElement)
        assert.instanceOf(step.dropzoneAt(4).operation, window.XGateElement)
        assert.instanceOf(step.dropzoneAt(5).operation, window.ControlGateElement)
        assert.isTrue(step.dropzoneAt(5).operation.disabled)

        assert.isFalse(step.dropzoneAt(4).connectBottom)
        assert.isTrue(step.dropzoneAt(5).operation.disabled)
        assert.isFalse(step.dropzoneAt(5).connectTop)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'H', controls: [0], targets: [1]},
            {type: 'X', controls: [0, 2], targets: [3, 4]}
          ]
        ])
      })
    })
  })
})
