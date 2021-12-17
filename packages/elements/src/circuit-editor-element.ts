import {Operation, isOperation} from './operation'
import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isAngleable, isIfable, isMenuable} from './mixin'
import {InspectorButtonElement} from './inspector-button-element'
import {OperationInspectorElement} from './operation-inspector-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {Util} from '@qni/common'
import {isCircuitStepElement} from './circuit-step-element'
import {isFlaggable} from './mixin/flaggable'

@controller
export class CircuitEditorElement extends HTMLElement {
  @target circuit!: QuantumCircuitElement
  @target inspectorButton!: InspectorButtonElement

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.makeOperationsDraggable()

    this.addEventListener('quantum-circuit-mouseleave', this.deactivateAllSteps)
    this.addEventListener('operation-active', this.maybeUpdateOperationInspector)
    this.addEventListener('operation-showmenu', this.showOperationMenu)
    this.addEventListener('operation-grab', this.startCircuitEdit)
    this.addEventListener('operation-grab', this.setOperationActive)
    this.addEventListener('operation-grab', this.setDocumentCursorStyleGrabbing)
    this.addEventListener('operation-grab', this.appendWire)
    this.addEventListener('operation-grab', this.setSnapTargets)
    this.addEventListener('operation-ungrab', this.removeLastEmptyWires)
    this.addEventListener('operation-ungrab', this.removeDocumentCursorStyleGrabbing)
    this.addEventListener('operation-ungrab', this.endCircuitEdit)
    this.addEventListener('operation-enddragging', this.removeLastEmptyWires)
    this.addEventListener('operation-enddragging', this.removeDocumentCursorStyleGrabbing)
    this.addEventListener('operation-enddragging', this.endCircuitEdit)
    this.addEventListener('operation-enddragging', this.maybeDisableAllInspectorPanes)
    this.addEventListener('operation-drop', this.initOperationMenu)
    this.addEventListener('operation-in-snap-range', this.snapOperationIntoDropzone)
    this.addEventListener('circuit-dropzone-drop', this.resizeCircuit)
    this.addEventListener('operation-menu-if', this.showOperationIfInspector)
    this.addEventListener('operation-menu-angle', this.showOperationAngleInspector)
    this.addEventListener('operation-menu-flag', this.showOperationFlagInspector)
    this.addEventListener('operation-inspector-update-if', this.updateIf)
    this.addEventListener('operation-inspector-update-angle', this.updateAngle)
    this.addEventListener('operation-inspector-update-flag', this.updateFlag)
    this.addEventListener('circuit-step-click', this.setBreakpoint)
    this.addEventListener('circuit-step-mouseenter', this.activateStepUnlessEditing)
    this.addEventListener('circuit-step-snap', this.activateStep)
    this.addEventListener('circuit-step-unsnap', this.deactivateStep)
    document.addEventListener('click', this.maybeDeactivateOperation.bind(this))
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private deactivateAllSteps(): void {
    if (this.circuit.editing) return

    this.circuit.deactivateAllSteps()
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
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuit.activateOperation(operation)
  }

  private makeOperationsDraggable(): void {
    this.circuit.draggable = true
  }

  private appendWire(): void {
    Util.notNull(this.circuit)

    this.circuit.appendWire()
  }

  private setSnapTargets(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)
    Util.notNull(this.circuit)

    this.circuit.setSnapTargets(operation)
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

  private snapOperationIntoDropzone(event: Event) {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    const customEvent = event as CustomEvent
    const snapTargetInfo = customEvent.detail.snapTargetInfo
    const snapTarget = this.circuit.snapTargetAt(snapTargetInfo.x, snapTargetInfo.y)

    operation.snapped = true

    if (snapTarget.dropzone === null) {
      const stepIndex = snapTarget.stepIndex
      Util.notNull(stepIndex)

      const newStep = this.circuit.addShadowStepAfter(stepIndex)
      const newDropzone = newStep.dropzones[snapTarget.wireIndex]
      Util.notNull(newDropzone)

      // TODO: dropzone.occupied = true, dropzone.operationName = ... etc. を dropzone 側でやる
      newDropzone.append(operation)
      newDropzone.occupied = true
      newDropzone.operationName = operation.tagName.toLocaleLowerCase()

      // TODO: addShadowStepAfter の後で自動的に呼ぶ
      this.circuit.updateSnapTargets(newStep.dropzones)
    } else {
      snapTarget.dropzone.append(operation)
    }
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
    Util.notNull(activeOperation)
    if (!isAngleable(activeOperation)) throw new Error(`${activeOperation.outerHTML}: [data-angle] not found.`)

    activeOperation.angle = inspector.angle
    activeOperation.reducedAngle = inspector.reduceAngleFraction ? inspector.reducedAngle : ''
  }

  private updateFlag(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const activeOperation = this.activeOperation
    if (!isFlaggable(activeOperation)) throw new Error('[data-flag] not found.')

    activeOperation.flag = inspector.flag
  }

  private get activeOperation(): Operation | null {
    return this.circuit.querySelector('circuit-dropzone > [data-active]')
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

  private setBreakpoint(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuit.setBreakpoint(step)
  }

  // TODO: activateStep と処理を共通化
  private activateStepUnlessEditing(event: Event): void {
    if (this.circuit.editing) return

    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuit.activateStep(step)
  }

  private activateStep(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuit.activateStep(step)
  }

  private deactivateStep(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    step.active = false
  }
}
