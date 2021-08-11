import { controller, attr, target } from "@github/catalyst"
import { html, render } from "@github/jtml"

@controller
export class BlochDisplayElement extends HTMLElement {
  @target body: HTMLElement
  @target vectorLine: HTMLElement
  @target vectorEnd: HTMLElement
  @target vector: HTMLElement

  @attr x = 0
  @attr y = 0
  @attr z = 0

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (newValue === null) {
      throw new Error(`${name} should not be null`)
    }
    if (!this.body) return
    if (oldValue === newValue) return

    if (name === "data-x") this.x = parseFloat(newValue)
    if (name === "data-y") this.y = parseFloat(newValue)
    if (name === "data-z") this.z = parseFloat(newValue)
    this.d = this.vectorLength()
    this.phi = this.calculatePhi()
    this.theta = this.calculateTheta()

    this.vectorLine.style.height = `calc(${(100 * this.d) / 2}% - 3px)`
    this.vectorEnd.style.bottom = `calc(50% + ${(100 * this.d) / 2}% + 2px)`
    if (this.d !== 0) {
      this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this
        .theta}deg)`
    }

    this.dispatchEvent(
      new CustomEvent("blochDisplayUpdated", { bubbles: false }),
    )
  }

  update(): void {
    this.d = this.vectorLength()
    this.phi = this.calculatePhi()
    this.theta = this.calculateTheta()

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

          .absolute {
            position: absolute;
          }

          .inset-0 {
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
          }

          #background {
            border-radius: 9999px;
            background-color: var(--colors-snow, #ffffff);
          }

          #sphere-border {
            box-sizing: border-box;
            border-style: solid;
            border-radius: 9999px;
            border-width: 2px;
            border-color: var(--colors-hare, #afafaf);
            background-color: rgba(67, 192, 0, 0.1);
          }

          #sphere-lines {
            padding: 2px;
            stroke: currentColor;
            color: var(--colors-hare, #afafaf);
          }

          #perspective {
            position: relative;
            width: 100%;
            height: 100%;
            perspective-origin: top right;
            perspective: 4rem;
          }

          #vector {
            position: relative;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
          }

          #vector-line {
            position: absolute;
            width: 100%;
            height: 0;
            bottom: 50%;
          }

          .vector-line-rect {
            position: absolute;
            left: 0px;
            right: 0px;
            background-color: var(--colors-eel, #4b4b4b);
            margin-left: auto;
            margin-right: auto;
            transform-origin: bottom;
            height: 100%;
            width: 2px;
          }

          #vector-end {
            position: absolute;
            width: 100%;
            bottom: calc(50% + 2px);
          }

          .vector-end-circle {
            position: absolute;
            left: 0px;
            right: 0px;
            background-color: var(--colors-cardinal, #ff4b4b);
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
            height: 6px;
            width: 6px;
          }

          #body[data-d="0"] .vector-end-circle {
            background-color: var(--colors-magnitude, #1cb0f6);
          }
        </style>

        <div id="body" data-target="bloch-display.body" data-d="${this.d}">
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" class="absolute inset-0"></div>
          <svg
            id="sphere-lines"
            class="absolute inset-0"
            viewBox="0 0 48 48"
            fill="none"
            stroke-width="1"
          >
            <line x1="0%" y1="50%" x2="100%" y2="50%" />
            <line x1="50%" y1="0%" x2="50%" y2="100%" />
            <line x1="32%" y1="70%" x2="68%" y2="30%" />
            <ellipse cx="50%" cy="50%" rx="18%" ry="50%" />
            <ellipse cx="50%" cy="50%" rx="50%" ry="18%" />
          </svg>

          <div class="absolute inset-0">
            <div id="perspective">
              <div
                id="vector"
                data-target="bloch-display.vector"
                style="transform: rotateY(${this.phi}deg) rotateX(${-this
                  .theta}deg)"
              >
                <div
                  id="vector-line"
                  data-target="bloch-display.vectorLine"
                  style="height: calc(${(100 * this.d) / 2}% - 3px)"
                >
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(0deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(20deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(40deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(60deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(80deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(100deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(120deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(140deg)"
                  ></div>
                  <div
                    class="vector-line-rect"
                    style="transform: rotateY(160deg)"
                  ></div>
                </div>

                <div
                  id="vector-end"
                  data-target="bloch-display.vectorEnd"
                  style="bottom: calc(50% + ${(100 * this.vectorLength()) /
                  2}% + 2px)"
                >
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(0deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(20deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(40deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(60deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(80deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(100deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(120deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(140deg)"
                  ></div>
                  <div
                    class="vector-end-circle"
                    style="transform: rotateY(160deg)"
                  ></div>

                  <div
                    class="vector-end-circle"
                    style="transform: rotateX(90deg)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>`,
      this.shadowRoot!,
    )
  }

  private get d(): number {
    const dataD = this.getAttribute("data-d")
    if (dataD === null) throw new Error("data-d not set")

    return parseFloat(dataD)
  }

  private set d(value: number) {
    this.setAttribute("data-d", value.toString())
    this.body?.setAttribute("data-d", value.toString())
  }

  private vectorLength(): number {
    return parseFloat(
      Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4),
    )
  }

  private set phi(value: number) {
    this.setAttribute("data-phi", value.toString())
  }

  private get phi(): number {
    const dataPhi = this.getAttribute("data-phi")
    if (dataPhi === null) throw new Error("data-phi not set")

    return parseFloat(dataPhi)
  }

  private calculatePhi(): number {
    return (Math.atan2(this.y, this.x) * 180) / Math.PI
  }

  private set theta(value: number) {
    this.setAttribute("data-theta", value.toString())
  }

  private get theta(): number {
    const dataTheta = this.getAttribute("data-theta")
    if (dataTheta === null) throw new Error("data-theta not set")

    return parseFloat(dataTheta)
  }

  private calculateTheta(): number {
    const θ = Math.max(
      0,
      Math.PI / 2 -
        Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)),
    )
    return (180 * θ) / Math.PI
  }
}
