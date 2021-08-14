import tippy, {
  Content,
  Instance,
  Placement,
  ReferenceElement,
  roundArrow,
} from "tippy.js"
import { controller, attr, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"

@controller
export class BlochDisplayElement extends HTMLElement {
  @target body: HTMLElement
  @target vectorLine: HTMLElement
  @target vectorEnd: HTMLElement
  @target vector: HTMLElement
  @targets vectorEndCircles: HTMLElement[]

  @attr size = "base"
  @attr x = 0
  @attr y = 0
  @attr z = 0
  @attr draggable = false
  @attr draggableSource = false
  @attr draggableShadow = false

  grab(event: MouseEvent): void {
    const customEvent = new CustomEvent("grabDraggable", {
      detail: event,
      bubbles: true,
    })
    this.parentElement?.dispatchEvent(customEvent)
  }

  drop(event: MouseEvent): void {
    const customEvent = new CustomEvent("dropDraggable", {
      detail: event,
      bubbles: true,
    })
    this.parentElement?.dispatchEvent(customEvent)
  }

  showPopup(): void {
    let content: Content
    let placement: Placement

    if (this.isCircuitDraggable()) {
      placement = "auto"
      content = this.blochInspectorPopupContent()
    } else {
      placement = "right"
      const descriptionHeader = this.descriptionHeader()
      if (descriptionHeader === null) return
      content = descriptionHeader
    }

    const popup = tippy(this as Element, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      placement,
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

  private descriptionHeader(): HTMLElement | null {
    return this.querySelector("header")
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
    this.updateBlochVector()
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
    this.addEventListener("mouseenter", this.showPopup)
    this.addEventListener("mousedown", this.grab)
    this.addEventListener("mouseup", this.drop)

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
      html`<style>
          #body {
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
          }

          #body.size-xs {
            height: 1rem;
            width: 1rem;
          }

          #body.size-sm {
            height: 1.5rem;
            width: 1.5rem;
          }

          #body.size-base {
            height: 2rem;
            width: 2rem;
          }

          #body.size-lg {
            height: 2.5rem;
            width: 2.5rem;
          }

          #body.size-xl {
            height: 3rem;
            width: 3rem;
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

          #body.size-xs #sphere-border {
            border-width: 1px;
          }

          #sphere-lines {
            width: 100%;
            height: 100%;
            stroke: currentColor;
            color: var(--colors-hare, #afafaf);
          }

          #perspective {
            position: relative;
            width: 100%;
            height: 100%;
            perspective-origin: top right;
          }

          #body.size-xs #perspective {
            perspective: 2rem;
          }

          #body.size-sm #perspective {
            perspective: 3rem;
          }

          #body.size-base #perspective {
            perspective: 4rem;
          }

          #body.size-lg #perspective {
            perspective: 5rem;
          }

          #body.size-xl #perspective {
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

          #body.size-xs .vector-end-circle {
            height: 4px;
            width: 4px;
          }

          #body.size-lg .vector-end-circle,
          #body.size-xl .vector-end-circle {
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
          class="${this.classString}"
          data-target="bloch-display.body"
          data-d="${this.d}"
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
              <line x1="32%" y1="70%" x2="68%" y2="30%" />
              <ellipse cx="50%" cy="50%" rx="18%" ry="50%" />
              <ellipse cx="50%" cy="50%" rx="50%" ry="18%" />
            </svg>
            <div class="absolute inset-0">
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
          </div>
        </div>`,
      this.shadowRoot!,
    )
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

  private get classString(): string {
    const klass = []

    if (this.draggable) klass.push("draggable")
    if (this.size === "xs") klass.push("size-xs")
    if (this.size === "sm") klass.push("size-sm")
    if (this.size === "base") klass.push("size-base")
    if (this.size === "lg") klass.push("size-lg")
    if (this.size === "xl") klass.push("size-xl")

    return klass.join(" ")
  }

  private isCircuitDraggable(): boolean {
    if (this.parentElement === null) return false
    return (
      this.parentElement.tagName === "CIRCUIT-DROPZONE" ||
      // FIXME: dropzone を web component 化した後に消す
      this.parentElement.classList.contains("dropzone")
    )
  }
}
