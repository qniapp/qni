import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
} from './mixin'
import {ControllableMixin} from './mixin/controllable'
import {SerializedSwapGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import swapGateIcon from '../icon/swap-gate.svg'
import {connectDraggableGate, renderIconGate, toStaticGateJson} from './gate-element-helpers'

@controller
export class SwapGateElement extends MenuableMixin(
  HelpableMixin(
    ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
  ),
) {
  get operationType(): typeof SerializedSwapGateType {
    return SerializedSwapGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, swapGateIcon)
  }

  toJson(): string {
    return toStaticGateJson(SerializedSwapGateType)
  }
}
