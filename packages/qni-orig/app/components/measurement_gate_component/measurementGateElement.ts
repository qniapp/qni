import {
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
} from "mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class MeasurementGateElement extends DraggableMixin(
  IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
) {
  @attr iconType = "transparent"
  @attr value = ""
  @attr flag = ""
  @attr grabbed = false
  @attr draggableSource = false
  @attr draggableShadow = false

  grab(event: MouseEvent): void {
    const customEvent = new CustomEvent("grabDraggable", {
      detail: event,
      bubbles: true,
    })
    this.parentElement?.dispatchEvent(customEvent)
  }

  drop(event: MouseEvent): void {
    const customEvent = new CustomEvent("dropDraggable", {
      detail: event,
      bubbles: true,
    })
    this.parentElement?.dispatchEvent(customEvent)
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    this.addEventListener("mousedown", this.grab)
    this.addEventListener("mouseup", this.drop)

    render(
      html`${this.sizeableStyle} ${this.iconStyle} ${this.draggableStyle}

        <style>
          :host([data-grabbed]),
          :host([data-draggable-source]),
          :host([data-draggable-shadow]) {
            background-color: var(--colors-snow, #ffffff);
          }

          :host([data-draggable-source])::after {
            opacity: 100;
            border-color: var(--colors-fox, #ff9600);
          }

          :host([data-draggable-shadow])::after {
            opacity: 100;
            border-color: var(--colors-superposition, #ce82ff);
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

          :host::before {
            position: absolute;
            color: var(--colors-wolf, #777777);
            background-color: transparent;
            font-size: 0.75rem;
            line-height: 0.75rem;
            letter-spacing: -0.05em;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            white-space: nowrap;
            z-index: 10;
            content: attr(data-flag) "";
          }

          :host([data-size="xs"])::before {
            bottom: 0px;
            margin-bottom: 1.125rem;
          }

          :host([data-size="sm"])::before {
            bottom: 0px;
            margin-bottom: 1.625rem;
          }

          :host::before,
          :host([data-size="base"])::before {
            bottom: 0px;
            margin-bottom: 2.125rem;
          }

          :host([data-size="lg"])::before {
            bottom: 0px;
            margin-bottom: 2.625rem;
          }

          :host([data-size="xl"])::before {
            bottom: 0px;
            margin-bottom: 3.125rem;
          }
        </style>

        <div
          id="body"
          data-flag="${this.flag}"
          data-action="mouseenter:measurement-gate#showHelp"
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
