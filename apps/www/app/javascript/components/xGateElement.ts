import {
  ConfigurableMixin,
  ControllableMixin,
  DisableableMixin,
  DragAndDroppableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
  WireableMixin
} from './mixins'
import {TemplateResult, html, render} from '@github/jtml'
import {XGateOperation, X_GATE_OPERATION_TYPE} from '../lib'
import {attr, controller} from '@github/catalyst'

@controller
export class XGateElement extends ConfigurableMixin(
  DragAndDroppableMixin(
    ControllableMixin(
      WireableMixin(
        LabelableMixin(
          IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))
        )
      )
    )
  )
) {
  @attr iconType = 'circle'

  static create({dragAndDrop = false, ifVar = ''}: Partial<{dragAndDrop: boolean; ifVar: string}> = {}): XGateElement {
    const el = new XGateElement()
    el.dragAndDrop = dragAndDrop
    el.if = ifVar
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDragAndDrop()
    this.addEventListener('mouseenter', this.showHelp)
    this.addEventListener('mousedown', this.showRightClickPopup)
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle} ${this.labelStyle} ${this.dragAndDroppableStyle}
        ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    if (this.if !== '') {
      return `"${X_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${X_GATE_OPERATION_TYPE}"`
    }
  }

  serialize(): XGateOperation {
    return {
      type: X_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if !== '' ? this.if : null
    }
  }

  get iconSvg(): TemplateResult {
    return html`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <line x1="50%" y1="28%" x2="50%" y2="72%" />
      <line x1="28%" y1="50%" x2="72%" y2="50%" />
    </svg>`
  }
}
