import {
  ActivateableMixin,
  AngleableMixin,
  DisableableMixin,
  DraggableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {controller} from '@github/catalyst'
import {iconRxGate} from './icon'

export type RxGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const RxGateElementType = 'Rx'
export type SerializedRxGateElement = {
  type: typeof RxGateElementType
  targets: number[]
  angle?: string
  controls?: number[]
  if?: string
}

@controller
export class RxGateElement extends MenuableMixin(
  IfableMixin(
    ControllableMixin(AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof RxGateElementType {
    return RxGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconRxGate)}</div>`, this.shadowRoot!)
  }
}
