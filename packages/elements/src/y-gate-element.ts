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
import {SerializedYGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import yGateIcon from '../icon/y-gate.svg'

export type YGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class YGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof SerializedYGateType {
    return SerializedYGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(yGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedYGateType}<${this.if}"`
    } else {
      return `"${SerializedYGateType}"`
    }
  }
}

controller(YGateElement)
