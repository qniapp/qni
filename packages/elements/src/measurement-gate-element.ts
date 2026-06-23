import {ActivateableMixin, DraggableMixin, HelpableMixin, HoverableMixin, IconableMixin, MenuableMixin} from './mixin'
import {attr, controller} from '@github/catalyst'
import {FlaggableMixin} from './mixin/flaggable'
import {SerializedMeasurementGateType} from '@qni/common'
import measurementGateIcon from '../icon/measurement-gate.svg'
import {connectDraggableGate, renderMeasurementGate, toFlaggedGateJson} from './gate-element-helpers.js'

@controller
export class MeasurementGateElement extends MenuableMixin(
  HelpableMixin(FlaggableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  @attr value = ''

  get operationType(): typeof SerializedMeasurementGateType {
    return SerializedMeasurementGateType
  }

  connectedCallback(): void {
    connectDraggableGate(this)
  }

  update(): void {
    renderMeasurementGate(this, measurementGateIcon)
  }

  toJson(): string {
    return toFlaggedGateJson(SerializedMeasurementGateType, this.flag)
  }
}
