import {ActivateableMixin, DraggableMixin, HelpableMixin, HoverableMixin, IconableMixin, MenuableMixin} from './mixin'
import {SerializedWrite0GateType, SerializedWrite1GateType} from '@qni/common'
import {attr, controller} from '@github/catalyst'
import writeGateIcon from '../icon/write-gate.svg'
import {cD as connectDraggableGate, rW as renderWriteGate} from './gate-element-helpers.js'

@controller
export class WriteGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
) {
  @attr value = ''

  get operationType(): typeof SerializedWrite0GateType | typeof SerializedWrite1GateType {
    switch (this.value) {
      case '0':
        return SerializedWrite0GateType
      case '1':
        return SerializedWrite1GateType
      default:
        throw new Error(`Invalid write value: ${this.value}`)
    }
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderWriteGate(this, writeGateIcon)
  }

  toJson(): string {
    return `"|${this.value}>"`
  }
}
