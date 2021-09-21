import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/auto-start"
import "@interactjs/dev-tools"
import "@interactjs/modifiers"
import { attr, controller, target } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import { CircuitStepElement } from "circuit_step_component/circuitStepElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { Draggable } from "mixins"
import { HGateElement } from "h_gate_component/hGateElement"
import { MeasurementGateElement } from "measurement_gate_component/measurementGateElement"
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
import interact from "@interactjs/interact"

const wires = html`<svg
  id="wires"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <line
    id="wire-input"
    x1="0"
    y1="50"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-output"
    x1="50"
    y1="50"
    x2="100"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-top"
    x1="50"
    y1="0"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-bottom"
    x1="50"
    y1="100"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>`

const css = html`<style>
  :host([data-size="xs"]) {
    height: 1.5rem;
    width: 1rem;
  }

  :host([data-size="sm"]) {
    height: 2.25rem;
    width: 1.5rem;
  }

  :host,
  :host([data-size="base"]) {
    height: 3rem;
    width: 2rem;
  }

  :host([data-size="lg"]) {
    height: 3.75rem;
    width: 2.5rem;
  }

  :host([data-size="xl"]) {
    height: 4.5rem;
    width: 3rem;
  }

  @media (min-width: 768px) {
    :host([data-size="xs"]) {
      height: 1rem;
      width: 1.5rem;
    }

    :host([data-size="sm"]) {
      height: 1.5rem;
      width: 2.25rem;
    }

    :host,
    :host([data-size="base"]) {
      height: 2rem;
      width: 3rem;
    }

    :host([data-size="lg"]) {
      height: 2.5rem;
      width: 3.75rem;
    }

    :host([data-size="xl"]) {
      height: 3rem;
      width: 4.5rem;
    }
  }

  :host([data-wire-top]) #wire-top {
    display: block;
    transform-origin: top;
    transform: translateY(-25%) scaleY(1.5);
  }

  :host([data-wire-bottom]) #wire-bottom {
    display: block;
    transform-origin: bottom;
    transform: translateY(25%) scaleY(1.5);
  }

  #body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  #wires {
    position: absolute;
    bottom: -2px;
    left: -2px;
    right: -2px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    overflow: visible;
    transform: rotate(90deg);
    transform-origin: center;
  }

  @media (min-width: 768px) {
    #wires {
      transform: rotate(0);
    }
  }

  ::slotted(*) {
    position: absolute;
    z-index: 10;
  }

  #wire-input,
  #wire-output {
    color: var(--colors-wolf, #777777);
  }

  :host(:not([data-input-wire-quantum])) #wire-input,
  :host([data-input-wire-quantum="false"]) #wire-input {
    color: var(--colors-swan, #e5e5e5);
  }

  :host(:not([data-output-wire-quantum])) #wire-output,
  :host([data-output-wire-quantum="false"]) #wire-output {
    color: var(--colors-swan, #e5e5e5);
  }

  #wire-input {
    transform: translateX(-25%) scaleX(1.5);
    transform-origin: left;
  }

  #wire-output {
    transform: translateX(25%) scaleX(1.5);
    transform-origin: right;
  }

  @media (min-width: 768px) {
    #wire-input,
    #wire-output {
      transform: none;
    }
  }

  :host([data-draggable-name="write-gate"][data-occupied]) #wires > #wire-input,
  :host([data-draggable-name="measurement-gate"][data-occupied])
    #wires
    > #wire-input {
    transform: scaleX(0.75) translateX(-25%);
  }

  @media (min-width: 768px) {
    :host([data-draggable-name="write-gate"][data-occupied])
      #wires
      > #wire-input,
    :host([data-draggable-name="measurement-gate"][data-occupied])
      #wires
      > #wire-input {
      transform: scaleX(0.5) translateX(0);
    }
  }

  :host([data-draggable-name="write-gate"][data-occupied])
    #wires
    > #wire-output,
  :host([data-draggable-name="measurement-gate"][data-occupied])
    #wires
    > #wire-output {
    transform: scaleX(0.75) translateX(25%);
  }

  @media (min-width: 768px) {
    :host([data-draggable-name="write-gate"][data-occupied])
      #wires
      > #wire-output,
    :host([data-draggable-name="measurement-gate"][data-occupied])
      #wires
      > #wire-output {
      transform: scaleX(0.5) translateX(0);
    }
  }

  #wire-top,
  #wire-bottom {
    color: var(--colors-gate, #43c000);
    stroke-width: 4;
    display: none;
  }
</style>`

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @target slotEl: HTMLSlotElement

  @attr size = "base"
  @attr inputWireQuantum = false
  @attr outputWireQuantum = false
  @attr wireTop = false
  @attr wireBottom = false
  @attr occupied = false
  @attr draggableName = ""

  get operation():
    | HGateElement
    | XGateElement
    | YGateElement
    | ZGateElement
    | PhaseGateElement
    | RnotGateElement
    | RxGateElement
    | RyGateElement
    | RzGateElement
    | ControlGateElement
    | SwapGateElement
    | BlochDisplayElement
    | WriteGateElement
    | MeasurementGateElement
    | null {
    const el = this.children[0] as HTMLElement
    if (el === undefined) return null
    if (!(el as unknown as Draggable).snapped) return null

    return el as
      | HGateElement
      | XGateElement
      | YGateElement
      | ZGateElement
      | PhaseGateElement
      | RnotGateElement
      | RxGateElement
      | RyGateElement
      | RzGateElement
      | ControlGateElement
      | SwapGateElement
      | BlochDisplayElement
      | WriteGateElement
      | MeasurementGateElement
  }

  get circuitStep(): CircuitStepElement | null {
    const el = this.parentElement
    if (el !== null && el.nodeName === "CIRCUIT-STEP") {
      return el as CircuitStepElement
    }
    return null
  }

  set wireQuantum(value: boolean) {
    this.inputWireQuantum = value
    this.outputWireQuantum = value
  }

  get snapTarget(): { x: number; y: number } {
    return {
      x: this.offsetLeft + this.clientWidth / 2,
      y: this.offsetTop + this.clientHeight / 2,
    }
  }

  index(): number | null {
    const circuitStep = this.closest("circuit-step") as CircuitStepElement
    if (circuitStep === null) return null

    return circuitStep.dropzoneIndex(this)
  }

  prev(): CircuitDropzoneElement | null {
    const index = this.index()

    if (index === null) return null
    if (this.circuitStep === null) return null

    const prevStep = this.circuitStep.prev()
    if (prevStep === null) return null

    return prevStep.dropzone(index)
  }

  next(): CircuitDropzoneElement | null {
    const index = this.index()

    if (index === null) return null
    if (this.circuitStep === null) return null
    const nextStep = this.circuitStep.next()
    if (nextStep === null) return null

    return nextStep.dropzone(index)
  }

  assign(operation: HTMLElement): void {
    this.append(operation)
    this.occupied = true
  }

  toJson(): string | number {
    const operation = this.operation

    if (operation === null || operation === undefined) {
      return "1"
    } else {
      return operation.toJson()
    }
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
    this.addSlotChangeEventListener()
    this.initDropzone()
  }

  update(): void {
    render(
      html`${css}

        <div id="body" data-target="circuit-dropzone.body">
          <slot data-target="circuit-dropzone.slotEl"></slot>
          ${wires}
        </div>`,
      this.shadowRoot!,
    )

    if (this.childElementCount === 1) {
      const operation = this.children[0]
      this.occupied = true
      this.draggableName = operation.tagName.toLowerCase()
      operation.setAttribute("data-target", "circuit-dropzone.operation")
    } else if (this.childElementCount > 1) {
      throw new Error("A dropzone cannot hold multiple operations.")
    }
  }

  addSlotChangeEventListener(): void {
    this.slotEl.addEventListener("slotchange", () => {
      if (this.childElementCount > 1) {
        throw new Error("A dropzone cannot hold multiple operations.")
      }

      if (this.childElementCount === 0) {
        this.draggableName = ""
        this.occupied = false
        this.enableDropzone()
        this.dispatchEvent(new Event("circuitchange", { bubbles: true }))
        return
      }

      const operation = this.children[0]
      const nodeName = operation.nodeName

      operation.setAttribute("data-target", "circuit-dropzone.operation")
      operation.setAttribute("data-size", this.size)

      this.draggableName = nodeName.toLowerCase()
      this.occupied = true
      this.disableDropzone()

      this.dispatchEvent(new Event("circuitchange", { bubbles: true }))
    })
  }

  private initDropzone(): void {
    interact(this).dropzone({
      accept: "[data-draggable]",
      overlap: "center",
    })
  }

  enableDropzone(): void {
    interact(this).dropzone(true)
  }

  disableDropzone(): void {
    interact(this).dropzone(false)
  }

  snap(draggable: HTMLElement): void {
    this.occupied = true
    this.append(draggable)
  }

  unsnap(_draggable: HTMLElement): void {
    this.draggableName = ""
    this.dispatchEvent(new Event("circuitchange", { bubbles: true }))
  }

  updateWires(): void {
    const draggableName = this.draggableName
    const prevDropzone = this.prev()

    if (draggableName === "") {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
        this.outputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
        this.outputWireQuantum = prevDropzone.outputWireQuantum
      }
      return
    }

    if (draggableName === "write-gate") {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
      }
      this.outputWireQuantum = true
    } else if (draggableName === "measurement-gate") {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
      }
      this.outputWireQuantum = false
    } else {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
        this.outputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
        this.outputWireQuantum = prevDropzone.outputWireQuantum
      }
    }
  }

  remove(): void {
    this.parentElement?.removeChild(this)
  }
}
