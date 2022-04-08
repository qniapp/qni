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
import {SerializedRyGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import ryGateIcon from '../icon/ry-gate.svg'

export type RyGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class RyGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
      )
    )
  )
) {
  get operationType(): typeof SerializedRyGateType {
    return SerializedRyGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(ryGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.angle === '') {
      return `"${SerializedRyGateType}"`
    } else {
      return `"${SerializedRyGateType}(${this.angle.replace('/', '_')})"`
    }
  }
}

controller(RyGateElement)
