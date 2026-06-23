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
import {SerializedYGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import yGateIcon from '../icon/y-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers.js'

export type YGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class YGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedYGateType {
    return SerializedYGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, yGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedYGateType, this.if)
  }
}
