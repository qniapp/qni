import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
} from './mixin'
import {SerializedAntiControlGateType} from '@qni/common'
import antiControlGateIcon from '../icon/anti-control-gate.svg'
import {connectDraggableGate, renderIconGate, toStaticGateJson} from './gate-element-helpers.js'
import {controller} from '@github/catalyst'

@controller
export class AntiControlGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedAntiControlGateType {
    return SerializedAntiControlGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, antiControlGateIcon)
  }

  toJson(): string {
    return toStaticGateJson(SerializedAntiControlGateType)
  }
}
