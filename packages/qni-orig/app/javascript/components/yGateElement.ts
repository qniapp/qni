import {
  ControllableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
  WireableMixin,
} from "./mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { YGateOperation, Y_GATE_OPERATION_TYPE } from "lib/operation"
import { attr, controller } from "@github/catalyst"

@controller
export class YGateElement extends DraggableMixin(
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
    draggable = false,
  }: Partial<{ draggable: boolean }> = {}): YGateElement {
    const el = document.createElement("y-gate") as YGateElement
    el.draggable = draggable
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.draggableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:y-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${Y_GATE_OPERATION_TYPE}"`
  }

  serialize(): YGateOperation {
    return {
      type: Y_GATE_OPERATION_TYPE,
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
      <path d="M17 13L24 24L31 13M24 24L24 35" />
    </svg>`
  }
}
