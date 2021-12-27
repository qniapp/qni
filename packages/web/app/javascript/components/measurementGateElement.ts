import {
  ConfigurableMixin,
  DragAndDroppableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
} from "./mixins"
import { MEASUREMENT_GATE_OPERATION_TYPE, MeasurementOperation } from "../lib"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class MeasurementGateElement extends ConfigurableMixin(
  DragAndDroppableMixin(
    IconableMixin(
      HelpableMixin(LabelableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
    ),
  ),
) {
  @attr iconType = "transparent"
  @attr value = -1
  @attr flag = ""

  static create({
    dragAndDrop = false,
    flag = "",
  }: Partial<{
    dragAndDrop: boolean
    flag: string
  }> = {}): MeasurementGateElement {
    const el = new MeasurementGateElement()
    el.dragAndDrop = dragAndDrop
    el.flag = flag
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
      html`${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}
        ${this.labelStyle}

        <style>
          #icon {
            color: var(--colors-superposition, #ce82ff);
            transform: rotate(90deg);
          }
          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }
          :host([data-snapped][data-value="0"]) #icon,
          :host([data-snapped][data-value="1"]) #icon {
            color: var(--colors-swan, #e5e5e5);
          }
          #value {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            writing-mode: vertical-lr;
          }
          @media (min-width: 768px) {
            #value {
              writing-mode: horizontal-tb;
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
          }
          :host([data-snapped]) #value {
            display: block;
          }
          #value::after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          :host([data-wire-count="1"]) #value,
          :host([data-wire-count="2"]) #value,
          :host([data-wire-count="3"]) #value {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          :host([data-wire-count="4"]) #value,
          :host([data-wire-count="5"]) #value,
          :host([data-wire-count="6"]) #value {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-wire-count="7"]) #value,
          :host([data-wire-count="8"]) #value,
          :host([data-wire-count="9"]) #value,
          :host([data-wire-count="10"]) #value {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-value="0"]) #value {
            color: var(--colors-cardinal, #ff4b4b);
          }
          :host([data-value="0"]) #value::after {
            content: "0";
          }
          :host([data-value="1"]) #value {
            color: var(--colors-magnitude, #1cb0f6);
          }
          :host([data-value="1"]) #value::after {
            content: "1";
          }
        </style>

        <div id="body">
          ${this.iconSvg}
          <div id="value"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.flag === "") {
      return `"${MEASUREMENT_GATE_OPERATION_TYPE}"`
    } else {
      return `"${MEASUREMENT_GATE_OPERATION_TYPE}>${this.flag}"`
    }
  }

  serialize(): MeasurementOperation {
    return {
      type: MEASUREMENT_GATE_OPERATION_TYPE,
      flag: this.flag,
    }
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
