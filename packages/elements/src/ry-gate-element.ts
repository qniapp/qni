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
import {SerializedRyGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import {iconRyGate} from './icon'

export type RyGateElementProps = {
  targets: number[]
  disabled?: boolean
}

@controller
export class RyGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(AngleableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement))))))
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
    render(html`<div part="body">${this.iconHtml(iconRyGate)}</div>`, this.shadowRoot!)
  }
}
