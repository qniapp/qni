import {
  ActivateableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  HoverableMixin,
  IconableMixin,
  MenuableMixin,
} from './mixin'
import {html, render} from '@github/jtml'
import {SerializedSpacerGateType} from '@qni/common'
import {controller} from '@github/catalyst'
import spacerGateIcon from '../icon/spacer-gate.svg'

export type SpacerGateElementProps = {
  targets: number[]
}

@controller
export class SpacerGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))),
) {
  get operationType(): typeof SerializedSpacerGateType {
    return SerializedSpacerGateType
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`<div part="body">${this.iconHtml(spacerGateIcon)}</div>
        <div part="outline"></div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${SerializedSpacerGateType}"`
  }
}
