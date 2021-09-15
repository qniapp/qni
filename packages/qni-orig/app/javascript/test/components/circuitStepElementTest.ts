import { CircuitStepElement } from "circuit_step_component/circuitStepElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { HGateElement } from "h_gate_component/hGateElement"
import { PhaseGateElement } from "phase_gate_component/phaseGateElement"
import { RnotGateElement } from "rnot_gate_component/rnotGateElement"
import { RxGateElement } from "rx_gate_component/rxGateElement"
import { RyGateElement } from "ry_gate_component/ryGateElement"
import { RzGateElement } from "rz_gate_component/rzGateElement"
import { SwapGateElement } from "swap_gate_component/swapGateElement"
import { WriteGateElement } from "write_gate_component/writeGateElement"
import { XGateElement } from "x_gate_component/xGateElement"
import { YGateElement } from "y_gate_component/yGateElement"
import { ZGateElement } from "z_gate_component/zGateElement"

QUnit.module("CircuitStep", () => {
  let step: CircuitStepElement

  QUnit.module("toJson", (hooks) => {
    hooks.beforeEach(() => {
      step = document.createElement("circuit-step") as CircuitStepElement
      document.body.append(step)
    })

    hooks.afterEach(() => {
      document.body.removeChild(step)
    })

    QUnit.test("should return an ID gate in JSON", (assert) => {
      step.appendDropzone()

      assert.equal(step.toJson(), "[1]")
    })

    QUnit.test("should return an H gate in JSON", (assert) => {
      const h = document.createElement("h-gate")
      step.appendOperation(h)

      assert.equal(step.toJson(), '["H"]')
    })

    QUnit.test("should return an X gate in JSON", (assert) => {
      const x = document.createElement("x-gate")
      step.appendOperation(x)

      assert.equal(step.toJson(), '["X"]')
    })

    QUnit.test("should return a Y gate in JSON", (assert) => {
      const y = document.createElement("y-gate")
      step.appendOperation(y)

      assert.equal(step.toJson(), '["Y"]')
    })

    QUnit.test("should return a Z gate in JSON", (assert) => {
      const z = document.createElement("z-gate")
      step.appendOperation(z)

      assert.equal(step.toJson(), '["Z"]')
    })

    QUnit.test("should return a phase shift gate in JSON", (assert) => {
      const phase = document.createElement("phase-gate")
      step.appendOperation(phase)

      assert.equal(step.toJson(), '["P"]')
    })

    QUnit.test("should return a √X gate in JSON", (assert) => {
      const rnot = document.createElement("rnot-gate")
      step.appendOperation(rnot)

      assert.equal(step.toJson(), '["X^½"]')
    })

    QUnit.test("should return an Rx gate in JSON", (assert) => {
      const rx = document.createElement("rx-gate")
      step.appendOperation(rx)

      assert.equal(step.toJson(), '["Rx"]')
    })

    QUnit.test("should return an Ry gate in JSON", (assert) => {
      const ry = document.createElement("ry-gate")
      step.appendOperation(ry)

      assert.equal(step.toJson(), '["Ry"]')
    })

    QUnit.test("should return an Rz gate in JSON", (assert) => {
      const rz = document.createElement("rz-gate")
      step.appendOperation(rz)

      assert.equal(step.toJson(), '["Rz"]')
    })

    QUnit.test("should return a control gate in JSON", (assert) => {
      const control = document.createElement("control-gate")
      step.appendOperation(control)

      assert.equal(step.toJson(), '["•"]')
    })

    QUnit.test("should return a swap gate in JSON", (assert) => {
      const swap = document.createElement("swap-gate")
      step.appendOperation(swap)

      assert.equal(step.toJson(), '["Swap"]')
    })

    QUnit.test("should return a bloch display in JSON", (assert) => {
      const bloch = document.createElement("bloch-display")
      step.appendOperation(bloch)

      assert.equal(step.toJson(), '["Bloch"]')
    })

    QUnit.test("should return a |0> gate in JSON", (assert) => {
      const write = document.createElement("write-gate") as WriteGateElement
      write.value = "0"
      step.appendOperation(write)

      assert.equal(step.toJson(), '["|0>"]')
    })

    QUnit.test("should return a |1> gate in JSON", (assert) => {
      const write = document.createElement("write-gate") as WriteGateElement
      write.value = "1"
      step.appendOperation(write)

      assert.equal(step.toJson(), '["|1>"]')
    })

    QUnit.test("should return a measurement gate in JSON", (assert) => {
      const measurement = document.createElement("measurement-gate")
      step.appendOperation(measurement)

      assert.equal(step.toJson(), '["Measure"]')
    })

    QUnit.test("should return a Controlled-H gate in JSON", (assert) => {
      const control = document.createElement("control-gate")
      const h = document.createElement("h-gate")
      step.appendOperation(control)
      step.appendOperation(h)

      assert.equal(step.toJson(), '["•","H"]')
    })
  })

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

      assert.true(c.wireBottom)
      assert.true(h.wireTop)
    })

    QUnit.test("should connect H,•", (assert) => {
      step.appendOperation(h)
      step.appendOperation(c)

      assert.true(h.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,H", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(h)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(h.wireTop)
    })

    QUnit.test("should connect H,1,•", (assert) => {
      step.appendOperation(h)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(h.wireTop)
    })

    QUnit.test("should connect •,H,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(h)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(h.wireTop)
      assert.true(h.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect H,•,•", (assert) => {
      step.appendOperation(h)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(x.wireTop)
    })

    QUnit.test("should connect X,•", (assert) => {
      step.appendOperation(x)
      step.appendOperation(c)

      assert.true(x.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,X", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(x)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(x.wireTop)
    })

    QUnit.test("should connect X,1,•", (assert) => {
      step.appendOperation(x)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(x.wireTop)
    })

    QUnit.test("should connect •,X,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(x)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(x.wireTop)
      assert.true(x.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect X,•,•", (assert) => {
      step.appendOperation(x)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(y.wireTop)
    })

    QUnit.test("should connect Y,•", (assert) => {
      step.appendOperation(y)
      step.appendOperation(c)

      assert.true(y.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Y", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(y)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(y.wireTop)
    })

    QUnit.test("should connect Y,1,•", (assert) => {
      step.appendOperation(y)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(y.wireTop)
    })

    QUnit.test("should connect •,Y,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(y)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(y.wireTop)
      assert.true(y.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Y,•,•", (assert) => {
      step.appendOperation(y)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(z.wireTop)
    })

    QUnit.test("should connect Z,•", (assert) => {
      step.appendOperation(z)
      step.appendOperation(c)

      assert.true(z.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Z", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(z)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(z.wireTop)
    })

    QUnit.test("should connect Z,1,•", (assert) => {
      step.appendOperation(z)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(z.wireTop)
    })

    QUnit.test("should connect •,Z,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(z)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(z.wireTop)
      assert.true(z.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Z,•,•", (assert) => {
      step.appendOperation(z)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(p.wireTop)
    })

    QUnit.test("should connect P,•", (assert) => {
      step.appendOperation(p)
      step.appendOperation(c)

      assert.true(p.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,P", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(p)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(p.wireTop)
    })

    QUnit.test("should connect P,1,•", (assert) => {
      step.appendOperation(p)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(p.wireTop)
    })

    QUnit.test("should connect •,P,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(p)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(p.wireTop)
      assert.true(p.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect P,•,•", (assert) => {
      step.appendOperation(p)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(rnot.wireTop)
    })

    QUnit.test("should connect X^½,•", (assert) => {
      step.appendOperation(rnot)
      step.appendOperation(c)

      assert.true(rnot.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,X^½", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(rnot)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(rnot.wireTop)
    })

    QUnit.test("should connect X^½,1,•", (assert) => {
      step.appendOperation(rnot)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(rnot.wireTop)
    })

    QUnit.test("should connect •,X^½,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(rnot)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(rnot.wireTop)
      assert.true(rnot.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect X^½,•,•", (assert) => {
      step.appendOperation(rnot)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(rx.wireTop)
    })

    QUnit.test("should connect Rx,•", (assert) => {
      step.appendOperation(rx)
      step.appendOperation(c)

      assert.true(rx.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Rx", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(rx)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(rx.wireTop)
    })

    QUnit.test("should connect Rx,1,•", (assert) => {
      step.appendOperation(rx)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(rx.wireTop)
    })

    QUnit.test("should connect •,Rx,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(rx)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(rx.wireTop)
      assert.true(rx.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Rx,•,•", (assert) => {
      step.appendOperation(rx)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(ry.wireTop)
    })

    QUnit.test("should connect Ry,•", (assert) => {
      step.appendOperation(ry)
      step.appendOperation(c)

      assert.true(ry.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Ry", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(ry)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(ry.wireTop)
    })

    QUnit.test("should connect Ry,1,•", (assert) => {
      step.appendOperation(ry)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(ry.wireTop)
    })

    QUnit.test("should connect •,Ry,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(ry)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(ry.wireTop)
      assert.true(ry.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Ry,•,•", (assert) => {
      step.appendOperation(ry)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.true(c.wireBottom)
      assert.true(rz.wireTop)
    })

    QUnit.test("should connect Rz,•", (assert) => {
      step.appendOperation(rz)
      step.appendOperation(c)

      assert.true(rz.wireBottom)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Rz", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(rz)

      assert.true(c.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(rz.wireTop)
    })

    QUnit.test("should connect Rz,1,•", (assert) => {
      step.appendOperation(rz)
      const dropzone = step.appendDropzone()
      step.appendOperation(c)

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

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
      assert.true(c2.wireBottom)
      assert.true(rz.wireTop)
    })

    QUnit.test("should connect •,Rz,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(rz)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(rz.wireTop)
      assert.true(rz.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect Rz,•,•", (assert) => {
      step.appendOperation(rz)
      step.appendOperation(c1)
      step.appendOperation(c2)

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

      assert.false(c1.wireTop)
      assert.false(c1.wireTop)
      assert.true(c1.disabled)
    })

    QUnit.test("should connect •,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect •,1,•", (assert) => {
      step.appendOperation(c1)
      const dropzone = step.appendDropzone()
      step.appendOperation(c2)

      assert.true(c1.wireBottom)
      assert.true(dropzone.wireTop)
      assert.true(dropzone.wireBottom)
      assert.true(c2.wireTop)
    })

    QUnit.test("should connect •,1,•", (assert) => {
      step.appendOperation(c1)
      step.appendOperation(c2)
      step.appendOperation(c3)

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

      assert.true(p1.wireBottom)
      assert.true(p2.wireTop)
    })

    QUnit.test("should connect P('π/2'),1,P('π/2')", (assert) => {
      p1.phi = "π/2"
      p2.phi = "π/2"
      step.appendOperation(p1)
      const dropzone = step.appendDropzone()
      step.appendOperation(p2)

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

      assert.true(s1.wireBottom)
      assert.true(s2.wireTop)
    })

    QUnit.test("should connect Swap,1,Swap", (assert) => {
      step.appendOperation(s1)
      const dropzone = step.appendDropzone()
      step.appendOperation(s2)

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

      assert.true(c.wireBottom)
      assert.true(swap.wireTop)
      assert.true(swap.disabled)
    })

    QUnit.test("should connect Swap,•", (assert) => {
      step.appendOperation(swap)
      step.appendOperation(c)

      assert.true(swap.wireBottom)
      assert.true(swap.disabled)
      assert.true(c.wireTop)
    })

    QUnit.test("should connect •,1,Swap", (assert) => {
      step.appendOperation(c)
      const dropzone = step.appendDropzone()
      step.appendOperation(swap)

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

      assert.true(swap1.wireBottom)
      assert.true(swap1.enabled)
      assert.true(swap2.wireTop)
      assert.true(swap2.wireBottom)
      assert.true(swap2.enabled)
      assert.true(c.wireTop)
    })
  })
})
