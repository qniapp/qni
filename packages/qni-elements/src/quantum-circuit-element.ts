import {html, render} from '@github/jtml'
import {isMeasurementGateElement, isWriteGateElement} from './operation'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {CircuitStepElement} from './circuit-step-element'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'
import {controller} from '@github/catalyst'

@controller
export class QuantumCircuitElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.updateAllWires()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
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
  }

  private updateAllWires(): void {
    const firstStep = this.steps[0]
    if (firstStep === undefined) return

    const wireCount = firstStep.dropzones.length
    for (let i = 0; i < wireCount; i++) {
      this.updateWire(i)
    }
  }

  private updateWire(wireIndex: number): void {
    let wireQuantum = false

    for (const step of this.steps) {
      const dropzone = step.dropzoneAt(wireIndex)
      if (dropzone === undefined) throw new Error('dropzone not found.')

      dropzone.inputWireQuantum = wireQuantum
      if (isWriteGateElement(dropzone.operation)) {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = true
        wireQuantum = true
      } else if (isMeasurementGateElement(dropzone.operation)) {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = false
        wireQuantum = false
      } else {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = wireQuantum
      }
    }
  }

  stepAt(stepIndex: number): CircuitStepElement {
    const step = this.steps[stepIndex]
    if (step === undefined) throw new Error(`circuit-step[${stepIndex}] not found.`)

    return step
  }

  private get steps(): CircuitStepElement[] {
    return Array.from<CircuitStepElement>(this.querySelectorAll('circuit-step'))
  }
}
