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
import {SerializedRnotGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import {iconRnotGate} from './icon'

export type RnotGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class RnotGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
  )
) {
  get operationType(): typeof SerializedRnotGateType {
    return SerializedRnotGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconRnotGate)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedRnotGateType}<${this.if}"`
    } else {
      return `"${SerializedRnotGateType}"`
    }
  }
}

controller(RnotGateElement)
