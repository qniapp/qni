import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconXGate} from './icon'

export type XGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const XGateElementType = 'X'
export type SerializedXGateElement = {
  type: typeof XGateElementType
  targets: number[]
  controls?: number[]
  if?: string
}

@controller
export class XGateElement extends MenuableMixin(
  IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof XGateElementType {
    return XGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconXGate)}</div>`, this.shadowRoot!)
  }
}
