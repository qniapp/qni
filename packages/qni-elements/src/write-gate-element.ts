import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {iconWriteGate} from './icon'

@controller
export class WriteGateElement extends DraggableMixin(IconableMixin(HTMLElement)) {
  @attr value = ''

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`${this.iconHtml(iconWriteGate)}
        <div part="value"></div>`,
      this.shadowRoot!
    )
  }
}
