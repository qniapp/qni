import {
  ActivateableMixin,
  AngleableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin/'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedRzGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import rzGateIcon from '../icon/rz-gate.svg'

export type RzGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class RzGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
    )
  )
) {
  get operationType(): typeof SerializedRzGateType {
    return SerializedRzGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(rzGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.angle === '') {
      return `"${SerializedRzGateType}"`
    } else {
      return `"${SerializedRzGateType}(${this.angle.replace('/', '_')})"`
    }
  }
}

controller(RzGateElement)
