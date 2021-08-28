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
export class PhaseGateElement extends DraggableMixin(
  WireableMixin(
    IfableMixin(
      DisableableMixin(
        IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
      ),
    ),
  ),
) {
  @attr iconType = "circle"
  @attr phi = ""

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle} ${this.disabledStyle} ${this.ifStyle}

        <style>
          :host::before {
            position: absolute;
            bottom: 0px;
            color: var(--colors-wolf, #777777);
            background-color: transparent;
            font-size: 0.75rem;
            line-height: 0.75rem;
            letter-spacing: -0.05em;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            z-index: 10;
            content: attr(data-phi) "";
          }

          :host([data-size="xs"]) #body::before {
            margin-bottom: 1.125rem;
          }

          :host([data-size="sm"]) #body::before {
            margin-bottom: 1.625rem;
          }

          :host::before,
          :host([data-size="base"]) #body::before {
            margin-bottom: 2.125rem;
          }

          :host([data-size="lg"]) #body::before {
            margin-bottom: 2.625rem;
          }

          :host([data-size="xl"]) #body::before {
            margin-bottom: 3.125rem;
          }
        </style>

        <div
          id="body"
          data-phi="${this.phi}"
          data-action="mouseenter:phase-gate#showHelp"
        >
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return '"P"'
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
      <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
    </svg>`
  }
}
