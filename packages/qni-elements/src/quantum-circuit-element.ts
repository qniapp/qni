import {html, render} from '@github/jtml'
import {isMeasurementGateElement, isWriteGateElement} from './operation'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {CircuitStepElement} from './circuit-step-element'
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

  x(...targetQubits: number[]): QuantumCircuitElement {
    const step = new CircuitStepElement()
    this.append(step)

    const nqubit = Math.max(...targetQubits) + 1
    for (let i = 0; i < nqubit; i++) {
      const dropzone = new CircuitDropzoneElement()
      step.append(dropzone)
    }

    for (const each of targetQubits) {
      const xGate = new XGateElement()
      step.dropzones[each].append(xGate)
    }

    return this
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
      const dropzone = step.dropzones[wireIndex]
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
