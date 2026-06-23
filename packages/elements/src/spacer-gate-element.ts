import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
} from './mixin'
import {SerializedSpacerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import spacerGateIcon from '../icon/spacer-gate.svg'
import {connectDraggableGate, renderIconGate, toStaticGateJson} from './gate-element-helpers'

export type SpacerGateElementProps = {
  targets: number[]
}

@controller
export class SpacerGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedSpacerGateType {
    return SerializedSpacerGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderIconGate(this, spacerGateIcon)
  }

  toJson(): string {
    return toStaticGateJson(SerializedSpacerGateType)
  }
}
