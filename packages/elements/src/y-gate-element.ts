import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconYGate} from './icon'

export type YGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const YGateElementType = 'Y'
export type SerializedYGateElement = {
  type: typeof YGateElementType
  targets: number[]
  controls?: number[]
  if?: string
}

@controller
export class YGateElement extends MenuableMixin(
  IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof YGateElementType {
    return YGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconYGate)}</div>`, this.shadowRoot!)
  }
}
