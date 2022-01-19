import {ActivateableMixin, DraggableMixin, HelpableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {FlaggableMixin} from './mixin/flaggable'
import {SerializedMeasurementGateType} from '@qni/common'
import {iconMeasurementGate} from './icon'

export class MeasurementGateElement extends MenuableMixin(
  HelpableMixin(FlaggableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HTMLElement)))))
) {
  @attr value = ''

  get operationType(): typeof SerializedMeasurementGateType {
    return SerializedMeasurementGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`${this.iconHtml(iconMeasurementGate)}
        <div id="value" part="value"></div>`,
      this.shadowRoot!
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

controller(MeasurementGateElement)
