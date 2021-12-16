import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconHGate} from './icon'

export type HGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const HGateElementType = 'H'
export type SerializedHGateElement = {
  type: typeof HGateElementType
  targets: number[]
  controls?: number[]
  if?: string
}

@controller
export class HGateElement extends MenuableMixin(
  IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof HGateElementType {
    return HGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconHGate)}</div>`, this.shadowRoot!)
  }
}
