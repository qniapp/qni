import {assert} from '@esm-bundle/chai'

export function testSimpleCircuitApi(uName, uClass) {
  let circuit

  beforeEach(function () {
    circuit = new window.QuantumCircuitElement()
    circuit.minStepCount = 0
    document.body.append(circuit)
  })

  afterEach(function () {
    document.body.textContent = ''
  })

  it('targets = 0', function () {
    circuit[uName](0)

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 1)
    assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, uClass)
  })

  it('targets = 1', function () {
    circuit[uName](1)

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 2)
    assert.isNull(circuit.stepAt(0).dropzoneAt(0).operation)
    assert.instanceOf(circuit.stepAt(0).dropzones[1].operation, uClass)
  })

  it('targets = 0, 2', function () {
    circuit[uName](0, 2)

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 3)
    assert.instanceOf(circuit.stepAt(0).dropzoneAt(0).operation, uClass)
    assert.isNull(circuit.stepAt(0).dropzoneAt(1).operation)
    assert.instanceOf(circuit.stepAt(0).dropzoneAt(2).operation, uClass)
  })
}
