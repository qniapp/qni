import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {Operation, isOperation} from './operation'
import {TemplateResult, html, render} from '@github/jtml'
import {Util, emitEvent} from '@qni/common'
import {attr, controller} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import interact from 'interactjs'
import {isResizeable} from './mixin'
import wiresIcon from '../icon/wires.svg'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== undefined && arg !== null && arg instanceof CircuitDropzoneElement

type CircuitDropzoneContext = Record<string, never>
type CircuitDropzoneEvent =
  | {type: 'SNAP_OPERATION'}
  | {type: 'UNSNAP_OPERATION'}
  | {type: 'DROP_OPERATION'}
  | {type: 'PUT_OPERATION'; operation: Operation}
  | {type: 'DELETE_OPERATION'; operation: Operation}
  | {type: 'RESIZE_OPERATION'}

export class CircuitDropzoneElement extends HTMLElement {
  #eventAbortController: AbortController | null = null

  @attr operationName = ''
  @attr inputWireQuantum = false
  @attr outputWireQuantum = false
  @attr connectTop = false
  @attr connectBottom = false
  @attr shadow = false
  @attr debug = false

  private circuitDropzoneMachine = createMachine<CircuitDropzoneContext, CircuitDropzoneEvent>(
    {
      id: 'circuit-dropzone',
      initial: 'unknown',
      states: {
        unknown: {
          always: [
            {target: 'empty', cond: 'isEmpty'},
            {target: 'occupied', cond: 'isOccupied', actions: ['initOperation']}
          ]
        },
        empty: {
          on: {
            SNAP_OPERATION: {
              target: 'snapped',
              actions: ['snapOperation']
            },
            PUT_OPERATION: {
              target: 'occupied',
              actions: ['putOperation']
            }
          }
        },
        snapped: {
          on: {
            UNSNAP_OPERATION: {
              target: 'empty',
              actions: ['unsnapOperation']
            },
            DROP_OPERATION: {
              target: 'occupied',
              actions: ['dropOperation']
            }
          }
        },
        occupied: {
          entry: 'dispatchOccupiedEvent',
          on: {
            UNSNAP_OPERATION: {
              target: 'empty',
              actions: ['unsnapOperation']
            },
            DELETE_OPERATION: {
              target: 'empty',
              actions: ['deleteOperation', 'dispatchDeleteOperationEvent']
            },
            RESIZE_OPERATION: {
              target: 'occupied',
              actions: ['resizeOperation']
            }
          }
        }
      }
    },
    {
      actions: {
        initOperation: () => {
          Util.notNull(this.operation)

          this.operation.snapped = true
        },
        snapOperation: () => {
          Util.notNull(this.operation)

          this.operationName = this.operation.tagName.toLocaleLowerCase()
          emitEvent('circuit-dropzone:qpu-operation-snap', {}, this)
        },
        unsnapOperation: () => {
          this.operationName = ''
          emitEvent('circuit-dropzone:qpu-operation-unsnap', {}, this)
        },
        dropOperation: () => {
          emitEvent('circuit-dropzone:qpu-operation-drop', {}, this)
        },
        putOperation: (_context, event) => {
          if (event.type !== 'PUT_OPERATION') return

          this.append(event.operation)
          this.operationName = event.operation.tagName.toLocaleLowerCase()
          event.operation.snapped = true
        },
        deleteOperation: (_context, event) => {
          if (event.type !== 'DELETE_OPERATION') return

          this.operationName = ''
          this.removeChild(event.operation as Node)
        },
        resizeOperation: () => {
          emitEvent('circuit-dropzone:qpu-operation-resize', {}, this)
        },
        dispatchOccupiedEvent: () => {
          emitEvent('circuit-dropzone:occupied', {}, this)
        },
        dispatchDeleteOperationEvent: () => {
          emitEvent('circuit-dropzone:qpu-operation-delete', {}, this)
        }
      },
      guards: {
        isEmpty: () => {
          return this.operation === null
        },
        isOccupied: () => {
          return this.operation !== null
        }
      }
    }
  )
  private circuitDropzoneService = interpret(this.circuitDropzoneMachine).onTransition(state => {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(`circuit-dropzone: ${state.value}`)
    }
  })

  get noConnections(): boolean {
    return !this.connectTop && !this.connectBottom
  }

  get occupied(): boolean {
    return this.operationName !== ''
  }

  get operation(): Operation | null {
    return this.firstElementChild as Operation
  }

  get snapTarget(): {x: number; y: number} {
    const rect = this.getBoundingClientRect()

    return {
      x: window.pageXOffset + rect.left + this.clientWidth / 2,
      y: window.pageYOffset + rect.top + this.clientHeight / 2
    }
  }

  get resizeHandleSnapTarget(): {x: number; y: number} {
    const rect = this.getBoundingClientRect()

    return {
      x: window.pageXOffset + rect.left + this.clientWidth / 2,
      y: window.pageYOffset + rect.top + this.clientHeight + 4
    }
  }

  toJson(): string | number {
    const operation = this.operation

    if (operation === null) {
      return '1'
    } else {
      return operation.toJson()
    }
  }

  connectedCallback(): void {
    const {signal} = (this.#eventAbortController = new AbortController())

    this.attachShadow({mode: 'open'})
    this.update()
    this.initDropzone()
    this.circuitDropzoneService.start()

    this.addEventListener('draggable:snap-to-dropzone', this.snap, {signal})
    this.addEventListener('draggable:unsnap', this.unsnap, {signal})
    this.addEventListener('draggable:end-dragging', this.dropOperation, {signal})
    this.addEventListener('draggable:delete', this.deleteOperation, {signal})
    this.addEventListener('resizeable:resize', this.resizeOperation, {signal})
  }

  disconnectedCallback() {
    this.#eventAbortController?.abort()
  }

  update(): void {
    render(
      html`<style>
          #body {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            width: 100%;
          }

          #connect-top,
          #connect-bottom {
            display: none;
          }

          :host([data-connect-top]) #connect-top {
            display: block;
          }

          :host([data-connect-bottom]) #connect-bottom {
            display: block;
          }

          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
        </style>

        <div id="body"><slot></slot>${this.wireSvg}</div>`,
      this.shadowRoot!
    )
  }

  put(operation: Operation): void {
    this.circuitDropzoneService.send({type: 'PUT_OPERATION', operation})
  }

  get circuitStep(): CircuitStepElement | null {
    const el = this.parentElement
    Util.notNull(el)

    if (!isCircuitStepElement(el)) return null

    return el as CircuitStepElement
  }

  private initDropzone(): void {
    if (this.operation !== null) {
      this.operationName = this.operation.tagName.toLocaleLowerCase()
    }

    interact(this).dropzone({
      accept: '[data-draggable]',
      overlap: 'center'
    })
  }

  private snap(): void {
    this.circuitDropzoneService.send({type: 'SNAP_OPERATION'})
  }

  private unsnap(): void {
    this.circuitDropzoneService.send({type: 'UNSNAP_OPERATION'})
  }

  private dropOperation(): void {
    this.circuitDropzoneService.send({type: 'DROP_OPERATION'})
  }

  private deleteOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new Error(`${operation} isn't an Operation.`)

    this.circuitDropzoneService.send({type: 'DELETE_OPERATION', operation})
  }

  private resizeOperation(event: Event): void {
    const operation = event.target
    if (!isResizeable(operation)) throw new Error(`${operation} isn't a Resizeable.`)

    this.circuitDropzoneService.send({type: 'RESIZE_OPERATION'})
  }

  private get wireSvg(): TemplateResult {
    return html(([wiresIcon] as unknown) as TemplateStringsArray)
  }
}

controller(CircuitDropzoneElement)
