import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {controller} from '@github/catalyst'
import {iconControlGate} from './icon'

export const ControlGateElementType = '•'
export type SerializedControlGateElement = {type: typeof ControlGateElementType; targets: number[]}

@controller
export class ControlGateElement extends MenuableMixin(
  DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))
) {
  get operationType(): typeof ControlGateElementType {
    return ControlGateElementType
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
