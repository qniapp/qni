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
import {SerializedRzGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import rzGateIcon from '../icon/rz-gate.svg'
import {connectDraggableGate, renderIconGate, toAngleGateJson} from './gate-element-helpers.js'

export type RzGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class RzGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedRzGateType {
    return SerializedRzGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, rzGateIcon)
  }

  toJson(): string {
    return toAngleGateJson(SerializedRzGateType, this.angle)
  }
}
