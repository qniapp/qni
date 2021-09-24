import { Util, describe } from "lib/base"
import { WriteGate } from "lib/instructions"

function writeGateFixture(value: 0 | 1) {
  // eslint-disable-next-line github/unescaped-html-literal
  return `<div id="write-gate" class="write-gate" data-value="${value}"></div>`
}

function createWriteGateElement(value: 0 | 1): HTMLElement {
  document.body.insertAdjacentHTML("afterbegin", writeGateFixture(value))
  const el = document.getElementById("write-gate")
  Util.notNull(el)
  return el
}

QUnit.module("WriteGate0", (hooks) => {
  let writeGateEl: HTMLElement
  let writeGate: WriteGate

  hooks.beforeEach(() => {
    writeGateEl = createWriteGateElement(0)
    writeGate = new WriteGate(writeGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(writeGateEl)
  })

  QUnit.test(".value", (assert) => {
    assert.equal(writeGate.value, 0)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(writeGate.serialize()),
      '{"type": "Write", "value": 0}',
    )
  })
})

QUnit.module("WriteGate1", (hooks) => {
  let writeGateEl: HTMLElement
  let writeGate: WriteGate

  hooks.beforeEach(() => {
    writeGateEl = createWriteGateElement(1)
    writeGate = new WriteGate(writeGateEl)
  })

  hooks.afterEach(() => {
    document.body.removeChild(writeGateEl)
  })

  QUnit.test(".value", (assert) => {
    assert.equal(writeGate.value, 1)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(writeGate.serialize()),
      '{"type": "Write", "value": 1}',
    )
  })
})
