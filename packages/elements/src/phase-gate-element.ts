import {
  ActivateableMixin,
  AngleableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedPhaseGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import {iconPhaseGate} from './icon'

export type PhaseGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class PhaseGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
    )
  )
) {
  get operationType(): typeof SerializedPhaseGateType {
    return SerializedPhaseGateType
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
