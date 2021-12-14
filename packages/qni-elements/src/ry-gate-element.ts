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
import {iconRyGate} from './icon'

export type RyGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const RyGateElementType = 'Ry'
export type SerializedRyGateElement = {type: typeof RyGateElementType; targets: number[]; controls?: number[]}

@controller
export class RyGateElement extends MenuableMixin(
  IfableMixin(
    ControllableMixin(AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof RyGateElementType {
    return RyGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconRyGate)}</div>`, this.shadowRoot!)
  }
}
