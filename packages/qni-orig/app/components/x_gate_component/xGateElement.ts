import {
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  JsonableMixin,
  SizeableMixin,
  WireableMixin,
} from "mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class XGateElement extends DraggableMixin(
  WireableMixin(
    IfableMixin(
      DisableableMixin(
        IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
      ),
    ),
  ),
) {
  @attr iconType = "circle"

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.ifStyle} ${this.draggableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:x-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return '"X"'
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
