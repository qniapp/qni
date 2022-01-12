import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {Interpreter, createMachine, interpret} from 'xstate'
import {Operation, isOperation} from './operation'
import {Util, describe} from '@qni/common'
import {attr, controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isAngleable, isIfable, isMenuable} from './mixin'
import {InspectorButtonElement} from './inspector-button-element'
import {OperationInspectorElement} from './operation-inspector-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {isFlaggable} from './mixin/flaggable'

type CircuitEditorContext = Record<string, never>
type CircuitEditorEvent =
  | {type: 'CLICK_STEP'; step: CircuitStepElement}
  | {type: 'SNAP_STEP'; step: CircuitStepElement}
  | {type: 'UNSNAP_STEP'; step: CircuitStepElement}

export class CircuitEditorElement extends HTMLElement {
  @attr debug = false

  @target circuit!: QuantumCircuitElement
  @target inspectorButton!: InspectorButtonElement

  private circuitEditorMachine = createMachine<CircuitEditorContext, CircuitEditorEvent>(
    {
      id: 'circuit-editor',
      initial: 'idle',
      states: {
        idle: {
          on: {
            CLICK_STEP: {
              target: 'idle',
              actions: ['setBreakpoint']
            },
            SNAP_STEP: {
              target: 'idle',
              actions: ['activateStep']
            },
            UNSNAP_STEP: {
              target: 'idle',
              actions: ['deactivateStep']
            }
          }
        }
      }
    },
    {
      actions: {
        setBreakpoint: (_context, event) => {
          if (event.type !== 'CLICK_STEP') return

          this.circuit.setBreakpoint(event.step)
        },
        activateStep: (_context, event) => {
          if (event.type !== 'SNAP_STEP') return

          this.circuit.activateStep(event.step)
        },
        deactivateStep: (_context, event) => {
          if (event.type !== 'UNSNAP_STEP') return

          event.step.active = false
        }
      }
    }
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private circuitEditorService!: Interpreter<CircuitEditorContext, any, CircuitEditorEvent>

  connectedCallback(): void {
    this.circuitEditorService = interpret(this.circuitEditorMachine)
      .onTransition(state => {
        if (this.debug) {
          // eslint-disable-next-line no-console
          console.log(`circuit-editor: ${describe(state.value)}`)
        }
      })
      .start()

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
    this.addEventListener('operation-inspector-angle-change', this.updateAngle)
    this.addEventListener('operation-inspector-update-flag', this.updateFlag)
    this.addEventListener('circuit-step-mouseenter', this.activateStepUnlessEditing)
    document.addEventListener('click', this.maybeDeactivateOperation.bind(this))

    this.addEventListener('circuit-step-click', this.clickStep)
    this.addEventListener('circuit-step-snap', this.snapStep)
    this.addEventListener('circuit-step-unsnap', this.unsnapStep)
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

      // TODO: dropzone.operationName = ... etc. を dropzone 側でやる
      newDropzone.append(operation)
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

  private activateStepUnlessEditing(event: Event): void {
    if (this.circuit.editing) return

    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuit.activateStep(step)
  }

  private clickStep(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuitEditorService.send({type: 'CLICK_STEP', step})
  }

  private snapStep(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuitEditorService.send({type: 'SNAP_STEP', step})
  }

  private unsnapStep(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuitEditorService.send({type: 'UNSNAP_STEP', step})
  }
}

controller(CircuitEditorElement)
