import {Operation, isOperation} from './operation'
import {attr, controller} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {html, render} from '@github/jtml'
import {isHelpable} from './mixin'

type PaletteDropzoneContext = Record<string, never>
type PaletteDropzoneEvent =
  | {type: 'GRAB_OPERATION'; operation: Operation}
  | {type: 'DELETE_OPERATION'; operation: Operation}

export class PaletteDropzoneElement extends HTMLElement {
  @attr debug = false

  private paletteDropzoneMachine = createMachine<PaletteDropzoneContext, PaletteDropzoneEvent>(
    {
      id: 'palette-dropzone',
      initial: 'idle',
      states: {
        idle: {
          on: {
            GRAB_OPERATION: {
              target: 'idle',
              actions: ['newOperation']
            },
            DELETE_OPERATION: {
              target: 'idle',
              actions: ['deleteOperation']
            }
          }
        }
      }
    },
    {
      actions: {
        newOperation: (_context, event) => {
          if (event.type !== 'GRAB_OPERATION') return

          const operation = event.operation
          const newOperation = operation.cloneNode(false)
          if (!isOperation(newOperation)) throw new TypeError(`${newOperation} isn't an operation.`)

          if (isHelpable(operation)) operation.disableHelp()
          this.prepend(newOperation)
          this.initOperation(newOperation)
        },
        deleteOperation: (_context, event) => {
          if (event.type !== 'DELETE_OPERATION') return

          this.removeChild(event.operation)
        }
      }
    }
  )
  private paletteDropzoneService = interpret(this.paletteDropzoneMachine)
    .onTransition(state => {
      if (this.debug) {
        // eslint-disable-next-line no-console
        console.log(`palette-dropzone: ${state.value}`)
      }
    })
    .start()

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.initOperation(this.operation)
    this.addEventListener('operation-grab', this.grabOperation)
    this.addEventListener('operation-delete', this.deleteOperation)
  }

  update(): void {
    render(
      html`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`,
      this.shadowRoot!
    )
  }

  private initOperation(operation: Operation): void {
    operation.draggable = true
    operation.snapped = true
    operation.grabbed = false
    if (isHelpable(operation)) operation.initHelp()
  }

  private get operation(): Operation {
    const children = Array.from(this.children)
    const operations = children.filter((each): each is Operation => isOperation(each))

    if (operations.length === 0) {
      throw new Error('palette-dropzone must have an operation.')
    } else if (operations.length === 1) {
      return operations[0]
    } else {
      throw new Error('palette-dropzone cannot hold multiple operations.')
    }
  }

  private grabOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new TypeError(`${operation} isn't an operation.`)

    this.paletteDropzoneService.send({type: 'GRAB_OPERATION', operation})
  }

  private deleteOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new TypeError(`${operation} isn't an operation.`)

    this.paletteDropzoneService.send({type: 'DELETE_OPERATION', operation})
  }
}

controller(PaletteDropzoneElement)
