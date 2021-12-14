function testControlledUSerialization(uName, uType) {
  let circuit

  beforeEach(function () {
    circuit = new window.QuantumCircuitElement()
    circuit.minStepCount = 0
    document.body.append(circuit)
  })

  afterEach(function () {
    document.body.textContent = ''
  })

  it('control = 0, targets = 1', function () {
    circuit[`c${uName}`](0, 1)
    assert.deepEqual(circuit.serialize(), [[{type: uType, targets: [1], controls: [0]}]])
  })

  it('control = 0, targets = [1, 2]', function () {
    circuit[`c${uName}`](0, [1, 2])
    assert.deepEqual(circuit.serialize(), [[{type: uType, targets: [1, 2], controls: [0]}]])
  })

  it('control = [0, 1], targets = 2', function () {
    circuit[`c${uName}`]([0, 1], 2)
    assert.deepEqual(circuit.serialize(), [[{type: uType, targets: [2], controls: [0, 1]}]])
  })

  it('control = [0, 1], targets = [2, 3]', function () {
    circuit[`c${uName}`]([0, 1], [2, 3])
    assert.deepEqual(circuit.serialize(), [[{type: uType, targets: [2, 3], controls: [0, 1]}]])
  })
}

describe('quantum-circuit element', function () {
  describe('serialize', function () {
    let circuit

    beforeEach(function () {
      circuit = new window.QuantumCircuitElement()
      circuit.minStepCount = 0
      document.body.append(circuit)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('empty circuit', function () {
      assert.deepEqual(circuit.serialize(), [])
    })

    describe('H', function () {
      it('targets = 0', function () {
        circuit.h(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'H', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.h(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'H', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.h({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('X', function () {
      it('targets = 0', function () {
        circuit.x(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'X', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.x(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'X', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.x({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('Y', function () {
      it('targets = 0', function () {
        circuit.y(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Y', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.y(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Y', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.y({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('Z', function () {
      it('targets = 0', function () {
        circuit.z(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Z', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.z(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Z', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.z({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('√X', function () {
      it('targets = 0', function () {
        circuit.rnot(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'X^½', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.rnot(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'X^½', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.rnot({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('Rx', function () {
      it('targets = 0', function () {
        circuit.rx(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Rx', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.rx(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Rx', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.rx({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('Ry', function () {
      it('targets = 0', function () {
        circuit.ry(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Ry', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.ry(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Ry', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.ry({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('Rz', function () {
      it('targets = 0', function () {
        circuit.rz(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Rz', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.rz(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Rz', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.rz({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('Bloch', function () {
      it('targets = 0', function () {
        circuit.bloch(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Bloch', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.bloch(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Bloch', targets: [0, 2]}]])
      })
    })

    describe('|0>', function () {
      it('targets = 0', function () {
        circuit.write('0', 0)
        assert.deepEqual(circuit.serialize(), [[{type: '|0>', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.write('0', 0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: '|0>', targets: [0, 2]}]])
      })
    })

    describe('|1>', function () {
      it('targets = 0', function () {
        circuit.write('1', 0)
        assert.deepEqual(circuit.serialize(), [[{type: '|1>', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.write('1', 0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: '|1>', targets: [0, 2]}]])
      })
    })

    describe('Measure', function () {
      it('targets = 0', function () {
        circuit.measure(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'Measure', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.measure(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Measure', targets: [0, 2]}]])
      })
    })

    describe('Control', function () {
      it('targets = 0', function () {
        circuit.control(0)
        assert.deepEqual(circuit.serialize(), [[]])
      })

      it('targets = 0, 1', function () {
        circuit.control(0, 1)
        assert.deepEqual(circuit.serialize(), [[{type: '•', targets: [0, 1]}]])
      })
    })

    describe('Phase', function () {
      it('targets = 0', function () {
        circuit.phase(0)
        assert.deepEqual(circuit.serialize(), [[{type: 'P', targets: [0]}]])
      })

      it('targets = 0, 2', function () {
        circuit.phase(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'P', targets: [0, 2]}]])
      })

      it('disabled', function () {
        circuit.phase({targets: [0], disabled: true})
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('CPhase', function () {
      it('targets = 0 (Φ = π)', function () {
        circuit.phase('π', 0)
        assert.deepEqual(circuit.serialize(), [[{type: 'P', angle: 'π', targets: [0]}]])
      })

      it('targets = 0, 2 (Φ = π)', function () {
        circuit.phase('π', 0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'P', angle: 'π', targets: [0, 2]}]])
      })
    })

    describe('Swap', function () {
      it('targets = 0', function () {
        circuit.swap(0)
        assert.deepEqual(circuit.serialize(), [[]])
      })

      it('targets = 0, 2', function () {
        circuit.swap(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [0, 2]}]])
      })

      it('targets = 0, 2, 3', function () {
        circuit.swap(0, 2, 3)
        assert.deepEqual(circuit.serialize(), [[]])
      })
    })

    describe('ch', function () {
      testControlledUSerialization('h', 'H')
    })

    describe('cnot', function () {
      testControlledUSerialization('not', 'X')
    })

    describe('cx', function () {
      testControlledUSerialization('x', 'X')
    })

    describe('cy', function () {
      testControlledUSerialization('y', 'Y')
    })

    describe('cz', function () {
      testControlledUSerialization('z', 'Z')
    })

    describe('cphase', function () {
      testControlledUSerialization('phase', 'P')
    })

    describe('crnot', function () {
      testControlledUSerialization('rnot', 'X^½')
    })

    describe('crx', function () {
      testControlledUSerialization('rx', 'Rx')
    })

    describe('cry', function () {
      testControlledUSerialization('ry', 'Ry')
    })

    describe('crz', function () {
      testControlledUSerialization('rz', 'Rz')
    })

    describe('cswap', function () {
      it('control = 0, targets = 1', function () {
        circuit.cswap(0, 1)
        assert.deepEqual(circuit.serialize(), [[]])
      })

      it('control = 0, targets = [1, 2]', function () {
        circuit.cswap(0, [1, 2])
        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [1, 2], controls: [0]}]])
      })

      it('control = [0, 1], targets = 2', function () {
        circuit.cswap([0, 1], 2)
        assert.deepEqual(circuit.serialize(), [[]])
      })

      it('control = [0, 1], targets = [2, 3]', function () {
        circuit.cswap([0, 1], [2, 3])
        assert.deepEqual(circuit.serialize(), [[{type: 'Swap', targets: [2, 3], controls: [0, 1]}]])
      })
    })

    describe('cc', function () {
      it('targets = 0', function () {
        circuit.cc(0)
        assert.deepEqual(circuit.serialize(), [[]])
      })

      it('targets = 0, 2', function () {
        circuit.cc(0, 2)
        assert.deepEqual(circuit.serialize(), [[{type: '•', targets: [0, 2]}]])
      })
    })
  })
})
