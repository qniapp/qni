import {Angleable, Flaggable, Ifable, isAngleable, isIfable, isMenuable} from './mixin'
import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {Interpreter, createMachine, interpret} from 'xstate'
import {Operation, isOperation} from './operation'
import {Util, describe} from '@qni/common'
import {attr, controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {InspectorButtonElement} from './inspector-button-element'
import {OperationInspectorElement} from './operation-inspector-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {isFlaggable} from './mixin/flaggable'

type CircuitEditorContext = Record<string, never>
type CircuitEditorEvent =
  | {type: 'ACTIVATE_OPERATION'; operation: Operation}
  | {type: 'SHOW_OPERATION_MENU'; operation: Operation}
  | {type: 'SHOW_OPERATION_INSPECTOR_IF'; operation: Ifable}
  | {type: 'SHOW_OPERATION_INSPECTOR_ANGLE'; operation: Angleable}
  | {type: 'SHOW_OPERATION_INSPECTOR_FLAG'; operation: Flaggable}
  | {type: 'GRAB_OPERATION'; operation: Operation}
  | {type: 'UNGRAB_OPERATION'; operation: Operation}
  | {type: 'END_DRAGGING_OPERATION'; operation: Operation}
  | {type: 'DROP_OPERATION'; operation: Operation}
  | {type: 'DELETE_OPERATION'}
  | {type: 'OPERATION_IN_SNAP_RANGE'; operation: Operation; x: number; y: number}
  | {type: 'MOUSE_ENTER_STEP'; step: CircuitStepElement}
  | {type: 'MOUSE_LEAVE_CIRCUIT'}
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
      initial: 'inspectable',
      states: {
        inspectable: {
          type: 'compound',
          initial: 'unknown',
          on: {
            DROP_OPERATION: {
              target: 'inspectable',
              actions: ['initOperationMenu', 'resizeCircuit']
            },
            ACTIVATE_OPERATION: {
              target: 'inspectable',
              actions: ['maybeUpdateOperationInspector']
            },
            DELETE_OPERATION: {
              target: 'inspectable',
              actions: ['resizeCircuit']
            }
          },
          states: {
            unknown: {
              always: [
                {target: 'idle', cond: 'isIdle'},
                {target: 'editing', cond: 'isEditing'}
              ]
            },
            idle: {
              entry: 'enableDragging',
              on: {
                GRAB_OPERATION: {
                  target: 'editing',
                  actions: [
                    'startCircuitEdit',
                    'setOperationActive',
                    'addDocumentCursorGrabbingStyle',
                    'appendCircuitWire',
                    'setSnapTargets'
                  ]
                },
                CLICK_STEP: {
                  target: 'idle',
                  actions: ['setBreakpoint']
                },
                MOUSE_ENTER_STEP: {
                  target: 'idle',
                  actions: ['activateStep']
                },
                MOUSE_LEAVE_CIRCUIT: {
                  target: 'idle',
                  actions: ['deactivateAllSteps']
                },
                SHOW_OPERATION_MENU: {
                  target: 'idle',
                  actions: ['showOperationMenu']
                },
                SHOW_OPERATION_INSPECTOR_IF: {
                  target: 'idle',
                  actions: ['showOperationInspectorIf']
                },
                SHOW_OPERATION_INSPECTOR_ANGLE: {
                  target: 'idle',
                  actions: ['showOperationInspectorAngle']
                },
                SHOW_OPERATION_INSPECTOR_FLAG: {
                  target: 'idle',
                  actions: ['showOperationInspectorFlag']
                }
              }
            },
            editing: {
              on: {
                OPERATION_IN_SNAP_RANGE: {
                  target: 'editing',
                  actions: ['snapOperationIntoDropzone']
                },
                SNAP_STEP: {
                  target: 'editing',
                  actions: ['activateStep']
                },
                UNSNAP_STEP: {
                  target: 'editing',
                  actions: ['deactivateStep']
                },
                UNGRAB_OPERATION: {
                  target: 'idle',
                  actions: ['maybeRemoveLastEmptyWires', 'removeDocumentCursorGrabbingStyle', 'endCircuitEdit']
                },
                END_DRAGGING_OPERATION: {
                  target: 'idle',
                  actions: [
                    'maybeRemoveLastEmptyWires',
                    'removeDocumentCursorGrabbingStyle',
                    'endCircuitEdit',
                    'maybeDisableAllInspectorPanes'
                  ]
                }
              }
            }
          }
        }
      }
    },
    {
      guards: {
        isIdle: () => {
          return !this.circuit.editing
        },
        isEditing: () => {
          return this.circuit.editing
        }
      },
      actions: {
        enableDragging: () => {
          this.circuit.draggable = true
        },
        startCircuitEdit: () => {
          this.circuit.editing = true
        },
        endCircuitEdit: () => {
          this.circuit.editing = false
        },
        setOperationActive: (_context, event) => {
          if (event.type !== 'GRAB_OPERATION') return

          this.circuit.activateOperation(event.operation)
        },
        snapOperationIntoDropzone: (_context, event) => {
          if (event.type !== 'OPERATION_IN_SNAP_RANGE') return

          const operation = event.operation
          const snapTarget = this.circuit.snapTargetAt(event.x, event.y)

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
        },
        addDocumentCursorGrabbingStyle: () => {
          document.documentElement.setAttribute('data-grabbing', '')
        },
        removeDocumentCursorGrabbingStyle: () => {
          document.documentElement.removeAttribute('data-grabbing')
        },
        appendCircuitWire: () => {
          this.circuit.appendWire()
        },
        maybeRemoveLastEmptyWires: () => {
          this.circuit.removeLastEmptyWires()
        },
        resizeCircuit: () => {
          this.circuit.resize()
        },
        setSnapTargets: (_context, event) => {
          if (event.type !== 'GRAB_OPERATION') return

          this.circuit.setSnapTargets(event.operation)
        },
        setBreakpoint: (_context, event) => {
          if (event.type !== 'CLICK_STEP') return

          this.circuit.setBreakpoint(event.step)
        },
        activateStep: (_context, event) => {
          if (event.type !== 'MOUSE_ENTER_STEP' && event.type !== 'SNAP_STEP') return

          this.circuit.activateStep(event.step)
        },
        deactivateStep: (_context, event) => {
          if (event.type !== 'UNSNAP_STEP') return

          event.step.active = false
        },
        deactivateAllSteps: () => {
          this.circuit.deactivateAllSteps()
        },
        maybeDisableAllInspectorPanes: (_context, event) => {
          if (event.type !== 'END_DRAGGING_OPERATION') return

          const operation = event.operation
          if (operation.snapped) return
          if (!this.inspectorButton.isInspectorShown) return

          this.inspectorButton.inspector.disableAllPanes()
        },
        initOperationMenu: (_context, event) => {
          if (event.type !== 'DROP_OPERATION') return

          const operation = event.operation
          if (isMenuable(operation)) operation.initMenu()
        },
        showOperationMenu: (_context, event) => {
          if (event.type !== 'SHOW_OPERATION_MENU') return
          if (this.inspectorButton.isInspectorShown) return

          event.operation.showMenu()
        },
        showOperationInspectorIf: (_context, event) => {
          if (event.type !== 'SHOW_OPERATION_INSPECTOR_IF') return

          this.inspectorButton.showIfInspector(event.operation)
        },
        showOperationInspectorAngle: (_context, event) => {
          if (event.type !== 'SHOW_OPERATION_INSPECTOR_ANGLE') return

          this.inspectorButton.showAngleInspector(event.operation)
        },
        showOperationInspectorFlag: (_context, event) => {
          if (event.type !== 'SHOW_OPERATION_INSPECTOR_FLAG') return

          this.inspectorButton.showFlagInspector(event.operation)
        },
        maybeUpdateOperationInspector: (_context, event) => {
          if (event.type !== 'ACTIVATE_OPERATION') return

          const operation = event.operation
          if (this.inspectorButton.isInspectorShown) {
            this.inspectorButton.showInspector(operation)
          }
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

    this.addEventListener('operation-inspector-update-if', this.updateIf)
    this.addEventListener('operation-inspector-angle-change', this.updateAngle)
    this.addEventListener('operation-inspector-update-flag', this.updateFlag)

    document.addEventListener('click', this.maybeDeactivateOperation.bind(this))
    this.addEventListener('operation-active', this.activateOperation)
    this.addEventListener('operation-show-menu', this.showOperationMenu)
    this.addEventListener('operation-menu-if', this.showOperationInspectorIf)
    this.addEventListener('operation-menu-angle', this.showOperationInspectorAngle)
    this.addEventListener('operation-menu-flag', this.showOperationInspectorFlag)
    this.addEventListener('operation-grab', this.grabOperation)
    this.addEventListener('operation-ungrab', this.ungrabOperation)
    this.addEventListener('operation-end-dragging', this.endDraggingOperation)
    this.addEventListener('operation-drop', this.dropOperation)
    this.addEventListener('operation-delete', this.deleteOperation)
    this.addEventListener('circuit-step-click', this.clickStep)
    this.addEventListener('circuit-step-snap', this.snapStep)
    this.addEventListener('circuit-step-unsnap', this.unsnapStep)
    this.addEventListener('operation-in-snap-range', this.operationInSnapRange)
    this.addEventListener('circuit-step-mouseenter', this.mouseEnterStep)
    this.addEventListener('quantum-circuit-mouseleave', this.mouseLeaveCircuit)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
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

  private activateOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'ACTIVATE_OPERATION', operation})
  }

  private showOperationMenu(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'SHOW_OPERATION_MENU', operation})
  }

  private showOperationInspectorIf(event: Event): void {
    const operation = event.target
    if (!isIfable(operation)) throw new Error(`${operation} isn't an Ifable Operation.`)

    this.circuitEditorService.send({type: 'SHOW_OPERATION_INSPECTOR_IF', operation})
  }

  private showOperationInspectorAngle(event: Event): void {
    const operation = event.target
    if (!isAngleable(operation)) throw new Error(`${operation} isn't an Angleable Operation.`)

    this.circuitEditorService.send({type: 'SHOW_OPERATION_INSPECTOR_ANGLE', operation})
  }

  private showOperationInspectorFlag(event: Event): void {
    const operation = event.target
    if (!isFlaggable(operation)) throw new Error(`${operation} isn't a Flaggable Operation.`)

    this.circuitEditorService.send({type: 'SHOW_OPERATION_INSPECTOR_FLAG', operation})
  }

  private grabOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'GRAB_OPERATION', operation})
  }

  private ungrabOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'UNGRAB_OPERATION', operation})
  }

  private endDraggingOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'END_DRAGGING_OPERATION', operation})
  }

  private dropOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'DROP_OPERATION', operation})
  }

  private deleteOperation(): void {
    this.circuitEditorService.send({type: 'DELETE_OPERATION'})
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

  private operationInSnapRange(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    const customEvent = event as CustomEvent
    const snapTargetInfo = customEvent.detail.snapTargetInfo
    const x = snapTargetInfo.x
    const y = snapTargetInfo.y
    this.circuitEditorService.send({type: 'OPERATION_IN_SNAP_RANGE', operation, x, y})
  }

  private mouseEnterStep(event: Event): void {
    if (this.circuit.editing) return

    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuitEditorService.send({type: 'MOUSE_ENTER_STEP', step})
  }

  private mouseLeaveCircuit(): void {
    this.circuitEditorService.send({type: 'MOUSE_LEAVE_CIRCUIT'})
  }
}

controller(CircuitEditorElement)
