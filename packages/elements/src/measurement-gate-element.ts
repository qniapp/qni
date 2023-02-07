import {ActivateableMixin, DraggableMixin, HelpableMixin, HoverableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {FlaggableMixin} from './mixin/flaggable'
import {SerializedMeasurementGateType} from '@qni/common'
import measurementGateIcon from '../icon/measurement-gate.svg'

@controller
export class MeasurementGateElement extends MenuableMixin(
  HelpableMixin(FlaggableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  @attr value = ''

  get operationType(): typeof SerializedMeasurementGateType {
    return SerializedMeasurementGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">
          ${this.iconHtml(measurementGateIcon)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.flag === '') {
      return `"${SerializedMeasurementGateType}"`
    } else {
      return `"${SerializedMeasurementGateType}>${this.flag}"`
    }
  }
}
