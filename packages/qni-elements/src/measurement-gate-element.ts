import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {IconableMixin} from './mixin/iconable'
import {iconMeasurementGate} from './icon'

@controller
export class MeasurementGateElement extends IconableMixin(HTMLElement) {
  @attr value = ''

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`${this.iconHtml(iconMeasurementGate)}
        <div part="value"></div>`,
      this.shadowRoot!
    )
  }
}
