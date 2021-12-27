export function testControlledU(uName, uClass) {
  let circuit

  beforeEach(function () {
    circuit = new window.QuantumCircuitElement()
    circuit.minStepCount = 0
    document.body.append(circuit)
  })

  afterEach(function () {
    document.body.textContent = ''
  })

  it(`c = 0, ${uName} = 2`, function () {
    circuit[`c${uName}`](0, 2)

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 3)

    const controlGate = circuit.stepAt(0).dropzoneAt(0).operation
    assert.instanceOf(controlGate, window.ControlGateElement)
    assert.isFalse(controlGate.dropzone.connectTop)
    assert.isTrue(controlGate.dropzone.connectBottom)

    const dropzoneWire1 = circuit.stepAt(0).dropzoneAt(1)
    assert.isNull(dropzoneWire1.operation)
    assert.isTrue(dropzoneWire1.connectTop)
    assert.isTrue(dropzoneWire1.connectBottom)

    const targetGate = circuit.stepAt(0).dropzoneAt(2).operation
    assert.instanceOf(targetGate, uClass)
    assert.isTrue(targetGate.dropzone.connectTop)
    assert.isFalse(targetGate.dropzone.connectBottom)
  })

  it(`c = 0, ${uName} = 2, 3`, function () {
    circuit[`c${uName}`](0, [2, 3])

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 4)

    const controlGate = circuit.stepAt(0).dropzoneAt(0).operation
    assert.instanceOf(controlGate, window.ControlGateElement)
    assert.isFalse(controlGate.dropzone.connectTop)
    assert.isTrue(controlGate.dropzone.connectBottom)

    const dropzoneWire1 = circuit.stepAt(0).dropzoneAt(1)
    assert.isNull(dropzoneWire1.operation)
    assert.isTrue(dropzoneWire1.connectTop)
    assert.isTrue(dropzoneWire1.connectBottom)

    const targetGateA = circuit.stepAt(0).dropzoneAt(2).operation
    assert.instanceOf(targetGateA, uClass)
    assert.isTrue(targetGateA.dropzone.connectTop)
    assert.isTrue(targetGateA.dropzone.connectBottom)

    const targetGateB = circuit.stepAt(0).dropzoneAt(3).operation
    assert.instanceOf(targetGateB, uClass)
    assert.isTrue(targetGateB.dropzone.connectTop)
    assert.isFalse(targetGateB.dropzone.connectBottom)
  })

  it(`c = [0, 2], ${uName} = 3`, function () {
    circuit[`c${uName}`]([0, 2], 3)

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 4)

    const controlGateA = circuit.stepAt(0).dropzoneAt(0).operation
    assert.instanceOf(controlGateA, window.ControlGateElement)
    assert.isFalse(controlGateA.dropzone.connectTop)
    assert.isTrue(controlGateA.dropzone.connectBottom)

    const dropzoneWire1 = circuit.stepAt(0).dropzoneAt(1)
    assert.isNull(dropzoneWire1.operation)
    assert.isTrue(dropzoneWire1.connectTop)
    assert.isTrue(dropzoneWire1.connectBottom)

    const controlGateB = circuit.stepAt(0).dropzoneAt(2).operation
    assert.instanceOf(controlGateB, window.ControlGateElement)
    assert.isTrue(controlGateB.dropzone.connectTop)
    assert.isTrue(controlGateB.dropzone.connectBottom)

    const targetGate = circuit.stepAt(0).dropzoneAt(3).operation
    assert.instanceOf(targetGate, uClass)
    assert.isTrue(targetGate.dropzone.connectTop)
    assert.isFalse(targetGate.dropzone.connectBottom)
  })

  it(`c = [0, 2], ${uName} = [3, 4]`, function () {
    circuit[`c${uName}`]([0, 2], [3, 4])

    assert.equal(circuit.steps.length, 1)
    assert.equal(circuit.stepAt(0).dropzones.length, 5)

    const controlGateA = circuit.stepAt(0).dropzoneAt(0).operation
    assert.instanceOf(controlGateA, window.ControlGateElement)
    assert.isFalse(controlGateA.dropzone.connectTop)
    assert.isTrue(controlGateA.dropzone.connectBottom)

    const dropzoneWire1 = circuit.stepAt(0).dropzoneAt(1)
    assert.isNull(dropzoneWire1.operation)
    assert.isTrue(dropzoneWire1.connectTop)
    assert.isTrue(dropzoneWire1.connectBottom)

    const controlGateB = circuit.stepAt(0).dropzoneAt(2).operation
    assert.instanceOf(controlGateB, window.ControlGateElement)
    assert.isTrue(controlGateB.dropzone.connectTop)
    assert.isTrue(controlGateB.dropzone.connectBottom)

    const targetGateA = circuit.stepAt(0).dropzoneAt(3).operation
    assert.instanceOf(targetGateA, uClass)
    assert.isTrue(targetGateA.dropzone.connectTop)
    assert.isTrue(targetGateA.dropzone.connectBottom)

    const targetGateB = circuit.stepAt(0).dropzoneAt(4).operation
    assert.instanceOf(targetGateB, uClass)
    assert.isTrue(targetGateB.dropzone.connectTop)
    assert.isFalse(targetGateB.dropzone.connectBottom)
  })
}
