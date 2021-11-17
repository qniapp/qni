import {Operation, isWriteGateElement} from './operation'
import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'

@controller
export class PaletteDropzoneElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.operation.draggable = true
    this.operation.snapped = true
    this.addEventListener('operation-grab', this.newOperation)
    this.addEventListener('operation-trash', this.trashOperation)
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

  private get operation(): Operation | null {
    if (this.childElementCount === 0) {
      return null
    } else if (this.childElementCount === 1) {
      return this.children[0] as Operation
    } else {
      throw new Error('palette-dropzone cannot hold multiple operations.')
    }
  }

  private newOperation(event: MouseEvent): void {
    const operation = event.target as Operation
    const newOperation = document.createElement(operation.tagName) as Operation

    newOperation.draggable = true
    newOperation.snapped = true
    if (isWriteGateElement(newOperation) && isWriteGateElement(operation)) {
      newOperation.value = operation.value
    }
    this.prepend(newOperation)
  }

  private trashOperation(event: Event): void {
    this.removeChild(event.target as Operation)
  }
}
