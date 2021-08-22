import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"
import { controller, attr, target } from "@github/catalyst"
import { html, render } from "@github/jtml"

const verticalWires = html`<svg
  id="wires"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <line
    id="wire-top"
    x1="50"
    y1="0"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-bottom"
    x1="50"
    y1="100"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>`

const rzIcon = html`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
  <path
    d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074"
    fill="none"
    stroke="#FFF"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`

@controller
export class RzGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr size = "base"
  @attr theta = ""
  @attr disabled = false
  @attr wireTop = false
  @attr wireTopDisabled = false
  @attr wireBottom = false
  @attr wireBottomDisabled = false
  @attr draggable = false

  disable(): void {
    this.disabled = true
  }

  enable(): void {
    this.disabled = false
  }

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

  toJson(): string {
    return '"Rz"'
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
    if (!this.body) return
    if (oldValue === newValue) return

    if (name === "data-disabled") {
      this.body.classList.toggle("disabled")
    }

    if (name === "data-wire-top") {
      this.body.classList.toggle("wire-top")
    }
    if (name === "data-wire-bottom") {
      this.body.classList.toggle("wire-bottom")
    }
  }

  update(): void {
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

          #body.draggable {
            cursor: grab;
          }

          #body::before {
            position: absolute;
            bottom: 0px;
            color: var(--colors-wolf, #777777);
            background-color: var(--colors-snow, #ffffff);
            font-size: 0.75rem;
            line-height: 0.75rem;
            letter-spacing: -0.05em;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            z-index: 10;
            content: attr(data-theta) "";
          }

          :host([data-size="xs"]) #body::before {
            margin-bottom: 1rem;
          }

          :host([data-size="sm"]) #body::before {
            margin-bottom: 1.5rem;
          }

          :host::before,
          :host([data-size="base"]) #body::before {
            margin-bottom: 2rem;
          }

          :host([data-size="lg"]) #body::before {
            margin-bottom: 2.5rem;
          }

          :host([data-size="xl"]) #body::before {
            margin-bottom: 3rem;
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

          #wires {
            position: absolute;
            bottom: -2px;
            left: -2px;
            right: -2px;
            top: -2px;
            height: calc(100% + 4px);
            width: calc(100% + 4px);
            overflow: visible;
          }

          #wire-top,
          #wire-bottom {
            color: var(--colors-gate, #43c000);
            stroke-width: 4;
            display: none;
          }

          #body.wire-top #wire-top {
            display: block;
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }

          #body.wire-top-disabled #wire-top {
            display: block;
            color: var(--colors-eel, #4b4b4b);
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }

          #body.wire-bottom #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }

          #body.wire-bottom-disabled #wire-bottom {
            display: block;
            color: var(--colors-eel, #4b4b4b);
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }

          #icon {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            height: 100%;
            width: 100%;
            border-radius: 0.25rem;
            color: var(--colors-snow, #ffffff);
            background-color: var(--colors-gate, #43c000);
            stroke: currentColor;
          }

          #body.disabled #icon {
            background-color: var(--colors-eel, #4b4b4b);
          }
        </style>

        <div
          id="body"
          class="${this.classString}"
          data-target="rz-gate.body"
          data-theta="${this.theta}"
          data-action="mouseenter:rz-gate#showGateDescription"
        >
          ${verticalWires} ${rzIcon}
        </div>`,
      this.shadowRoot!,
    )
  }

  private get classString(): string {
    const klass = []

    if (this.wireTop) klass.push("wire-top")
    if (this.wireTopDisabled) klass.push("wire-top-disabled")
    if (this.wireBottom) klass.push("wire-bottom")
    if (this.wireBottomDisabled) klass.push("wire-bottom-disabled")

    if (this.disabled) klass.push("disabled")
    if (this.draggable) klass.push("draggable")

    return klass.join(" ")
  }
}
