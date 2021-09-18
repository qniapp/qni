import { html, render } from "@github/jtml"
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
            height: 2rem;
            width: 2rem;
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="grabdraggable:palette-dropzone#supplyNewOperation">
          <slot></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  supplyNewOperation(event: Event): void {
    const operation = event.target as HTMLElement
    const operationName = operation.tagName.toLowerCase()
    const newOperation = document.createElement(operationName)

    this.append(newOperation)
  }
}
