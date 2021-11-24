import {html, render} from '@github/jtml'
import {ActivateableMixin} from './mixin/activateable'
import {DisableableMixin} from './mixin/disableable'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {controller} from '@github/catalyst'
import {iconControlGate} from './icon'

@controller
export class ControlGateElement extends DraggableMixin(
  DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement)))
) {
  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`${this.iconHtml(iconControlGate)}`, this.shadowRoot!)
  }
}
