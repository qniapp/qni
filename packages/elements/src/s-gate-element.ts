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
import {SerializedSGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import sGateIcon from '../icon/s-gate.svg'

export type SGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class SGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedSGateType {
    return SerializedSGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(sGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedSGateType}<${this.if}"`
    } else {
      return `"${SerializedSGateType}"`
    }
  }
}
