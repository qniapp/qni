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

const hIcon = html`<svg
  id="icon"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke-width="2"
  stroke-linecap="round"
>
  <path d="M17 13L17 35M17 24L31 24M31 13L31 35" />
</svg>`

@controller
export class HGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr disabled = false
  @attr wireTop = false
  @attr wireTopDisabled = false
  @attr wireBottom = false
  @attr wireBottomDisabled = false

  disable(): void {
    this.disabled = true
  }

  enable(): void {
    this.disabled = false
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
          #body {
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            height: 2rem;
            width: 2rem;
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
          class="${this.disabledClassString} ${this.wireTopClassString} ${this
            .wireBottomClassString}"
          data-target="h-gate.body"
        >
          ${verticalWires} ${hIcon}
        </div>`,
      this.shadowRoot!,
    )
  }

  private get disabledClassString(): string {
    return this.disabled ? "disabled" : ""
  }

  private get wireTopClassString(): string {
    if (this.wireTop) return "wire-top"
    if (this.wireTopDisabled) return "wire-top-disabled"
    return ""
  }

  private get wireBottomClassString(): string {
    if (this.wireBottom) return "wire-bottom"
    if (this.wireBottomDisabled) return "wire-bottom-disabled"
    return ""
  }
}
