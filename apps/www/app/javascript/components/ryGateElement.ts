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
  TargetableMixin,
  WireableMixin
} from './mixins'
import {RY_GATE_OPERATION_TYPE, RyGateOperation} from '../lib'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'

@controller
export class RyGateElement extends ConfigurableMixin(
  DragAndDroppableMixin(
    TargetableMixin(
      ControllableMixin(
        WireableMixin(
          LabelableMixin(
            IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))
          )
        )
      )
    )
  )
) {
  @attr iconType = 'square'
  @attr theta = ''

  static create({
    theta = 'π/2',
    dragAndDrop = false
  }: Partial<{theta: string; dragAndDrop: boolean}> = {}): RyGateElement {
    const el = new RyGateElement()
    el.theta = theta
    el.dragAndDrop = dragAndDrop
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
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}
        ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    if (this.theta === '') {
      return `"${RY_GATE_OPERATION_TYPE}"`
    } else {
      return `"${RY_GATE_OPERATION_TYPE}(${this.theta.replace('/', '_')})"`
    }
  }

  serialize(): RyGateOperation {
    return {
      type: RY_GATE_OPERATION_TYPE,
      theta: this.theta.replace('π', 'pi'),
      controls: this.controls,
      targets: this.targets,
      if: this.if !== '' ? this.if : null
    }
  }

  get iconSvg(): TemplateResult {
    return html`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002l-4.967 10.927M25.03 13.002l4.613 10.927m0 0L29.676 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`
  }
}
