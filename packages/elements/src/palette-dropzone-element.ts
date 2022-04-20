import {Operation, isOperation} from './operation'
import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'
import {isHelpable} from './mixin'

export class PaletteDropzoneElement extends HTMLElement {
  #eventAbortController: AbortController | null = null

  connectedCallback(): void {
    const {signal} = (this.#eventAbortController = new AbortController())

    this.attachShadow({mode: 'open'})
    this.update()

    this.initOperation(this.operation)
    this.addEventListener('operation-grab', this.newOperation, {signal})
    this.addEventListener('operation-delete', this.deleteOperation, {signal})
  }

  disconnectedCallback() {
    this.#eventAbortController?.abort()
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

  private newOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new TypeError(`${operation} isn't an operation.`)

    const newOperation = operation.cloneNode(false)
    if (!isOperation(newOperation)) throw new TypeError(`${newOperation} isn't an operation.`)

    if (isHelpable(operation)) operation.disableHelp()
    this.prepend(newOperation)
    this.initOperation(newOperation)
  }

  private deleteOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new TypeError(`${operation} isn't an operation.`)

    this.removeChild(operation)
  }
}

controller(PaletteDropzoneElement)
