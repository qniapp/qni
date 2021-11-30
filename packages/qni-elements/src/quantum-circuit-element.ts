import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {CircuitStepElement} from './circuit-step-element'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {Operation} from './operation'
import {Util} from './util'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'
import {YGateElement} from './y-gate-element'

const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== undefined && arg !== null && (arg as Element).tagName === 'CIRCUIT-DROPZONE'

type SnapTarget = {
  dropzone: CircuitDropzoneElement | null
  stepIndex: number | null
  wireIndex: number
}

@controller
export class QuantumCircuitElement extends HTMLElement {
  @attr minStepCount = 1
  @attr minWireCount = 1
  @attr editing = false

  private snapTargets!: {
    [i: number]: {
      [j: number]: SnapTarget
    }
  }

  private get wireCount(): number {
    return this.stepAt(0).wireCount
  }

  private get steps(): CircuitStepElement[] {
    return Array.from<CircuitStepElement>(this.querySelectorAll('circuit-step'))
  }

  private get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll('circuit-dropzone')) as CircuitDropzoneElement[]
  }

  private get operations(): Operation[] {
    return this.dropzones
      .map<Operation | null>(each => each.operation)
      .filter((each: Operation | null) => each !== null) as Operation[]
  }

  private get isVertical(): boolean {
    return window.getComputedStyle(this).flexDirection === 'column'
  }

  /**
   * @category Custom Elements
   */
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.appendMinimumSteps()
    this.appendMinimumWires()
    this.updateAllWires()

    this.addEventListener('circuit-step-occupied', this.updateChangedWire)
    this.addEventListener('circuit-step-snap', this.updateChangedWire)
    this.addEventListener('circuit-step-unsnap', this.updateChangedWire)
  }

  private update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  resize(): void {
    this.removeEmptySteps()
    this.appendMinimumSteps()
    this.appendMinimumWires()
    this.removeLastEmptyWires()
    this.updateAllWires()
  }

  /**
   * @category Circuit Operation
   */
  h(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(HGateElement, ...targetQubits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  x(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(XGateElement, ...targetQubits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  y(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(YGateElement, ...targetQubits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  cnot(control: number, xTarget: number): QuantumCircuitElement {
    const step = new CircuitStepElement()
    this.append(step)

    const nqubit = Math.max(control, xTarget) + 1
    for (let i = 0; i < nqubit; i++) {
      const dropzone = new CircuitDropzoneElement()
      step.append(dropzone)
    }

    step.dropzoneAt(control).append(new ControlGateElement())
    step.dropzoneAt(xTarget).append(new XGateElement())

    this.appendMinimumWires()

    return this
  }

  /**
   * @category Circuit Operation
   */
  write(value: '0' | '1', ...targetQubits: number[]): QuantumCircuitElement {
    const step = new CircuitStepElement()
    this.append(step)

    const nqubit = Math.max(...targetQubits) + 1
    for (let i = 0; i < nqubit; i++) {
      const dropzone = new CircuitDropzoneElement()
      step.append(dropzone)
    }

    for (const each of targetQubits) {
      const writeGate = new WriteGateElement()
      writeGate.value = value
      step.dropzoneAt(each).append(writeGate)
    }

    this.appendMinimumWires()

    return this
  }

  /**
   * @category Circuit Operation
   */
  measure(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(MeasurementGateElement, ...targetQubits)

    return this
  }

  private applyOperation(
    constructor: typeof HGateElement | typeof XGateElement | typeof YGateElement | typeof MeasurementGateElement,
    ...targetQubits: number[]
  ): void {
    const step = new CircuitStepElement()
    this.append(step)

    const nqubit = Math.max(...targetQubits) + 1
    for (let i = 0; i < nqubit; i++) {
      const dropzone = new CircuitDropzoneElement()
      step.append(dropzone)
    }

    for (const each of targetQubits) {
      const operation = new constructor()
      step.dropzoneAt(each).append(operation)
    }

    this.appendMinimumWires()
  }

  private updateAllWires(): void {
    const firstStep = this.steps[0]
    if (firstStep === undefined) return

    const wireCount = firstStep.dropzones.length
    for (let i = 0; i < wireCount; i++) {
      this.updateWire(i)
    }
  }

  activateOperation(operation: Operation): void {
    for (const each of this.operations) {
      each.active = false
    }

    operation.active = true
  }

  appendWire(): void {
    for (const each of this.steps) {
      each.appendDropzone()
    }
  }

  removeLastEmptyWires(): void {
    while (this.steps.every(each => each.wireCount > this.minWireCount && !each.lastDropzone.occupied)) {
      for (const each of this.steps) {
        each.lastDropzone.remove()
      }
    }
  }

  private removeEmptySteps(): void {
    for (const each of this.emptySteps) {
      each.remove()
    }
  }

  private appendMinimumWires(): void {
    const largestStep = this.largestStep
    const largestWireCount =
      largestStep && largestStep.wireCount > this.minWireCount ? largestStep.wireCount : this.minWireCount

    for (const each of this.steps) {
      const nDropzone = largestWireCount - each.wireCount
      for (let i = 0; i < nDropzone; i++) {
        each.appendDropzone()
      }
    }
  }

  private updateWire(wireIndex: number): void {
    let wireQuantum = false

    for (const step of this.steps) {
      const dropzone = step.dropzoneAt(wireIndex)

      dropzone.inputWireQuantum = wireQuantum
      if (dropzone.operationName === 'write-gate') {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = true
        wireQuantum = true
      } else if (dropzone.operationName === 'measurement-gate') {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = false
        wireQuantum = false
      } else {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = wireQuantum
      }
    }
  }

  private updateChangedWire(event: Event): void {
    const step = event.target as CircuitStepElement
    const dropzone = (event as CustomEvent).detail.dropzone as CircuitDropzoneElement
    const wireIndex = step.dropzones.indexOf(dropzone)
    Util.need(wireIndex !== -1, 'circuit-dropzone not found.')

    this.updateWire(wireIndex)
  }

  stepAt(stepIndex: number): CircuitStepElement {
    const step = this.steps[stepIndex]
    Util.notNull(step)

    return step
  }

  private get emptySteps(): CircuitStepElement[] {
    return this.steps.filter(each => each.isEmpty)
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

  private appendMinimumSteps(): void {
    const nsteps = this.minStepCount - this.steps.length

    for (let i = 0; i < nsteps; i++) {
      this.append(new CircuitStepElement())
    }
  }

  addShadowStepAfter(stepIndex: number): CircuitStepElement {
    const newStep = new CircuitStepElement()
    newStep.shadow = true
    for (let i = 0; i < this.wireCount; i++) {
      newStep.appendDropzone()
    }

    if (stepIndex === -1) {
      this.prepend(newStep)
    } else {
      const step = this.steps[stepIndex]
      Util.notNull(step.parentElement)

      step.parentElement.insertBefore(newStep, step.nextSibling)
    }

    return newStep
  }

  /**
   * @category Drag and Drop
   */
  set draggable(value: boolean) {
    for (const each of this.operations) {
      each.draggable = value
    }
  }

  /**
   * @category Drag and Drop
   */
  snapTargetAt(x: number, y: number): SnapTarget {
    if (this.isVertical) {
      return this.snapTargets[y][x]
    } else {
      return this.snapTargets[x][y]
    }
  }

  /**
   * @category Drag and Drop
   */
  setSnapTargets(operation: Operation): void {
    const freeDropzones = this.dropzones.filter(each => !each.occupied)
    const snapTargets = []
    this.snapTargets = {}

    const myDropzone = operation.dropzone
    if (isCircuitDropzoneElement(myDropzone)) freeDropzones.push(myDropzone)

    for (const [dropzoneIndex, each] of Object.entries(this.dropzones)) {
      const snapTarget = each.snapTarget
      const i = this.isVertical ? snapTarget.y : snapTarget.x
      const j = this.isVertical ? snapTarget.x : snapTarget.y
      const wireIndex = parseInt(dropzoneIndex) % this.wireCount

      const prevI = i - operation.snapRange * 0.75
      const nextI = i + operation.snapRange * 0.75

      if (parseInt(dropzoneIndex) < this.wireCount) {
        if (this.isVertical) {
          snapTargets.push({x: j, y: prevI})
        } else {
          snapTargets.push({x: prevI, y: j})
        }
        if (this.snapTargets[prevI] === undefined) this.snapTargets[prevI] = {}
        if (this.snapTargets[prevI][j] === undefined)
          this.snapTargets[prevI][j] = {
            dropzone: null,
            stepIndex: -1,
            wireIndex
          }
      }

      if (this.isVertical) {
        snapTargets.push({x: j, y: nextI})
      } else {
        snapTargets.push({x: nextI, y: j})
      }
      if (this.snapTargets[nextI] === undefined) this.snapTargets[nextI] = {}
      if (this.snapTargets[nextI][j] === undefined)
        this.snapTargets[nextI][j] = {
          dropzone: null,
          stepIndex: Math.floor(parseInt(dropzoneIndex) / this.wireCount),
          wireIndex
        }

      if (!each.occupied || each === myDropzone) {
        snapTargets.push(snapTarget)
      }

      if (this.snapTargets[i] === undefined) this.snapTargets[i] = {}
      if (this.snapTargets[i][j] === undefined)
        this.snapTargets[i][j] = {
          dropzone: each,
          stepIndex: null,
          wireIndex
        }
    }

    operation.snapTargets = snapTargets
  }

  /**
   * @category Drag and Drop
   */
  updateSnapTargets(newDropzones: CircuitDropzoneElement[]): void {
    const firstDropzone = newDropzones[0]
    Util.notNull(firstDropzone)

    const baseI = this.isVertical ? firstDropzone.snapTarget.y : firstDropzone.snapTarget.x

    for (const [i, jv] of Object.entries(this.snapTargets)) {
      if (parseInt(i) <= baseI) continue

      for (const j in jv) {
        const snapTarget = jv[j]
        if (snapTarget.stepIndex === null) continue
        snapTarget.stepIndex += 1
      }
    }

    for (const [wireIndex, each] of Object.entries(newDropzones)) {
      const snapTarget = each.snapTarget
      const i = this.isVertical ? snapTarget.y : snapTarget.x
      const j = this.isVertical ? snapTarget.x : snapTarget.y

      Util.notNull(this.snapTargets[i])

      this.snapTargets[i][j] = {
        dropzone: each,
        stepIndex: null,
        wireIndex: parseInt(wireIndex)
      }
    }
  }
}
