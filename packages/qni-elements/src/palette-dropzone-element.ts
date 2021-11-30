import {Operation, isWriteGateElement} from './operation'
import {html, render} from '@github/jtml'
import {Util} from './util'
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
    Util.need(this.childElementCount !== 0, 'palette-dropzone must have an operation.')
    Util.need(this.childElementCount < 2, 'palette-dropzone cannot hold multiple operations.')

    return this.children[0] as Operation
  }

  private newOperation(event: Event): void {
    const operation = event.target as Operation
    const newOperation = document.createElement(operation.tagName) as Operation

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
    this.removeChild(event.target as Operation)
  }
}
