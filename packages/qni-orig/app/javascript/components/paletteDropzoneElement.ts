import { html, render } from "@github/jtml"
import { CircuitOperationElement } from "lib"
import { Operation } from "./mixins/sizeable"
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
            height: ${Operation.size.base}rem;
            width: ${Operation.size.base}rem;
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="dragAndDroppable.grab:palette-dropzone#newOperation">
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
