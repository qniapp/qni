import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'

@controller
export class PaletteDropzoneElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }
}
