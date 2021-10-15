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
  WireableMixin,
} from "./mixins"
import { HGateOperation, H_GATE_OPERATION_TYPE } from "lib"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class HGateElement extends ConfigurableMixin(
  DragAndDroppableMixin(
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
  ),
) {
  @attr iconType = "square"

  static create({
    dragAndDrop = false,
    ifVar = "",
  }: Partial<{ dragAndDrop: boolean; ifVar: string }> = {}): HGateElement {
    const el = new HGateElement()
    el.dragAndDrop = dragAndDrop
    el.if = ifVar
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDragAndDrop()
    this.addEventListener("mouseenter", this.showHelp)
    this.addEventListener("mousedown", this.showRightClickPopup)
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.if !== "") {
      return `"${H_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${H_GATE_OPERATION_TYPE}"`
    }
  }

  serialize(): HGateOperation {
    return {
      type: H_GATE_OPERATION_TYPE,
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
      <path d="M17 13L17 35M17 24L31 24M31 13L31 35" />
    </svg>`
  }
}
