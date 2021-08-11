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

const swapIcon = html`<svg
  id="icon"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M6 18L18 6M6 6l12 12"></path>
</svg>`

@controller
export class SwapGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr wireTop = false
  @attr wireBottom = false
  @attr disabled = false

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
    if (name === "data-wire-top" && oldValue !== newValue && this.body) {
      this.body.classList.add(this.wireTopClassString)
    }
    if (name === "data-wire-bottom" && oldValue !== newValue && this.body) {
      this.body.classList.add(this.wireBottomClassString)
    }
    if (name === "data-disabled" && oldValue !== newValue && this.body) {
      this.body.classList.add(this.disabledClassString)
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

          #body.wire-bottom #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }

          #icon {
            position: absolute;
            bottom: -2px;
            left: -2px;
            right: -2px;
            top: -2px;
            height: calc(100% + 4px);
            width: calc(100% + 4px);
            color: var(--colors-gate, #43c000);
            stroke: currentColor;
          }

          #body.disabled #icon {
            color: var(--colors-eel, #4b4b4b);
          }
        </style>

        <div
          id="body"
          class="${this.wireTopClassString} ${this.wireBottomClassString} ${this
            .disabledClassString}"
          data-target="swap-gate.body"
        >
          ${verticalWires} ${swapIcon}
        </div>`,
      this.shadowRoot!,
    )
  }

  private get wireTopClassString(): string {
    return this.wireTop ? "wire-top" : ""
  }

  private get wireBottomClassString(): string {
    return this.wireBottom ? "wire-bottom" : ""
  }

  private get disabledClassString(): string {
    return this.disabled ? "disabled" : ""
  }
}
