import { Util } from "lib/base"
import { WriteGate } from "lib/editor/gates"
import { describe } from "lib/base"

QUnit.module("WriteGate0", (hooks) => {
  let writeGate: WriteGate

  hooks.beforeEach(() => {
    const fixture = "<div id=\"write-gate\" class=\"write-gate\" data-value=\"0\"></div>"
    document.body.insertAdjacentHTML("afterbegin", fixture)
    const el = document.getElementById("write-gate")
    Util.notNull(el)
    writeGate = WriteGate.create(el)
  })

  hooks.afterEach(() => {
    document.body.removeChild(
      document.getElementById("write-gate") as HTMLElement,
    )
  })

  QUnit.test(".value", (assert) => {
    assert.equal(writeGate.value, 0)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(writeGate.serialize()),
      "{\"type\": \"write\", \"value\": 0}",
    )
  })
})

QUnit.module("WriteGate1", (hooks) => {
  let writeGate: WriteGate

  hooks.beforeEach(() => {
    const fixture = "<div id=\"write-gate\" class=\"write-gate\" data-value=\"1\"></div>"
    document.body.insertAdjacentHTML("afterbegin", fixture)
    const el = document.getElementById("write-gate")
    Util.notNull(el)
    writeGate = WriteGate.create(el)
  })

  hooks.afterEach(() => {
    document.body.removeChild(
      document.getElementById("write-gate") as HTMLElement,
    )
  })

  QUnit.test(".value", (assert) => {
    assert.equal(writeGate.value, 1)
  })

  QUnit.test(".serialize()", (assert) => {
    assert.equal(
      describe(writeGate.serialize()),
      "{\"type\": \"write\", \"value\": 1}",
    )
  })
})
