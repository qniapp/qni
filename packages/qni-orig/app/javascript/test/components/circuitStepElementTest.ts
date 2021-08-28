import "components"
import { CircuitStepElement } from "circuit_step_component/circuitStepElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { HGateElement } from "h_gate_component/hGateElement"
import { PhaseGateElement } from "phase_gate_component/phaseGateElement"
import { RnotGateElement } from "rnot_gate_component/rnotGateElement"
import { RxGateElement } from "rx_gate_component/rxGateElement"
import { RyGateElement } from "ry_gate_component/ryGateElement"
import { RzGateElement } from "rz_gate_component/rzGateElement"
import { SwapGateElement } from "swap_gate_component/swapGateElement"
import { XGateElement } from "x_gate_component/xGateElement"
import { YGateElement } from "y_gate_component/yGateElement"
import { ZGateElement } from "z_gate_component/zGateElement"

QUnit.module("CircuitStep JSON", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("Id", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), "[1]")
  })

  QUnit.test("H", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["H"]')
  })

  QUnit.test("X", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["X"]')
  })

  QUnit.test("Y", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Y"]')
  })

  QUnit.test("Z", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Z"]')
  })

  QUnit.test("Phase", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["P"]')
  })

  QUnit.test("√X", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["X^½"]')
  })

  QUnit.test("Rx", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Rx"]')
  })

  QUnit.test("Ry", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Ry"]')
  })

  QUnit.test("Rz", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Rz"]')
  })

  QUnit.test("Control", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["•"]')
  })

  QUnit.test("Swap", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Swap"]')
  })

  QUnit.test("Bloch", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <bloch-display></bloch-display>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Bloch"]')
  })

  QUnit.test("Write (default = 0)", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <write-gate></write-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["|0>"]')
  })

  QUnit.test("Write 0", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <write-gate data-value="0"></write-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["|0>"]')
  })

  QUnit.test("Write 1", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <write-gate data-value="1"></write-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["|1>"]')
  })

  QUnit.test("Measurement", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <measurement-gate></measurement-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["Measure"]')
  })

  // With multiple dropzones

  QUnit.test("•,H", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement

    assert.equal(el.toJson(), '["•","H"]')
  })
})

QUnit.module("CircuitStep Controlled-H", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,H", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const hGate = el.dropzones[1].operation as HGateElement

    assert.true(controlGate.wireBottom)
    assert.true(hGate.wireTop)
  })

  QUnit.test("H,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const hGate = el.dropzones[0].operation as HGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(hGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,H", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const hGate = el.dropzones[2].operation as HGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(hGate.wireTop)
  })

  QUnit.test("H,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const hGate = el.dropzones[0].operation as HGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(hGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,H", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const hGate = el.dropzones[2].operation as HGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(hGate.wireTop)
  })

  QUnit.test("•,H,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const hGate = el.dropzones[1].operation as HGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(hGate.wireTop)
    assert.true(hGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("H,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <h-gate></h-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const hGate = el.dropzones[0].operation as HGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(hGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-X", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,X", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const xGate = el.dropzones[1].operation as XGateElement

    assert.true(controlGate.wireBottom)
    assert.true(xGate.wireTop)
  })

  QUnit.test("X,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const xGate = el.dropzones[0].operation as XGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(xGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,X", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const xGate = el.dropzones[2].operation as XGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(xGate.wireTop)
  })

  QUnit.test("X,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const xGate = el.dropzones[0].operation as XGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(xGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,X", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const xGate = el.dropzones[2].operation as XGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(xGate.wireTop)
  })

  QUnit.test("•,X,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const xGate = el.dropzones[1].operation as XGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(xGate.wireTop)
    assert.true(xGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("X,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <x-gate></x-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const xGate = el.dropzones[0].operation as XGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(xGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Y", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,Y", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const yGate = el.dropzones[1].operation as YGateElement

    assert.true(controlGate.wireBottom)
    assert.true(yGate.wireTop)
  })

  QUnit.test("Y,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const yGate = el.dropzones[0].operation as YGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(yGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,Y", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const yGate = el.dropzones[2].operation as YGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(yGate.wireTop)
  })

  QUnit.test("Y,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const yGate = el.dropzones[0].operation as YGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(yGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,Y", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const yGate = el.dropzones[2].operation as YGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(yGate.wireTop)
  })

  QUnit.test("•,Y,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const yGate = el.dropzones[1].operation as YGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(yGate.wireTop)
    assert.true(yGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("Y,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <y-gate></y-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const yGate = el.dropzones[0].operation as YGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(yGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Z", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,Z", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const zGate = el.dropzones[1].operation as ZGateElement

    assert.true(controlGate.wireBottom)
    assert.true(zGate.wireTop)
  })

  QUnit.test("Z,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const zGate = el.dropzones[0].operation as ZGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(zGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,Z", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const zGate = el.dropzones[2].operation as ZGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(zGate.wireTop)
  })

  QUnit.test("Z,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const zGate = el.dropzones[0].operation as ZGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(zGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,Z", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const zGate = el.dropzones[2].operation as ZGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(zGate.wireTop)
  })

  QUnit.test("•,Z,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const zGate = el.dropzones[1].operation as ZGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(zGate.wireTop)
    assert.true(zGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("Z,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <z-gate></z-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const zGate = el.dropzones[0].operation as ZGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(zGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Phase", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,P", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const phaseGate = el.dropzones[1].operation as PhaseGateElement

    assert.true(controlGate.wireBottom)
    assert.true(phaseGate.wireTop)
  })

  QUnit.test("P,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const phaseGate = el.dropzones[0].operation as PhaseGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(phaseGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,P", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const phaseGate = el.dropzones[2].operation as PhaseGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(phaseGate.wireTop)
  })

  QUnit.test("P,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const phaseGate = el.dropzones[0].operation as PhaseGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(phaseGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,P", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const phaseGate = el.dropzones[2].operation as PhaseGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(phaseGate.wireTop)
  })

  QUnit.test("•,P,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const phaseGate = el.dropzones[1].operation as PhaseGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(phaseGate.wireTop)
    assert.true(phaseGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("P,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <phase-gate></phase-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const phaseGate = el.dropzones[0].operation as PhaseGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(phaseGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-√X", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,X^½", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const rootNotGate = el.dropzones[1].operation as RnotGateElement

    assert.true(controlGate.wireBottom)
    assert.true(rootNotGate.wireTop)
  })

  QUnit.test("X^½,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rootNotGate = el.dropzones[0].operation as RnotGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(rootNotGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,X^½", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const rootNotGate = el.dropzones[2].operation as RnotGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(rootNotGate.wireTop)
  })

  QUnit.test("X^½,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rootNotGate = el.dropzones[0].operation as RnotGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(rootNotGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,X^½", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const rootNotGate = el.dropzones[2].operation as RnotGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(rootNotGate.wireTop)
  })

  QUnit.test("•,X^½,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const rootNotGate = el.dropzones[1].operation as RnotGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(rootNotGate.wireTop)
    assert.true(rootNotGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("X^½,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rnot-gate></rnot-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rootNotGate = el.dropzones[0].operation as RnotGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(rootNotGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Rx", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,Rx", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const rxGate = el.dropzones[1].operation as RxGateElement

    assert.true(controlGate.wireBottom)
    assert.true(rxGate.wireTop)
  })

  QUnit.test("Rx,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rxGate = el.dropzones[0].operation as RxGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(rxGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,Rx", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const rxGate = el.dropzones[2].operation as RxGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(rxGate.wireTop)
  })

  QUnit.test("Rx,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rxGate = el.dropzones[0].operation as RxGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(rxGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,Rx", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const rxGate = el.dropzones[2].operation as RxGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(rxGate.wireTop)
  })

  QUnit.test("•,Rx,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const rxGate = el.dropzones[1].operation as RxGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(rxGate.wireTop)
    assert.true(rxGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("Rx,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rx-gate></rx-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rxGate = el.dropzones[0].operation as RxGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(rxGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Ry", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,Ry", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const ryGate = el.dropzones[1].operation as RyGateElement

    assert.true(controlGate.wireBottom)
    assert.true(ryGate.wireTop)
  })

  QUnit.test("Ry,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const ryGate = el.dropzones[0].operation as RyGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(ryGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,Ry", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const ryGate = el.dropzones[2].operation as RyGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(ryGate.wireTop)
  })

  QUnit.test("Ry,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const ryGate = el.dropzones[0].operation as RyGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(ryGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,Ry", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const ryGate = el.dropzones[2].operation as RyGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(ryGate.wireTop)
  })

  QUnit.test("•,Ry,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const ryGate = el.dropzones[1].operation as RyGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(ryGate.wireTop)
    assert.true(ryGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("Ry,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <ry-gate></ry-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const ryGate = el.dropzones[0].operation as RyGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(ryGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Rz", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,Rz", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const rzGate = el.dropzones[1].operation as RzGateElement

    assert.true(controlGate.wireBottom)
    assert.true(rzGate.wireTop)
  })

  QUnit.test("Rz,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rzGate = el.dropzones[0].operation as RzGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(rzGate.wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,Rz", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const rzGate = el.dropzones[2].operation as RzGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(rzGate.wireTop)
  })

  QUnit.test("Rz,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rzGate = el.dropzones[0].operation as RzGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(rzGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,Rz", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const rzGate = el.dropzones[2].operation as RzGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(rzGate.wireTop)
  })

  QUnit.test("•,Rz,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const rzGate = el.dropzones[1].operation as RzGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(rzGate.wireTop)
    assert.true(rzGate.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("Rz,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <rz-gate></rz-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const rzGate = el.dropzones[0].operation as RzGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(rzGate.wireBottom)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })
})

QUnit.module("CircuitStep CZ", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement

    assert.true(controlGate.disabled)
  })

  QUnit.test("•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("•,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("•,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const controlGate3 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(controlGate3.wireTop)
  })
})

QUnit.module("CircuitStep Controlled-Swap", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test("•,Swap", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const swapGate = el.dropzones[1].operation as SwapGateElement

    assert.true(controlGate.wireBottom)
    assert.true(swapGate.wireTop)
    assert.true(swapGate.disabled)
  })

  QUnit.test("Swap,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const swapGate = el.dropzones[0].operation as SwapGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement

    assert.true(swapGate.wireBottom)
    assert.true(swapGate.disabled)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,1,Swap", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const swapGate = el.dropzones[2].operation as SwapGateElement

    assert.true(controlGate.wireBottom)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(swapGate.wireTop)
  })

  QUnit.test("Swap,1,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone></circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const swapGate = el.dropzones[0].operation as SwapGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(swapGate.wireBottom)
    assert.true(swapGate.disabled)
    assert.true(el.dropzones[1].wireTop)
    assert.true(el.dropzones[1].wireBottom)
    assert.true(controlGate.wireTop)
  })

  QUnit.test("•,•,Swap", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const controlGate2 = el.dropzones[1].operation as ControlGateElement
    const swapGate = el.dropzones[2].operation as SwapGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
    assert.true(controlGate2.wireBottom)
    assert.true(swapGate.wireTop)
    assert.true(swapGate.disabled)
  })

  QUnit.test("•,Swap,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate1 = el.dropzones[0].operation as ControlGateElement
    const swapGate = el.dropzones[1].operation as SwapGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(controlGate1.wireBottom)
    assert.true(swapGate.wireTop)
    assert.true(swapGate.wireBottom)
    assert.true(swapGate.disabled)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("Swap,•,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const swapGate = el.dropzones[0].operation as SwapGateElement
    const controlGate1 = el.dropzones[1].operation as ControlGateElement
    const controlGate2 = el.dropzones[2].operation as ControlGateElement

    assert.true(swapGate.wireBottom)
    assert.true(swapGate.disabled)
    assert.true(controlGate1.wireTop)
    assert.true(controlGate1.wireBottom)
    assert.true(controlGate2.wireTop)
  })

  QUnit.test("•,Swap,Swap", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const controlGate = el.dropzones[0].operation as ControlGateElement
    const swapGate1 = el.dropzones[1].operation as SwapGateElement
    const swapGate2 = el.dropzones[2].operation as SwapGateElement

    assert.true(controlGate.wireBottom)
    assert.true(swapGate1.wireTop)
    assert.true(swapGate1.wireBottom)
    assert.true(swapGate1.enabled)
    assert.true(swapGate2.wireTop)
    assert.true(swapGate2.enabled)
  })

  QUnit.test("Swap,•,Swap", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const swapGate1 = el.dropzones[0].operation as SwapGateElement
    const controlGate = el.dropzones[1].operation as ControlGateElement
    const swapGate2 = el.dropzones[2].operation as SwapGateElement

    assert.true(swapGate1.wireBottom)
    assert.true(swapGate1.enabled)
    assert.true(controlGate.wireTop)
    assert.true(controlGate.wireBottom)
    assert.true(swapGate2.wireTop)
    assert.true(swapGate2.enabled)
  })

  QUnit.test("Swap,Swap,•", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <swap-gate></swap-gate>
        </circuit-dropzone>
        <circuit-dropzone>
          <control-gate></control-gate>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector("circuit-step") as CircuitStepElement
    const swapGate1 = el.dropzones[0].operation as SwapGateElement
    const swapGate2 = el.dropzones[1].operation as SwapGateElement
    const controlGate = el.dropzones[2].operation as ControlGateElement

    assert.true(swapGate1.wireBottom)
    assert.true(swapGate1.enabled)
    assert.true(swapGate2.wireTop)
    assert.true(swapGate2.wireBottom)
    assert.true(swapGate2.enabled)
    assert.true(controlGate.wireTop)
  })
})
