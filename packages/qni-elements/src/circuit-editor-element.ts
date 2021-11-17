import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {Operation} from './operation'
import {QuantumCircuitElement} from './quantum-circuit-element'

@controller
export class CircuitEditorElement extends HTMLElement {
  @target circuit: QuantumCircuitElement

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.makeOperationsDraggable()

    this.addEventListener('operation-grab', this.startCircuitEdit)
    this.addEventListener('operation-grab', this.setDocumentCursorStyleGrabbing)
    this.addEventListener('operation-grab', this.appendWire)
    this.addEventListener('operation-grab', this.prepareForOperationDrop)
    this.addEventListener('operation-ungrab', this.removeLastEmptyWires)
    this.addEventListener('operation-ungrab', this.removeDocumentCursorStyleGrabbing)
    this.addEventListener('operation-ungrab', this.endCircuitEdit)
    this.addEventListener('operation-enddragging', this.removeLastEmptyWires)
    this.addEventListener('operation-enddragging', this.removeDocumentCursorStyleGrabbing)
    this.addEventListener('operation-enddragging', this.endCircuitEdit)
    this.addEventListener('operation-snap-new', this.addShadowStep)
    this.addEventListener('circuit-dropzone-drop', this.resizeCircuit)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private startCircuitEdit(): void {
    this.circuit.editing = true
  }

  private endCircuitEdit(): void {
    this.circuit.editing = false
  }

  private makeOperationsDraggable(): void {
    for (const step of this.circuit.steps) {
      for (const dropzone of step.dropzones) {
        if (dropzone.operation) dropzone.operation.draggable = true
      }
    }
  }

  private appendWire(): void {
    if (this.circuit === null) throw new Error('quantum-circuit element not found.')

    this.circuit.appendWire()
  }

  private prepareForOperationDrop(event: Event): void {
    const operation = event.target as Operation
    if (this.circuit === null) throw new Error('quantum-circuit element not found.')

    operation.setSnapTargets(this.circuit.dropzones, this.circuit.wireCount)
  }

  private removeLastEmptyWires(): void {
    if (this.circuit === null) throw new Error('quantum-circuit element not found.')

    this.circuit.removeLastEmptyWires()
  }

  private setDocumentCursorStyleGrabbing(): void {
    document.documentElement.setAttribute('data-grabbing', '')
  }

  private removeDocumentCursorStyleGrabbing(): void {
    document.documentElement.removeAttribute('data-grabbing')
  }

  private addShadowStep(event: Event): void {
    const customEvent = event as CustomEvent
    const operation = event.target as Operation
    const stepIndex = customEvent.detail.stepIndex as number
    const wireIndex = customEvent.detail.wireIndex as number

    const newStep = this.circuit.addShadowStepAfter(stepIndex)
    const dropzone = newStep.dropzones[wireIndex]

    dropzone.append(operation)
    dropzone.occupied = true
    dropzone.operationName = operation.tagName.toLocaleLowerCase()

    operation.updateSnapTargets(newStep.dropzones)
  }

  private resizeCircuit(): void {
    this.circuit.resize()
  }
}
