import {html, render} from '@github/jtml'
import {DisableableMixin} from './mixin/disableable'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {controller} from '@github/catalyst'
import {iconRyGate} from './icon'

@controller
export class RyGateElement extends DraggableMixin(DisableableMixin(IconableMixin(HTMLElement))) {
  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconRyGate)}</div>`, this.shadowRoot!)
  }
}
