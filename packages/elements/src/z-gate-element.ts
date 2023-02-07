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
import {SerializedZGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import zGateIcon from '../icon/z-gate.svg'

export type ZGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class ZGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedZGateType {
    return SerializedZGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(zGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedZGateType}<${this.if}"`
    } else {
      return `"${SerializedZGateType}"`
    }
  }
}
