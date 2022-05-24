import {Complex, Util} from '@qni/common'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import tippy, {Instance, ReferenceElement, roundArrow} from 'tippy.js'
import {forceSigned} from './util'

@controller
export class QubitCircleElement extends HTMLElement {
  @attr ket = 0
  @attr qubitCount = 1
  @attr magnitude = 0
  @attr phase = 0
  @attr amplitude = ''
  @attr popupTemplateId = 'qubit-circle-popup-template'

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.addPopupEventListeners()
  }

  update(): void {
    render(
      html`<style>
          qubit-circle {
            --phase: 0deg;
          }

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
            border-color: rgb(220 38 38); /* red-600 */
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

          :host(:hover) #magnitude {
            background-color: rgb(249 115 22); /* orange-500 */
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
            transform: rotate(${this.phase}deg);
          }

          :host([data-magnitude='0']) #phase,
          :host([data-magnitude='0.0']) #phase {
            display: none;
          }
        </style>

        <div id="border">
          <div id="magnitude" part="magnitude"></div>
          <div id="phase"></div>
        </div>`,
      this.shadowRoot!
    )
  }

  private addPopupEventListeners(): void {
    this.addEventListener('mouseenter', this.showPopup)
    this.addEventListener('mouseleave', this.hidePopup)
  }

  private showPopup(): void {
    const popup = tippy(this, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      theme: 'qni'
    })

    if (this.popupTemplate === null) return

    const amplitude = new Complex(0, 0)
    let magnitude = 0
    let phase = 0

    if (this.amplitude !== '') {
      // TODO: amplitude に "0.707 + 0.707i" のような文字列が来たときにパースして Complex を作る
      // amplitude = new Complex(this.amplitudeReal, this.amplitudeImag)
      // magnitude = amplitude.abs()
      // phase = (amplitude.phase() / Math.PI) * 180
    } else {
      magnitude = this.magnitude
      phase = this.phase
    }

    const ketBinaryEl = this.popupTemplate.content.querySelector('.ket-binary')
    const ketDecimalEl = this.popupTemplate.content.querySelector('.ket-decimal')
    const amplitudeRealEl = this.popupTemplate.content.querySelector('.amplitude-real')
    const amplitudeImagEl = this.popupTemplate.content.querySelector('.amplitude-imag')
    const probabilityEl = this.popupTemplate.content.querySelector('.probability')
    const phaseEl = this.popupTemplate.content.querySelector('.phase')

    if (ketBinaryEl) {
      ketBinaryEl.textContent = this.ket.toString(2).padStart(this.qubitCount, '0')
    }

    if (ketDecimalEl) {
      ketDecimalEl.textContent = this.ket.toString()
    }

    if (amplitudeRealEl) {
      amplitudeRealEl.textContent = forceSigned(amplitude.real, 5)
    }

    if (amplitudeImagEl) {
      amplitudeImagEl.textContent = `${forceSigned(amplitude.imag, 5)}i`
    }

    if (probabilityEl) {
      probabilityEl.textContent = `${forceSigned(magnitude * magnitude * 100, 4)}%`
    }

    if (phaseEl) {
      phaseEl.textContent = `${forceSigned(phase, 2)}°`
    }

    const tmpDiv = document.createElement('div')
    tmpDiv.appendChild(this.popupTemplate.content.cloneNode(true))

    // eslint-disable-next-line github/no-inner-html
    popup.setContent(tmpDiv.innerHTML)
    popup.show()
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
