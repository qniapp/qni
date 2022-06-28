import {ActivateableMixin, DraggableMixin, HelpableMixin, HoverableMixin, MenuableMixin} from './mixin/'
import {SerializedBlochDisplayType, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import tippy, {Instance as TippyInstance, ReferenceElement as TippyReferenceElement, roundArrow} from 'tippy.js'
import {forceSigned} from './util'

export class BlochDisplayElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(ActivateableMixin(HoverableMixin(HTMLElement))))
) {
  @target body!: HTMLElement
  @target vectorLine!: HTMLElement
  @target vectorEnd!: HTMLElement
  @target vector!: HTMLElement
  @targets vectorEndCircles!: HTMLElement[]

  @attr x = 0
  @attr y = 0
  @attr z = 0

  get operationType(): typeof SerializedBlochDisplayType {
    return SerializedBlochDisplayType
  }

  showPopup(): void {
    this.showInspector()
  }

  private showInspector(): void {
    Util.notNull(this.parentElement)

    if (this.parentElement.tagName === 'PALETTE-DROPZONE') return

    const popupInstance = (this as TippyReferenceElement)._tippy
    if (popupInstance) popupInstance.destroy()

    const content = this.blochInspectorPopupContent()
    const popup = tippy(this as Element, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      placement: 'auto',
      theme: 'qni',
      onShow(instance: TippyInstance) {
        instance.setContent(content)
      }
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
            <span class="bloch-display__inspector-d">${forceSigned(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${forceSigned(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${forceSigned(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${forceSigned(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${forceSigned(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${forceSigned(this.z)}</span>
          </section>
        </div>
      `,
      content
    )

    return content
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initDraggable()
    this.updateBlochVector()
    this.addEventListener('mouseenter', this.showInspector)
  }

  disconnectedCallback(): void {
    const instance = (this as TippyReferenceElement)._tippy
    instance?.destroy()
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (!this.body) return
    if (oldValue === newValue) return

    if (newValue === null) return
    if (name === 'data-x') this.x = parseFloat(newValue)
    if (name === 'data-y') this.y = parseFloat(newValue)
    if (name === 'data-z') this.z = parseFloat(newValue)
    this.d = this.vectorLength()
    this.phi = this.phiRadian()
    this.theta = this.thetaRadian()

    this.updateBlochVector()
  }

  update(): void {
    this.d = this.vectorLength()
    this.phi = this.phiRadian()
    this.theta = this.thetaRadian()

    const vectorLineRect = (degree: number) => {
      return html`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${degree}deg)"></div>`
    }

    const vectorEndCircle = (degree: number, axis: 'X' | 'Y') => {
      return html`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${axis}(${degree}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`
    }

    render(
      html`<style>
          #background {
            border-radius: 9999px;
            background-color: #ffffff;
          }

          #sphere-border {
            box-sizing: border-box;
            border-style: solid;
            border-radius: 9999px;
          }

          #sphere-lines {
            width: 100%;
            height: 100%;
            stroke: currentColor;
          }

          #perspective {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            perspective-origin: top right;
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
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
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

        <div part="icon" data-target="bloch-display.body" data-d="${this.d}">
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" part="sphere-border" class="absolute inset-0">
            <svg
              id="sphere-lines"
              part="sphere-lines"
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
            <div id="perspective" part="perspective">
              <div id="vector" data-target="bloch-display.vector">
                <div id="vector-line" data-target="bloch-display.vectorLine">
                  ${vectorLineRect(0)} ${vectorLineRect(20)} ${vectorLineRect(40)} ${vectorLineRect(60)}
                  ${vectorLineRect(80)} ${vectorLineRect(100)} ${vectorLineRect(120)} ${vectorLineRect(140)}
                  ${vectorLineRect(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${vectorEndCircle(0, 'Y')} ${vectorEndCircle(20, 'Y')} ${vectorEndCircle(40, 'Y')}
                  ${vectorEndCircle(60, 'Y')} ${vectorEndCircle(80, 'Y')} ${vectorEndCircle(100, 'Y')}
                  ${vectorEndCircle(120, 'Y')} ${vectorEndCircle(140, 'Y')} ${vectorEndCircle(160, 'Y')}
                  ${vectorEndCircle(90, 'X')}
                </div>
              </div>
            </div>
          </div>
        </div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    return `"${SerializedBlochDisplayType}"`
  }

  private updateBlochVector(): void {
    const vectorEndCircleWidth = this.vectorEndCircles[0].offsetWidth

    this.vectorLine.style.height = `calc(${(100 * this.d) / 2}% - ${vectorEndCircleWidth / 2}px)`
    this.vectorEnd.style.bottom = `calc(50% + ${(100 * this.d) / 2}% + ${vectorEndCircleWidth / 2}px)`

    if (this.d !== 0) {
      this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`
    }

    const popupInstance = (this as TippyReferenceElement)._tippy
    popupInstance?.setContent(this.blochInspectorPopupContent())
  }

  private get d(): number {
    const dataD = this.getAttribute('data-d')
    Util.notNull(dataD)

    return parseFloat(dataD)
  }

  private set d(value: number) {
    this.setAttribute('data-d', value.toString())
  }

  private vectorLength(): number {
    return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4))
  }

  private set phi(value: number) {
    this.setAttribute('data-phi', value.toString())
  }

  private get phi(): number {
    const dataPhi = this.getAttribute('data-phi')
    Util.notNull(dataPhi)

    return parseFloat(dataPhi)
  }

  private phiRadian(): number {
    return (Math.atan2(this.y, this.x) * 180) / Math.PI
  }

  private set theta(value: number) {
    this.setAttribute('data-theta', value.toString())
  }

  private get theta(): number {
    const dataTheta = this.getAttribute('data-theta')
    Util.notNull(dataTheta)

    return parseFloat(dataTheta)
  }

  private thetaRadian(): number {
    const θ = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)))
    return (180 * θ) / Math.PI
  }
}

controller(BlochDisplayElement)
