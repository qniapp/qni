import {
  ActivateableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
  ResizeableMixin,
} from './mixin'
import {SerializedQftDaggerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import qftDaggerGateIcon from '../icon/qft-dagger-gate.svg'
import {connectResizeableGate, renderResizeableIconGate, toSpannedGateJson} from './gate-element-helpers'

export type QftDaggerGateElementProps = {
  targets: number[]
}

@controller
export class QftDaggerGateElement extends MenuableMixin(
  HelpableMixin(ResizeableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedQftDaggerGateType {
    return SerializedQftDaggerGateType
  }

  connectedCallback(): void {
    connectResizeableGate(this)
  }

  update(): void {
    renderResizeableIconGate(this, qftDaggerGateIcon, 'qft-dagger-gate.resizeHandle')
  }

  toJson(): string {
    return toSpannedGateJson(SerializedQftDaggerGateType, this.span)
  }
}
