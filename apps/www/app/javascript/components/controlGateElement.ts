import { CONTROL_GATE_OPERATION_TYPE, ControlGateOperation } from "../lib"
import {
  DisableableMixin,
  DragAndDroppableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  TargetableMixin,
  WireableMixin,
} from "./mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class ControlGateElement extends DragAndDroppableMixin(
  TargetableMixin(
    WireableMixin(
      DisableableMixin(
        IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
      ),
    ),
  ),
) {
  @attr iconType = "transparent"

  static create({
    dragAndDrop = false,
  }: Partial<{ dragAndDrop: boolean }> = {}): ControlGateElement {
    const el = new ControlGateElement()
    el.dragAndDrop = dragAndDrop
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDragAndDrop()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${CONTROL_GATE_OPERATION_TYPE}"`
  }

  serialize(): ControlGateOperation {
    return { type: CONTROL_GATE_OPERATION_TYPE, targets: this.targets }
  }

  get iconSvg(): TemplateResult {
    return html`
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      >
        <circle cx="24" cy="24" r="8" fill="currentColor" />
      </svg>
    `
  }
}
