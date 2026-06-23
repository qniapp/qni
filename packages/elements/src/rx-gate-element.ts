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
import {SerializedRxGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import rxGateIcon from '../icon/rx-gate.svg'
import {connectDraggableGate, renderIconGate, toAngleGateJson} from './gate-element-helpers'

export type RxGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class RxGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedRxGateType {
    return SerializedRxGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, rxGateIcon)
  }

  toJson(): string {
    return toAngleGateJson(SerializedRxGateType, this.angle)
  }
}
