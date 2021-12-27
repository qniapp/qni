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
import {iconPhaseGate} from './icon'

export type PhaseGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export const PhaseGateElementType = 'P'
export type SerializedPhaseGateElement = {
  type: typeof PhaseGateElementType
  angle?: string
  targets: number[]
  controls?: number[]
}

@controller
export class PhaseGateElement extends MenuableMixin(
  IfableMixin(
    ControllableMixin(AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof PhaseGateElementType {
    return PhaseGateElementType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconPhaseGate)}</div>`, this.shadowRoot!)
  }
}
