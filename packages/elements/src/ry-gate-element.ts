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
import {SerializedRyGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import ryGateIcon from '../icon/ry-gate.svg'
import {connectDraggableGate, renderIconGate, toAngleGateJson} from './gate-element-helpers.js'

export type RyGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class RyGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedRyGateType {
    return SerializedRyGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, ryGateIcon)
  }

  toJson(): string {
    return toAngleGateJson(SerializedRyGateType, this.angle)
  }
}
