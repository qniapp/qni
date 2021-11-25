import {Operation, isOperation} from './operation'
import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isAngleable, isIfable, isMenuable} from './mixin'
import {InspectorButtonElement} from './inspector-button-element'
import {OperationInspectorElement} from './operation-inspector-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {isFlaggable} from './mixin/flaggable'
import {isPaletteDropzoneElement} from './util'

@controller
export class CircuitEditorElement extends HTMLElement {
  @target circuit!: QuantumCircuitElement
  @target inspectorButton!: InspectorButtonElement

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.makeOperationsDraggable()

    this.addEventListener('operation-showmenu', this.showOperationMenu)
    this.addEventListener('operation-menu-if', this.showOperationIfInspector)
    this.addEventListener('operation-menu-angle', this.showOperationAngleInspector)
    this.addEventListener('operation-menu-flag', this.showOperationFlagInspector)
    this.addEventListener('operation-grab', this.startCircuitEdit)
    this.addEventListener('operation-grab', this.setOperationActive)
    this.addEventListener('operation-grab', this.setDocumentCursorStyleGrabbing)
    this.addEventListener('operation-grab', this.appendWire)
    this.addEventListener('operation-grab', this.prepareForOperationDrop)
    this.addEventListener('operation-ungrab', this.removeLastEmptyWires)
    this.addEventListener('operation-ungrab', this.removeDocumentCursorStyleGrabbing)
    this.addEventListener('operation-ungrab', this.endCircuitEdit)
    this.addEventListener('operation-enddragging', this.removeLastEmptyWires)
    this.addEventListener('operation-enddragging', this.removeDocumentCursorStyleGrabbing)
    this.addEventListener('operation-enddragging', this.endCircuitEdit)
    this.addEventListener('operation-drop', this.initOperationMenu)
    this.addEventListener('operation-drop', this.setOperationActive)
    this.addEventListener('operation-snap-new', this.addShadowStep)
    this.addEventListener('circuit-dropzone-drop', this.resizeCircuit)
    this.addEventListener('operation-inspector-update-if', this.updateIf)
    this.addEventListener('operation-inspector-update-angle', this.updateAngle)
    this.addEventListener('operation-inspector-update-flag', this.updateFlag)
    document.addEventListener('click', this.maybeDeactivateOperation.bind(this))
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private showOperationMenu(event: Event): void {
    const operation = event.target as Operation

    if (this.inspectorButton.isInspectorShown) {
      this.inspectorButton.showInspector(operation)
    } else {
      operation.showMenu()
    }
  }

  private showOperationIfInspector(event: Event): void {
    const operation = event.target
    if (!isIfable(operation)) throw new Error(`${operation} is not an ifable operation.`)

    const inspectorButton = document.querySelector('inspector-button') as InspectorButtonElement
    inspectorButton.showIfInspector(operation)
  }

  private showOperationAngleInspector(event: Event): void {
    const operation = event.target
    if (!isAngleable(operation)) throw new Error(`${operation} is not an angleable operation.`)

    this.inspectorButton.showAngleInspector(operation)
  }

  private showOperationFlagInspector(event: Event): void {
    const operation = event.target
    if (!isFlaggable(operation)) throw new Error(`${operation} must be a flaggable operation.`)

    this.inspectorButton.showFlagInspector(operation)
  }

  private startCircuitEdit(): void {
    this.circuit.editing = true
  }

  private endCircuitEdit(): void {
    this.circuit.editing = false
  }

  private initOperationMenu(event: Event): void {
    const operation = event.target

    if (isMenuable(operation)) operation.initMenu()
  }

  private setOperationActive(event: Event): void {
    for (const each of this.circuit.operations) {
      each.active = false
    }

    const operation = event.target as Operation
    if (isPaletteDropzoneElement(operation.parentNode)) return

    operation.active = true
  }

  private makeOperationsDraggable(): void {
    for (const each of this.circuit.operations) {
      each.draggable = true
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

  private updateIf(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const activeOperation = this.activeOperation
    if (activeOperation === null) throw new Error('[data-active] not found.')
    if (!isIfable(activeOperation)) throw new Error('[data-if] not found.')

    activeOperation.if = inspector.if
  }

  private updateAngle(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const activeOperation = this.activeOperation
    if (activeOperation === null) throw new Error('[data-active] not found.')
    if (!isAngleable(activeOperation)) throw new Error('[data-angle] not found.')

    activeOperation.angle = inspector.angle
  }

  private updateFlag(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const activeOperation = this.activeOperation
    if (activeOperation === null) throw new Error('[data-active] not found.')
    if (!isFlaggable(activeOperation)) throw new Error('[data-flag] not found.')

    activeOperation.flag = inspector.flag
  }

  private get activeOperation(): Operation | null {
    return this.circuit.querySelector('[data-active]')
  }

  private maybeDeactivateOperation(event: Event): void {
    const clickedEl = event.target as HTMLElement
    const inspectorButton = document.querySelector('inspector-button') as InspectorButtonElement

    if (
      !isOperation(clickedEl) &&
      !inspectorButton.popup.popper.contains(clickedEl) &&
      !inspectorButton.popup.reference.contains(clickedEl) &&
      this.activeOperation !== null
    ) {
      this.activeOperation.active = false
    }
  }
}
