import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {CircuitStepElement} from './circuit-step-element'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'

@controller
export class QuantumCircuitElement extends HTMLElement {
  @attr minStepCount = 1
  @attr minWireCount = 1
  @attr editing = false

  get wireCount(): number {
    return this.stepAt(0).wireCount
  }

  get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll('circuit-dropzone')) as CircuitDropzoneElement[]
  }

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

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  resize(): void {
    this.removeEmptySteps()
    this.appendMinimumSteps()
    this.appendMinimumWires()
    this.removeLastEmptyWires()
    this.updateAllWires()
  }

  h(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(HGateElement, ...targetQubits)

    return this
  }

  x(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(XGateElement, ...targetQubits)

    return this
  }

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

  write(value: '0' | '1', ...targetQubits: number[]): QuantumCircuitElement {
    if (value !== '0' && value !== '1') {
      throw new Error("value must be '0' or '1'")
    }

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

  measure(...targetQubits: number[]): QuantumCircuitElement {
    this.applyOperation(MeasurementGateElement, ...targetQubits)

    return this
  }

  private applyOperation(
    constructor: typeof HGateElement | typeof XGateElement | typeof MeasurementGateElement,
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

  appendWire(): void {
    for (const each of this.steps) {
      each.appendDropzone()
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

  removeLastEmptyWires(): void {
    while (this.steps.every(each => each.wireCount > this.minWireCount && !each.lastDropzone.occupied)) {
      for (const each of this.steps) {
        each.lastDropzone.remove()
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
    if (wireIndex === -1) throw new Error('circuit-dropzone not found.')

    this.updateWire(wireIndex)
  }

  stepAt(stepIndex: number): CircuitStepElement {
    const step = this.steps[stepIndex]
    if (step === undefined) throw new Error(`circuit-step[${stepIndex}] not found.`)

    return step
  }

  get steps(): CircuitStepElement[] {
    return Array.from<CircuitStepElement>(this.querySelectorAll('circuit-step'))
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
      step.parentElement.insertBefore(newStep, step.nextSibling)
    }

    return newStep
  }
}
