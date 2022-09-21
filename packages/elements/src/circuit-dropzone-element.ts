import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {Operation, isOperation} from './operation'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {Util} from '@qni/common'
import interact from 'interactjs'
import wiresIcon from '../icon/wires.svg'
import {isResizeable, Resizeable} from './mixin'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== undefined && arg !== null && arg instanceof CircuitDropzoneElement

type CircuitDropzoneContext = Record<string, never>
type CircuitDropzoneEvent =
  | {type: 'SNAP_OPERATION'}
  | {type: 'UNSNAP_OPERATION'}
  | {type: 'DROP_OPERATION'}
  | {type: 'PUT_OPERATION'; operation: Operation}
  | {type: 'DELETE_OPERATION'; operation: Operation}

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
          this.dispatchEvent(new Event('circuit-dropzone-snap', {bubbles: true}))
        },
        unsnapOperation: () => {
          this.operationName = ''
          this.dispatchEvent(new Event('circuit-dropzone-unsnap', {bubbles: true}))
        },
        dropOperation: () => {
          this.dispatchEvent(new Event('circuit-dropzone-drop', {bubbles: true}))
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
        dispatchOccupiedEvent: () => {
          this.dispatchEvent(new Event('circuit-dropzone-occupy', {bubbles: true}))
        },
        dispatchDeleteOperationEvent: () => {
          this.dispatchEvent(new Event('circuit-dropzone-operation-delete', {bubbles: true}))
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

    this.addEventListener('operation-snap', this.snapOperation, {signal})
    this.addEventListener('operation-unsnap', this.unsnapOperation, {signal})
    this.addEventListener('operation-end-dragging', this.dropOperation, {signal})
    this.addEventListener('operation-delete', this.deleteOperation, {signal})
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

  private snapOperation(): void {
    this.circuitDropzoneService.send({type: 'SNAP_OPERATION'})
  }

  private unsnapOperation(): void {
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

  private get wireSvg(): TemplateResult {
    return html(([wiresIcon] as unknown) as TemplateStringsArray)
  }
}

controller(CircuitDropzoneElement)
