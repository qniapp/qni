import {html, render} from '@github/jtml'
import {DisableableMixin} from './mixin/disableable'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {WireableMixin} from './mixin/wireable'
import {controller} from '@github/catalyst'
import {iconXGate} from './icon'

@controller
export class XGateElement extends DraggableMixin(WireableMixin(DisableableMixin(IconableMixin(HTMLElement)))) {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    this.dispatchWireTopBottomEvent(name, oldValue, newValue)
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconXGate)}</div>`, this.shadowRoot!)
  }
}
