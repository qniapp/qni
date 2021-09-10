import { controller, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { HGateElement } from "h_gate_component/hGateElement"
import { PhaseGateElement } from "phase_gate_component/phaseGateElement"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"
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
  @targets dropzones: CircuitDropzoneElement[]
  @targets controllableGates: Array<
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
  >
  @targets phaseGates: PhaseGateElement[]
  @targets swapGates: SwapGateElement[]
  @targets controlGates: ControlGateElement[]

  get nqubit(): number {
    return this.dropzones.length
  }

  dropzone(n: number): CircuitDropzoneElement {
    const el = this.dropzones[n]
    if (el === undefined) throw new Error(`dropzone ${n} does not exist.`)

    return el
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

  index(): number | null {
    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all.indexOf(this)
  }

  prev(): CircuitStepElement | null {
    const index = this.index()
    if (index === null || index === 0) return null

    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all[index - 1] || null
  }

  next(): CircuitStepElement | null {
    const index = this.index()
    if (index === null) return null

    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all[index + 1] || null
  }

  appendDropzone(): CircuitDropzoneElement {
    const el = document.createElement(
      "circuit-dropzone",
    ) as CircuitDropzoneElement
    el.setAttribute("data-targets", "circuit-step.dropzones")
    this.append(el)
    return el
  }

  appendOperation(operation: HTMLElement): void {
    const dropzone = this.appendDropzone()
    dropzone.assignOperationElement(operation)

    if (
      operation.tagName === "H-GATE" ||
      operation.tagName === "X-GATE" ||
      operation.tagName === "Y-GATE" ||
      operation.tagName === "Z-GATE" ||
      operation.tagName === "RNOT-GATE" ||
      operation.tagName === "RX-GATE" ||
      operation.tagName === "RY-GATE" ||
      operation.tagName === "RZ-GATE"
    ) {
      operation.setAttribute("data-targets", "circuit-step.controllableGates")
    }
    if (operation.tagName === "SWAP-GATE") {
      operation.setAttribute(
        "data-targets",
        "circuit-step.controllableGates circuit-step.swapGates",
      )
    }
    if (operation.tagName === "PHASE-GATE") {
      operation.setAttribute(
        "data-targets",
        "circuit-step.controllableGates circuit-step.phaseGates",
      )
    }
    if (operation.tagName === "CONTROL-GATE") {
      operation.setAttribute("data-targets", "circuit-step.controlGates")
    }

    this.updateConnections()
  }

  private quantumCircuitElement(): QuantumCircuitElement | null {
    return this.closest("quantum-circuit") as QuantumCircuitElement
  }

  toJson(): string {
    const jsons = this.dropzones.map((each) => each.toJson())
    return `[${jsons.join(",")}]`
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
    this.setTargetAttributes()
    this.addSlotChangeEventListener()
    this.updateConnections()
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
            flex-direction: row-reverse;
          }

          ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
            margin-right: 1rem;
          }

          @media (min-width: 768px) {
            #body {
              flex-direction: column;
            }

            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: 1rem;
              margin-right: 0;
            }
          }
        </style>

        <div id="body">
          <slot data-target="circuit-step.slotEl"></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  private setTargetAttributes(): void {
    for (const each of Array.from(this.querySelectorAll("circuit-dropzone"))) {
      each.setAttribute("data-targets", "circuit-step.dropzones")
    }

    for (const each of Array.from(
      this.querySelectorAll(
        "h-gate,x-gate,y-gate,z-gate,rnot-gate,rx-gate,ry-gate,rz-gate",
      ),
    )) {
      each.setAttribute("data-targets", "circuit-step.controllableGates")
    }

    for (const each of Array.from(this.querySelectorAll("phase-gate"))) {
      each.setAttribute(
        "data-targets",
        "circuit-step.controllableGates circuit-step.phaseGates",
      )
    }

    for (const each of Array.from(this.querySelectorAll("control-gate"))) {
      each.setAttribute("data-targets", "circuit-step.controlGates")
    }

    for (const each of Array.from(this.querySelectorAll("swap-gate"))) {
      each.setAttribute(
        "data-targets",
        "circuit-step.controllableGates circuit-step.swapGates",
      )
    }
  }

  private addSlotChangeEventListener(): void {
    this.slotEl.addEventListener("slotchange", () => {
      this.setTargetAttributes()

      for (const dropzone of this.dropzones) {
        const prevDropzone = dropzone.prev()
        if (prevDropzone === null) {
          dropzone.inputWireQuantum = false
          dropzone.outputWireQuantum = false
        } else {
          dropzone.inputWireQuantum = prevDropzone.outputWireQuantum
          dropzone.outputWireQuantum = prevDropzone.outputWireQuantum
        }
      }

      this.updateConnections()
    })
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

    // CPHASE
    for (const phaseGate of this.phaseGates) {
      if (phaseGate.phi === "") continue

      const all = this.phaseGates.filter((each) => {
        return each.phi === phaseGate.phi
      })
      for (const cp of all) {
        cp.wireTop = all.some((each) => {
          return this.bit(each) < this.bit(cp)
        })
        cp.wireBottom = all.some((each) => {
          return this.bit(each) > this.bit(cp)
        })
      }

      for (const dropzone of this.dropzones) {
        if (dropzone.draggable) continue

        const bits = all.map((each) => this.bit(each))
        const minBit = Math.min(...bits)
        const maxBit = Math.max(...bits)

        if (
          minBit < this.dropzones.indexOf(dropzone) &&
          this.dropzones.indexOf(dropzone) < maxBit
        ) {
          dropzone.wireTop = true
          dropzone.wireBottom = true
        }
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
}
