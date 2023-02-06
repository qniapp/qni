import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
} from './mixin/'
import {html, render} from '@github/jtml'
import {SerializedAntiControlGateType} from '@qni/common'
import antiControlGateIcon from '../icon/anti-control-gate.svg'
import {controller} from '@github/catalyst'

@controller
export class AntiControlGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedAntiControlGateType {
    return SerializedAntiControlGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(antiControlGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${SerializedAntiControlGateType}"`
  }
}
