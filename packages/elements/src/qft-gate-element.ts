import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  IfableMixin,
  MenuableMixin,
  ResizeableMixin
} from './mixin'
import {html, render} from '@github/jtml'
import {ControllableMixin} from './mixin/controllable'
import {SerializedQftGateType} from '@qni/common'
import chevronSelectorVerticalIcon from '../icon/chevron_selector_vertical.svg'
import {controller} from '@github/catalyst'
import qftGateIcon from '../icon/qft-gate.svg'

export type QftGateElementProps = {
  targets: number[]
  disabled?: boolean
}

export class QftGateElement extends MenuableMixin(
  HelpableMixin(
    IfableMixin(
      ControllableMixin(
        ResizeableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
      )
    )
  )
) {
  get operationType(): typeof SerializedQftGateType {
    return SerializedQftGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
    this.initResizeable()
  }

  update(): void {
    render(
      html`<div part="layout">
          <div part="body">${this.iconHtml(qftGateIcon)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            ${this.iconHtml(chevronSelectorVerticalIcon)}
          </div>
        </div>
        <div part="outline"></div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${SerializedQftGateType}${this.nqubit}<${this.if}"`
    } else {
      return `"${SerializedQftGateType}${this.nqubit}"`
    }
  }
}

controller(QftGateElement)
