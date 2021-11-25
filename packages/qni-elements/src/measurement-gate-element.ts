import {ActivateableMixin, DraggableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {iconMeasurementGate} from './icon'

@controller
export class MeasurementGateElement extends MenuableMixin(
  DraggableMixin(IconableMixin(ActivateableMixin(HTMLElement)))
) {
  @attr value = ''

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
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
