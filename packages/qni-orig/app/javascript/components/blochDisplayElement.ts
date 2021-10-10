import {
  BLOCH_DISPLAY_OPERATION_TYPE,
  BlochDisplayOperation,
} from "lib/operation"
import {
  DraggableMixin,
  HelpableMixin,
  JsonableMixin,
  SizeableMixin,
} from "./mixins"
import { attr, controller, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"

@controller
export class BlochDisplayElement extends DraggableMixin(
  HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
) {
  @target body: HTMLElement
  @target vectorLine: HTMLElement
  @target vectorEnd: HTMLElement
  @target vector: HTMLElement
  @targets vectorEndCircles: HTMLElement[]

  @attr x = 0
  @attr y = 0
  @attr z = 0

  @attr draggableSource = false
  @attr draggableShadow = false

  static create({
    draggable = false,
  }: Partial<{ draggable: boolean }> = {}): BlochDisplayElement {
    const el = document.createElement("bloch-display") as BlochDisplayElement
    el.draggable = draggable
    return el
  }

  showPopup(): void {
    if (this.isCircuitDraggable()) {
      this.showInspector()
    } else {
      this.showHelp()
    }
  }

  private showInspector(): void {
    if (this.grabbed) return

    const popupInstance = (this as ReferenceElement)._tippy
    if (popupInstance) return

    const content = this.blochInspectorPopupContent()
    const popup = tippy(this as Element, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      placement: "auto",
      theme: "qni",
      onShow(instance: Instance) {
        instance.setContent(content)
      },
    })
    popup.show()
  }

  private blochInspectorPopupContent() {
    const content = document.createDocumentFragment()

    render(
      html`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d"
              >${this.forceSigned(this.d)}</span
            >, ϕ:
            <span class="bloch-display__inspector-phi"
              >${this.forceSigned(this.phi, 2)}</span
            >, θ:
            <span class="bloch-display__inspector-theta"
              >${this.forceSigned(this.theta, 2)}</span
            >
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x"
              >${this.forceSigned(this.x)}</span
            >, y:
            <span class="bloch-display__inspector-y"
              >${this.forceSigned(this.y)}</span
            >, z:
            <span class="bloch-display__inspector-z"
              >${this.forceSigned(this.z)}</span
            >
          </section>
        </div>
      `,
      content,
    )

    return content
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.updateBlochVector()
    this.initDraggable()
  }

  disconnectedCallback(): void {
    const instance = (this as ReferenceElement)._tippy
    instance?.destroy()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (!this.body) return
    if (oldValue === newValue) return

    if (name === "data-draggable-source") {
      this.body.classList.toggle("draggable-source")
      return
    }

    if (name === "data-draggable-shadow") {
      this.body.classList.toggle("draggable-shadow")
      return
    }

    if (newValue === null) return
    if (name === "data-x") this.x = parseFloat(newValue)
    if (name === "data-y") this.y = parseFloat(newValue)
    if (name === "data-z") this.z = parseFloat(newValue)
    this.d = this.vectorLength()
    this.phi = this.calculatePhi()
    this.theta = this.calculateTheta()

    this.updateBlochVector()
  }

  update(): void {
    this.d = this.vectorLength()
    this.phi = this.calculatePhi()
    this.theta = this.calculateTheta()

    const vectorLineRect = (degree: number) => {
      return html`<div
        class="vector-line-rect"
        style="transform: rotateY(${degree}deg)"
      ></div>`
    }

    const vectorEndCircle = (degree: number, axis: "X" | "Y") => {
      return html`<div
        class="vector-end-circle"
        style="transform: rotate${axis}(${degree}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`
    }

    render(
      html`${this.sizeableStyle} ${this.draggableStyle}

        <style>
          #body.draggable-source::after {
            opacity: 100;
            border-color: var(--colors-fox, #ff9600);
          }

          #body.draggable-shadow::after {
            opacity: 100;
            border-color: var(--colors-superposition, #ce82ff);
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
            width: 100%;
            height: 100%;
            stroke: currentColor;
            color: var(--colors-hare, #afafaf);
          }

          #perspective {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            perspective-origin: top right;
          }

          :host([data-size="xs"]) #perspective {
            perspective: 2rem;
          }

          :host([data-size="sm"]) #perspective {
            perspective: 3rem;
          }

          :host #perspective,
          :host([data-size="base"]) #perspective {
            perspective: 4rem;
          }

          :host([data-size="lg"]) #perspective {
            perspective: 5rem;
          }

          :host([data-size="xl"]) #perspective {
            perspective: 6rem;
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
            transform-style: preserve-3d;
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
            transform-style: preserve-3d;
          }

          #vector-end {
            position: absolute;
            width: 100%;
            transform-style: preserve-3d;
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

          :host([data-size="xs"]) .vector-end-circle {
            height: 4px;
            width: 4px;
          }

          :host([data-size="lg"]) .vector-end-circle,
          :host([data-size="xl"]) .vector-end-circle {
            height: 8px;
            width: 8px;
          }

          #body[data-d="0"] .vector-end-circle {
            background-color: var(--colors-magnitude, #1cb0f6);
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
        </style>

        <div
          id="body"
          data-target="bloch-display.body"
          data-d="${this.d}"
          data-action="mouseenter:bloch-display#showPopup mouseup:bloch-display#showPopup"
        >
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" class="absolute inset-0">
            <svg
              id="sphere-lines"
              class="absolute inset-0"
              viewBox="0 0 48 48"
              fill="none"
              stroke-width="1"
            >
              <line x1="0%" y1="50%" x2="100%" y2="50%" />
              <line x1="50%" y1="0%" x2="50%" y2="100%" />
              <line x1="35%" y1="65%" x2="65%" y2="35%" />
              <ellipse cx="50%" cy="50%" rx="18%" ry="50%" />
              <ellipse cx="50%" cy="50%" rx="50%" ry="18%" />
            </svg>
            <div id="perspective">
              <div id="vector" data-target="bloch-display.vector">
                <div id="vector-line" data-target="bloch-display.vectorLine">
                  ${vectorLineRect(0)} ${vectorLineRect(20)}
                  ${vectorLineRect(40)} ${vectorLineRect(60)}
                  ${vectorLineRect(80)} ${vectorLineRect(100)}
                  ${vectorLineRect(120)} ${vectorLineRect(140)}
                  ${vectorLineRect(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${vectorEndCircle(0, "Y")} ${vectorEndCircle(20, "Y")}
                  ${vectorEndCircle(40, "Y")} ${vectorEndCircle(60, "Y")}
                  ${vectorEndCircle(80, "Y")} ${vectorEndCircle(100, "Y")}
                  ${vectorEndCircle(120, "Y")} ${vectorEndCircle(140, "Y")}
                  ${vectorEndCircle(160, "Y")} ${vectorEndCircle(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${BLOCH_DISPLAY_OPERATION_TYPE}"`
  }

  serialize(): BlochDisplayOperation {
    return {
      type: BLOCH_DISPLAY_OPERATION_TYPE,
    }
  }

  private updateBlochVector(): void {
    const vectorEndCircleWidth = this.vectorEndCircles[0].offsetWidth

    this.vectorLine.style.height = `calc(${(100 * this.d) / 2}% - ${
      vectorEndCircleWidth / 2
    }px)`
    this.vectorEnd.style.bottom = `calc(50% + ${(100 * this.d) / 2}% + ${
      vectorEndCircleWidth / 2
    }px)`

    if (this.d !== 0) {
      this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this
        .theta}deg)`
    }
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

  private forceSigned(value: number, digits = 4): string {
    return (value >= 0 ? "+" : "") + value.toFixed(digits)
  }

  private isCircuitDraggable(): boolean {
    if (this.parentElement === null) return false
    return this.parentElement.tagName === "CIRCUIT-DROPZONE"
  }
}
