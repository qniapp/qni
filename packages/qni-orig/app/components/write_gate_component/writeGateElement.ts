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
export class WriteGateElement extends DraggableMixin(
  IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
) {
  @attr iconType = "transparent"
  @attr value = "0"

  static create(
    value: "0" | "1",
    { draggable = false }: Partial<{ draggable: boolean }> = {},
  ): WriteGateElement {
    const el = document.createElement("write-gate") as WriteGateElement
    el.value = value
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
      html`${this.sizeableStyle} ${this.iconStyle} ${this.draggableStyle}

        <style>
          :host([data-grabbed]) #body {
            background-color: var(--colors-snow, #ffffff);
          }

          #icon {
            color: var(--colors-eel, #4b4b4b);
            transform: rotate(90deg);
          }

          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }

          #ket-label {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            font-size: 1rem;
            line-height: 1.5rem;
            writing-mode: vertical-lr;
          }

          #ket-label::after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          @media (min-width: 768px) {
            #ket-label {
              writing-mode: horizontal-tb;
            }
          }

          :host([data-size="xs"]) #ket-label {
            font-size: 0.75rem;
            line-height: 1rem;
          }

          :host([data-size="sm"]) #ket-label {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          :host([data-size="base"]) #ket-label {
            font-size: 1rem;
            line-height: 1.5rem;
          }

          :host([data-size="lg"]) #ket-label {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }

          :host([data-size="xl"]) #ket-label {
            font-size: 1.25rem;
            line-height: 1.75rem;
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

        <div id="body" data-action="mouseenter:write-gate#showHelp">
          ${this.iconSvg}
          <div id="ket-label"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"|${this.value}>"`
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
      <path d="M9 10L9 40M34 10L40 24L34 40" />
    </svg>`
  }
}
