import { IGate } from "lib/editor/gates"
import { describe } from "lib/base"

QUnit.module("IGate", () => {
  QUnit.test(".serialize()", (assert) => {
    const iGate = new IGate()
    assert.equal(describe(iGate.serialize()), "{\"type\": \"i-gate\"}")
  })
})
