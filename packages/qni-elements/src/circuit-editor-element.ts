import {Operation, isOperation} from './operation'
import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isAngleable, isIfable, isMenuable} from './mixin'
import {InspectorButtonElement} from './inspector-button-element'
import {OperationInspectorElement} from './operation-inspector-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {Util} from './util'
import {isFlaggable} from './mixin/flaggable'

@controller
export class CircuitEditorElement extends HTMLElement {
  @target circuit!: QuantumCircuitElement
  @target inspectorButton!: InspectorButtonElement

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.makeOperationsDraggable()

    this.addEventListener('operation-active', this.maybeUpdateOperationInspector)
    this.addEventListener('operation-showmenu', this.showOperationMenu)
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
    this.addEventListener('operation-enddragging', this.maybeDisableAllInspectorPanes)
    this.addEventListener('operation-drop', this.initOperationMenu)
    this.addEventListener('operation-snap-new', this.addShadowStep)
    this.addEventListener('circuit-dropzone-drop', this.resizeCircuit)
    this.addEventListener('operation-menu-if', this.showOperationIfInspector)
    this.addEventListener('operation-menu-angle', this.showOperationAngleInspector)
    this.addEventListener('operation-menu-flag', this.showOperationFlagInspector)
    this.addEventListener('operation-inspector-update-if', this.updateIf)
    this.addEventListener('operation-inspector-update-angle', this.updateAngle)
    this.addEventListener('operation-inspector-update-flag', this.updateFlag)
    document.addEventListener('click', this.maybeDeactivateOperation.bind(this))
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private maybeUpdateOperationInspector(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} isn't an Operation.`)

    if (this.inspectorButton.isInspectorShown) {
      this.inspectorButton.showInspector(operation)
    }
  }

  private maybeDisableAllInspectorPanes(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} isn't an Operation.`)
    if (operation.snapped) return
    if (!this.inspectorButton.isInspectorShown) return

    this.inspectorButton.inspector.disableAllPanes()
  }

  private showOperationMenu(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} isn't an Operation.`)
    if (this.inspectorButton.isInspectorShown) return

    operation.showMenu()
  }

  private showOperationIfInspector(event: Event): void {
    const operation = event.target
    if (!isIfable(operation)) throw new Error(`${operation} isn't an Ifable Operation.`)

    const inspectorButton = document.querySelector('inspector-button') as InspectorButtonElement
    inspectorButton.showIfInspector(operation)
  }

  private showOperationAngleInspector(event: Event): void {
    const operation = event.target
    if (!isAngleable(operation)) throw new Error(`${operation} isn't an Angleable Operation.`)

    this.inspectorButton.showAngleInspector(operation)
  }

  private showOperationFlagInspector(event: Event): void {
    const operation = event.target
    if (!isFlaggable(operation)) throw new Error(`${operation} isn't a Flaggable Operation.`)

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
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    operation.active = true
  }

  private makeOperationsDraggable(): void {
    for (const each of this.circuit.operations) {
      each.draggable = true
    }
  }

  private appendWire(): void {
    Util.notNull(this.circuit)

    this.circuit.appendWire()
  }

  private prepareForOperationDrop(event: Event): void {
    const operation = event.target as Operation
    Util.notNull(this.circuit)

    operation.setSnapTargets(this.circuit.dropzones, this.circuit.wireCount)
  }

  private removeLastEmptyWires(): void {
    Util.notNull(this.circuit)

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
    if (!isIfable(activeOperation)) throw new Error('[data-if] not found.')

    activeOperation.if = inspector.if
  }

  private updateAngle(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const activeOperation = this.activeOperation
    if (!isAngleable(activeOperation)) throw new Error('[data-angle] not found.')

    activeOperation.angle = inspector.angle
  }

  private updateFlag(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const activeOperation = this.activeOperation
    if (!isFlaggable(activeOperation)) throw new Error('[data-flag] not found.')

    activeOperation.flag = inspector.flag
  }

  private get activeOperation(): Operation | null {
    return this.circuit.querySelector('[data-active]')
  }

  private maybeDeactivateOperation(event: Event): void {
    const clickedEl = event.target as HTMLElement

    if (
      !isOperation(clickedEl) &&
      !this.inspectorButton.popup.popper.contains(clickedEl) &&
      !this.inspectorButton.popup.reference.contains(clickedEl) &&
      this.activeOperation !== null
    ) {
      this.activeOperation.active = false
    }
  }
}
