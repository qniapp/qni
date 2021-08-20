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

const zIcon = html`<svg
  id="icon"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke-width="2"
  stroke-linecap="round"
>
  <path d="M17 13L31 13L17 35L31 35" />
</svg>`

@controller
export class ZGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr size = "base"
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

    const content = this.innerHTML
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

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === "data-disabled" && oldValue !== newValue && this.body) {
      if (newValue === null) {
        this.body.classList.remove("disabled")
      } else {
        this.body.classList.add("disabled")
      }
    }

    if (name === "data-wire-top" && oldValue !== newValue && this.body) {
      this.body.classList.add(this.wireTopClassString)
    }
    if (name === "data-wire-bottom" && oldValue !== newValue && this.body) {
      this.body.classList.add(this.wireBottomClassString)
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
          data-target="z-gate.body"
          data-action="mouseenter:z-gate#showGateDescription"
        >
          ${verticalWires} ${zIcon}
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
