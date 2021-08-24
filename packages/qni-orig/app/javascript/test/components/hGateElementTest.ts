import "components"
import { HGateElement } from "h_gate_component/hGateElement"
import { ReferenceElement } from "tippy.js"

QUnit.module("HGate", (hooks) => {
  let el: HGateElement

  hooks.beforeEach(() => {
    el = document.createElement("h-gate") as HGateElement
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

  QUnit.test(".showHelp()", (assert) => {
    document.body.append(el)
    el.showHelp()

    const popup = (el as ReferenceElement)._tippy
    assert.true(popup === undefined)
  })

  QUnit.test(".showHelp() with content", (assert) => {
    document.body.append(el)
    el.textContent = "HELP"
    el.showHelp()

    const popup = (el as ReferenceElement)._tippy
    assert.true(popup !== undefined)
  })

  QUnit.test(".toJson()", (assert) => {
    document.body.append(el)

    assert.equal('"H"', el.toJson())
  })
})
