import {
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  WireableMixin,
} from "mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class SwapGateElement extends DraggableMixin(
  WireableMixin(
    DisableableMixin(
      IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
    ),
  ),
) {
  @attr iconType = "transparent"

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle}

        <div
          id="body"
          data-action="mouseenter:swap-gate#showHelp mousedown:swap-gate#grab mouseup:swap-gate#unGrab"
        >
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return '"Swap"'
  }

  get iconSvg(): TemplateResult {
    return html`<svg
      id="icon"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>`
  }
}
