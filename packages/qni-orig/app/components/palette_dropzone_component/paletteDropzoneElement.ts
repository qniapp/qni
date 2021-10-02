import { html, render } from "@github/jtml"
import { CircuitOperationElement } from "lib/operation"
import { Operation } from "mixins"
import { controller } from "@github/catalyst"

@controller
export class PaletteDropzoneElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`<style>
          :host {
            position: relative;
            height: ${Operation.size.base.height};
            width: ${Operation.size.base.width};
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="draggable.grab:palette-dropzone#newOperation">
          <slot></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  newOperation(event: Event): void {
    const operation = event.target as CircuitOperationElement
    const newOperation = operation.cloneNode(true) as CircuitOperationElement

    operation.disableHelp()
    // ???: newOperation.grabbed = false
    newOperation.removeAttribute("data-grabbed")

    this.prepend(newOperation)
  }
}
