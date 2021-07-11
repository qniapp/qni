import { Util } from "lib/base"
import { HadamardGate } from "lib/editor/gates"
import { describe } from "lib/base"

function hadamardGateFixture(dataIf: string | undefined) {
  if (dataIf) {
    return `<div id="hadamard-gate" class="hadamard-gate" data-if="${dataIf}"></div>`
  } else {
    return "<div id=\"hadamard-gate\" class=\"hadamard-gate\"></div>"
  }
}

function createHadamardGateElement(dataIf?: string): HTMLElement {
  document.body.insertAdjacentHTML("afterbegin", hadamardGateFixture(dataIf))
  const el = document.getElementById("hadamard-gate")
  Util.notNull(el)
  return el
}

QUnit.module("HadamardGate", (hooks) => {
  let hadamardGateEl: HTMLElement
  let hadamardGate: HadamardGate

  hooks.beforeEach(() => {
    hadamardGateEl = createHadamardGateElement()
    hadamardGate = new HadamardGate(hadamardGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(hadamardGateEl)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(hadamardGate.serialize()),
      "{\"type\": \"H\", \"controls\": [], \"if\": null}",
    )
  })
})

QUnit.module("HadamardGate (if alice_h)", (hooks) => {
  let hadamardGateEl: HTMLElement
  let hadamardGate: HadamardGate

  hooks.beforeEach(() => {
    hadamardGateEl = createHadamardGateElement("alice_h")
    hadamardGate = new HadamardGate(hadamardGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(hadamardGateEl)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(hadamardGate.serialize()),
      "{\"type\": \"H\", \"controls\": [], \"if\": \"alice_h\"}",
    )
  })
})
