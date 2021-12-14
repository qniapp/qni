import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconRnotGate} from './icon'

export type RnotGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const RnotGateElementType = 'X^½'
export type SerializedRnotGateElement = {type: typeof RnotGateElementType; targets: number[]; controls?: number[]}

@controller
export class RnotGateElement extends MenuableMixin(
  IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof RnotGateElementType {
    return RnotGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconRnotGate)}</div>`, this.shadowRoot!)
  }
}
