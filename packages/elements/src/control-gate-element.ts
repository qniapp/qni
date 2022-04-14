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
import {SerializedControlGateType} from '@qni/common'
import controlGateIcon from '../icon/control-gate.svg'
import {controller} from '@github/catalyst'

export class ControlGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
) {
  get operationType(): typeof SerializedControlGateType {
    return SerializedControlGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(controlGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    return `"${SerializedControlGateType}"`
  }
}

controller(ControlGateElement)
