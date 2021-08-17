import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"
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

  @attr size = "base"
  @attr value = "0"
  @attr draggable = false

  showGateDescription(): void {
    if ((this as ReferenceElement)._tippy) return

    const content = this.description()
    if (!content) return

    const popup = tippy(this, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      placement: "right",
      theme: "qni",
      onShow(instance: Instance) {
        instance.setContent(content)
      },
    })
    popup.show()
  }

  private description(): string {
    return this.innerHTML
  }

  connectedCallback(): void {
    try {
      this.attachShadow({ mode: "open" })
    } catch (InvalidStateError) {
      // NOP
    }
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

          #body.size-xs {
            height: 1rem;
            width: 1rem;
          }

          #body.size-sm {
            height: 1.5rem;
            width: 1.5rem;
          }

          #body.size-base {
            height: 2rem;
            width: 2rem;
          }

          #body.size-lg {
            height: 2.5rem;
            width: 2.5rem;
          }

          #body.size-xl {
            height: 3rem;
            width: 3rem;
          }

          #body.draggable {
            cursor: grab;
          }

          #body.draggable::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-color: var(--colors-cardinal, #ff4b4b);
            border-radius: 0.25rem;
            border-style: solid;
            border-width: 2px;
            box-sizing: border-box;
            opacity: 0;
            content: "";
          }

          #body:hover::after {
            opacity: 100;
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
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
          }

          #body.size-xs #ket-label {
            font-size: 0.75rem;
            line-height: 1rem;
          }

          #body.size-sm #ket-label {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          #body.size-base #ket-label {
            font-size: 1rem;
            line-height: 1.5rem;
          }

          #body.size-lg #ket-label {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }

          #body.size-xl #ket-label {
            font-size: 1.25rem;
            line-height: 1.75rem;
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
          class="${this.classString}"
          data-target="write-gate.body"
          data-action="mouseenter:write-gate#showGateDescription"
        >
          ${ketIcon}
          <div id="ket-label"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  private get classString(): string {
    const klass = []

    if (this.value) klass.push(`value-${this.value}`)
    if (this.size === "xs") klass.push("size-xs")
    if (this.size === "sm") klass.push("size-sm")
    if (this.size === "base") klass.push("size-base")
    if (this.size === "lg") klass.push("size-lg")
    if (this.size === "xl") klass.push("size-xl")
    if (this.draggable) klass.push("draggable")

    return klass.join(" ")
  }
}
