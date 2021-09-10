import "components"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"

QUnit.module("CircuitDropzone", (hooks) => {
  let container: HTMLDivElement

  hooks.beforeEach(() => {
    container = document.createElement("div")
  })

  hooks.afterEach(() => {
    document.body.removeChild(container)
  })

  QUnit.test(".operation", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <h-gate></h-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement
    assert.equal(el.operation?.toJson(), '"H"')
  })

  QUnit.test(".operation returns null", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement
    assert.equal(el.operation, null)
  })

  QUnit.test(".prev()", (assert) => {
    container.innerHTML = `
      <quantum-circuit>
        <circuit-step>
          <circuit-dropzone id="dropzoneA">
          </circuit-dropzone>
        </circuit-step>
        <circuit-step>
          <circuit-dropzone id="dropzoneB">
          </circuit-dropzone>
        </circuit-step>
      </quantum-circuit>`
    document.body.append(container)

    const dropzoneA = document.getElementById(
      "dropzoneA",
    ) as CircuitDropzoneElement
    const dropzoneB = document.getElementById(
      "dropzoneB",
    ) as CircuitDropzoneElement

    assert.equal(dropzoneA.prev(), null)
    assert.equal(dropzoneB.prev()?.id, "dropzoneA")
  })

  QUnit.test(".next()", (assert) => {
    container.innerHTML = `
      <quantum-circuit>
        <circuit-step>
          <circuit-dropzone id="dropzoneA">
          </circuit-dropzone>
        </circuit-step>
        <circuit-step>
          <circuit-dropzone id="dropzoneB">
          </circuit-dropzone>
        </circuit-step>
      </quantum-circuit>`
    document.body.append(container)

    const dropzoneA = document.getElementById(
      "dropzoneA",
    ) as CircuitDropzoneElement
    const dropzoneB = document.getElementById(
      "dropzoneB",
    ) as CircuitDropzoneElement

    assert.equal(dropzoneA.next()?.id, "dropzoneB")
    assert.equal(dropzoneB.next(), null)
  })

  QUnit.test(".circuitStep() returns a CircuitStepElement", (assert) => {
    container.innerHTML = `
      <circuit-step>
        <circuit-dropzone>
        </circuit-dropzone>
      </circuit-step>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.circuitStep?.nodeName, "CIRCUIT-STEP")
  })

  QUnit.test(".circuitStep() returns null", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.true(el.circuitStep === null)
  })

  QUnit.test(".toJson() (Id gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), 1)
  })

  QUnit.test(".toJson() (H gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <h-gate></h-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"H"')
  })

  QUnit.test(".toJson() (X gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <x-gate></x-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"X"')
  })

  QUnit.test(".toJson() (Y gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <y-gate></y-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Y"')
  })

  QUnit.test(".toJson() (Z gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <z-gate></z-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Z"')
  })

  QUnit.test(".toJson() (Phase gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <phase-gate></phase-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"P"')
  })

  QUnit.test(".toJson() (√X gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <rnot-gate></rnot-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"X^½"')
  })

  QUnit.test(".toJson() (Rx gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <rx-gate></rx-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Rx"')
  })

  QUnit.test(".toJson() (Ry gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <ry-gate></ry-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Ry"')
  })

  QUnit.test(".toJson() (Rz gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <rz-gate></rz-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Rz"')
  })

  QUnit.test(".toJson() (Control gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <control-gate></control-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"•"')
  })

  QUnit.test(".toJson() (Swap gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <swap-gate></swap-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Swap"')
  })

  QUnit.test(".toJson() (Bloch display)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <bloch-display></bloch-display>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Bloch"')
  })

  QUnit.test(".toJson() (Write gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <write-gate></write-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"|0>"')
  })

  QUnit.test(".toJson() (|0>)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <write-gate data-value="0"></write-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"|0>"')
  })

  QUnit.test(".toJson() (|1>)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <write-gate data-value="1"></write-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"|1>"')
  })

  QUnit.test(".toJson() (Measurement gate)", (assert) => {
    container.innerHTML = `
      <circuit-dropzone>
        <measurement-gate></measurement-gate>
      </circuit-dropzone>`
    document.body.append(container)

    const el = document.querySelector(
      "circuit-dropzone",
    ) as CircuitDropzoneElement

    assert.equal(el.toJson(), '"Measure"')
  })
})
