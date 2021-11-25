import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'
import {iconHGate} from './icon'

@controller
export class HGateElement extends MenuableMixin(
  IfableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement)))))
) {
  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconHGate)}</div>`, this.shadowRoot!)
  }
}
