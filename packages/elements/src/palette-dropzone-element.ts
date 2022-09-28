import {Operation, isOperation} from './operation'
import {html, render} from '@github/jtml'
import {isDraggable, isHelpable, isResizeable} from './mixin'
import {controller} from '@github/catalyst'

export class PaletteDropzoneElement extends HTMLElement {
  #eventAbortController: AbortController | null = null

  connectedCallback(): void {
    const {signal} = (this.#eventAbortController = new AbortController())

    this.attachShadow({mode: 'open'})
    this.update()

    this.initOperation(this.operation)
    this.addEventListener('draggable:grab', this.newOperation, {signal})
    this.addEventListener('draggable:delete', this.deleteOperation, {signal})
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
    if (isDraggable(operation)) {
      operation.draggable = true
      operation.grabbed = false
      operation.snapped = true
    }
    if (isResizeable(operation)) operation.resizeable = true
    if (isHelpable(operation)) operation.initHelp()
  }

  private get operation(): Operation {
    if (this.operations.length === 0) {
      throw new Error('palette-dropzone must have an operation.')
    } else if (this.operations.length === 1) {
      return this.operations[0]
    } else {
      throw new Error('palette-dropzone cannot hold multiple operations.')
    }
  }

  private get operations(): Operation[] {
    return Array.from(this.children).filter((each): each is Operation => isOperation(each))
  }

  private newOperation(event: Event): void {
    const operation = event.target
    this.assertOperation(operation)

    const newOperation = operation.cloneNode(false)
    this.assertOperation(newOperation)

    if (isHelpable(operation)) operation.disableHelp()
    this.prepend(newOperation)
    this.initOperation(newOperation)
  }

  private deleteOperation(event: Event): void {
    const operation = event.target
    this.assertOperation(operation)

    this.removeChild(operation)
  }

  private assertOperation(element: unknown): asserts element is Operation {
    if (!isOperation(element)) throw new TypeError(`${element} isn't an operation.`)
  }
}

controller(PaletteDropzoneElement)
