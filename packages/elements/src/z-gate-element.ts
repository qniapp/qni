import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin,
} from './mixin'
import {ControllableMixin} from './mixin/controllable'
import {SerializedZGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import zGateIcon from '../icon/z-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers'

export type ZGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class ZGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedZGateType {
    return SerializedZGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, zGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedZGateType, this.if)
  }
}
