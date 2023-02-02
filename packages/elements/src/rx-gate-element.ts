import {
  ActivateableMixin,
  AngleableMixin,
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
import {SerializedRxGateType} from '@qni/common'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {controller} from '@github/catalyst'
import rxGateIcon from '../icon/rx-gate.svg'

export type RxGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class RxGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
      )
    )
  )
) {
  get operationType(): typeof SerializedRxGateType {
    return SerializedRxGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(rxGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    if (this.angle === '') {
      return `"${SerializedRxGateType}"`
    } else {
      return `"${SerializedRxGateType}(${this.angle.replace('/', '_')})"`
    }
  }
}
