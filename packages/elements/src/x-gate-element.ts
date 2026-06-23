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
import {SerializedXGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import xGateIcon from '../icon/x-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers'

export type XGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class XGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedXGateType {
    return SerializedXGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, xGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedXGateType, this.if)
  }
}
