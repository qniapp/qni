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

const rxIcon = html`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
  <path
    d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998L34.609 35"
    fill="none"
    stroke="#FFF"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`

@controller
export class RxGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr theta = ""
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

          #body::before {
            position: absolute;
            bottom: 0px;
            margin-bottom: 2rem;
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

          #body.wire-top:not(.wire-bottom)::before,
          #body.wire-top-disabled:not(.wire-bottom-disabled)::before {
            display: none;
          }

          #body::after {
            position: absolute;
            top: 0px;
            margin-top: 2rem;
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

          #body.wire-bottom::after,
          #body.wire-bottom-disabled::after,
          #body:not(.wire-bottom):not(.wire-top):not(.wire-bottom-disabled):not(.wire-top-disabled)::after {
            display: none;
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
            stroke-width: 4;
            display: none;
          }

          #body.wire-top #wire-top {
            display: block;
            color: var(--colors-gate, #43c000);
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
            color: var(--colors-gate, #43c000);
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
            color: var(--colors-gate, #43c000);
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
          data-target="rx-gate.body"
          data-theta="${this.theta}"
        >
          ${verticalWires} ${rxIcon}
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
