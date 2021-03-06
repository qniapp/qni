import { Util } from "lib/base"
import { ControlGate } from "lib/editor/gates"
import { describe } from "lib/base"

function controlGateFixture(targets: number[] = []) {
  if (targets.length > 0) {
    return `<div id="control-gate" class="control-gate" data-targets="${targets.join()}"></div>`
  } else {
    return "<div id=\"control-gate\" class=\"control-gate\"></div>"
  }
}

function createControlGateElement(targets: number[] = []): HTMLElement {
  document.body.insertAdjacentHTML("afterbegin", controlGateFixture(targets))
  const el = document.getElementById("control-gate")
  Util.notNull(el)
  return el
}

QUnit.module("ControlGate", (hooks) => {
  let controlGateEl: HTMLElement
  let controlGate: ControlGate

  hooks.beforeEach(() => {
    controlGateEl = createControlGateElement()
    controlGate = ControlGate.create(controlGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(controlGateEl)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(controlGate.serialize()),
      "{\"type\": \"control-gate\", \"targets\": []}",
    )
  })
})

QUnit.module("ControlGate (targets=1,2)", (hooks) => {
  let controlGateEl: HTMLElement
  let controlGate: ControlGate

  hooks.beforeEach(() => {
    controlGateEl = createControlGateElement([1, 2])
    controlGate = ControlGate.create(controlGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(controlGateEl)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(controlGate.serialize()),
      "{\"type\": \"control-gate\", \"targets\": [1, 2]}",
    )
  })
})
