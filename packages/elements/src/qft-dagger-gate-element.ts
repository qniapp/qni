import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin
} from './mixin'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedQftDaggerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import qftDaggerGateIcon from '../icon/qft-dagger-gate.svg'

export type QftDaggerGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class QftDaggerGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
    )
  )
) {
  get operationType(): typeof SerializedQftDaggerGateType {
    return SerializedQftDaggerGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(qftDaggerGateIcon)}</div>`, this.shadowRoot!)
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedQftDaggerGateType}<${this.if}"`
    } else {
      return `"${SerializedQftDaggerGateType}"`
    }
  }
}

controller(QftDaggerGateElement)
