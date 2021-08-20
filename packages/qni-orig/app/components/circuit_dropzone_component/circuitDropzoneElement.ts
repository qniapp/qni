import { controller, attr } from "@github/catalyst"
import { html, render } from "@github/jtml"

const wires = html`<svg
  id="wires"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <line
    id="wire-left"
    x1="0"
    y1="50"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-right"
    x1="50"
    y1="50"
    x2="100"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
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
</svg> `

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @attr size = "base"
  @attr wireTop = false
  @attr wireBottom = false

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`<style>
          :host([data-size="xs"]) {
            height: 1rem;
            width: 1.5rem;
          }

          :host([data-size="sm"]) {
            height: 1.5rem;
            width: 2.25rem;
          }

          :host,
          :host([data-size="base"]) {
            height: 2rem;
            width: 3rem;
          }

          :host([data-size="lg"]) {
            height: 2.5rem;
            width: 3.75rem;
          }

          :host([data-size="xl"]) {
            height: 3rem;
            width: 4.5rem;
          }

          :host([data-wire-top]) #wire-top {
            display: block;
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }

          :host([data-wire-bottom]) #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }

          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
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

          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }

          slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-left,
          slot[data-circuit-operation-name="measurement-gate"]
            ~ #wires
            > #wire-left {
            transform-origin: left;
            transform: scaleX(0.5);
          }

          slot[data-circuit-operation-name="write-gate"] ~ #wires > #wire-right,
          slot[data-circuit-operation-name="measurement-gate"]
            ~ #wires
            > #wire-right {
            transform-origin: right;
            transform: scaleX(0.5);
          }

          #wire-top,
          #wire-bottom {
            color: var(--colors-gate, #43c000);
            stroke-width: 4;
            display: none;
          }
        </style>

        <div id="body" data-target="circuit-dropzone.body">
          <slot></slot>
          ${wires}
        </div>`,
      this.shadowRoot!,
    )

    const slot = this.shadowRoot!.querySelector("slot")
    slot?.addEventListener("slotchange", () => {
      for (const element of slot?.assignedElements()) {
        slot.setAttribute(
          "data-circuit-operation-name",
          element.nodeName.toLowerCase(),
        )
        element.setAttribute("data-size", this.size)
      }
    })
  }
}
