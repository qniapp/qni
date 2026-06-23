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
import {SerializedTDaggerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import tDaggerGateIcon from '../icon/t-dagger-gate.svg'
import {cD as connectDraggableGate, rI as renderIconGate, tI as toIfableGateJson} from './gate-element-helpers.js'

export type TDaggerGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class TDaggerGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedTDaggerGateType {
    return SerializedTDaggerGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, tDaggerGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedTDaggerGateType, this.if)
  }
}
