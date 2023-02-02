import {
  ActivateableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
  ResizeableMixin
} from './mixin'
import {html, render} from '@github/jtml'
import {SerializedQftDaggerGateType} from '@qni/common'
import chevronSelectorVerticalIcon from '../icon/chevron_selector_vertical.svg'
import {controller} from '@github/catalyst'
import qftDaggerGateIcon from '../icon/qft-dagger-gate.svg'

export type QftDaggerGateElementProps = {
  targets: number[]
}

@controller
export class QftDaggerGateElement extends MenuableMixin(
  HelpableMixin(ResizeableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))))
) {
  get operationType(): typeof SerializedQftDaggerGateType {
    return SerializedQftDaggerGateType
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
          <div part="body">${this.iconHtml(qftDaggerGateIcon)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(chevronSelectorVerticalIcon)}</div>
          </div>
        </div>
        <div part="outline"></div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    return `"${SerializedQftDaggerGateType}${this.span}"`
  }
}
