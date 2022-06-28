import {
  ActivateableMixin,
  AngleableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedPhaseGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import phaseGateIcon from '../icon/phase-gate.svg'

export type PhaseGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class PhaseGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
      )
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
    this.initDraggable()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(phaseGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.angle === '') {
      return `"${SerializedPhaseGateType}"`
    } else {
      return `"${SerializedPhaseGateType}(${this.angle.replace('/', '_')})"`
    }
  }
}

controller(PhaseGateElement)
