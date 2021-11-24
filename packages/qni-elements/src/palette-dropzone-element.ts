import {Operation, isPhaseGateElement, isWriteGateElement} from './operation'
import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'

@controller
export class PaletteDropzoneElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.operation.draggable = true
    this.operation.snapped = true
    this.addEventListener('operation-showmenu', this.stopEventPropagation)
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

  private get operation(): Operation {
    if (this.childElementCount === 0) {
      throw new Error('palette-dropzone must have an operation.')
    } else if (this.childElementCount === 1) {
      return this.children[0] as Operation
    } else {
      throw new Error('palette-dropzone cannot hold multiple operations.')
    }
  }

  private stopEventPropagation(e: Event): void {
    e.stopPropagation()
  }

  private newOperation(event: Event): void {
    const operation = event.target as Operation
    const newOperation = document.createElement(operation.tagName) as Operation

    newOperation.draggable = true
    newOperation.snapped = true
    if (isPhaseGateElement(newOperation) && isPhaseGateElement(operation)) {
      newOperation.phi = operation.phi
    }
    if (isWriteGateElement(newOperation) && isWriteGateElement(operation)) {
      newOperation.value = operation.value
    }
    this.prepend(newOperation)
  }

  private deleteOperation(event: Event): void {
    this.removeChild(event.target as Operation)
  }
}
