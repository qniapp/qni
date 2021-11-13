import {html, render} from '@github/jtml'
import {DisableableMixin} from './mixin/disableable'
import {IconableMixin} from './mixin/iconable'
import {WireableMixin} from './mixin/wireable'
import {controller} from '@github/catalyst'
import {iconHGate} from './icon'

@controller
export class HGateElement extends WireableMixin(DisableableMixin(IconableMixin(HTMLElement))) {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`${this.iconHtml(iconHGate)}`, this.shadowRoot!)
  }

  toJson(): string {
    return '"H"'
  }
}
