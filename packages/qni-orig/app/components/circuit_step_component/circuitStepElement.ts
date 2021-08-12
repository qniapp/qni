import { controller, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { HGateElement } from "h_gate_component/hGateElement"
import { PhaseGateElement } from "phase_gate_component/phaseGateElement"
import { RootNotGateElement } from "root_not_gate_component/rootNotGateElement"
import { RxGateElement } from "rx_gate_component/rxGateElement"
import { RyGateElement } from "ry_gate_component/ryGateElement"
import { RzGateElement } from "rz_gate_component/rzGateElement"
import { SwapGateElement } from "swap_gate_component/swapGateElement"
import { XGateElement } from "x_gate_component/xGateElement"
import { YGateElement } from "y_gate_component/yGateElement"
import { ZGateElement } from "z_gate_component/zGateElement"

@controller
export class CircuitStepElement extends HTMLElement {
  @targets dropzones: CircuitDropzoneElement[]
  @targets controlGates: ControlGateElement[]
  @targets swapGates: SwapGateElement[]
  @targets controllableGates: Array<
    | HGateElement
    | XGateElement
    | YGateElement
    | ZGateElement
    | PhaseGateElement
    | RootNotGateElement
    | RxGateElement
    | RyGateElement
    | RzGateElement
    | SwapGateElement
  >

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
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
          <slot></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  bit(
    gate:
      | ControlGateElement
      | HGateElement
      | XGateElement
      | YGateElement
      | ZGateElement
      | PhaseGateElement
      | RootNotGateElement
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
