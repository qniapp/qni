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
import {SerializedRnotGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import rnotGateIcon from '../icon/rnot-gate.svg'
import {connectDraggableGate, renderIconGate, toIfableGateJson} from './gate-element-helpers'

export type RnotGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class RnotGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedRnotGateType {
    return SerializedRnotGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, rnotGateIcon)
  }

  toJson(): string {
    return toIfableGateJson(SerializedRnotGateType, this.if)
  }
}
