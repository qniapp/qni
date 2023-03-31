import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin,
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedSDaggerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import sDaggerGateIcon from '../icon/s-dagger-gate.svg'

export type SDaggerGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class SDaggerGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedSDaggerGateType {
    return SerializedSDaggerGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(sDaggerGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedSDaggerGateType}<${this.if}"`
    } else {
      return `"${SerializedSDaggerGateType}"`
    }
  }
}
