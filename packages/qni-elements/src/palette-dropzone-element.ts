import {Operation, isOperation, isWriteGateElement} from './operation'
import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'
import {isAngleable} from './mixin'

@controller
export class PaletteDropzoneElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.initOperation(this.operation)
    this.addEventListener('operation-grab', this.newOperation)
    this.addEventListener('operation-delete', this.deleteOperation)
  }

  update(): void {
    render(
      html`<style>
          ::slotted(*) {
            position: absolute;
          }
        </style>

        <slot></slot>`,
      this.shadowRoot!
    )
  }

  private initOperation(operation: Operation): void {
    operation.draggable = true
    operation.snapped = true
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
    const newOperation = document.createElement(operation.tagName)
    if (!isOperation(newOperation)) throw new TypeError(`${newOperation} isn't an operation.`)

    this.prepend(newOperation)
    this.initOperation(newOperation)

    if (isAngleable(newOperation) && isAngleable(operation)) {
      newOperation.angle = operation.angle
    }
    if (isWriteGateElement(newOperation) && isWriteGateElement(operation)) {
      newOperation.value = operation.value
    }
  }

  private deleteOperation(event: Event): void {
    const operation = event.target
    if (!isOperation(operation)) throw new TypeError(`${operation} isn't an operation.`)

    this.removeChild(operation)
  }
}
