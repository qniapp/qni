import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"
import { controller, attr, target } from "@github/catalyst"
import { html, render } from "@github/jtml"

const measurementIcon = html`
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

@controller
export class MeasurementGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr size = "base"
  @attr value = ""
  @attr flag = ""
  @attr draggable = false
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

  showGateDescription(): void {
    if ((this as ReferenceElement)._tippy) return

    const content = this.descriptionHeader()
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

  private descriptionHeader(): HTMLElement | null {
    return this.querySelector("header")
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === "data-grabbed") {
      this.body.classList.toggle("grabbed")
    }

    if (name === "data-draggable-source" && this.body) {
      this.body.classList.toggle("draggable-source")
    }

    if (name === "data-draggable-shadow" && this.body) {
      this.body.classList.toggle("draggable-shadow")
    }

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
    this.addEventListener("mousedown", this.grab)
    this.addEventListener("mouseup", this.drop)

    render(
      html`<style>
          :host([data-size="xs"]) {
            height: 1rem;
            width: 1rem;
          }

          :host([data-size="sm"]) {
            height: 1.5rem;
            width: 1.5rem;
          }

          :host,
          :host([data-size="base"]) {
            height: 2rem;
            width: 2rem;
          }

          :host([data-size="lg"]) {
            height: 2.5rem;
            width: 2.5rem;
          }

          :host([data-size="xl"]) {
            height: 3rem;
            width: 3rem;
          }

          #body {
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            height: 100%;
            width: 100%;
          }

          #body.grabbed,
          #body.draggable-source,
          #body.draggable-shadow {
            background-color: var(--colors-snow, #ffffff);
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

          #body.draggable-source::after {
            opacity: 100;
            border-color: var(--colors-fox, #ff9600);
          }

          #body.draggable-shadow::after {
            opacity: 100;
            border-color: var(--colors-superposition, #ce82ff);
          }

          #icon {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            height: 100%;
            width: 100%;
            color: var(--colors-superposition, #ce82ff);
            stroke: currentColor;
            transform: rotate(90deg);
          }

          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }

          #body.value-0 #icon,
          #body.value-1 #icon {
            color: var(--colors-swan, #e5e5e5);
          }

          #ket-label {
            position: relative;
            font-size: 1rem;
            line-height: 1.5rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
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

          #body::before {
            bottom: 0;
            color: var(--colors-wolf, #777777);
            content: attr(data-flag) "";
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            font-size: 0.75rem;
            line-height: 1rem;
            margin-bottom: 2rem;
            position: absolute;
            writing-mode: horizontal-tb;
            z-index: 10;
          }
        </style>

        <div
          id="body"
          class="${this.classString}"
          data-flag="${this.flag}"
          data-target="measurement-gate.body"
          data-action="mouseenter:measurement-gate#showGateDescription"
        >
          ${measurementIcon}
          <div id="ket-label"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  private get classString(): string {
    const klass = []

    if (this.value) klass.push(`value-${this.value}`)
    if (this.draggable) klass.push("draggable")

    return klass.join(" ")
  }
}
