import { attr, controller, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { BlochDisplayElement } from "components/blochDisplayElement"
import { CircuitBlockElement } from "components/circuitBlockElement"
import { CircuitDropzoneElement } from "components/circuitDropzoneElement"
import { CircuitOperation } from "lib"
import { CircuitStepElement } from "components/circuitStepElement"
import { ControlGateElement } from "components/controlGateElement"
import { DragAndDroppable } from "./mixins"
import { HGateElement } from "components/hGateElement"
import { MeasurementGateElement } from "components/measurementGateElement"
import { PhaseGateElement } from "components/phaseGateElement"
import { RnotGateElement } from "components/rnotGateElement"
import { RxGateElement } from "components/rxGateElement"
import { RyGateElement } from "components/ryGateElement"
import { RzGateElement } from "components/rzGateElement"
import { SwapGateElement } from "components/swapGateElement"
import { Util } from "lib/base"
import { WriteGateElement } from "components/writeGateElement"
import { XGateElement } from "components/xGateElement"
import { YGateElement } from "components/yGateElement"
import { ZGateElement } from "components/zGateElement"

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
  @attr title = ""

  @target slotEl: HTMLSlotElement
  @targets blocks: CircuitBlockElement[]

  private breakpointStepIndex = 0

  get steps(): CircuitStepElement[] {
    return Array.from(
      this.querySelectorAll("circuit-step"),
    ) as CircuitStepElement[]
  }

  get breakpoint(): CircuitStepElement {
    for (const each of this.steps) {
      if (each.breakpoint) return each
    }
    this.setBreakpoint(this.breakpointStepIndex)
    return this.steps[this.breakpointStepIndex]
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
    const qubitCount = this.qubitCount
    return this.steps.map((each) => each.serialize().slice(0, qubitCount))
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
    const el = new CircuitStepElement()

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
    this.applyOperation(new HGateElement(), ...targetQubits)
    this.resize()
    return this
  }

  x(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(new XGateElement(), ...targetQubits)
    this.resize()
    return this
  }

  y(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(new YGateElement(), ...targetQubits)
    this.resize()
    return this
  }

  z(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(new ZGateElement(), ...targetQubits)
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
    this.applyOperation(new RnotGateElement(), ...targetQubits)
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
    this.applyOperation(new ControlGateElement(), ...targetQubits)
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
    circuitStep.dropzones[control].assign(new ControlGateElement())
    circuitStep.dropzones[xTarget].assign(new XGateElement())

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
    circuitStep.dropzones[controlA].assign(new ControlGateElement())
    circuitStep.dropzones[controlB].assign(new ControlGateElement())
    circuitStep.dropzones[xTarget].assign(new XGateElement())

    this.resize()

    return this
  }

  swap(targetA: number, targetB: number): QuantumCircuitElement {
    this.applyOperation(new SwapGateElement(), targetA, targetB)
    this.resize()
    return this
  }

  bloch(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(new BlochDisplayElement(), ...targetQubits)
    this.resize()
    return this
  }

  write(value: "0" | "1", ...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(WriteGateElement.create(value), ...targetQubits)
    this.resize()
    return this
  }

  measure(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(new MeasurementGateElement(), ...targetQubits)
    this.resize()
    return this
  }

  block(
    comment: string,
    blockDef: (c: QuantumCircuitElement) => void,
  ): QuantumCircuitElement {
    const block = new CircuitBlockElement()
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
    this.loadFromJson()
    this.updateAllSteps()
    this.updateQubitAndWireCount()

    this.addEventListener("dragAndDroppable.ungrab", () => {
      this.editing = false
    })
    this.addEventListener("dragAndDroppable.ungrab", this.resize)
    this.addEventListener("dragAndDroppable.ungrab", this.enableDraggablesHover)
    this.addEventListener(
      "dragAndDroppable.ungrab",
      this.dispatchStepMouseenterEvent,
    )

    this.addEventListener("dragAndDroppable.enddragging", () => {
      this.editing = false
    })
    this.addEventListener("dragAndDroppable.enddragging", this.resize)
    this.addEventListener(
      "dragAndDroppable.enddragging",
      this.enableDraggablesHover,
    )
    this.addEventListener(
      "dragAndDroppable.enddragging",
      this.dispatchStepMouseenterEvent,
    )

    this.addEventListener("dragAndDroppable.trash", () => {
      this.editing = false
    })

    this.addEventListener("step.snap", this.snapStep)
    this.addEventListener("step.snap", this.updateStepConnections)
    this.addEventListener("step.snap", this.updateWires)
    this.addEventListener("step.snap", this.updateQubitAndWireCount)

    this.addEventListener("step.unsnap", this.unsnapStep)
    this.addEventListener("step.unsnap", this.updateStepConnections)
    this.addEventListener("step.unsnap", this.updateWires)
    this.addEventListener("step.unsnap", this.updateQubitAndWireCount)

    this.addEventListener("mouseleave", this.dispatchCircuitMouseLeaveEvent)

    this.dispatchEvent(new Event("circuit.load", { bubbles: true }))
  }

  private updateQubitAndWireCount(): void {
    const steps = this.steps

    if (steps.length === 0) {
      this.qubitCount = 1
      this.wireCount = this.minWireCount
      return
    }

    const maxStepQubitCount = Math.max(...steps.map((each) => each.qubitCount))
    if (maxStepQubitCount === 0) {
      this.qubitCount = 1
      this.wireCount = this.minWireCount
      return
    }

    const firstStep = steps[0]
    Util.notNull(firstStep)
    const wireCount = firstStep.wireCount

    this.qubitCount = maxStepQubitCount
    this.wireCount =
      wireCount > this.minWireCount ? wireCount : this.minWireCount
  }

  private dispatchStepMouseenterEvent(event: Event): void {
    const x = (event as CustomEvent).detail.x
    const y = (event as CustomEvent).detail.y
    const el = document.elementFromPoint(x, y)
    const step = el?.closest("circuit-step") as CircuitStepElement

    step?.dispatchStepMouseenterEvent()
  }

  private dispatchCircuitMouseLeaveEvent(): void {
    for (const each of this.steps) {
      each.active = false
    }
    this.dispatchEvent(new Event("circuit.mouseleave", { bubbles: true }))
  }

  setBreakpoint(stepIndex: number): void {
    const step = this.steps[stepIndex]
    this.breakpointStepIndex = stepIndex

    for (const each of this.steps) {
      each.breakpoint = false
    }
    step!.breakpoint = true
  }

  private snapStep(event: Event): void {
    if (!this.interactive) return

    const step = (event as CustomEvent).detail.step as CircuitStepElement

    for (const each of this.steps) {
      if (this.editing) each.active = false
      each.snap = false
    }
    if (this.editing) step.active = true
    step.snap = true
  }

  private unsnapStep(event: Event): void {
    if (!this.interactive) return

    const step = (event as CustomEvent).detail.step as CircuitStepElement

    if (this.editing) step.active = false
    step.snap = false
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

        <div id="body">
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
      jsonString = Util.urlJson
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
    this.title = (jsonData.title || "").trim()

    for (const step of jsonData.cols) {
      const circuitStep = this.appendStep()

      for (const instruction of step) {
        switch (true) {
          case /^\|0>$/.test(instruction): {
            circuitStep.appendOperation(
              WriteGateElement.create("0", { dragAndDrop: this.updateUrl }),
            )
            break
          }
          case /^\|1>$/.test(instruction): {
            circuitStep.appendOperation(
              WriteGateElement.create("1", { dragAndDrop: this.updateUrl }),
            )
            break
          }
          case /^H$/.test(instruction): {
            circuitStep.appendOperation(
              HGateElement.create({ dragAndDrop: this.updateUrl }),
            )
            break
          }
          case /^H<(.+)$/.test(instruction): {
            circuitStep.appendOperation(
              HGateElement.create({
                dragAndDrop: this.updateUrl,
                ifVar: RegExp.$1.trim(),
              }),
            )
            break
          }
          case /^X$/.test(instruction): {
            circuitStep.appendOperation(
              XGateElement.create({ dragAndDrop: this.updateUrl }),
            )
            break
          }
          case /^X<(.+)$/.test(instruction): {
            circuitStep.appendOperation(
              XGateElement.create({
                dragAndDrop: this.updateUrl,
                ifVar: RegExp.$1.trim(),
              }),
            )
            break
          }
          case /^Y$/.test(instruction): {
            circuitStep.appendOperation(
              YGateElement.create({ dragAndDrop: this.updateUrl }),
            )
            break
          }
          case /^Z$/.test(instruction): {
            circuitStep.appendOperation(
              ZGateElement.create({ dragAndDrop: this.updateUrl }),
            )
            break
          }
          case /^P$/.test(instruction): {
            circuitStep.appendOperation(
              PhaseGateElement.create({
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^P\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              PhaseGateElement.create({
                phi: RegExp.$1.replace("_", "/"),
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^X\^½$/.test(instruction): {
            const rnotGate = new RnotGateElement()
            rnotGate.dragAndDrop = this.updateUrl
            circuitStep.appendOperation(rnotGate)
            break
          }
          case /^X\^½<(.+)$/.test(instruction): {
            const rnotGate = new RnotGateElement()
            rnotGate.dragAndDrop = this.updateUrl
            rnotGate.if = RegExp.$1.trim()
            circuitStep.appendOperation(rnotGate)
            break
          }
          case /^Rx$/.test(instruction): {
            circuitStep.appendOperation(
              RxGateElement.create({
                theta: "π/2",
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Rx\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              RxGateElement.create({
                theta: RegExp.$1.replace("_", "/"),
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Ry$/.test(instruction): {
            circuitStep.appendOperation(
              RyGateElement.create({
                theta: "π/2",
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Ry\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              RyGateElement.create({
                theta: RegExp.$1.replace("_", "/"),
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Rz$/.test(instruction): {
            circuitStep.appendOperation(
              RzGateElement.create({
                theta: "π/2",
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Rz\((.+)\)$/.test(instruction): {
            circuitStep.appendOperation(
              RzGateElement.create({
                theta: RegExp.$1.replace("_", "/"),
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Swap$/.test(instruction): {
            circuitStep.appendOperation(
              SwapGateElement.create({
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^•$/.test(instruction): {
            circuitStep.appendOperation(
              ControlGateElement.create({
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Bloch$/.test(instruction): {
            circuitStep.appendOperation(
              BlochDisplayElement.create({
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Measure$/.test(instruction): {
            circuitStep.appendOperation(
              MeasurementGateElement.create({
                dragAndDrop: this.updateUrl,
              }),
            )
            break
          }
          case /^Measure>(.+)$/.test(instruction): {
            circuitStep.appendOperation(
              MeasurementGateElement.create({
                dragAndDrop: this.updateUrl,
                flag: RegExp.$1.trim(),
              }),
            )
            break
          }
          case /^[[{](.+)$/.test(instruction): {
            const comment = RegExp.$1
            circuitStep.remove()
            circuitBlock = new CircuitBlockElement()
            circuitBlock.comment = comment
            circuitBlock.setAttribute("data-targets", "quantum-circuit.blocks")
            this.append(circuitBlock)
            break
          }
          case /^[\]}]$/.test(instruction): {
            circuitStep.remove()
            circuitBlock!.finalize()
            break
          }
          default: {
            if (instruction === 1) {
              if (circuitStep.qubitCount === 0) {
                circuitStep.keep = true
              } else {
                circuitStep.keep = false
              }
            } else {
              throw new Error(`Unknown instruction: ${instruction}`)
            }
            circuitStep.appendDropzone()
          }
        }
        circuitStep.updateConnections()
      }
    }

    this.resize()
  }

  updateStepConnections(event: Event): void {
    const step = (event as CustomEvent).detail.step as CircuitStepElement

    step.updateConnections()
  }

  private updateWires(event: Event): void {
    const dropzone = (event as CustomEvent).detail
      .dropzone as CircuitDropzoneElement
    const index = dropzone.index()
    Util.notNull(index)

    let wireQuantum = false
    for (const step of this.steps) {
      const dz = step.dropzones[index] as CircuitDropzoneElement
      Util.notNull(dz)

      dz.inputWireQuantum = wireQuantum
      if (dz.draggableTagName === "write-gate") {
        dz.inputWireQuantum = wireQuantum
        dz.outputWireQuantum = true
        wireQuantum = true
      } else if (dz.draggableTagName === "measurement-gate") {
        dz.inputWireQuantum = wireQuantum
        dz.outputWireQuantum = false
        wireQuantum = false
      } else {
        dz.inputWireQuantum = wireQuantum
        dz.outputWireQuantum = wireQuantum
      }
    }
  }

  private updateAllSteps(): void {
    for (const each of this.steps) {
      each.updateWires()
      each.updateConnections()
    }
  }

  prepareDraggableDrop(): void {
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

  private get draggables(): DragAndDroppable[] {
    return Array.from(
      this.querySelectorAll("[data-drag-and-drop]"),
    ) as unknown as DragAndDroppable[]
  }

  private get draggablesOnCircuit(): DragAndDroppable[] {
    return Array.from(
      this.querySelectorAll("[data-drag-and-drop]:not([data-grabbed])"),
    ) as unknown as DragAndDroppable[]
  }

  private appendWire(): void {
    if (this.qubitCount >= this.maxWireCount) return

    this.wireCount += 1

    for (const each of this.steps) {
      each.appendDropzone()
    }
  }

  private appendCircuitStepShadow(): void {
    const largestStep = this.largestStep
    const stepLength = largestStep!.wireCount

    for (const each of this.steps) {
      const step = new CircuitStepElement()
      step.shadow = true
      for (let i = 0; i < stepLength; i++) {
        step.appendDropzone()
      }

      const stepParentEl = each.parentElement as
        | QuantumCircuitElement
        | CircuitBlockElement
      Util.notNull(stepParentEl)

      stepParentEl.insertBefore(step, each.nextSibling)
    }

    const step = new CircuitStepElement()
    step.shadow = true
    for (let i = 0; i < stepLength; i++) {
      step.appendDropzone()
    }

    this.prepend(step)
  }

  resize(): void {
    this.removeEmptySteps()
    this.appendMinimumSteps()
    this.removeLastEmptyWires()
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

    const firstStep = this.steps[0]
    Util.notNull(firstStep)
    this.wireCount = firstStep.wireCount
  }

  clear(): void {
    Util.updateUrlJson('{"cols":[]}')
    location.reload()
  }

  toJson(): string {
    let isInBlock = false
    const cols = []

    for (const each of this.nonEmptySteps) {
      if (each.isInBlock) {
        if (!isInBlock) {
          const block = each.block
          cols.push(`["[${block.comment}"]`)
          isInBlock = true
        }
      } else {
        if (isInBlock) {
          cols.push('["]"]')
          isInBlock = false
        }
      }
      cols.push(each.toJson())
    }

    if (isInBlock) {
      cols.push('["]"]')
    }

    if (this.title !== "") {
      return `{"cols":[${cols.join(",")}],"title":"${this.title}"}`
    } else {
      return `{"cols":[${cols.join(",")}]}`
    }
  }
}
