import { attr, controller, target } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
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
    id="wire-left"
    x1="0"
    y1="50"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-right"
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
  }

  ::slotted(*) {
    position: absolute;
    z-index: 10;
  }

  slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-left,
  slot[data-circuit-operation-name="measurement-gate"] ~ #wires > #wire-left {
    transform-origin: left;
    transform: scaleX(0.5);
  }

  slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-right,
  slot[data-circuit-operation-name="measurement-gate"] ~ #wires > #wire-right {
    transform-origin: right;
    transform: scaleX(0.5);
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
  @attr wireTop = false
  @attr wireBottom = false

  get operation(): CircuitOperation | null {
    if (this.childElementCount === 0) {
      return null
    } else if (this.childElementCount === 1) {
      return this.children[0] as CircuitOperation
    } else {
      throw new Error("A dropzone cannot hold multiple operations.")
    }
  }

  toJson(): string | number {
    const operation = this.operation

    if (operation === null) {
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
  }

  addSlotChangeEventListener(): void {
    this.slotEl.addEventListener("slotchange", () => {
      const operation = this.operation
      if (operation !== null) {
        this.slotEl.setAttribute(
          "data-circuit-operation-name",
          operation.nodeName.toLowerCase(),
        )
        operation.setAttribute("data-size", this.size)
      }
    })
  }
}
