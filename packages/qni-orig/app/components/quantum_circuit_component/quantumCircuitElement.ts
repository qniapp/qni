import { attr, controller, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import { CircuitBlockElement } from "circuit_block_component/circuitBlockElement"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
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

@controller
export class QuantumCircuitElement extends HTMLElement {
  @attr json = ""

  @target slotEl: HTMLSlotElement
  @targets blocks: CircuitBlockElement[]

  get steps(): CircuitStepElement[] {
    return Array.from(
      this.querySelectorAll("circuit-step"),
    ) as CircuitStepElement[]
  }

  get dropzones(): CircuitDropzoneElement[] {
    return Array.from(
      this.querySelectorAll("circuit-dropzone"),
    ) as CircuitDropzoneElement[]
  }

  get freeDropzones(): CircuitDropzoneElement[] {
    return this.dropzones.filter((each) => {
      return !each.occupied
    })
  }

  step(n: number): CircuitStepElement {
    const el = this.steps[n]
    if (el === undefined) throw new Error(`step ${n} does not exist.`)

    return el
  }

  appendStep(): CircuitStepElement {
    const el = document.createElement("circuit-step") as CircuitStepElement

    const lastBlock = this.blocks.slice(-1)[0] || null
    if (lastBlock === null || lastBlock.finalized) {
      this.append(el)
    } else {
      lastBlock.append(el)
    }

    return el
  }

  i(): QuantumCircuitElement {
    this.appendStep()
    this.maybeAppendMissingDropzones()
    return this
  }

  h(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("h-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  x(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("x-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  y(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("y-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  z(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("z-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  phase(phi: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyAngledSingleGate("phase-gate", phi, ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  rnot(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("rnot-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  rx(theta: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyAngledSingleGate("rx-gate", theta, ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  ry(theta: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyAngledSingleGate("ry-gate", theta, ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  rz(theta: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyAngledSingleGate("rz-gate", theta, ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  control(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("control-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  cnot(control: number, xTarget: number): QuantumCircuitElement {
    if (control < 0 || xTarget < 0)
      throw new Error(
        "The index of the qubit must be greater than or equal to 0.",
      )

    const circuitStep = this.appendStep()
    const nqubit = Math.max(control, xTarget) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }

    const controlGate = document.createElement("control-gate")
    circuitStep.dropzones[control].assignOperationElement(controlGate)

    const xGate = document.createElement("x-gate")
    circuitStep.dropzones[xTarget].assignOperationElement(xGate)

    this.maybeAppendMissingDropzones()

    return this
  }

  ccnot(
    controlA: number,
    controlB: number,
    xTarget: number,
  ): QuantumCircuitElement {
    if (controlA < 0 || controlB < 0 || xTarget < 0)
      throw new Error(
        "The index of the qubit must be greater than or equal to 0.",
      )

    const circuitStep = this.appendStep()
    const nqubit = Math.max(controlA, controlB, xTarget) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }

    const controlGateA = document.createElement("control-gate")
    circuitStep.dropzones[controlA].assignOperationElement(controlGateA)

    const controlGateB = document.createElement("control-gate")
    circuitStep.dropzones[controlB].assignOperationElement(controlGateB)

    const xGate = document.createElement("x-gate")
    circuitStep.dropzones[xTarget].assignOperationElement(xGate)

    this.maybeAppendMissingDropzones()

    return this
  }

  swap(targetA: number, targetB: number): QuantumCircuitElement {
    this.applySingleGate("swap-gate", targetA, targetB)
    this.maybeAppendMissingDropzones()
    return this
  }

  bloch(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("bloch-display", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  write(value: 0 | 1, ...targetQubits: number[]): QuantumCircuitElement {
    if (targetQubits.some((each) => each < 0))
      throw new Error(
        "The index of the qubit must be greater than or equal to 0.",
      )

    const circuitStep = this.appendStep()
    const nqubit = Math.max(...targetQubits) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }

    for (const each of targetQubits) {
      const writeGate = document.createElement("write-gate") as WriteGateElement
      writeGate.value = value.toString()
      circuitStep.dropzones[each].assignOperationElement(writeGate)
    }

    this.maybeAppendMissingDropzones()

    return this
  }

  measure(...targetQubits: number[]): QuantumCircuitElement {
    this.applySingleGate("measurement-gate", ...targetQubits)
    this.maybeAppendMissingDropzones()
    return this
  }

  block(
    comment: string,
    blockDef: (c: QuantumCircuitElement) => void,
  ): QuantumCircuitElement {
    const block = document.createElement("circuit-block") as CircuitBlockElement
    block.comment = comment
    block.setAttribute("data-targets", "quantum-circuit.blocks")
    this.append(block)

    blockDef(this)
    block.finalize()

    return this
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
    this.appendJsonSteps()
    this.updateAllSteps()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (this.shadowRoot === null) return
    if (oldValue === newValue) return

    if (name === "data-json") {
      this.update()
      this.appendJsonSteps()
    }
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (min-width: 768px) {
            #body {
              flex-direction: row;
            }
          }
        </style>

        <div
          id="body"
          data-action="circuitchange:quantum-circuit#updateAllSteps"
        >
          <slot data-target="quantum-circuit.slotEl"></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  private applySingleGate(
    elementName:
      | "h-gate"
      | "x-gate"
      | "y-gate"
      | "z-gate"
      | "rnot-gate"
      | "control-gate"
      | "swap-gate"
      | "bloch-display"
      | "measurement-gate",
    ...targetQubits: number[]
  ): void {
    if (targetQubits.some((each) => each < 0))
      throw new Error(
        "The index of the qubit must be greater than or equal to 0.",
      )

    const circuitStep = this.appendStep()
    const nqubit = Math.max(...targetQubits) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }

    for (const each of targetQubits) {
      const gate = document.createElement(elementName)
      circuitStep.dropzones[each].assignOperationElement(gate)
    }
  }

  private applyAngledSingleGate(
    elementName: "phase-gate" | "rx-gate" | "ry-gate" | "rz-gate",
    angle: number,
    ...targetQubits: number[]
  ): void {
    if (targetQubits.some((each) => each < 0))
      throw new Error(
        "The index of the qubit must be greater than or equal to 0.",
      )

    const circuitStep = this.appendStep()
    const nqubit = Math.max(...targetQubits) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }

    for (const each of targetQubits) {
      if (elementName === "phase-gate") {
        const gate = document.createElement(elementName) as PhaseGateElement
        gate.phi = angle.toString()
        circuitStep.dropzones[each].assignOperationElement(gate)
      } else if (elementName === "rx-gate") {
        const gate = document.createElement(elementName) as RxGateElement
        gate.theta = angle.toString()
        circuitStep.dropzones[each].assignOperationElement(gate)
      } else if (elementName === "ry-gate") {
        const gate = document.createElement(elementName) as RyGateElement
        gate.theta = angle.toString()
        circuitStep.dropzones[each].assignOperationElement(gate)
      } else if (elementName === "rz-gate") {
        const gate = document.createElement(elementName) as RzGateElement
        gate.theta = angle.toString()
        circuitStep.dropzones[each].assignOperationElement(gate)
      }
    }
  }

  private maybeAppendMissingDropzones(): void {
    const maxNqubit = Math.max(
      ...this.steps.map((each) => {
        return each.nqubit
      }),
    )

    for (const each of this.steps) {
      const nqubit = each.nqubit
      if (nqubit < maxNqubit) {
        for (let i = 0; i < maxNqubit - nqubit; i++) {
          each.appendDropzone()
        }
      }
    }
  }

  private appendJsonSteps(): void {
    if (this.json === "") return

    const jsonData = JSON.parse(this.json)
    let circuitBlock = null

    for (const step of jsonData.cols) {
      const circuitStep = this.appendStep()

      for (const instruction of step) {
        switch (true) {
          case /^\|0>$/.test(instruction): {
            const el = document.createElement("write-gate") as WriteGateElement
            el.value = "0"
            circuitStep.appendOperation(el)
            break
          }
          case /^\|1>$/.test(instruction): {
            const el = document.createElement("write-gate") as WriteGateElement
            el.value = "1"
            circuitStep.appendOperation(el)
            break
          }
          case /^H$/.test(instruction): {
            const el = document.createElement("h-gate") as HGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^X$/.test(instruction): {
            const el = document.createElement("x-gate") as XGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Y$/.test(instruction): {
            const el = document.createElement("y-gate") as YGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Z$/.test(instruction): {
            const el = document.createElement("z-gate") as ZGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^P$/.test(instruction): {
            const el = document.createElement("phase-gate") as PhaseGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^P\((.+)\)$/.test(instruction): {
            const el = document.createElement("phase-gate") as PhaseGateElement
            el.phi = RegExp.$1.replace("_", "/")
            circuitStep.appendOperation(el)
            break
          }
          case /^X\^½$/.test(instruction): {
            const el = document.createElement("rnot-gate") as RnotGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Rx$/.test(instruction): {
            const el = document.createElement("rx-gate") as RxGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Rx\((.+)\)$/.test(instruction): {
            const el = document.createElement("rx-gate") as RxGateElement
            el.theta = RegExp.$1
            circuitStep.appendOperation(el)
            break
          }
          case /^Ry$/.test(instruction): {
            const el = document.createElement("ry-gate") as RyGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Ry\((.+)\)$/.test(instruction): {
            const el = document.createElement("ry-gate") as RzGateElement
            el.theta = RegExp.$1
            circuitStep.appendOperation(el)
            break
          }
          case /^Rz$/.test(instruction): {
            const el = document.createElement("rz-gate") as RzGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Rz\((.+)\)$/.test(instruction): {
            const el = document.createElement("rz-gate") as RzGateElement
            el.theta = RegExp.$1
            circuitStep.appendOperation(el)
            break
          }
          case /^Swap$/.test(instruction): {
            const el = document.createElement("swap-gate") as SwapGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^•$/.test(instruction): {
            const el = document.createElement(
              "control-gate",
            ) as ControlGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Bloch$/.test(instruction): {
            const el = document.createElement(
              "bloch-display",
            ) as BlochDisplayElement
            circuitStep.appendOperation(el)
            break
          }
          case /^Measure$/.test(instruction): {
            const el = document.createElement(
              "measurement-gate",
            ) as MeasurementGateElement
            circuitStep.appendOperation(el)
            break
          }
          case /^\{(.+)$/.test(instruction): {
            circuitStep.remove()
            circuitBlock = document.createElement(
              "circuit-block",
            ) as CircuitBlockElement
            circuitBlock.comment = RegExp.$1
            circuitBlock.setAttribute("data-targets", "quantum-circuit.blocks")
            this.append(circuitBlock)
            break
          }
          case /^\}$/.test(instruction): {
            circuitStep.remove()
            circuitBlock!.finalize()
            break
          }
          default: {
            if (instruction !== 1) {
              throw new Error(`Unknown instruction: ${instruction}`)
            }
            circuitStep.appendDropzone()
          }
        }
      }
    }
  }

  updateAllSteps(): void {
    for (const each of this.steps) {
      each.updateWires()
      each.updateConnections()
    }
  }
}
