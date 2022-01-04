import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {SerializedControlGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import {iconControlGate} from './icon'

@controller
export class ControlGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement)))))
) {
  get operationType(): typeof SerializedControlGateType {
    return SerializedControlGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`${this.iconHtml(iconControlGate)}`, this.shadowRoot!)
  }
}
