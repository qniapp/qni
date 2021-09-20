import { html, render } from "@github/jtml"
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

          /*
           * Specify "position: absolute" to overlap the newly generated
           * operation with the operation originally placed in
           * <palette-dropzone> ... </palette-dropzone> (e.g. <h-gate>).
           */
          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="grabdraggable:palette-dropzone#newOperation">
          <slot></slot>
        </div>`,
      this.shadowRoot!,
    )
  }

  newOperation(event: Event): void {
    const operation = event.target as HTMLElement
    const newOperation = document.createElement(operation.tagName)

    this.append(newOperation)
  }
}
