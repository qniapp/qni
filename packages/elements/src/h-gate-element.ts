import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedHGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import hGateIcon from '../icon/h-gate.svg'

export type HGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class HGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
    )
  )
) {
  get operationType(): typeof SerializedHGateType {
    return SerializedHGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(hGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedHGateType}<${this.if}"`
    } else {
      return `"${SerializedHGateType}"`
    }
  }
}

controller(HGateElement)
