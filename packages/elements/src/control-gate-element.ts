import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
} from './mixin'
import {SerializedControlGateType} from '@qni/common'
import controlGateIcon from '../icon/control-gate.svg'
import {connectDraggableGate, renderIconGate, toStaticGateJson} from './gate-element-helpers.js'
import {controller} from '@github/catalyst'

@controller
export class ControlGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedControlGateType {
    return SerializedControlGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, controlGateIcon)
  }

  toJson(): string {
    return toStaticGateJson(SerializedControlGateType)
  }
}
