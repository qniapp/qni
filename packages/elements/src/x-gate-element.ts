import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconXGate} from './icon'

export type XGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const SerializedXGateType = 'X'
export type SerializedXGate = {
  type: typeof SerializedXGateType
  targets: number[]
  controls?: number[]
  if?: string
}

@controller
export class XGateElement extends MenuableMixin(
  IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof SerializedXGateType {
    return SerializedXGateType
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
