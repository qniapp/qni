import {Complex, Util} from '@qni/common'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, targets} from '@github/catalyst'
import tippy, {Instance, ReferenceElement, createSingleton, roundArrow} from 'tippy.js'

export class CircleNotationElement extends HTMLElement {
  @attr qubitCount = 1
  @attr size = ''
  @attr magnitudes = ''
  @attr phases = ''
  @attr multiQubits = false
  @attr showKets = false

  @targets qubitCircles!: HTMLElement[]
  @targets qubitCircleGroups!: HTMLElement[]
  @targets visibleQubitCircleGroups!: HTMLElement[]

  setAmplitudes(amplitudes: {[ket: number]: number | Complex}): void {
    const qubitCircles = this.qubitCircles

    for (const [i, each] of Object.entries(amplitudes)) {
      const qubitCircle = qubitCircles[parseInt(i)]
      Util.notNull(qubitCircle)

      const amplitude = Complex.from(each)

      qubitCircle.setAttribute('data-amplitude-real', amplitude.real.toString())
      qubitCircle.setAttribute('data-amplitude-imag', amplitude.imag.toString())

      const magnitude = amplitude.abs()
      this.setRoundedMagnitude(qubitCircle, magnitude)

      const phaseDeg = (amplitude.phase() / Math.PI) * 180
      this.setRoundedPhase(qubitCircle, phaseDeg)
    }
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initQubitCirclePopup(this.qubitCircles)

    if (this.hasAttribute('data-multi-qubits')) {
      this.startQubitCircleVisibilityObserver()
      this.dispatchLoadEvent()
    }
  }

  private dispatchLoadEvent(): void {
    this.dispatchEvent(
      new Event('circle-notation.load', {
        bubbles: true
      })
    )
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (this.shadowRoot === null) return
    if (oldValue === newValue) return

    if (name === 'data-qubit-count') {
      this.dispatchVisibilityChangedEvent()
    }
  }

  private startQubitCircleVisibilityObserver(): void {
    const options = {
      root: this,
      threshold: [0, 0.2]
    }
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const each of entries) {
        const group = each.target
        if (each.intersectionRatio >= 0.2) {
          group.setAttribute(
            'data-targets',
            'circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups'
          )
          this.dispatchVisibilityChangedEvent()
        } else if (each.intersectionRatio === 0) {
          group.setAttribute('data-targets', 'circle-notation.qubitCircleGroups')
        }
      }
    }
    const observer = new IntersectionObserver(callback, options)
    for (const each of this.qubitCircleGroups) {
      observer.observe(each)
    }
  }

  private dispatchVisibilityChangedEvent(): void {
    this.dispatchEvent(
      new CustomEvent('circle-notation-visibility-change', {
        detail: this.visibleQubitCircleKets,
        bubbles: true
      })
    )
  }

  private get visibleQubitCircleKets(): number[] {
    const maxKet = 2 ** this.qubitCount

    return this.visibleQubitCircles.map(each => parseInt(each.getAttribute('data-ket')!)).filter(each => each < maxKet)
  }

  get visibleQubitCircles(): HTMLElement[] {
    const groups = this.visibleQubitCircleGroups.map(
      each => Array.from(each.querySelectorAll('.qubit-circle')) as HTMLElement[]
    )
    return ([] as HTMLElement[]).concat(...groups)
  }

  update(): void {
    render(
      html`<style>
          @media (min-width: 768px) {
            :host([data-qubit-count='8']),
            :host([data-qubit-count='9']),
            :host([data-qubit-count='10']) {
              height: 10rem !important;
            }
          }

          .qubit-circle-group--size4 {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle-group--size8 {
            display: flex;
            flex-direction: row;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle-group--size8 {
              flex-direction: row;
            }
          }

          .qubit-circle-group--size16 {
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-qubit-count='7']) .qubit-circle-group--size32,
            :host([data-qubit-count='8']) .qubit-circle-group--size32,
            :host([data-qubit-count='9']) .qubit-circle-group--size32,
            :host([data-qubit-count='10']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size64,
            :host([data-qubit-count='7']) .qubit-circle-group--size64,
            :host([data-qubit-count='8']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='9']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='10']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-qubit-count='1']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='2']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='4']) .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='6']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-qubit-count='7']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='8']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='8']) .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='9']) .qubit-circle-group--size256:nth-of-type(n + 3) {
            display: none;
          }

          #body {
            display: flex;
            flex-direction: row;
          }

          :host([data-multi-qubits]) #body {
            display: inline-block;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media (min-width: 768px) {
            :host([data-multi-qubits]) #body {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1.25rem;
            }
          }

          /* .qubit-circle__magnitude */

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-red-600, #dc2626) !important;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-orange-500, #f97516) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.1'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.2'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.3'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.4'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.5'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.6'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.7'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.8'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.9'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9) !important;
          }

          .qubit-circle[data-rounded-magnitude='1'] > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1) !important;
          }

          /* .qubit-circle__phase */

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-red-600, #dc2626) !important;
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] > .qubit-circle__phase {
            transform: rotate(-10deg) !important;
          }

          .qubit-circle[data-rounded-phase='20'] > .qubit-circle__phase {
            transform: rotate(-20deg) !important;
          }

          .qubit-circle[data-rounded-phase='30'] > .qubit-circle__phase {
            transform: rotate(-30deg) !important;
          }

          .qubit-circle[data-rounded-phase='40'] > .qubit-circle__phase {
            transform: rotate(-40deg) !important;
          }

          .qubit-circle[data-rounded-phase='50'] > .qubit-circle__phase {
            transform: rotate(-50deg) !important;
          }

          .qubit-circle[data-rounded-phase='60'] > .qubit-circle__phase {
            transform: rotate(-60deg) !important;
          }

          .qubit-circle[data-rounded-phase='70'] > .qubit-circle__phase {
            transform: rotate(-70deg) !important;
          }

          .qubit-circle[data-rounded-phase='80'] > .qubit-circle__phase {
            transform: rotate(-80deg) !important;
          }

          .qubit-circle[data-rounded-phase='90'] > .qubit-circle__phase {
            transform: rotate(-90deg) !important;
          }

          .qubit-circle[data-rounded-phase='100'] > .qubit-circle__phase {
            transform: rotate(-100deg) !important;
          }

          .qubit-circle[data-rounded-phase='110'] > .qubit-circle__phase {
            transform: rotate(-110deg) !important;
          }

          .qubit-circle[data-rounded-phase='120'] > .qubit-circle__phase {
            transform: rotate(-120deg) !important;
          }

          .qubit-circle[data-rounded-phase='130'] > .qubit-circle__phase {
            transform: rotate(-130deg) !important;
          }

          .qubit-circle[data-rounded-phase='140'] > .qubit-circle__phase {
            transform: rotate(-140deg) !important;
          }

          .qubit-circle[data-rounded-phase='150'] > .qubit-circle__phase {
            transform: rotate(-150deg) !important;
          }

          .qubit-circle[data-rounded-phase='160'] > .qubit-circle__phase {
            transform: rotate(-160deg) !important;
          }

          .qubit-circle[data-rounded-phase='170'] > .qubit-circle__phase {
            transform: rotate(-170deg) !important;
          }

          .qubit-circle[data-rounded-phase='180'] > .qubit-circle__phase {
            transform: rotate(-180deg) !important;
          }

          .qubit-circle[data-rounded-phase='190'] > .qubit-circle__phase {
            transform: rotate(-190deg) !important;
          }

          .qubit-circle[data-rounded-phase='200'] > .qubit-circle__phase {
            transform: rotate(-200deg) !important;
          }

          .qubit-circle[data-rounded-phase='210'] > .qubit-circle__phase {
            transform: rotate(-210deg) !important;
          }

          .qubit-circle[data-rounded-phase='220'] > .qubit-circle__phase {
            transform: rotate(-220deg) !important;
          }

          .qubit-circle[data-rounded-phase='230'] > .qubit-circle__phase {
            transform: rotate(-230deg) !important;
          }

          .qubit-circle[data-rounded-phase='240'] > .qubit-circle__phase {
            transform: rotate(-240deg) !important;
          }

          .qubit-circle[data-rounded-phase='250'] > .qubit-circle__phase {
            transform: rotate(-250deg) !important;
          }

          .qubit-circle[data-rounded-phase='260'] > .qubit-circle__phase {
            transform: rotate(-260deg) !important;
          }

          .qubit-circle[data-rounded-phase='270'] > .qubit-circle__phase {
            transform: rotate(-270deg) !important;
          }

          .qubit-circle[data-rounded-phase='280'] > .qubit-circle__phase {
            transform: rotate(-280deg) !important;
          }

          .qubit-circle[data-rounded-phase='290'] > .qubit-circle__phase {
            transform: rotate(-290deg) !important;
          }

          .qubit-circle[data-rounded-phase='300'] > .qubit-circle__phase {
            transform: rotate(-300deg) !important;
          }

          .qubit-circle[data-rounded-phase='310'] > .qubit-circle__phase {
            transform: rotate(-310deg) !important;
          }

          .qubit-circle[data-rounded-phase='320'] > .qubit-circle__phase {
            transform: rotate(-320deg) !important;
          }

          .qubit-circle[data-rounded-phase='330'] > .qubit-circle__phase {
            transform: rotate(-330deg) !important;
          }

          .qubit-circle[data-rounded-phase='340'] > .qubit-circle__phase {
            transform: rotate(-340deg) !important;
          }

          .qubit-circle[data-rounded-phase='350'] > .qubit-circle__phase {
            transform: rotate(-350deg) !important;
          }

          .qubit-circle[data-rounded-phase='360'] > .qubit-circle__phase {
            transform: rotate(-360deg) !important;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`,
      this.shadowRoot!
    )

    if (this.magnitudes !== '') {
      for (const [i, each] of this.magnitudes.split(',').entries()) {
        this.setRoundedMagnitude(this.qubitCircles[i], parseFloat(each))
      }
    }
    if (this.phases !== '') {
      for (const [i, each] of this.phases.split(',').entries()) {
        const qubitCircle = this.qubitCircles[i]
        const phase = each ? parseFloat(each) : 0
        this.setRoundedPhase(qubitCircle, phase)
        const qubitCirclePhaseEl = qubitCircle!.querySelector('.qubit-circle__phase') as HTMLElement
        qubitCirclePhaseEl!.style.transform = `rotate(${-phase}deg)`
      }
    }
  }

  private setRoundedMagnitude(qubitCircle: HTMLElement | null | undefined, magnitude: number): void {
    if (qubitCircle === null) return
    if (qubitCircle === undefined) return

    let roundedMag = Math.round(magnitude * 100)
    roundedMag = roundedMag < 10 ? (roundedMag === 0 ? 0 : 10) : Math.round(roundedMag / 10) * 10
    roundedMag = roundedMag / 100

    qubitCircle.setAttribute('data-magnitude', magnitude.toString())
    qubitCircle.setAttribute('data-rounded-magnitude', roundedMag.toString())
  }

  private setRoundedPhase(qubitCircle: HTMLElement | null | undefined, phase: number): void {
    if (qubitCircle === null) return
    if (qubitCircle === undefined) return

    let roundedPhase = Math.round(phase / 10) * 10
    if (roundedPhase < 0) roundedPhase = 360 + roundedPhase

    qubitCircle.setAttribute('data-phase', phase.toString())
    qubitCircle.setAttribute('data-rounded-phase', roundedPhase.toString())
  }

  private get qubitCirclesHtml(): TemplateResult {
    if (this.hasAttribute('data-multi-qubits')) return this.stateVectorHtml(10)

    return html`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`
  }

  private qubitCircleHtml(ket: number): TemplateResult {
    return html`<div
      part="qubit-circle"
      class="qubit-circle"
      data-ket="${ket}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude" part="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase" part="qubit-circle__phase"></div>
    </div>`
  }

  private stateVectorHtml(maxNqubit: number): TemplateResult {
    let stateVector = html``

    const groups = this.qubitCircleGroup(
      [...Array(2 ** maxNqubit).keys()],
      (qc256: number[]) => {
        return this.qubitCircleGroup(qc256, (qc128: number[]) => {
          return this.qubitCircleGroup(qc128, (qc64: number[]) => {
            return this.qubitCircleGroup(qc64, (qc32: number[]) => {
              return this.qubitCircleGroup(qc32, (qc16: number[]) => {
                return this.qubitCircleGroup(qc16, (qc8: number[]) => {
                  return this.qubitCircleGroup(qc8)
                })
              })
            })
          })
        })
      },
      256
    )

    for (const each of groups) {
      stateVector = html`${stateVector} ${each}`
    }

    return stateVector
  }

  private qubitCircleGroup(
    kets: number[],
    block?: (kets: number[]) => TemplateResult[],
    size: number = kets.length / 2
  ): TemplateResult[] {
    const arrayChunk = (numbers: number[], chunkSize = 1): number[][] => {
      return numbers.reduce(
        (acc: number[][], _value: number, index: number) =>
          index % chunkSize ? acc : [...acc, numbers.slice(index, index + chunkSize)],
        []
      )
    }

    return arrayChunk(kets, size).map(each => {
      let group = html``

      if (block) {
        for (const subGroup of block(each)) {
          group = html`${group} ${subGroup}`
        }
      } else {
        for (const ket of each) {
          group = html`${group} ${this.qubitCircleHtml(ket)}`
        }
      }

      if (size === 64) {
        return html`<div class="qubit-circle-group--size${size}" data-targets="circle-notation.qubitCircleGroups">
          ${group}
        </div>`
      } else {
        return html`<div class="qubit-circle-group--size${size}">${group}</div>`
      }
    })
  }

  private initQubitCirclePopup(qubitCircles: HTMLElement[]): void {
    const tippyInstances = tippy(qubitCircles)

    createSingleton(tippyInstances, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      theme: 'qni'
    })
  }

  setPopupContent(event: MouseEvent): void {
    if (this.popupEl === null) return

    const qubitCircleEl = event.target as HTMLElement
    const ket = this.ketDecimal(qubitCircleEl)
    const dataAmpReal = qubitCircleEl.getAttribute('data-amplitude-real')
    const dataAmpImag = qubitCircleEl.getAttribute('data-amplitude-imag')
    const dataMagnitude = qubitCircleEl.getAttribute('data-magnitude')
    const dataPhase = qubitCircleEl.getAttribute('data-phase')

    let amplitude: Complex

    if (dataAmpReal === null || dataAmpImag === null) {
      amplitude = Complex.ZERO
    } else {
      amplitude = new Complex(parseFloat(dataAmpReal), parseFloat(dataAmpImag))
    }

    let phase

    if (dataMagnitude && parseFloat(dataMagnitude) === 0) {
      phase = 0
    } else {
      phase = dataPhase ? parseFloat(dataPhase) : 0
    }

    this.setQubitCirclePopupContent(
      this.popupEl!.content,
      qubitCircleEl,
      ket,
      amplitude,
      dataMagnitude ? parseFloat(dataMagnitude) : 0,
      phase,
      this.qubitCount
    )
  }

  private setQubitCirclePopupContent(
    popupFrag: DocumentFragment,
    qubitCircleEl: HTMLElement,
    ket: number,
    amplitude: Complex,
    magnitude: number,
    phase: number,
    nqubit: number
  ): void {
    const popup = (qubitCircleEl as ReferenceElement)._tippy as Instance
    popup.setContent(this.popupContent(popupFrag, ket, amplitude, magnitude, phase, nqubit))
  }

  private popupContent(
    popupFrag: DocumentFragment,
    ket: number,
    amplitude: Complex,
    magnitude: number,
    phase: number,
    nqubit: number
  ): string {
    const ketBinaryEl = popupFrag.querySelector('.circle-notation-popup__ket-binary')
    const ketDecimalEl = popupFrag.querySelector('.circle-notation-popup__ket-decimal')
    const amplitudeRealEl = popupFrag.querySelector('.circle-notation-popup__amplitude-real')
    const amplitudeImagEl = popupFrag.querySelector('.circle-notation-popup__amplitude-imag')
    const probabilityEl = popupFrag.querySelector('.circle-notation-popup__probability')
    const phaseEl = popupFrag.querySelector('.circle-notation-popup__phase')

    if (ketBinaryEl) {
      ketBinaryEl.textContent = ket.toString(2).padStart(nqubit, '0')
    }

    if (ketDecimalEl) {
      ketDecimalEl.textContent = ket.toString()
    }

    if (amplitudeRealEl) {
      amplitudeRealEl.textContent = this.forceSigned(amplitude.real, 5)
    }

    if (amplitudeImagEl) {
      amplitudeImagEl.textContent = `${this.forceSigned(amplitude.imag, 5)}i`
    }

    if (probabilityEl) {
      probabilityEl.textContent = `${this.forceSigned(magnitude * magnitude * 100, 4)}%`
    }

    if (phaseEl) {
      phaseEl.textContent = `${this.forceSigned(phase, 2)}°`
    }

    const div = document.createElement('div')
    div.appendChild(popupFrag.cloneNode(true))

    // eslint-disable-next-line github/no-inner-html
    return div.innerHTML
  }

  private get popupEl(): HTMLTemplateElement | null {
    return document.getElementById('circle-notation-popup') as HTMLTemplateElement
  }

  private forceSigned(value: number, d: number): string {
    return (value >= 0 ? '+' : '') + value.toFixed(d)
  }

  private ketDecimal(el: HTMLElement): number {
    const dataKet = el.getAttribute('data-ket')

    return parseInt(dataKet!)
  }
}

controller(CircleNotationElement)
