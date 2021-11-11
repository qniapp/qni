import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'

@controller
export class QuantumCircuitElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
          }
        </style>

        <div id="body"><slot></slot></div>`,
      this.shadowRoot!
    )
  }
}
