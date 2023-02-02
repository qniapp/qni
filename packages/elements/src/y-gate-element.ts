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
import {SerializedYGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import yGateIcon from '../icon/y-gate.svg'

export type YGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class YGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
    )
  )
) {
  get operationType(): typeof SerializedYGateType {
    return SerializedYGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(yGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedYGateType}<${this.if}"`
    } else {
      return `"${SerializedYGateType}"`
    }
  }
}
