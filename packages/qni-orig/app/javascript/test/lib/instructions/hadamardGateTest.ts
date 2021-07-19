import {
  HadamardGate,
  isConnectable,
  isControllable,
  isDisableable,
  isIfable,
} from "lib/instructions"
import { Util } from "lib/base"
import { describe } from "lib/base"

function hadamardGateFixture(options: {
  [key: string]: string | number[] | boolean | undefined
}) {
  if (options.if && typeof options.if === "string") {
    return `<div id="hadamard-gate" class="hadamard-gate" data-if="${options.if}"></div>`
  } else if (
    options.controls &&
    options.controls instanceof Array &&
    options.controls.length > 0
  ) {
    return `<div id="hadamard-gate" class="hadamard-gate" data-controls="${options.controls.join(
      ",",
    )}"></div>`
  } else if (options.disabled) {
    return '<div id="hadamard-gate" class="hadamard-gate gate--disabled"></div>'
  } else {
    return '<div id="hadamard-gate" class="hadamard-gate"></div>'
  }
}

function createHadamardGateElement(
  options: { [key: string]: string | number[] | boolean | undefined } = {},
): HTMLElement {
  document.body.insertAdjacentHTML("afterbegin", hadamardGateFixture(options))
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

  QUnit.test(".if", (assert) => {
    assert.equal(hadamardGate.if, null)
  })

  QUnit.test('.if = "alice_h"', (assert) => {
    hadamardGate.if = "alice_h"
    assert.equates(hadamardGate.if, "alice_h")
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [], "if": "alice_h"}',
    )
    assert.equal(hadamardGate.toJson(), '"H<alice_h"')
  })

  QUnit.test(".if = (invalid variable name)", (assert) => {
    assert.raises(() => {
      hadamardGate.if = "$abc"
    })
    assert.raises(() => {
      hadamardGate.if = "_abc"
    })
    assert.raises(() => {
      hadamardGate.if = "a bc"
    })
    assert.raises(() => {
      hadamardGate.if = "a$bc"
    })
    assert.raises(() => {
      hadamardGate.if = "たかみや"
    })
  })

  QUnit.test(".controls", (assert) => {
    assert.equates(hadamardGate.controls, [])

    hadamardGate.controls = [3, 1, 2]
    assert.equates(hadamardGate.controls, [1, 2, 3])
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [1, 2, 3], "if": null}',
    )
  })

  QUnit.test(".disabled", (assert) => {
    assert.equal(hadamardGate.disabled, false)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [], "if": null}',
    )
  })

  QUnit.test(".toJson()", (assert) => {
    assert.equal(hadamardGate.toJson(), '"H"')
  })
})

QUnit.module("HadamardGate (if alice_h)", (hooks) => {
  let hadamardGateEl: HTMLElement
  let hadamardGate: HadamardGate

  hooks.beforeEach(() => {
    hadamardGateEl = createHadamardGateElement({ if: "alice_h" })
    hadamardGate = new HadamardGate(hadamardGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(hadamardGateEl)
  })

  QUnit.test("isIfable", (assert) => {
    assert.equal(isIfable(hadamardGate), true)
  })

  QUnit.test(".if", (assert) => {
    assert.equal(hadamardGate.if, "alice_h")
  })

  QUnit.test(".if = null", (assert) => {
    hadamardGate.if = null
    assert.equates(hadamardGate.if, null)
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [], "if": null}',
    )
    assert.equal(hadamardGate.toJson(), '"H"')
  })

  QUnit.test("isControllable", (assert) => {
    assert.equal(isControllable(hadamardGate), true)
  })

  QUnit.test("isDisableable", (assert) => {
    assert.equal(isDisableable(hadamardGate), true)
  })

  QUnit.test(".disabled", (assert) => {
    assert.equal(hadamardGate.disabled, false)
  })

  QUnit.test("isConnectable", (assert) => {
    assert.equal(isConnectable(hadamardGate), true)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [], "if": "alice_h"}',
    )
  })

  QUnit.test(".toJson()", (assert) => {
    assert.equal(hadamardGate.toJson(), '"H<alice_h"')
  })
})

QUnit.module("HadamardGate (controls = 3,1,2)", (hooks) => {
  let hadamardGateEl: HTMLElement
  let hadamardGate: HadamardGate

  hooks.beforeEach(() => {
    hadamardGateEl = createHadamardGateElement({ controls: [3, 1, 2] })
    hadamardGate = new HadamardGate(hadamardGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(hadamardGateEl)
  })

  QUnit.test(".controls", (assert) => {
    assert.equates(hadamardGate.controls, [1, 2, 3])
  })

  QUnit.test(".controls = [8, 1, 4]", (assert) => {
    hadamardGate.controls = [8, 1, 4]
    assert.equates(hadamardGate.controls, [1, 4, 8])
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [1, 4, 8], "if": null}',
    )
  })

  QUnit.test(".if", (assert) => {
    assert.equal(hadamardGate.if, null)
  })

  QUnit.test(".disabled", (assert) => {
    assert.equal(hadamardGate.disabled, false)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [1, 2, 3], "if": null}',
    )
  })

  QUnit.test(".toJson()", (assert) => {
    assert.equal(hadamardGate.toJson(), '"H"')
  })
})

QUnit.module("HadamardGate (disabled)", (hooks) => {
  let hadamardGateEl: HTMLElement
  let hadamardGate: HadamardGate

  hooks.beforeEach(() => {
    hadamardGateEl = createHadamardGateElement({ disabled: true })
    hadamardGate = new HadamardGate(hadamardGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(hadamardGateEl)
  })

  QUnit.test(".disabled", (assert) => {
    assert.equal(hadamardGate.disabled, true)
  })

  QUnit.test(".disabled = false", (assert) => {
    hadamardGate.disabled = false
    assert.equal(hadamardGate.disabled, false)
  })

  QUnit.test(".if", (assert) => {
    assert.equal(hadamardGate.if, null)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(hadamardGate.serialize()),
      '{"type": "H", "controls": [], "if": null}',
    )
  })

  QUnit.test(".toJson()", (assert) => {
    assert.equal(hadamardGate.toJson(), '"H"')
  })
})
