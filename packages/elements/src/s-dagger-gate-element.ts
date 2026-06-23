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
import {SerializedSDaggerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import sDaggerGateIcon from '../icon/s-dagger-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers.js'

export type SDaggerGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class SDaggerGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedSDaggerGateType {
    return SerializedSDaggerGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, sDaggerGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedSDaggerGateType, this.if)
  }
}
