import {Complex, Util} from '@qni/common'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import tippy, {Instance, ReferenceElement} from 'tippy.js'
import {forceSigned} from './util'

@controller
export class QubitCircleElement extends HTMLElement {
  @attr ket = 0
  @attr qubitCount = 1
  @attr amplitude = ''
  @attr hidePhase = false
  @attr popupTemplateId = 'qubit-circle-popup-template'
  @attr showPopupHeader = false
  @attr showPopupAmplitude = false
  @attr showPopupProbability = false
  @attr showPopupPhase = false

  connectedCallback(): void {
    if (this.shadowRoot !== null) return

    this.attachShadow({mode: 'open'})
    this.update()
    this.addPopupEventListeners()
  }

  update(): void {
    render(
      html`<style>
          #border {
            position: relative;

            box-sizing: border-box;
            border-color: rgb(100 116 139); /* slate-500 */
            border-radius: 9999px;
            border-style: solid;
            border-width: 2px;

            height: 100%;
            width: 100%;
          }

          :host(:hover) #border {
            filter: brightness(0.9);
          }

          #magnitude {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;

            border-radius: 9999px;

            background-color: rgb(14 165 233); /* sky-500 */

            transform-origin: center;
            transform: scaleX(${this.magnitude}) scaleY(${this.magnitude});
          }

          #phase {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            width: 2px;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            transform-origin: bottom;
            transform: rotate(${this.cssPhaseDeg}deg);
          }

          :host([data-hide-phase]) #phase {
            display: none;
          }
        </style>

        <div id="border">
          <div id="magnitude" part="magnitude"></div>
          <div id="phase"></div>
        </div>`,
      this.shadowRoot!
    )
    if (this.magnitude === 0) this.hidePhase = true
  }

  private addPopupEventListeners(): void {
    this.addEventListener('mouseenter', this.showPopup)
    this.addEventListener('mouseleave', this.hidePopup)
  }

  private showPopup(): void {
    const popup = tippy(this, {
      allowHTML: true,
      animation: false,
      delay: 0,
      theme: 'qubit-circle'
      // trigger: 'manual', // debug
    })

    if (this.popupTemplate === null) return

    const template = document.importNode(this.popupTemplate.content, true)

    const amplitude = Complex.parse(this.amplitude)
    const headerEl = template.getElementById('qubit-circle-popup--header')
    const ketBinaryEl = template.getElementById('qubit-circle-popup--ket-binary-value')
    const ketDecimalEl = template.getElementById('qubit-circle-popup--ket-decimal-value')
    const amplitudeEl = template.getElementById('qubit-circle-popup--amplitude')
    const amplitudeRealValueEl = template.getElementById('qubit-circle-popup--amplitude-real-value')
    const amplitudeImagValueEl = template.getElementById('qubit-circle-popup--amplitude-imag-value')
    const probabilityEl = template.getElementById('qubit-circle-popup--probability')
    const probabilityValueEl = template.getElementById('qubit-circle-popup--probability-value')
    const phaseEl = template.getElementById('qubit-circle-popup--phase')
    const phaseValueEl = template.getElementById('qubit-circle-popup--phase-value')

    Util.notNull(headerEl)
    Util.notNull(ketBinaryEl)
    Util.notNull(ketDecimalEl)
    Util.notNull(amplitudeEl)
    Util.notNull(amplitudeRealValueEl)
    Util.notNull(amplitudeImagValueEl)
    Util.notNull(probabilityEl)
    Util.notNull(probabilityValueEl)
    Util.notNull(phaseEl)
    Util.notNull(phaseValueEl)

    if (this.showPopupHeader) {
      ketBinaryEl.textContent = this.ket.toString(2).padStart(this.qubitCount, '0')
      ketDecimalEl.textContent = this.ket.toString()
    } else {
      headerEl.style.display = 'none'
    }

    if (this.showPopupAmplitude) {
      amplitudeRealValueEl.textContent = forceSigned(amplitude.real, 5)
      amplitudeImagValueEl.textContent = `${forceSigned(amplitude.imag, 5)}i`
    } else {
      amplitudeEl.style.display = 'none'
    }

    if (this.showPopupProbability) {
      probabilityValueEl.textContent = `${forceSigned(this.magnitude * this.magnitude * 100, 4)}%`
    } else {
      probabilityEl.style.display = 'none'
    }

    if (this.showPopupPhase) {
      phaseValueEl.textContent = `${forceSigned(this.phaseDeg, 2)}°`
    } else {
      phaseEl.style.display = 'none'
    }

    const tmpDiv = document.createElement('div')
    tmpDiv.appendChild(template)

    // eslint-disable-next-line github/no-inner-html
    popup.setContent(tmpDiv.innerHTML)
    popup.show()
  }

  private get magnitude(): number {
    const amplitude = Complex.parse(this.amplitude)
    return amplitude.abs()
  }

  private get phase(): number {
    const amplitude = Complex.parse(this.amplitude)
    return amplitude.phase()
  }

  private get phaseDeg(): number {
    return (this.phase / Math.PI) * 180
  }

  private get cssPhaseDeg(): number {
    return -1 * this.phaseDeg
  }

  private hidePopup(): void {
    const popup = (this as ReferenceElement)._tippy as Instance
    Util.notNull(popup)

    popup.destroy()
  }

  private get popupTemplate(): HTMLTemplateElement | null {
    return document.getElementById(this.popupTemplateId) as HTMLTemplateElement
  }
}
