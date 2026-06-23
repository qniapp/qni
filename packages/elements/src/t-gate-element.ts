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
import {SerializedTGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import tGateIcon from '../icon/t-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers.js'

export type TGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class TGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedTGateType {
    return SerializedTGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, tGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedTGateType, this.if)
  }
}
