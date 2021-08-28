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
export class RnotGateElement extends DraggableMixin(
  WireableMixin(
    IfableMixin(
      DisableableMixin(
        IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
      ),
    ),
  ),
) {
  @attr iconType = "square"

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.ifStyle} ${this.draggableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:rnot-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return '"X^½"'
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
      stroke-linejoin="round"
    >
      <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
      <path d="M24 32L34 18M34 32L24 18" />
    </svg>`
  }
}
