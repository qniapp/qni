import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconSwapGate} from './icon'

export const SwapGateElementType = 'Swap'
export type SerializedSwapGateElement = {type: typeof SwapGateElementType; targets: number[]; controls?: number[]}

@controller
export class SwapGateElement extends MenuableMixin(
  ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement)))))
) {
  get operationType(): typeof SwapGateElementType {
    return SwapGateElementType
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
