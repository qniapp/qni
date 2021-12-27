import {ActivateableMixin, DisableableMixin, DraggableMixin, IconableMixin, IfableMixin, MenuableMixin} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconZGate} from './icon'

export type ZGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const ZGateElementType = 'Z'
export type SerializedZGateElement = {
  type: typeof ZGateElementType
  targets: number[]
  controls?: number[]
  if?: string
}

@controller
export class ZGateElement extends MenuableMixin(
  IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
) {
  get operationType(): typeof ZGateElementType {
    return ZGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconZGate)}</div>`, this.shadowRoot!)
  }
}
