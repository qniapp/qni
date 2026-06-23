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
import {SerializedHGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import hGateIcon from '../icon/h-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers'

export type HGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class HGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedHGateType {
    return SerializedHGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, hGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedHGateType, this.if)
  }
}
