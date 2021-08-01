import { controller, attr, target } from "@github/catalyst"
import { html, render } from "@github/jtml"

const ketIcon = html`<svg
  id="icon"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="9 40, 9 10, 34 10, 40 24, 34 40" stroke="#fff" fill="#fff" />
  <path d="M9 10L9 40M34 10L40 24L34 40" />
</svg>`

@controller
export class WriteGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr value = "0"

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === "data-value" && this.body) {
      this.body.classList.remove("value-0")
      this.body.classList.remove("value-1")

      switch (newValue) {
        case "0":
          this.body.classList.add("value-0")
          break
        case "1":
          this.body.classList.add("value-1")
          break
        default:
      }
    }
  }

  update(): void {
    render(
      html`<style>
          #body {
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            height: 2rem;
            width: 2rem;
          }

          #icon {
            position: absolute;
            bottom: -2px;
            left: -2px;
            right: -2px;
            top: -2px;
            height: calc(100% + 4px);
            width: calc(100% + 4px);
            color: var(--colors-eel, #4b4b4b);
            stroke: currentColor;
            transform: rotate(90deg);
          }

          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }

          #ket-label {
            position: relative;
            font-size: 1rem;
            line-height: 1.5rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
          }

          #body.value-0 #ket-label,
          #body.value-1 #ket-label {
            background-color: var(--colors-snow, #ffffff);
          }

          #body.value-0 #ket-label {
            color: var(--colors-cardinal, #ff4b4b);
          }

          #body.value-0 #ket-label::after {
            content: "0";
          }

          #body.value-1 #ket-label {
            color: var(--colors-magnitude, #1cb0f6);
          }

          #body.value-1 #ket-label::after {
            content: "1";
          }
        </style>

        <div
          id="body"
          class="${this.valueClassString}"
          data-target="write-gate.body"
        >
          ${ketIcon}
          <div id="ket-label"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  private get valueClassString(): string {
    return this.value !== "" ? `value-${this.value}` : ""
  }
}
