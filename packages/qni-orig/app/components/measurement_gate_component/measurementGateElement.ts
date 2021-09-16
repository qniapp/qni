import {
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
} from "mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class MeasurementGateElement extends DraggableMixin(
  IconableMixin(
    HelpableMixin(LabelableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
  ),
) {
  @attr iconType = "transparent"
  @attr value = ""
  @attr flag = ""

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.iconStyle} ${this.draggableStyle}
        ${this.labelStyle}

        <style>
          :host([data-grabbed]) #body {
            background-color: var(--colors-snow, #ffffff);
          }

          #icon {
            color: var(--colors-superposition, #ce82ff);
            transform: rotate(90deg);
          }

          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }

          :host([data-value="0"]) #icon,
          :host([data-value="1"]) #icon {
            color: var(--colors-swan, #e5e5e5);
          }

          #ket-label {
            position: relative;
            font-size: 1rem;
            line-height: 1.5rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            writing-mode: vertical-lr;
          }

          @media (min-width: 768px) {
            #ket-label {
              writing-mode: horizontal-tb;
            }
          }

          :host([data-value="0"]) #ket-label {
            color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-value="0"]) #ket-label::after {
            content: "0";
          }

          :host([data-value="1"]) #ket-label {
            color: var(--colors-magnitude, #1cb0f6);
          }

          :host([data-value="1"]) #ket-label::after {
            content: "1";
          }
        </style>

        <div
          id="body"
          data-flag="${this.flag}"
          data-action="mouseenter:measurement-gate#showHelp mousedown:measurement-gate#grab mouseup:measurement-gate#unGrab"
        >
          ${this.iconSvg}
          <div id="ket-label"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return '"Measure"'
  }

  get iconSvg(): TemplateResult {
    return html`
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 35A16 16 0 0 1 40 35" fill="none" />
        <path d="M24.5 33L35 15" />
        <circle
          cx="24.5"
          cy="33"
          r="1.5"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    `
  }
}
