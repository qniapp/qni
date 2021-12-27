import {
  ControllableMixin,
  DisableableMixin,
  DragAndDroppableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
  WireableMixin,
} from "./mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { ZGateOperation, Z_GATE_OPERATION_TYPE } from "../lib"
import { attr, controller } from "@github/catalyst"

@controller
export class ZGateElement extends DragAndDroppableMixin(
  ControllableMixin(
    WireableMixin(
      LabelableMixin(
        IfableMixin(
          DisableableMixin(
            IconableMixin(
              HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
            ),
          ),
        ),
      ),
    ),
  ),
) {
  @attr iconType = "square"

  static create({
    dragAndDrop = false,
  }: Partial<{ dragAndDrop: boolean }> = {}): ZGateElement {
    const el = new ZGateElement()
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
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:z-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${Z_GATE_OPERATION_TYPE}"`
  }

  serialize(): ZGateOperation {
    return {
      type: Z_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if !== "" ? this.if : null,
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
      <path d="M17 13L31 13L17 35L31 35" />
    </svg>`
  }
}
