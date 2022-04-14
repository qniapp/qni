import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedXGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import xGateIcon from '../icon/x-gate.svg'

export type XGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class XGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
    )
  )
) {
  get operationType(): typeof SerializedXGateType {
    return SerializedXGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(xGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedXGateType}<${this.if}"`
    } else {
      return `"${SerializedXGateType}"`
    }
  }
}

controller(XGateElement)
