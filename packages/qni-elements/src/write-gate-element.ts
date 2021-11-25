import {ActivateableMixin, DraggableMixin, IconableMixin} from './mixin/'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {iconWriteGate} from './icon'

@controller
export class WriteGateElement extends DraggableMixin(IconableMixin(ActivateableMixin(HTMLElement))) {
  @attr value = ''

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`${this.iconHtml(iconWriteGate)}
        <div part="value"></div>`,
      this.shadowRoot!
    )
  }
}
