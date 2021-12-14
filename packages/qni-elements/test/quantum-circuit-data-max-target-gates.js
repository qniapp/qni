describe('quantum-circuit element', function () {
  describe('data-c*-max-target-gates attributes', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    describe('data-ch-max-target-gates', function () {
      it('•-H-H H (data-ch-max-target-gates = 2)', function () {
        circuit.chMaxTargetGates = 2
        circuit.ch(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.HGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.HGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.HGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'H', targets: [1, 2], controls: [0]},
            {type: 'H', targets: [3]}
          ]
        ])
      })
    })

    describe('data-cnot-max-target-gates', function () {
      it('•-X-X X (data-cnot-max-target-gates = 2)', function () {
        circuit.cnotMaxTargetGates = 2
        circuit.cnot(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.XGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.XGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.XGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'X', targets: [1, 2], controls: [0]},
            {type: 'X', targets: [3]}
          ]
        ])
      })
    })

    describe('data-cy-max-target-gates', function () {
      it('•-Y-Y Y (data-cy-max-target-gates = 2)', function () {
        circuit.cyMaxTargetGates = 2
        circuit.cy(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.YGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.YGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.YGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'Y', targets: [1, 2], controls: [0]},
            {type: 'Y', targets: [3]}
          ]
        ])
      })
    })

    describe('data-cz-max-target-gates', function () {
      it('•-Z-Z Z (data-cz-max-target-gates = 2)', function () {
        circuit.czMaxTargetGates = 2
        circuit.cz(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.ZGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.ZGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.ZGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'Z', targets: [1, 2], controls: [0]},
            {type: 'Z', targets: [3]}
          ]
        ])
      })
    })

    describe('data-cphase-max-target-gates', function () {
      it('•-P-P P (data-cphase-max-target-gates = 2)', function () {
        circuit.cphaseMaxTargetGates = 2
        circuit.cphase(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.PhaseGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.PhaseGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.PhaseGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'P', targets: [3]},
            {type: 'P', targets: [1, 2], controls: [0]}
          ]
        ])
      })
    })

    describe('data-crnot-max-target-gates', function () {
      it('•-X^½-X^½ X^½ (data-crnot-max-target-gates = 2)', function () {
        circuit.crnotMaxTargetGates = 2
        circuit.crnot(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.RnotGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.RnotGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.RnotGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'X^½', targets: [1, 2], controls: [0]},
            {type: 'X^½', targets: [3]}
          ]
        ])
      })
    })

    describe('data-crx-max-target-gates', function () {
      it('•-Rx-Rx Rx (data-rx-max-target-gates = 2)', function () {
        circuit.crxMaxTargetGates = 2
        circuit.crx(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.RxGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.RxGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.RxGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'Rx', targets: [1, 2], controls: [0]},
            {type: 'Rx', targets: [3]}
          ]
        ])
      })
    })

    describe('data-cry-max-target-gates', function () {
      it('•-Ry-Ry Ry (data-ry-max-target-gates = 2)', function () {
        circuit.cryMaxTargetGates = 2
        circuit.cry(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.RyGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.RyGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.RyGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'Ry', targets: [1, 2], controls: [0]},
            {type: 'Ry', targets: [3]}
          ]
        ])
      })
    })

    describe('data-crz-max-target-gates', function () {
      it('•-Rz-Rz Rz (data-rz-max-target-gates = 2)', function () {
        circuit.crzMaxTargetGates = 2
        circuit.crz(0, [1, 2, 3])

        const step = circuit.stepAt(0)
        assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
        assert.instanceOf(step.dropzoneAt(1).operation, window.RzGateElement)
        assert.instanceOf(step.dropzoneAt(2).operation, window.RzGateElement)
        assert.instanceOf(step.dropzoneAt(3).operation, window.RzGateElement)

        assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
        assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
        assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
        assert.isTrue(step.dropzoneAt(3).noConnections)

        assert.deepEqual(circuit.serialize(), [
          [
            {type: 'Rz', targets: [1, 2], controls: [0]},
            {type: 'Rz', targets: [3]}
          ]
        ])
      })
    })
  })

  describe('data-control-control-max-target-gates attribute', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('1 • 1 • (data-control-control-max-target-gates = 1)', function () {
      circuit.controlControlMaxTargetGates = 1
      circuit.control(1, 3)

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)

      assert.isTrue(step.dropzoneAt(1).operation.disabled)
      assert.isTrue(step.dropzoneAt(3).operation.disabled)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(step.dropzoneAt(1).noConnections)
      assert.isTrue(step.dropzoneAt(2).noConnections)
      assert.isTrue(step.dropzoneAt(3).noConnections)

      assert.deepEqual(circuit.serialize(), [[]])
    })

    it('•-1-• 1 • (data-control-control-max-target-gates = 2)', function () {
      circuit.controlControlMaxTargetGates = 2
      circuit.control(0, 2, 4)

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(0).operation, window.ControlGateElement)
      assert.instanceOf(step.dropzoneAt(2).operation, window.ControlGateElement)
      assert.instanceOf(step.dropzoneAt(4).operation, window.ControlGateElement)

      assert.isTrue(step.dropzoneAt(0).operation.enabled)
      assert.isTrue(step.dropzoneAt(2).operation.enabled)
      assert.isTrue(step.dropzoneAt(4).operation.disabled)

      assert.isTrue(!step.dropzoneAt(0).connectTop && step.dropzoneAt(0).connectBottom)
      assert.isTrue(step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
      assert.isTrue(step.dropzoneAt(2).connectTop && !step.dropzoneAt(2).connectBottom)
      assert.isTrue(step.dropzoneAt(3).noConnections)
      assert.isTrue(step.dropzoneAt(4).noConnections)

      assert.deepEqual(circuit.serialize(), [[{type: '•', targets: [0, 2]}]])
    })

    it('1 •-H-• (data-control-control-max-target-gates = 1)', function () {
      circuit.controlControlMaxTargetGates = 1
      circuit.control(1, 3)
      circuit.stepAt(0).dropzoneAt(2).put(new window.HGateElement())
      circuit.stepAt(0).dispatchEvent(new Event('circuit-step-update', {bubbles: true}))

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.ControlGateElement)
      assert.instanceOf(step.dropzoneAt(2).operation, window.HGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.ControlGateElement)

      assert.isTrue(step.dropzoneAt(1).operation.enabled)
      assert.isTrue(step.dropzoneAt(2).operation.enabled)
      assert.isTrue(step.dropzoneAt(3).operation.enabled)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(!step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
      assert.isTrue(step.dropzoneAt(2).connectTop && step.dropzoneAt(2).connectBottom)
      assert.isTrue(step.dropzoneAt(3).connectTop && !step.dropzoneAt(3).connectBottom)

      assert.deepEqual(circuit.serialize(), [[{type: 'H', targets: [2], controls: [1, 3]}]])
    })
  })

  describe('data-phase-phase-max-target-gates attribute', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('1 P 1 P (data-phase-phase-max-target-gates = 1)', function () {
      circuit.phasePhaseMaxTargetGates = 1
      circuit.phase(1, 3)

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.PhaseGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.PhaseGateElement)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(step.dropzoneAt(1).noConnections)
      assert.isTrue(step.dropzoneAt(2).noConnections)
      assert.isTrue(step.dropzoneAt(3).noConnections)

      assert.deepEqual(circuit.serialize(), [[{type: 'P', targets: [1, 3]}]])
    })

    it('1 P(π/2) 1 P(π/2) (data-phase-phase-max-target-gates = 1)', function () {
      circuit.phasePhaseMaxTargetGates = 1
      circuit.phase('π/2', 1, 3)

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.PhaseGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.PhaseGateElement)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(step.dropzoneAt(1).noConnections)
      assert.isTrue(step.dropzoneAt(2).noConnections)
      assert.isTrue(step.dropzoneAt(3).noConnections)

      assert.deepEqual(circuit.serialize(), [[{type: 'P', angle: 'π/2', targets: [1, 3]}]])
    })

    it('1 P 1 P (data-phase-phase-max-target-gates = 2)', function () {
      circuit.phasePhaseMaxTargetGates = 2
      circuit.phase(1, 3)

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.PhaseGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.PhaseGateElement)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(step.dropzoneAt(1).noConnections)
      assert.isTrue(step.dropzoneAt(2).noConnections)
      assert.isTrue(step.dropzoneAt(3).noConnections)

      assert.deepEqual(circuit.serialize(), [[{type: 'P', targets: [1, 3]}]])
    })

    it('1 P(π/2)-1-P(π/2) (data-phase-phase-max-target-gates = 2)', function () {
      circuit.phasePhaseMaxTargetGates = 2
      circuit.phase('π/2', 1, 3)

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.PhaseGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.PhaseGateElement)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(!step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
      assert.isTrue(step.dropzoneAt(2).connectTop && step.dropzoneAt(2).connectBottom)
      assert.isTrue(step.dropzoneAt(3).connectTop && !step.dropzoneAt(3).connectBottom)

      assert.deepEqual(circuit.serialize(), [[{type: 'P', angle: 'π/2', targets: [1, 3]}]])
    })

    it('1 P(π/2)-1-P(π)-P(π/2) (data-phase-phase-max-target-gates = 2)', function () {
      circuit.phasePhaseMaxTargetGates = 2
      circuit.phase('π/2', 1, 4)
      const piPhase = new window.PhaseGateElement()
      piPhase.angle = 'π'
      circuit.stepAt(0).dropzoneAt(3).put(piPhase)
      circuit.stepAt(0).dispatchEvent(new Event('circuit-step-update', {bubbles: true}))

      const step = circuit.stepAt(0)
      assert.instanceOf(step.dropzoneAt(1).operation, window.PhaseGateElement)
      assert.instanceOf(step.dropzoneAt(3).operation, window.PhaseGateElement)
      assert.instanceOf(step.dropzoneAt(4).operation, window.PhaseGateElement)

      assert.isTrue(step.dropzoneAt(0).noConnections)
      assert.isTrue(!step.dropzoneAt(1).connectTop && step.dropzoneAt(1).connectBottom)
      assert.isTrue(step.dropzoneAt(2).connectTop && step.dropzoneAt(2).connectBottom)
      assert.isTrue(step.dropzoneAt(3).noConnections)
      assert.isTrue(step.dropzoneAt(4).connectTop && !step.dropzoneAt(4).connectBottom)

      assert.deepEqual(circuit.serialize(), [
        [
          {type: 'P', angle: 'π/2', targets: [1, 4]},
          {type: 'P', angle: 'π', targets: [3]}
        ]
      ])
    })
  })
})
