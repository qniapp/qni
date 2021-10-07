import { attr, controller, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import { CircuitBlockElement } from "circuit_block_component/circuitBlockElement"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { CircuitOperation } from "lib/operation"
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

@controller
export class QuantumCircuitElement extends HTMLElement {
  @attr json = ""
  @attr updateUrl = false
  @attr minWireCount = 1
  @attr maxWireCount = 10
  @attr wireCount = 1
  @attr minStepCount = 1
  @attr interactive = false
  @attr editing = false
  @attr qubitCount = 1

  @target slotEl: HTMLSlotElement
  @targets blocks: CircuitBlockElement[]

  get steps(): CircuitStepElement[] {
    return Array.from(
      this.querySelectorAll("circuit-step"),
    ) as CircuitStepElement[]
  }

  get breakpoint(): CircuitStepElement | null {
    for (const each of this.steps) {
      if (each.breakpoint) return each
    }
    return null
  }

  get activeStep(): CircuitStepElement | null {
    for (const each of this.steps) {
      if (each.active) return each
    }
    return null
  }

  get snappedStep(): CircuitStepElement | null {
    for (const each of this.steps) {
      if (each.snap) return each
    }
    return null
  }

  get serializedSteps(): CircuitOperation[][] {
    return this.steps.map((each) => each.serialize())
  }

  private get emptySteps(): CircuitStepElement[] {
    return this.steps.filter((each) => each.isEmpty)
  }

  private get nonEmptySteps(): CircuitStepElement[] {
    return this.steps.filter((each) => !each.isEmpty)
  }

  private get largestStep(): CircuitStepElement | null {
    let step = null
    let max = 0

    for (const each of this.steps) {
      if (each.wireCount > 0 && each.wireCount > max) {
        step = each
        max = each.wireCount
      }
    }

    return step
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

  private appendStep(): CircuitStepElement {
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
    const step = this.appendStep()
    step.keep = true
    this.resize()
    return this
  }

  h(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(HGateElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  x(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(XGateElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  y(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(YGateElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  z(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(ZGateElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  phase(phi: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(
      PhaseGateElement.create({ phi: phi.toString() }),
      ...targetQubits,
    )
    this.resize()
    return this
  }

  rnot(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(RnotGateElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  rx(theta: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(
      RxGateElement.create({ theta: theta.toString() }),
      ...targetQubits,
    )
    this.resize()
    return this
  }

  ry(theta: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(
      RyGateElement.create({ theta: theta.toString() }),
      ...targetQubits,
    )
    this.resize()
    return this
  }

  rz(theta: number, ...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(
      RzGateElement.create({ theta: theta.toString() }),
      ...targetQubits,
    )
    this.resize()
    return this
  }

  control(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(ControlGateElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  cnot(control: number, xTarget: number): QuantumCircuitElement {
    this.validateQubits(control, xTarget)

    const circuitStep = this.appendStep()
    const nqubit = Math.max(control, xTarget) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }
    circuitStep.dropzones[control].assign(ControlGateElement.create())
    circuitStep.dropzones[xTarget].assign(XGateElement.create())

    this.resize()

    return this
  }

  ccnot(
    controlA: number,
    controlB: number,
    xTarget: number,
  ): QuantumCircuitElement {
    this.validateQubits(controlA, controlB, xTarget)

    const circuitStep = this.appendStep()
    const nqubit = Math.max(controlA, controlB, xTarget) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }
    circuitStep.dropzones[controlA].assign(ControlGateElement.create())
    circuitStep.dropzones[controlB].assign(ControlGateElement.create())
    circuitStep.dropzones[xTarget].assign(XGateElement.create())

    this.resize()

    return this
  }

  swap(targetA: number, targetB: number): QuantumCircuitElement {
    this.applyOperation(SwapGateElement.create(), targetA, targetB)
    this.resize()
    return this
  }

  bloch(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(BlochDisplayElement.create(), ...targetQubits)
    this.resize()
    return this
  }

  write(value: "0" | "1", ...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(WriteGateElement.create(value), ...targetQubits)
    this.resize()
    return this
  }

  measure(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(MeasurementGateElement.create(), ...targetQubits)
    this.resize()
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
    this.addEventListener("draggable.grab", this.prepareDraggableDrop)
    this.addEventListener("draggable.ungrab", () => {
      this.editing = false
    })
    this.addEventListener("draggable.ungrab", this.resize)
    this.addEventListener("draggable.ungrab", this.enableDraggablesHover)
    this.addEventListener("draggable.ungrab", this.dispatchStepHoverEvent)

    this.addEventListener("draggable.enddragging", () => {
      this.editing = false
    })
    this.addEventListener("draggable.enddragging", this.resize)
    this.addEventListener("draggable.enddragging", this.enableDraggablesHover)
    this.addEventListener("draggable.enddragging", this.dispatchStepHoverEvent)

    this.addEventListener("step.click", this.breakpointClickedStep)
    this.addEventListener("step.hover", this.hoverStep)

    this.addEventListener("step.snap", this.snapStep)
    this.addEventListener("step.snap", this.updateAllSteps)
    this.addEventListener("step.snap", this.updateNqubit)

    this.addEventListener("step.unsnap", this.updateAllSteps)
    this.addEventListener("step.unsnap", this.updateNqubit)

    this.addEventListener("mouseleave", this.dispatchCircuitMouseLeaveEvent)

    this.addEventListener("operation.update", this.updateJsonUrl)

    this.attachShadow({ mode: "open" })
    this.update()
    this.loadFromJson()
    this.updateAllSteps()
    this.updateNqubit()

    this.dispatchEvent(new Event("circuit.loaded", { bubbles: true }))
  }

  private updateNqubit(): void {
    const steps = this.steps

    if (steps.length === 0) {
      this.qubitCount = 1
      this.wireCount = this.minWireCount
      return
    }

    const maxLength = Math.max(...steps.map((each) => each.nqubit))
    if (maxLength === 0) {
      this.qubitCount = 1
      this.wireCount = this.minWireCount
      return
    }

    this.qubitCount = maxLength
    if (maxLength > this.minWireCount) {
      this.wireCount = maxLength
    } else {
      this.wireCount = this.minWireCount
    }
  }

  private dispatchStepHoverEvent(event: CustomEvent): void {
    const x = event.detail.x
    const y = event.detail.y
    const el = document.elementFromPoint(x, y)
    const step = el?.closest("circuit-step") as CircuitStepElement

    step?.dispatchStepHoverEvent()
  }

  private dispatchCircuitMouseLeaveEvent(): void {
    for (const each of this.steps) {
      each.active = false
    }
    this.dispatchEvent(new Event("circuit.mouseleave", { bubbles: true }))
  }

  setBreakpoint(stepIndex: number): void {
    const step = this.steps[stepIndex]

    for (const each of this.steps) {
      each.breakpoint = false
    }
    step!.breakpoint = true
  }

  private breakpointClickedStep(event: Event): void {
    const step = (event as CustomEvent).detail as CircuitStepElement

    for (const each of this.steps) {
      each.breakpoint = false
    }
    step!.breakpoint = true
  }

  private hoverStep(event: Event): void {
    if (this.editing) return

    const step = (event as CustomEvent).detail as CircuitStepElement

    for (const each of this.steps) {
      each.active = false
    }
    step!.active = true
  }

  private snapStep(event: Event): void {
    if (!this.interactive) return

    const step = (event as CustomEvent).detail as CircuitStepElement

    for (const each of this.steps) {
      if (this.editing) each.active = false
      each.snap = false
    }
    if (this.editing) step!.active = true
    step!.snap = true
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
      this.loadFromJson()
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

  private applyOperation(
    operation:
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
      | MeasurementGateElement,
    ...targetQubits: number[]
  ): void {
    this.validateQubits(...targetQubits)

    const circuitStep = this.appendStep()
    const nqubit = Math.max(...targetQubits) + 1

    for (let i = 0; i < nqubit; i++) {
      circuitStep.appendDropzone()
    }
    for (const each of targetQubits) {
      const op = operation.cloneNode() as HTMLElement
      if (op instanceof PhaseGateElement) {
        op.phi = (operation as PhaseGateElement).phi
      }
      if (op instanceof RxGateElement) {
        op.theta = (operation as RxGateElement).theta
      }
      if (op instanceof RyGateElement) {
        op.theta = (operation as RyGateElement).theta
      }
      if (op instanceof RzGateElement) {
        op.theta = (operation as RzGateElement).theta
      }
      if (op instanceof WriteGateElement) {
        op.value = (operation as WriteGateElement).value
      }
      circuitStep.dropzones[each].assign(op)
    }
  }

  private validateQubits(...qubits: number[]): void {
    if (qubits.some((each) => each < 0)) {
      throw new Error(
        "The index of the qubit must be greater than or equal to 0.",
      )
    }
  }

  private loadFromJson(): void {
    let jsonString
    let circuitBlock = null

    if (this.updateUrl) {
      jsonString = this.urlJson
    } else {
      jsonString = this.json
    }

    if (jsonString === "" || jsonString === "new") {
      if (this.updateUrl) {
        this.resize()
      }
      return
    }

    const jsonData = JSON.parse(jsonString)

    for (const step of jsonData.cols) {
      const circuitStep = this.appendStep()

      for (const instruction of step) {
        switch (true) {
          case /^\|0>$/.test(instruction): {
            circuitStep.appendOperation(
              WriteGateElement.create("0", { draggable: this.updateUrl }),
            )
            break
          }
          case /^\|1>$/.test(instruction): {
            circuitStep.appendOperation(
              WriteGateElement.create("1", { draggable: this.updateUrl }),
            )
            break
          }
          case /^H$/.test(instruction): {
            circuitStep.appendOperation(
              HGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^X$/.test(instruction): {
            circuitStep.appendOperation(
              XGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Y$/.test(instruction): {
            circuitStep.appendOperation(
              YGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Z$/.test(instruction): {
            circuitStep.appendOperation(
              ZGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^P$/.test(instruction): {
            circuitStep.appendOperation(
              PhaseGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^P\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              PhaseGateElement.create({
                phi: RegExp.$1.replace("_", "/"),
                draggable: this.updateUrl,
              }),
            )
            break
          }
          case /^X\^½$/.test(instruction): {
            circuitStep.appendOperation(
              RnotGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Rx$/.test(instruction): {
            circuitStep.appendOperation(
              RxGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Rx\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              RxGateElement.create({
                theta: RegExp.$1.replace("_", "/"),
                draggable: this.updateUrl,
              }),
            )
            break
          }
          case /^Ry$/.test(instruction): {
            circuitStep.appendOperation(
              RyGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Ry\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              RyGateElement.create({
                theta: RegExp.$1.replace("_", "/"),
                draggable: this.updateUrl,
              }),
            )
            break
          }
          case /^Rz$/.test(instruction): {
            circuitStep.appendOperation(
              RzGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Rz\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              RzGateElement.create({
                theta: RegExp.$1.replace("_", "/"),
                draggable: this.updateUrl,
              }),
            )
            break
          }
          case /^Swap$/.test(instruction): {
            circuitStep.appendOperation(
              SwapGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^•$/.test(instruction): {
            circuitStep.appendOperation(
              ControlGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Bloch$/.test(instruction): {
            circuitStep.appendOperation(
              BlochDisplayElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^Measure$/.test(instruction): {
            circuitStep.appendOperation(
              MeasurementGateElement.create({ draggable: this.updateUrl }),
            )
            break
          }
          case /^\{(.+)$/.test(instruction): {
            const comment = RegExp.$1
            circuitStep.remove()
            circuitBlock = CircuitBlockElement.create(comment)
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

    this.resize()
  }

  private get urlJson(): string {
    return decodeURIComponent(location.pathname.split("/").pop() || "")
  }

  updateAllSteps(): void {
    for (const each of this.steps) {
      each.updateWires()
      each.updateConnections()
    }
    this.updateJsonUrl()
  }

  private prepareDraggableDrop(event: Event): void {
    event.stopPropagation()

    this.interactive = true
    this.editing = true
    this.disableDraggablesOnCircuitHover()
    this.appendWire()
    this.appendCircuitStepShadow()
  }

  private disableDraggablesOnCircuitHover(): void {
    for (const each of this.draggablesOnCircuit) {
      each.hoverable = false
    }
  }

  private enableDraggablesHover(): void {
    for (const each of this.draggables) {
      each.hoverable = true
    }
  }

  private get draggables(): Draggable[] {
    return Array.from(
      this.querySelectorAll("[data-draggable]"),
    ) as unknown as Draggable[]
  }

  private get draggablesOnCircuit(): Draggable[] {
    return Array.from(
      this.querySelectorAll("[data-draggable]:not([data-grabbed])"),
    ) as unknown as Draggable[]
  }

  private appendWire(): void {
    if (this.qubitCount >= this.maxWireCount) return

    for (const each of this.steps) {
      each.appendDropzone()
    }
  }

  private appendCircuitStepShadow(): void {
    const largestStep = this.largestStep
    const stepLength = largestStep!.wireCount

    for (const each of this.steps) {
      const step = CircuitStepElement.createShadow(stepLength)
      this.insertBefore(step, each.nextSibling)
    }

    const step = CircuitStepElement.createShadow(stepLength)
    this.prepend(step)
  }

  resize(): void {
    this.removeEmptySteps()
    this.appendMinimumSteps()
    this.removeLastEmptyWires()
    this.updateJsonUrl()
  }

  private removeEmptySteps(): void {
    for (const each of this.emptySteps) {
      each.remove()
    }
    for (const each of this.steps) {
      each.shadow = false
    }
  }

  private appendMinimumSteps(): void {
    const nsteps = this.minStepCount - this.steps.length

    for (let i = 0; i < nsteps; i++) {
      this.appendStep()
    }

    const largestNqubit =
      this.largestStep && this.largestStep.wireCount > this.minWireCount
        ? this.largestStep.wireCount
        : this.minWireCount
    for (const each of this.steps) {
      const nDropzone = largestNqubit - each.wireCount
      for (let j = 0; j < nDropzone; j++) {
        each.appendDropzone()
      }
    }
  }

  private removeLastEmptyWires(): void {
    while (
      this.steps.every((each) => {
        return each.wireCount > this.minWireCount && !each.lastDropzone.occupied
      })
    ) {
      for (const each of this.steps) {
        each.lastDropzone.remove()
      }
    }
  }

  clear(): void {
    history.pushState("", "", '{"cols":[]}')
    location.reload()
  }

  private updateJsonUrl(): void {
    if (!this.updateUrl) return

    history.pushState("", "", this.toJson())
  }

  toJson(): string {
    const cols = this.nonEmptySteps.map((each) => each.toJson())
    return `{"cols":[${cols.join(",")}]}`
  }
}
