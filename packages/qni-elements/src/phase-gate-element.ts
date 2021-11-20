import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {DisableableMixin} from './mixin/disableable'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {iconPhaseGate} from './icon'

@controller
export class PhaseGateElement extends DraggableMixin(DisableableMixin(IconableMixin(HTMLElement))) {
  @attr phi = ''

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconPhaseGate)}</div>`, this.shadowRoot!)
  }
}
