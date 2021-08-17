import { controller, attr, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"

@controller
export class CircleNotationElement extends HTMLElement {
  @attr size = "base"
  @attr magnitudes = "1.0"

  @target body: HTMLElement
  @targets qubitCircles: HTMLElement[]

  setMagnitude(qubitCircleIndex: number, magnitude: number): void {
    const magInt = Math.round(magnitude * 100)
    const magRounded =
      magInt < 10 ? (magInt === 0 ? 0 : 10) : Math.round(magInt / 10) * 10

    this.qubitCircles[qubitCircleIndex].setAttribute(
      "data-magnitude",
      magRounded.toString(),
    )
  }

  connectedCallback(): void {
    try {
      this.attachShadow({ mode: "open" })
    } catch (InvalidStateError) {
      // NOP
    }
    this.update()
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          #body.size-xs .qubit-circle {
            height: 17px;
            width: 17px;
          }

          #body.size-sm .qubit-circle {
            height: 25px;
            width: 25px;
          }

          #body.size-base .qubit-circle {
            height: 32px;
            width: 32px;
          }

          #body.size-lg .qubit-circle {
            height: 48px;
            width: 48px;
          }

          #body.size-xl .qubit-circle {
            height: 64px;
            width: 64px;
          }

          .qubit-circle__magnitude {
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #e5e5e5;
            border-style: solid;
          }

          #body.size-xs .qubit-circle__magnitude,
          #body.size-sm .qubit-circle__magnitude {
            border-width: 1px;
          }

          #body.size-base .qubit-circle__magnitude,
          #body.size-lg .qubit-circle__magnitude,
          #body.size-xl .qubit-circle__magnitude {
            border-width: 2px;
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            content: "";
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle[data-magnitude="10"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-magnitude="20"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-magnitude="30"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-magnitude="40"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-magnitude="50"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-magnitude="60"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-magnitude="70"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-magnitude="80"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-magnitude="90"] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-magnitude="100"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          .qubit-circle__phase {
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #777777;
            border-style: solid;
          }

          #body.size-xs .qubit-circle__phase,
          #body.size-sm .qubit-circle__phase {
            border-width: 1px;
          }

          #body.size-base .qubit-circle__phase,
          #body.size-lg .qubit-circle__phase,
          #body.size-xl .qubit-circle__phase {
            border-width: 2px;
          }

          .qubit-circle:not([data-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-magnitude="0"] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0);
          }

          .qubit-circle__phase::after {
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: #4b4b4b;
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            content: "";
          }

          #body.size-xs .qubit-circle__phase::after,
          #body.size-sm .qubit-circle__phase::after {
            width: 1px;
          }

          #body.size-base .qubit-circle__phase::after,
          #body.size-lg .qubit-circle__phase::after,
          #body.size-xl .qubit-circle__phase::after {
            width: 2px;
          }
        </style>

        <div
          id="body"
          class="${this.classString}"
          data-target="circle-notation.body"
        >
          <div class="qubit-circle" data-targets="circle-notation.qubitCircles">
            <div class="qubit-circle__magnitude"></div>
            <div class="qubit-circle__phase"></div>
          </div>
          <div class="qubit-circle" data-targets="circle-notation.qubitCircles">
            <div class="qubit-circle__magnitude"></div>
            <div class="qubit-circle__phase"></div>
          </div>
        </div>`,
      this.shadowRoot!,
    )

    for (const [i, each] of this.magnitudes.split(",").entries()) {
      this.setMagnitude(i, parseFloat(each))
    }
  }

  private get classString(): string {
    const klass = []

    if (this.size === "xs") klass.push("size-xs")
    if (this.size === "sm") klass.push("size-sm")
    if (this.size === "base") klass.push("size-base")
    if (this.size === "lg") klass.push("size-lg")
    if (this.size === "xl") klass.push("size-xl")

    return klass.join(" ")
  }
}
