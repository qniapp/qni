import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {iconMeasurementGate} from './icon'

@controller
export class MeasurementGateElement extends DraggableMixin(IconableMixin(HTMLElement)) {
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
