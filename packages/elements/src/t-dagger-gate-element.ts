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
import {SerializedTDaggerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import tDaggerGateIcon from '../icon/t-dagger-gate.svg'

export type TDaggerGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class TDaggerGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))),
      ),
    ),
  ),
) {
  get operationType(): typeof SerializedTDaggerGateType {
    return SerializedTDaggerGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(tDaggerGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedTDaggerGateType}<${this.if}"`
    } else {
      return `"${SerializedTDaggerGateType}"`
    }
  }
}
