import "components"
import { ControlGateElement } from "control_gate_component/controlGateElement"

QUnit.module("ControlGate", (hooks) => {
  let el: ControlGateElement

  hooks.beforeEach(() => {
    el = document.createElement("control-gate") as ControlGateElement
  })

  hooks.afterEach(() => {
    document.body.removeChild(el)
  })

  QUnit.test(".disable()", (assert) => {
    document.body.append(el)
    el.disable()
    assert.true(el.hasAttribute("data-disabled"))
  })

  QUnit.test(".enable()", (assert) => {
    document.body.append(el)
    el.disable()
    el.enable()
    assert.false(el.hasAttribute("data-disabled"))
  })

  QUnit.test(".toJson()", (assert) => {
    document.body.append(el)
    assert.equal('"•"', el.toJson())
  })
})
