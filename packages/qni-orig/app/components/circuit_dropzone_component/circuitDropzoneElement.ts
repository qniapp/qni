import { controller, attr, target } from "@github/catalyst"
import { html, render } from "@github/jtml"

@controller
export class CircuitDropzoneElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`<style>
          #body {
            position: relative;
            height: 2rem;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        </style>

        <div id="body" data-target="circuit-dropzone.body">
          <slot></slot>
        </div>`,
      this.shadowRoot!,
    )
  }
}
