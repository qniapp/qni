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

  QUnit.module("QuantumCircuitElement.h", () => {
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

  QUnit.module("QuantumCircuitElement.x", () => {
    QUnit.test(".x(0)", (assert) => {
      document.body.append(el)
      el.x(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X"')
    })

    QUnit.test(".x(1)", (assert) => {
      document.body.append(el)
      el.x(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
    })

    QUnit.test(".x(0, 1)", (assert) => {
      document.body.append(el)
      el.x(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
    })

    QUnit.test(".x(1, 3)", (assert) => {
      document.body.append(el)
      el.x(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"X"')
    })

    QUnit.test(".x(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.x(-1))
    })

    QUnit.test(".x(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.x(16))
    })
  })

  QUnit.module("QuantumCircuitElement.y", () => {
    QUnit.test(".y(0)", (assert) => {
      document.body.append(el)
      el.y(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Y"')
    })

    QUnit.test(".y(1)", (assert) => {
      document.body.append(el)
      el.y(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Y"')
    })

    QUnit.test(".y(0, 1)", (assert) => {
      document.body.append(el)
      el.y(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Y"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Y"')
    })

    QUnit.test(".y(1, 3)", (assert) => {
      document.body.append(el)
      el.y(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Y"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Y"')
    })

    QUnit.test(".y(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.y(-1))
    })

    QUnit.test(".y(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.y(16))
    })
  })

  QUnit.module("z", () => {
    QUnit.test(".z(0)", (assert) => {
      document.body.append(el)
      el.z(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Z"')
    })

    QUnit.test(".z(1)", (assert) => {
      document.body.append(el)
      el.z(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Z"')
    })

    QUnit.test(".z(0, 1)", (assert) => {
      document.body.append(el)
      el.z(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Z"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Z"')
    })

    QUnit.test(".z(1, 3)", (assert) => {
      document.body.append(el)
      el.z(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Z"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Z"')
    })

    QUnit.test(".z(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.z(-1))
    })

    QUnit.test(".z(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.z(16))
    })
  })

  QUnit.module("phase", () => {
    QUnit.test(".phase(0.123, 0)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(0.123, 1)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(0.123, 0, 1)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"P(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(1, 3)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"P(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(0.123, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.phase(0.123, -1))
    })

    QUnit.test(".phase(0.123, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.phase(0.123, 16))
    })
  })

  QUnit.module("rnot", () => {
    QUnit.test(".rnot(0)", (assert) => {
      document.body.append(el)
      el.rnot(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(1)", (assert) => {
      document.body.append(el)
      el.rnot(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(0, 1)", (assert) => {
      document.body.append(el)
      el.rnot(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X^½"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(1, 3)", (assert) => {
      document.body.append(el)
      el.rnot(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X^½"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rnot(-1))
    })

    QUnit.test(".rnot(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rnot(16))
    })
  })

  QUnit.module("rx", () => {
    QUnit.test(".rx(0.123, 0)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, 1)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, 0, 1)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Rx(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, 1, 3)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rx(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rx(0.123, -1))
    })

    QUnit.test(".rx(0.123, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rx(0.123, 16))
    })
  })
})
