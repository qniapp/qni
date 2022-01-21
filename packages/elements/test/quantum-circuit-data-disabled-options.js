import '../dist/index'
import {assert} from '@esm-bundle/chai'

describe('quantum-circuit element', function () {
  describe('data-*-disabled options', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('data-ch-disabled', function () {
      circuit.chDisabled = true

      circuit.ch(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'H', targets: [1]}]])
    })

    it('data-cnot-disabled', function () {
      circuit.cnotDisabled = true

      circuit.cnot(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'X', targets: [1]}]])
    })

    it('data-cy-disabled', function () {
      circuit.cyDisabled = true

      circuit.cy(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'Y', targets: [1]}]])
    })

    it('data-cz-disabled', function () {
      circuit.czDisabled = true

      circuit.cz(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'Z', targets: [1]}]])
    })

    it('data-cphase-disabled', function () {
      circuit.cphaseDisabled = true

      circuit.cphase(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'P', targets: [1]}]])
    })

    it('data-crnot-disabled', function () {
      circuit.crnotDisabled = true

      circuit.crnot(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'X^½', targets: [1]}]])
    })

    it('data-crx-disabled', function () {
      circuit.crxDisabled = true

      circuit.crx(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'Rx', targets: [1]}]])
    })

    it('data-cry-disabled', function () {
      circuit.cryDisabled = true

      circuit.cry(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'Ry', targets: [1]}]])
    })

    it('data-crz-disabled', function () {
      circuit.crzDisabled = true

      circuit.crz(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'Rz', targets: [1]}]])
    })

    it('data-cswap-disabled', function () {
      circuit.cswapDisabled = true

      circuit.cswap(0, [1, 2])
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.isTrue(circuit.stepAt(0).dropzoneAt(1).connectBottom)
      assert.isTrue(circuit.stepAt(0).dropzoneAt(2).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [1, 2]}]])
    })

    it('data-swap-disabled', function () {
      circuit.swapDisabled = true

      circuit.swap(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[]])
    })

    it('data-phase-phase-disabled', function () {
      circuit.phasePhaseDisabled = true

      circuit.phase(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[{type: 'P', targets: [0, 1]}]])
    })

    it('data-control-control-disabled', function () {
      circuit.controlControlDisabled = true

      circuit.control(0, 1)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(0).connectBottom)
      assert.isFalse(circuit.stepAt(0).dropzoneAt(1).connectTop)
      assert.deepEqual(circuit.serialize(), [[]])
    })
  })
})
