import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedSwapGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import {iconSwapGate} from './icon'

@controller
export class SwapGateElement extends MenuableMixin(
  HelpableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof SerializedSwapGateType {
    return SerializedSwapGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`${this.iconHtml(iconSwapGate)}`, this.shadowRoot!)
  }
}
