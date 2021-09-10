import { attr, controller, target } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import { CircuitStepElement } from "circuit_step_component/circuitStepElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
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

type CircuitOperation =
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

  slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-input,
  slot[data-circuit-operation-name="measurement-gate"] ~ #wires > #wire-input {
    transform: scaleX(0.75) translateX(-25%);
  }

  @media (min-width: 768px) {
    slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-input,
    slot[data-circuit-operation-name="measurement-gate"]
      ~ #wires
      > #wire-input {
      transform: scaleX(0.5) translateX(0);
    }
  }

  slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-output,
  slot[data-circuit-operation-name="measurement-gate"] ~ #wires > #wire-output {
    transform: scaleX(0.75) translateX(25%);
  }

  @media (min-width: 768px) {
    slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-output,
    slot[data-circuit-operation-name="measurement-gate"]
      ~ #wires
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
  @target operation: CircuitOperation
  @target slotEl: HTMLSlotElement

  @attr size = "base"
  @attr inputWireQuantum = false
  @attr outputWireQuantum = false
  @attr wireTop = false
  @attr wireBottom = false

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

  assignOperationElement(element: HTMLElement): void {
    element.setAttribute("data-target", "circuit-dropzone.operation")
    this.append(element)
    this.updateWires()
  }

  index(): number | null {
    const circuitStepEl = this.closest("circuit-step") as CircuitStepElement
    if (circuitStepEl === null) return null

    return circuitStepEl.dropzones.indexOf(this)
  }

  prev(): CircuitDropzoneElement | null {
    const index = this.index()

    if (index === null) return null
    if (this.circuitStep === null) return null

    const prevStep = this.circuitStep.prev()
    if (prevStep === null) return null

    return prevStep.dropzones[index] || null
  }

  next(): CircuitDropzoneElement | null {
    const index = this.index()

    if (index === null) return null
    if (this.circuitStep === null) return null
    const nextStep = this.circuitStep.next()
    if (nextStep === null) return null

    return nextStep.dropzones[index]
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
      this.children[0].setAttribute("data-target", "circuit-dropzone.operation")
    } else if (this.childElementCount > 1) {
      throw new Error("A dropzone cannot hold multiple operations.")
    }
  }

  addSlotChangeEventListener(): void {
    this.slotEl.addEventListener("slotchange", () => {
      if (this.childElementCount === 0) return
      if (this.childElementCount > 1) {
        throw new Error("A dropzone cannot hold multiple operations.")
      }

      const operation = this.children[0]
      const nodeName = operation.nodeName

      operation.setAttribute("data-target", "circuit-dropzone.operation")
      operation.setAttribute("data-size", this.size)

      this.slotEl.setAttribute(
        "data-circuit-operation-name",
        nodeName.toLowerCase(),
      )

      this.updateWires()
    })
  }

  private updateWires(): void {
    const operation = this.children[0]
    const nodeName = operation.nodeName

    if (nodeName === "WRITE-GATE") {
      const prevDropzone = this.prev()
      if (prevDropzone === null) {
        this.inputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
      }
      this.outputWireQuantum = true
    }

    if (nodeName === "MEASUREMENT-GATE") {
      const prevDropzone = this.prev()
      if (prevDropzone === null) {
        this.inputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
      }
      this.outputWireQuantum = false
    }

    operation.setAttribute("data-size", this.size)
  }
}
