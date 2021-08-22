import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"
import { controller, attr } from "@github/catalyst"
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

const icon = html`
  <svg
    id="icon"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
  >
    <circle cx="24" cy="24" r="8" fill="currentColor" />
  </svg>
`

const css = html`<style>
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

  :host([data-draggable]) {
    cursor: grab;
  }

  :host([data-draggable]) #body::after {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border-color: var(--colors-cardinal, #ff4b4b);
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 2px;
    box-sizing: border-box;
    opacity: 0;
    content: "";
  }

  :host([data-draggable]) #body:hover::after {
    opacity: 100;
  }

  :host([data-draggable-source]) #body::after {
    opacity: 100;
    border-color: var(--colors-fox, #ff9600);
  }

  :host([data-draggable-shadow]) #body::after {
    opacity: 100;
    border-color: var(--colors-superposition, #ce82ff);
  }

  #body {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
  }

  :host([data-grabbed]) #body {
    background-color: var(--colors-snow, #ffffff);
  }

  #body:hover::after {
    opacity: 100;
  }

  :host([data-grabbed]) #wires,
  :host([data-draggable-shadow]) #wires {
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
    display: none;
    stroke-width: 4;
  }

  :host([data-wire-top]) #wire-top {
    display: block;
    color: var(--colors-gate, #43c000);
    transform-origin: top;
    transform: translateY(-25%) scaleY(1.5);
  }

  :host([data-wire-top-disabled]) #wire-top {
    display: block;
    color: var(--colors-eel, #4b4b4b);
    transform-origin: top;
    transform: translateY(-25%) scaleY(1.5);
  }

  :host([data-wire-bottom]) #wire-bottom {
    display: block;
    color: var(--colors-gate, #43c000);
    transform-origin: bottom;
    transform: translateY(25%) scaleY(1.5);
  }

  :host([data-wire-bottom-disabled]) #wire-bottom {
    display: block;
    color: var(--colors-eel, #4b4b4b);
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

  :host([data-disabled]) #icon {
    color: var(--colors-eel, #4b4b4b);
  }
</style>`

@controller
export class ControlGateElement extends HTMLElement {
  @attr size = ""
  @attr draggable = false
  @attr draggableSource = false
  @attr draggableShadow = false
  @attr grabbed = false
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

  showHelp(): void {
    if ((this as ReferenceElement)._tippy) return

    const content = this.innerHTML.trim()
    if (content === "") return

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

  toJson(): string {
    return '"•"'
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${css}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${verticalWires} ${icon}
        </div>`,
      this.shadowRoot!,
    )
  }
}
