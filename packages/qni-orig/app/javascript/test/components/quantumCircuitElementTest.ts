import "components"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"

QUnit.module("QuantumCircuitElement", (hooks) => {
  let el: QuantumCircuitElement

  hooks.beforeEach(() => {
    el = document.createElement("quantum-circuit") as QuantumCircuitElement
  })

  hooks.afterEach(() => {
    document.body.removeChild(el)
  })

  QUnit.test(".h(0)", (assert) => {
    document.body.append(el)
    el.h(0)

    assert.equal(el.circuitSteps.length, 1)
    assert.equal(el.circuitSteps[0].dropzones.length, 1)
    assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"H"')
  })

  QUnit.test(".h(1)", (assert) => {
    document.body.append(el)
    el.h(1)

    assert.equal(el.circuitSteps.length, 1)
    assert.equal(el.circuitSteps[0].dropzones.length, 2)
    assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
    assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"H"')
  })

  QUnit.test(".h(0, 1)", (assert) => {
    document.body.append(el)
    el.h(0, 1)

    assert.equal(el.circuitSteps.length, 1)
    assert.equal(el.circuitSteps[0].dropzones.length, 2)
    assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"H"')
    assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"H"')
  })

  QUnit.test(".h(1, 3)", (assert) => {
    document.body.append(el)
    el.h(1, 3)

    assert.equal(el.circuitSteps.length, 1)
    assert.equal(el.circuitSteps[0].dropzones.length, 4)
    assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
    assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"H"')
    assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
    assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"H"')
  })

  QUnit.test(".h(-1)", (assert) => {
    document.body.append(el)

    assert.throws(() => el.h(-1))
  })

  QUnit.test(".h(16)", (assert) => {
    document.body.append(el)

    assert.throws(() => el.h(16))
  })
})
