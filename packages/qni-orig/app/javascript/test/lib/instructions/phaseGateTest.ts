import { describe, Util } from "lib/base"
import { isPhiable, PhaseGate } from "lib/instructions"

function phaseGateFixture(options: { [key: string]: string }) {
  return `<div id="phase-gate" class="phase-gate" data-phi="${options.phi}"></div>`
}

function createPhaseGateElement(
  options: { [key: string]: string } = {},
): HTMLElement {
  document.body.insertAdjacentHTML("afterbegin", phaseGateFixture(options))
  const el = document.getElementById("phase-gate")
  Util.notNull(el)
  return el
}

QUnit.module("PhaseGate", (hooks) => {
  let phaseGateEl: HTMLElement
  let phaseGate: PhaseGate

  hooks.beforeEach(() => {
    phaseGateEl = createPhaseGateElement({ phi: "pi/2" })
    phaseGate = new PhaseGate(phaseGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(phaseGateEl)
  })

  QUnit.test("isPhiable", (assert) => {
    assert.ok(isPhiable(phaseGate))
  })

  QUnit.test(".phi", (assert) => {
    assert.equal(phaseGate.phi, "pi/2")
  })

  QUnit.test(".phi=", (assert) => {
    phaseGate.phi = "pi/4"
    assert.equal(phaseGate.phi, "pi/4")
  })

  QUnit.test(".angle", (assert) => {
    assert.equal(phaseGate.angle, "pi/2")
  })

  QUnit.test(".angle=", (assert) => {
    phaseGate.angle = "pi/4"
    assert.equal(phaseGate.angle, "pi/4")
  })

  QUnit.test(".radian", (assert) => {
    assert.equal(phaseGate.radian, Math.PI / 2)
  })

  QUnit.test(".controls", (assert) => {
    assert.equates(phaseGate.controls, [])

    phaseGate.controls = [3, 1, 2]
    assert.equates(phaseGate.controls, [1, 2, 3])
    assert.equal(
      describe(phaseGate.serialize()),
      '{"type": "P", "phi": "pi/2", "controls": [1, 2, 3], "targets": []}',
    )
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(phaseGate.serialize()),
      '{"type": "P", "phi": "pi/2", "controls": [], "targets": []}',
    )
  })

  QUnit.test(".toJson()", (assert) => {
    assert.equal(phaseGate.toJson(), '"P(π_2)"')
  })
})
