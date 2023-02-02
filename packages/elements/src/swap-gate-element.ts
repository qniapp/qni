import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedSwapGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import swapGateIcon from '../icon/swap-gate.svg'

@controller
export class SwapGateElement extends MenuableMixin(
  HelpableMixin(
    ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof SerializedSwapGateType {
    return SerializedSwapGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(swapGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    return `"${SerializedSwapGateType}"`
  }
}
