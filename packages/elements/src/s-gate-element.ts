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
import {SerializedSGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import sGateIcon from '../icon/s-gate.svg'
import {cD as connectDraggableGate, rI as renderIconGate, tI as toIfableGateJson} from './gate-element-helpers.js'

export type SGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class SGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedSGateType {
    return SerializedSGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, sGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedSGateType, this.if)
  }
}
