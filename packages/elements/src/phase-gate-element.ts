import {
  ActivateableMixin,
  AngleableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin,
} from './mixin'
import {ControllableMixin} from './mixin/controllable'
import {SerializedPhaseGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import phaseGateIcon from '../icon/phase-gate.svg'
import {connectDraggableGate, renderIconGate, toAngleGateJson} from './gate-element-helpers'

export type PhaseGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class PhaseGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedPhaseGateType {
    return SerializedPhaseGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, phaseGateIcon)
  }

  toJson(): string {
    return toAngleGateJson(SerializedPhaseGateType, this.angle)
  }
}
