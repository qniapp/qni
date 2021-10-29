import { CircuitStepElement } from "components/circuitStepElement"
import { ControlGateElement } from "components/controlGateElement"
import { HGateElement } from "components/hGateElement"
import { PhaseGateElement } from "components/phaseGateElement"
import { RnotGateElement } from "components/rnotGateElement"
import { RxGateElement } from "components/rxGateElement"
import { RyGateElement } from "components/ryGateElement"
import { RzGateElement } from "components/rzGateElement"
import { SwapGateElement } from "components/swapGateElement"
import { XGateElement } from "components/xGateElement"
import { YGateElement } from "components/yGateElement"
import { ZGateElement } from "components/zGateElement"

QUnit.module("CircuitStep", () => {
  let step: CircuitStepElement

  QUnit.module("Controlled-H", (hooks) => {
    let c: ControlGateElement
    let h: HGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      h = document.createElement("h-gate") as HGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,H", (assert) => {
      step.appendOperation(c)
      step.appendOperation(h)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(h.wireTop)
    })

    QUnit.test("should connect H,•", (assert) => {
      step.appendOperation(h)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(h.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,H", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(h)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(h.wireTop)
    })

    QUnit.test("should connect H,1,•", (assert) => {
      step.appendOperation(h)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(h.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-H", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let h: HGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      h = document.createElement("h-gate") as HGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,H", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(h)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(h.wireTop)
    })

    QUnit.test("should connect •,H,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(h)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(h.wireTop)
      assert.true(h.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect H,•,•", (assert) => {
      step.appendOperation(h)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(h.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-X", (hooks) => {
    let c: ControlGateElement
    let x: XGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      x = document.createElement("x-gate") as XGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,X", (assert) => {
      step.appendOperation(c)
      step.appendOperation(x)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(x.wireTop)
    })

    QUnit.test("should connect X,•", (assert) => {
      step.appendOperation(x)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(x.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,X", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(x)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(x.wireTop)
    })

    QUnit.test("should connect X,1,•", (assert) => {
      step.appendOperation(x)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(x.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-X", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let x: XGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      x = document.createElement("x-gate") as XGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,X", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(x)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(x.wireTop)
    })

    QUnit.test("should connect •,X,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(x)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(x.wireTop)
      assert.true(x.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect X,•,•", (assert) => {
      step.appendOperation(x)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(x.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-Y", (hooks) => {
    let c: ControlGateElement
    let y: YGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      y = document.createElement("y-gate") as YGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Y", (assert) => {
      step.appendOperation(c)
      step.appendOperation(y)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(y.wireTop)
    })

    QUnit.test("should connect Y,•", (assert) => {
      step.appendOperation(y)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(y.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Y", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(y)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(y.wireTop)
    })

    QUnit.test("should connect Y,1,•", (assert) => {
      step.appendOperation(y)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(y.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-Y", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let y: YGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      y = document.createElement("y-gate") as YGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,Y", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(y)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(y.wireTop)
    })

    QUnit.test("should connect •,Y,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(y)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(y.wireTop)
      assert.true(y.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Y,•,•", (assert) => {
      step.appendOperation(y)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(y.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-Z", (hooks) => {
    let c: ControlGateElement
    let z: ZGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      z = document.createElement("z-gate") as ZGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Z", (assert) => {
      step.appendOperation(c)
      step.appendOperation(z)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(z.wireTop)
    })

    QUnit.test("should connect Z,•", (assert) => {
      step.appendOperation(z)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(z.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Z", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(z)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(z.wireTop)
    })

    QUnit.test("should connect Z,1,•", (assert) => {
      step.appendOperation(z)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(z.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-Z", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let z: ZGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      z = document.createElement("z-gate") as ZGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,Z", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(z)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(z.wireTop)
    })

    QUnit.test("should connect •,Z,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(z)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(z.wireTop)
      assert.true(z.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Z,•,•", (assert) => {
      step.appendOperation(z)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(z.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-PhaseShift", (hooks) => {
    let c: ControlGateElement
    let p: PhaseGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      p = document.createElement("phase-gate") as PhaseGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,P", (assert) => {
      step.appendOperation(c)
      step.appendOperation(p)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(p.wireTop)
    })

    QUnit.test("should connect P,•", (assert) => {
      step.appendOperation(p)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(p.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,P", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(p)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(p.wireTop)
    })

    QUnit.test("should connect P,1,•", (assert) => {
      step.appendOperation(p)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(p.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-PhaseShift", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let p: PhaseGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      p = document.createElement("phase-gate") as PhaseGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,P", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(p)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(p.wireTop)
    })

    QUnit.test("should connect •,P,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(p)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(p.wireTop)
      assert.true(p.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect P,•,•", (assert) => {
      step.appendOperation(p)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(p.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-√X", (hooks) => {
    let c: ControlGateElement
    let rnot: RnotGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      rnot = document.createElement("rnot-gate") as RnotGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,X^½", (assert) => {
      step.appendOperation(c)
      step.appendOperation(rnot)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(rnot.wireTop)
    })

    QUnit.test("should connect X^½,•", (assert) => {
      step.appendOperation(rnot)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(rnot.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,X^½", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(rnot)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(rnot.wireTop)
    })

    QUnit.test("should connect X^½,1,•", (assert) => {
      step.appendOperation(rnot)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(rnot.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-√X", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let rnot: RnotGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      rnot = document.createElement("rnot-gate") as RnotGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,X^½", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(rnot)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(rnot.wireTop)
    })

    QUnit.test("should connect •,X^½,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(rnot)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(rnot.wireTop)
      assert.true(rnot.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect X^½,•,•", (assert) => {
      step.appendOperation(rnot)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(rnot.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-Rx", (hooks) => {
    let c: ControlGateElement
    let rx: RxGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      rx = document.createElement("rx-gate") as RxGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Rx", (assert) => {
      step.appendOperation(c)
      step.appendOperation(rx)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(rx.wireTop)
    })

    QUnit.test("should connect Rx,•", (assert) => {
      step.appendOperation(rx)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(rx.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Rx", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(rx)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(rx.wireTop)
    })

    QUnit.test("should connect Rx,1,•", (assert) => {
      step.appendOperation(rx)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(rx.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-Rx", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let rx: RxGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      rx = document.createElement("rx-gate") as RxGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,Rx", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(rx)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(rx.wireTop)
    })

    QUnit.test("should connect •,Rx,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(rx)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(rx.wireTop)
      assert.true(rx.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Rx,•,•", (assert) => {
      step.appendOperation(rx)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(rx.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-Ry", (hooks) => {
    let c: ControlGateElement
    let ry: RyGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      ry = document.createElement("ry-gate") as RyGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Ry", (assert) => {
      step.appendOperation(c)
      step.appendOperation(ry)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(ry.wireTop)
    })

    QUnit.test("should connect Ry,•", (assert) => {
      step.appendOperation(ry)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(ry.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Ry", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(ry)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(ry.wireTop)
    })

    QUnit.test("should connect Ry,1,•", (assert) => {
      step.appendOperation(ry)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(ry.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-Ry", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let ry: RyGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      ry = document.createElement("ry-gate") as RyGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,Ry", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(ry)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(ry.wireTop)
    })

    QUnit.test("should connect •,Ry,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(ry)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(ry.wireTop)
      assert.true(ry.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Ry,•,•", (assert) => {
      step.appendOperation(ry)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(ry.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-Rz", (hooks) => {
    let c: ControlGateElement
    let rz: RzGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      rz = document.createElement("rz-gate") as RzGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Rz", (assert) => {
      step.appendOperation(c)
      step.appendOperation(rz)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(rz.wireTop)
    })

    QUnit.test("should connect Rz,•", (assert) => {
      step.appendOperation(rz)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(rz.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Rz", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(rz)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(rz.wireTop)
    })

    QUnit.test("should connect Rz,1,•", (assert) => {
      step.appendOperation(rz)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(rz.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-Rz", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let rz: RzGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      rz = document.createElement("rz-gate") as RzGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,Rz", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(rz)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(rz.wireTop)
    })

    QUnit.test("should connect •,Rz,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(rz)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(rz.wireTop)
      assert.true(rz.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Rz,•,•", (assert) => {
      step.appendOperation(rz)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(rz.wireBottom)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("CZ", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let c3: ControlGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      c3 = document.createElement("control-gate") as ControlGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should not connect •", (assert) => {
      step.appendOperation(c1)
      step.updateConnections()

      assert.false(c1.wireTop)
      assert.false(c1.wireTop)
      assert.true(c1.disabled)
    })

    QUnit.test("should connect •,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect •,1,•", (assert) => {
      step.appendOperation(c1)
      const dropzone = step.appendDropzone()
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect •,1,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(c3)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(c3.wireTop)
    })
  })

  QUnit.module("CPHASE", (hooks) => {
    let p1: PhaseGateElement
    let p2: PhaseGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      p1 = document.createElement("phase-gate") as PhaseGateElement
      p2 = document.createElement("phase-gate") as PhaseGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect P('π/2'),P('π/2')", (assert) => {
      p1.phi = "π/2"
      p2.phi = "π/2"
      step.appendOperation(p1)
      step.appendOperation(p2)
      step.updateConnections()

      assert.true(p1.wireBottom)
      assert.true(p2.wireTop)
    })

    QUnit.test("should connect P('π/2'),1,P('π/2')", (assert) => {
      p1.phi = "π/2"
      p2.phi = "π/2"
      step.appendOperation(p1)
      const dropzone = step.appendDropzone()
      step.appendOperation(p2)
      step.updateConnections()

      assert.true(p1.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(p2.wireTop)
    })

    QUnit.test("should not connect P('π/2'),1,P('π/4')", (assert) => {
      p1.phi = "π/2"
      p2.phi = "π/4"
      step.appendOperation(p1)
      const dropzone = step.appendDropzone()
      step.appendOperation(p2)
      step.updateConnections()

      assert.false(p1.wireBottom)
      assert.false(dropzone.wireTop)
      assert.false(dropzone.wireBottom)
      assert.false(p2.wireTop)
    })
  })

  QUnit.module("Swap,Swap", (hooks) => {
    let s1: SwapGateElement
    let s2: SwapGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      s1 = document.createElement("swap-gate") as SwapGateElement
      s2 = document.createElement("swap-gate") as SwapGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect Swap,Swap", (assert) => {
      step.appendOperation(s1)
      step.appendOperation(s2)
      step.updateConnections()

      assert.true(s1.wireBottom)
      assert.true(s2.wireTop)
    })

    QUnit.test("should connect Swap,1,Swap", (assert) => {
      step.appendOperation(s1)
      const dropzone = step.appendDropzone()
      step.appendOperation(s2)
      step.updateConnections()

      assert.true(s1.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(s2.wireTop)
    })
  })

  QUnit.module("Controlled-Swap", (hooks) => {
    let c: ControlGateElement
    let swap: SwapGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      swap = document.createElement("swap-gate") as SwapGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Swap", (assert) => {
      step.appendOperation(c)
      step.appendOperation(swap)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(swap.wireTop)
      assert.true(swap.disabled)
    })

    QUnit.test("should connect Swap,•", (assert) => {
      step.appendOperation(swap)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(swap.wireBottom)
      assert.true(swap.disabled)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Swap", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(swap)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(swap.wireTop)
      assert.true(swap.disabled)
    })

    QUnit.test("should connect Swap,1,•", (assert) => {
      step.appendOperation(swap)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)
      step.updateConnections()

      assert.true(swap.wireBottom)
      assert.true(swap.disabled)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c.wireTop)
    })
  })

  QUnit.module("Controlled-Controlled-Swap", (hooks) => {
    let c1: ControlGateElement
    let c2: ControlGateElement
    let swap: SwapGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c1 = document.createElement("control-gate") as ControlGateElement
      c2 = document.createElement("control-gate") as ControlGateElement
      swap = document.createElement("swap-gate") as SwapGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,•,Swap", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(swap)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(swap.wireTop)
      assert.true(swap.disabled)
    })

    QUnit.test("should connect •,Swap,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(swap)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(c1.wireBottom)
      assert.true(swap.wireTop)
      assert.true(swap.wireBottom)
      assert.true(swap.disabled)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Swap,•,•", (assert) => {
      step.appendOperation(swap)
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.updateConnections()

      assert.true(swap.wireBottom)
      assert.true(swap.disabled)
      assert.true(c1.wireTop)
      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })
  })

  QUnit.module("Controlled-Swap-Swap", (hooks) => {
    let c: ControlGateElement
    let swap1: SwapGateElement
    let swap2: SwapGateElement

    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      c = document.createElement("control-gate") as ControlGateElement
      swap1 = document.createElement("swap-gate") as SwapGateElement
      swap2 = document.createElement("swap-gate") as SwapGateElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should connect •,Swap,Swap", (assert) => {
      step.appendOperation(c)
      step.appendOperation(swap1)
      step.appendOperation(swap2)
      step.updateConnections()

      assert.true(c.wireBottom)
      assert.true(swap1.wireTop)
      assert.true(swap1.wireBottom)
      assert.true(swap1.enabled)
      assert.true(swap2.wireTop)
      assert.true(swap2.enabled)
    })

    QUnit.test("should connect Swap,•,Swap", (assert) => {
      step.appendOperation(swap1)
      step.appendOperation(c)
      step.appendOperation(swap2)
      step.updateConnections()

      assert.true(swap1.wireBottom)
      assert.true(swap1.enabled)
      assert.true(c.wireTop)
      assert.true(c.wireBottom)
      assert.true(swap2.wireTop)
      assert.true(swap2.enabled)
    })

    QUnit.test("should connect Swap,Swap,•", (assert) => {
      step.appendOperation(swap1)
      step.appendOperation(swap2)
      step.appendOperation(c)
      step.updateConnections()

      assert.true(swap1.wireBottom)
      assert.true(swap1.enabled)
      assert.true(swap2.wireTop)
      assert.true(swap2.wireBottom)
      assert.true(swap2.enabled)
      assert.true(c.wireTop)
    })
  })
})
