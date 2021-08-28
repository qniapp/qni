import { controller, target } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
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

@controller
export class CircuitStepElement extends HTMLElement {
  @target slotEl: HTMLSlotElement

  toJson(): string {
    const operations = []

    for (const dropzone of this.dropzones) {
      operations.push(dropzone.toJson())
    }

    return `[${operations.join(",")}]`
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
    this.addSlotChangeEventListener()
    this.updateConnections()
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
            flex-direction: column;
          }

          ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
            margin-top: 1rem;
          }
        </style>

        <div id="body">
          <slot data-target="circuit-step.slotEl"></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  private addSlotChangeEventListener(): void {
    this.slotEl.addEventListener(
      "slotchange",
      this.updateConnections.bind(this),
    )
  }

  get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll("circuit-dropzone"))
  }

  get controlGates(): ControlGateElement[] {
    return Array.from(this.querySelectorAll("control-gate"))
  }

  get swapGates(): SwapGateElement[] {
    return Array.from(this.querySelectorAll("swap-gate"))
  }

  get controllableGates(): Array<
    | HGateElement
    | XGateElement
    | YGateElement
    | ZGateElement
    | PhaseGateElement
    | RnotGateElement
    | RxGateElement
    | RyGateElement
    | RzGateElement
    | SwapGateElement
  > {
    return Array.from(
      this.querySelectorAll(
        "h-gate,x-gate,y-gate,z-gate,phase-gate,rnot-gate,rx-gate,ry-gate,rz-gate,swap-gate",
      ),
    )
  }

  updateConnections(): void {
    if (this.swapGates.length !== 2) {
      for (const swapGate of this.swapGates) {
        swapGate.disable()
      }
    } else {
      for (const swapGate of this.swapGates) {
        swapGate.enable()
      }
    }

    if (this.controlGates.length === 0) return
    if (this.controlGates.length === 1 && this.controllableGates.length === 0) {
      this.controlGates[0].disable()
      return
    }

    for (const controllableGate of this.controllableGates) {
      controllableGate.wireTop =
        this.controlGates.some((each) => {
          return this.bit(each) < this.bit(controllableGate)
        }) ||
        this.controllableGates.some((each) => {
          return this.bit(each) < this.bit(controllableGate)
        })
      controllableGate.wireBottom =
        this.controlGates.some((each) => {
          return this.bit(each) > this.bit(controllableGate)
        }) ||
        this.controllableGates.some((each) => {
          return this.bit(each) > this.bit(controllableGate)
        })
    }

    for (const controlGate of this.controlGates) {
      controlGate.enable()

      controlGate.wireTop =
        this.controllableGates.some((each) => {
          return this.bit(controlGate) > this.bit(each)
        }) ||
        this.controlGates.some((each) => {
          return this.bit(controlGate) > this.bit(each)
        })
      controlGate.wireBottom =
        this.controllableGates.some((each) => {
          return this.bit(controlGate) < this.bit(each)
        }) ||
        this.controlGates.some((each) => {
          return this.bit(controlGate) < this.bit(each)
        })
    }

    for (const dropzone of this.dropzones) {
      if (dropzone.draggable) continue

      const bits = this.controlGates
        .map((each) => this.bit(each))
        .concat(this.controllableGates.map((each) => this.bit(each)))
      const minBit = bits.sort()[0]
      const maxBit = bits.sort().slice(-1)[0]

      if (
        minBit < this.dropzones.indexOf(dropzone) &&
        this.dropzones.indexOf(dropzone) < maxBit
      ) {
        dropzone.wireTop = true
        dropzone.wireBottom = true
      }
    }
  }

  bit(
    gate:
      | ControlGateElement
      | HGateElement
      | XGateElement
      | YGateElement
      | ZGateElement
      | PhaseGateElement
      | RnotGateElement
      | RxGateElement
      | RyGateElement
      | RzGateElement
      | SwapGateElement,
  ): number {
    const dropzoneEl = gate.parentElement as unknown as CircuitDropzoneElement
    if (dropzoneEl === null) {
      throw new Error("Dropzone not found")
    }

    return this.dropzones.indexOf(dropzoneEl)
  }
}
