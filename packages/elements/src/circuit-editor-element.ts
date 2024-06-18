import {Angleable, Flaggable, Ifable, isAngleable, isDraggable, isIfable, isMenuable, isResizeable} from './mixin'
import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {Config, Util, isResizeableSpan} from '@qni/common'
import {Operation, isOperation} from './operation'
import {attr, controller, target} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {html, render} from '@github/jtml'
import {InspectorButtonElement} from './inspector-button-element'
import {OperationInspectorElement} from './operation-inspector-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {format as prettyFormat} from 'pretty-format'
import {isCircuitDropzoneElement} from './circuit-dropzone-element'
import {isFlaggable} from './mixin/flaggable'

type CircuitEditorContext = Record<string, never>
type CircuitEditorEvent =
  | {type: 'ACTIVATE_OPERATION'; operation: Operation}
  | {type: 'SHOW_OPERATION_MENU'; operation: Operation}
  | {type: 'SHOW_OPERATION_INSPECTOR_IF'; operation: Ifable}
  | {type: 'SHOW_OPERATION_INSPECTOR_ANGLE'; operation: Angleable}
  | {type: 'SHOW_OPERATION_INSPECTOR_FLAG'; operation: Flaggable}
  | {type: 'SET_OPERATION_IF'; operation: Ifable; if: string}
  | {type: 'SET_OPERATION_ANGLE'; operation: Angleable; angle: string; reducedAngle: string}
  | {type: 'SET_OPERATION_FLAG'; operation: Flaggable; flag: string}
  | {type: 'GRAB_OPERATION'; operation: Operation}
  | {type: 'GRAB_RESIZE_HANDLE'; operation: Operation}
  | {type: 'RELEASE_OPERATION'; operation: Operation}
  | {type: 'END_RESIZE'; operation: Operation}
  | {type: 'END_DRAGGING_OPERATION'; operation: Operation}
  | {type: 'DROP_OPERATION'; operation: Operation}
  | {type: 'DELETE_OPERATION'}
  | {type: 'OPERATION_IN_SNAP_RANGE'; operation: Operation; x: number; y: number}
  | {type: 'RESIZE_HANDLE_IN_SNAP_RANGE'; operation: Operation; x: number; y: number}
  | {type: 'MOUSE_ENTER_STEP'; step: CircuitStepElement}
  | {type: 'MOUSE_LEAVE_STEP'; step: CircuitStepElement}
  | {type: 'MOUSE_LEAVE_CIRCUIT'}
  | {type: 'CLICK_STEP'; step: CircuitStepElement}
  | {type: 'SNAP_STEP'; step: CircuitStepElement}
  | {type: 'UNSNAP_STEP'; step: CircuitStepElement}

@controller
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
              actions: ['initOperationMenu', 'resizeCircuit'],
            },
            ACTIVATE_OPERATION: {
              target: 'inspectable',
              actions: ['maybeUpdateOperationInspector'],
            },
            DELETE_OPERATION: {
              target: 'inspectable',
              actions: ['resizeCircuit'],
            },
          },
          states: {
            unknown: {
              always: [
                {target: 'idle', cond: 'isIdle'},
                {target: 'editing', cond: 'isEditing'},
              ],
            },
            idle: {
              on: {
                GRAB_OPERATION: {
                  target: 'editing',
                  actions: [
                    'maybeHideOperationMenu',
                    'startCircuitEdit',
                    'setOperationActive',
                    'addDocumentCursorGrabbingStyle',
                    'maybeAppendCircuitWire',
                    'setSnapTargets',
                  ],
                },
                GRAB_RESIZE_HANDLE: {
                  target: 'editing',
                  actions: [
                    'maybeHideOperationMenu',
                    'startCircuitEdit',
                    'setOperationActive',
                    'addDocumentCursorResizingStyle',
                    'maybeAppendCircuitWire',
                    'setResizeHandleSnapTargets',
                  ],
                },
                CLICK_STEP: {
                  target: 'idle',
                  actions: ['deactivateAllSteps', 'setBreakpoint'],
                },
                MOUSE_ENTER_STEP: {
                  target: 'idle',
                  actions: ['deactivateAllSteps', 'activateStep'],
                },
                MOUSE_LEAVE_STEP: {
                  target: 'idle',
                  actions: ['deactivateStep'],
                },
                MOUSE_LEAVE_CIRCUIT: {
                  target: 'idle',
                  actions: ['deactivateAllSteps'],
                },
                SHOW_OPERATION_MENU: {
                  target: 'idle',
                  actions: ['showOperationMenu'],
                },
                SHOW_OPERATION_INSPECTOR_IF: {
                  target: 'idle',
                  actions: ['showOperationInspectorIf'],
                },
                SHOW_OPERATION_INSPECTOR_ANGLE: {
                  target: 'idle',
                  actions: ['showOperationInspectorAngle'],
                },
                SHOW_OPERATION_INSPECTOR_FLAG: {
                  target: 'idle',
                  actions: ['showOperationInspectorFlag'],
                },
                SET_OPERATION_IF: {
                  target: 'idle',
                  actions: ['setOperationIf'],
                },
                SET_OPERATION_ANGLE: {
                  target: 'idle',
                  actions: ['setOperationAngle'],
                },
                SET_OPERATION_FLAG: {
                  target: 'idle',
                  actions: ['setOperationFlag'],
                },
              },
            },
            editing: {
              on: {
                OPERATION_IN_SNAP_RANGE: {
                  target: 'editing',
                  actions: ['snapOperationIntoDropzone'],
                },
                RESIZE_HANDLE_IN_SNAP_RANGE: {
                  target: 'editing',
                  actions: ['snapResizeHandleIntoDropzone'],
                },
                SNAP_STEP: {
                  target: 'editing',
                  actions: ['deactivateAllSteps', 'activateStep'],
                },
                UNSNAP_STEP: {
                  target: 'editing',
                  actions: ['deactivateStep'],
                },
                RELEASE_OPERATION: {
                  target: 'idle',
                  actions: ['maybeRemoveLastEmptyWires', 'removeDocumentCursorGrabbingStyle', 'endCircuitEdit'],
                },
                END_RESIZE: {
                  target: 'idle',
                  actions: ['maybeRemoveLastEmptyWires', 'removeDocumentCursorResizingStyle', 'endCircuitEdit'],
                },
                END_DRAGGING_OPERATION: {
                  target: 'idle',
                  actions: [
                    'maybeRemoveLastEmptyWires',
                    'removeDocumentCursorGrabbingStyle',
                    'endCircuitEdit',
                    'maybeDisableAllInspectorPanes',
                  ],
                },
              },
            },
          },
        },
      },
    },
    {
      guards: {
        isIdle: () => {
          return !this.circuit.editing
        },
        isEditing: () => {
          return this.circuit.editing
        },
      },
      actions: {
        maybeHideOperationMenu: (_context, event) => {
          if (event.type !== 'GRAB_OPERATION') return

          const operation = event.operation
          if (isMenuable(operation) && operation.menu) {
            operation.hideMenu()
          }
        },
        startCircuitEdit: () => {
          this.circuit.editing = true
        },
        endCircuitEdit: () => {
          this.circuit.editing = false
        },
        setOperationActive: (_context, event) => {
          if (event.type !== 'GRAB_OPERATION' && event.type !== 'GRAB_RESIZE_HANDLE') return

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
        snapResizeHandleIntoDropzone: (_context, event) => {
          if (event.type !== 'RESIZE_HANDLE_IN_SNAP_RANGE') return

          const operation = event.operation
          if (!isResizeable(operation)) {
            throw new Error(`${operation} is not resizeable`)
          }
          // const resizeHandle = operation.resizeHandle
          const dropzone = operation.dropzone
          if (!isCircuitDropzoneElement(dropzone)) {
            throw new Error(`${dropzone} is not a circuit dropzone`)
          }
          Util.notNull(dropzone.circuitStep)

          const wireIndex = dropzone.circuitStep.dropzones.indexOf(dropzone)
          const snapTarget = this.circuit.resizeHandleSnapTargetAt(event.x, event.y)
          const span = snapTarget.wireIndex - wireIndex + 1
          if (!isResizeableSpan(span)) {
            throw new Error(`Invalid span: ${span}`)
          }

          operation.span = span
        },
        addDocumentCursorGrabbingStyle: () => {
          document.documentElement.setAttribute('data-grabbing', '')
        },
        addDocumentCursorResizingStyle: () => {
          document.documentElement.setAttribute('data-resizing', '')
        },
        removeDocumentCursorGrabbingStyle: () => {
          document.documentElement.removeAttribute('data-grabbing')
        },
        removeDocumentCursorResizingStyle: () => {
          document.documentElement.removeAttribute('data-resizing')
        },
        maybeAppendCircuitWire: () => {
          if (this.circuit.wireCount < Config.MAX_QUBIT_COUNT) {
            this.circuit.appendWire()
          }
        },
        maybeRemoveLastEmptyWires: () => {
          this.circuit.removeLastEmptyWires()
        },
        resizeCircuit: () => {
          this.circuit.resize()
          this.dispatchEvent(new Event('circuit-editor-resize', {bubbles: true}))
        },
        setSnapTargets: (_context, event) => {
          if (event.type !== 'GRAB_OPERATION') return

          this.circuit.setSnapTargets(event.operation)
        },
        setResizeHandleSnapTargets: (_context, event) => {
          if (event.type !== 'GRAB_RESIZE_HANDLE') return

          this.circuit.setResizeHandleSnapTargets(event.operation)
        },
        setBreakpoint: (_context, event) => {
          if (event.type !== 'CLICK_STEP') return

          this.circuit.setBreakpoint(event.step)
        },
        activateStep: (_context, event) => {
          if (event.type !== 'MOUSE_ENTER_STEP' && event.type !== 'SNAP_STEP') return

          event.step.active = true
        },
        deactivateStep: (_context, event) => {
          if (event.type !== 'MOUSE_LEAVE_STEP' && event.type !== 'UNSNAP_STEP') return

          event.step.active = false
        },
        deactivateAllSteps: () => {
          this.circuit.deactivateAllSteps()
        },
        maybeDisableAllInspectorPanes: (_context, event) => {
          if (event.type !== 'END_DRAGGING_OPERATION') return

          const operation = event.operation
          if (operation.snapped) return

          if (this.inspectorButton === undefined) return
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
        setOperationIf: (_context, event) => {
          if (event.type !== 'SET_OPERATION_IF') return

          event.operation.if = event.if
        },
        setOperationAngle: (_context, event) => {
          if (event.type !== 'SET_OPERATION_ANGLE') return

          event.operation.angle = event.angle
          event.operation.reducedAngle = event.reducedAngle
        },
        setOperationFlag: (_context, event) => {
          if (event.type !== 'SET_OPERATION_FLAG') return

          event.operation.flag = event.flag
        },
        maybeUpdateOperationInspector: (_context, event) => {
          if (event.type !== 'ACTIVATE_OPERATION') return
          if (this.inspectorButton === undefined) return

          const operation = event.operation
          if (this.inspectorButton.isInspectorShown) {
            this.inspectorButton.showInspector(operation)
          }
        },
      },
    },
  )
  private circuitEditorService = interpret(this.circuitEditorMachine).onTransition(state => {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(`circuit-editor: ${prettyFormat(state.value)}`)
    }
  })

  connectedCallback(): void {
    document.addEventListener('click', this.maybeDeactivateOperation.bind(this))
    this.addEventListener('draggable:init', this.enableDragging)
    this.addEventListener('resizeable:init', this.enableResizing)
    this.addEventListener('activateable:active', this.activateOperation)
    this.addEventListener('menuable:show-menu', this.showOperationMenu)
    this.addEventListener('menuable:menu-if', this.showOperationInspectorIf)
    this.addEventListener('menuable:menu-angle', this.showOperationInspectorAngle)
    this.addEventListener('menuable:menu-flag', this.showOperationInspectorFlag)
    this.addEventListener('operation-inspector-if-change', this.setOperationIf)
    this.addEventListener('operation-inspector-angle-change', this.setOperationAngle)
    this.addEventListener('operation-inspector-angle-update', this.setOperationAngle)
    this.addEventListener('operation-inspector-flag-change', this.setOperationFlag)
    this.addEventListener('draggable:grab', this.grabOperation)
    this.addEventListener('resizeable:grab-resize-handle', this.grabResizeHandle)
    this.addEventListener('resizeable:release-resize-handle', this.releaseResizeHandle)
    this.addEventListener('draggable:release', this.releaseOperation)
    this.addEventListener('resizeable:end-resizing', this.resizeEnd)
    this.addEventListener('draggable:end-dragging', this.endDraggingOperation)
    this.addEventListener('draggable:drop', this.dropOperation)
    this.addEventListener('draggable:delete', this.deleteOperation)
    this.addEventListener('menuable:menu-delete', this.deleteOperation)
    this.addEventListener('circuit-step:click', this.clickStep)
    this.addEventListener('circuit-step:qpu-operation-snap', this.snapStep)
    this.addEventListener('circuit-step:qpu-operation-unsnap', this.unsnapStep)
    this.addEventListener('draggable:in-snap-range', this.operationInSnapRange)
    this.addEventListener('resizeable:resize-handle-in-snap-range', this.resizeHandleInSnapRange)
    this.addEventListener('circuit-step:mouseenter', this.mouseEnterStep)
    this.addEventListener('circuit-step:mouseleave', this.mouseLeaveStep)
    this.addEventListener('quantum-circuit:mouseleave', this.mouseLeaveCircuit)
    this.addEventListener('quantum-circuit:init', this.makeCircuitHoverable)

    this.circuitEditorService.start()
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private enableDragging(event: Event): void {
    const el = event.target

    if (isDraggable(el)) {
      el.draggable = true
    } else {
      throw new Error(`Not a draggable element: ${el}`)
    }
  }

  private enableResizing(event: Event): void {
    const el = event.target

    if (isResizeable(el)) {
      el.resizeable = true
    } else {
      throw new Error(`Not a resizeable element: ${el}`)
    }
  }

  private get activeOperation(): Operation | null {
    return this.circuit.querySelector('circuit-dropzone > [data-active]')
  }

  private makeCircuitHoverable(event: Event): void {
    const circuit = event.target as QuantumCircuitElement

    if (circuit !== this.circuit) {
      return
    }

    this.circuit.hoverable = true
    for (const each of this.circuit.operations) {
      if (isMenuable(each)) each.initMenu()
    }
  }

  private maybeDeactivateOperation(event: Event): void {
    const clickedEl = event.target as HTMLElement

    if (
      !isOperation(clickedEl) &&
      this.inspectorButton &&
      !this.inspectorButton?.popup.popper.contains(clickedEl) &&
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

  private setOperationIf(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const operation = this.activeOperation
    if (!isIfable(operation)) throw new Error('[data-if] not found.')

    this.circuitEditorService.send({type: 'SET_OPERATION_IF', operation, if: inspector.if})
  }

  private setOperationAngle(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const operation = this.activeOperation
    Util.notNull(operation)
    if (!isAngleable(operation)) throw new Error(`${operation.outerHTML}: [data-angle] not found.`)

    this.circuitEditorService.send({
      type: 'SET_OPERATION_ANGLE',
      operation,
      angle: inspector.angle,
      reducedAngle: inspector.reduceAngleFraction ? inspector.reducedAngle : '',
    })
  }

  private setOperationFlag(event: Event): void {
    const inspector = event.target as OperationInspectorElement
    const operation = this.activeOperation
    if (!isFlaggable(operation)) throw new Error('[data-flag] not found.')

    this.circuitEditorService.send({type: 'SET_OPERATION_FLAG', operation, flag: inspector.flag})
  }

  private grabOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'GRAB_OPERATION', operation})
  }

  private grabResizeHandle(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'GRAB_RESIZE_HANDLE', operation})
  }

  private releaseResizeHandle(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'END_RESIZE', operation})
  }

  private releaseOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'RELEASE_OPERATION', operation})
  }

  private resizeEnd(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    this.circuitEditorService.send({type: 'END_RESIZE', operation})
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

  private resizeHandleInSnapRange(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} must be an Operation.`)

    const customEvent = event as CustomEvent
    const snapTargetInfo = customEvent.detail.snapTargetInfo
    const x = snapTargetInfo.x
    const y = snapTargetInfo.y
    this.circuitEditorService.send({type: 'RESIZE_HANDLE_IN_SNAP_RANGE', operation, x, y})
  }

  private mouseEnterStep(event: Event): void {
    if (this.circuit.editing) return

    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuitEditorService.send({type: 'MOUSE_ENTER_STEP', step})
  }

  private mouseLeaveStep(event: Event): void {
    if (this.circuit.editing) return

    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    this.circuitEditorService.send({type: 'MOUSE_LEAVE_STEP', step})
  }

  private mouseLeaveCircuit(): void {
    this.circuitEditorService.send({type: 'MOUSE_LEAVE_CIRCUIT'})
  }
}
