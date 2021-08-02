import { controller } from "@github/catalyst"
import { html, render } from "@github/jtml"

@controller
export class CircuitStepElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
            flex-direction: column;
          }

          ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
            margin-top: 1rem;
          }
        </style>

        <div id="body">
          <slot></slot>
        </div>`,
      this.shadowRoot!,
    )
  }
}
