import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedTGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import tGateIcon from '../icon/t-gate.svg'

export type TGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class TGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof SerializedTGateType {
    return SerializedTGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(tGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedTGateType}<${this.if}"`
    } else {
      return `"${SerializedTGateType}"`
    }
  }
}

controller(TGateElement)
