import {
  ActivateableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
  ResizeableMixin,
} from './mixin'
import {SerializedQftGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import qftGateIcon from '../icon/qft-gate.svg'
import {connectResizeableGate, renderResizeableIconGate, toSpannedGateJson} from './gate-element-helpers.js'

export type QftGateElementProps = {
  targets: number[]
}

@controller
export class QftGateElement extends MenuableMixin(
  HelpableMixin(ResizeableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedQftGateType {
    return SerializedQftGateType
  }

  connectedCallback(): void {
    connectResizeableGate(this)
  }

  update(): void {
    renderResizeableIconGate(this, qftGateIcon, 'qft-gate.resizeHandle')
  }

  toJson(): string {
    return toSpannedGateJson(SerializedQftGateType, this.span)
  }
}
