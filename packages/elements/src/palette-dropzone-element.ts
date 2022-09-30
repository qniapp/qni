import {Operation, isOperation} from './operation'
import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isDraggable, isHelpable, isResizeable} from './mixin'

export class PaletteDropzoneElement extends HTMLElement {
  @target operation!: Operation

  #eventAbortController: AbortController | null = null

  connectedCallback(): void {
    const {signal} = (this.#eventAbortController = new AbortController())

    this.attachShadow({mode: 'open'})
    this.update()

    this.setOperationTarget()
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

  private setOperationTarget(): void {
    const operations = Array.from(this.children)
      .filter((el): el is Operation => isOperation(el))
      .map(el => {
        el.setAttribute('data-target', 'palette-dropzone.operation')
        return el
      })

    if (operations.length === 0) {
      throw new Error('palette-dropzone must have an operation.')
    } else if (operations.length > 1) {
      throw new Error('palette-dropzone cannot hold multiple operations.')
    }
  }

  private initOperation(operation: Operation): void {
    if (isDraggable(operation)) {
      operation.enableDrag()
      operation.grabbed = false
      operation.snapped = true
    }
    if (isResizeable(operation)) operation.resizeable = true
    if (isHelpable(operation)) operation.initHelp()
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
