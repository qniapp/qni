import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {IconableMixin} from './mixin/iconable'
import {iconWriteGate} from './icon'

@controller
export class WriteGateElement extends IconableMixin(HTMLElement) {
  @attr value = ''

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`${this.iconHtml(iconWriteGate)}
        <div part="ket-label"></div>`,
      this.shadowRoot!
    )
  }
}
