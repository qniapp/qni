import {Complex, Util} from '@qni/common'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, targets} from '@github/catalyst'
import tippy, {Instance, ReferenceElement, createSingleton, roundArrow} from 'tippy.js'

export class CircleNotationElement extends HTMLElement {
  @attr qubitCount = 1
  @attr size = ''
  @attr magnitudes = '1.0'
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
      if (magnitude === 0) continue

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

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          :host([data-size='xs']) .qubit-circle {
            height: 17px !important;
            width: 17px !important;
          }

          :host([data-size='sm']) .qubit-circle {
            height: 25px !important;
            width: 25px !important;
          }

          :host([data-size='base']) .qubit-circle {
            height: 32px !important;
            width: 32px !important;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px !important;
            width: 48px !important;
          }

          :host([data-size='xl']) .qubit-circle {
            height: 64px !important;
            width: 64px !important;
          }

          :host([data-qubit-count='1']:not([data-multi-qubits])) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-count='1']) .qubit-circle,
          :host([data-qubit-count='2']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-count='3']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle {
              height: 64px;
              width: 64px;
            }
          }

          :host([data-qubit-count='4']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='4']) .qubit-circle {
              height: 48px;
              width: 48px;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle {
              height: 32px;
              width: 32px;
            }
          }

          :host([data-qubit-count='6']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle {
              height: 25px;
              width: 25px;
            }
          }

          :host([data-qubit-count='7']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='7']) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-qubit-count='8']) .qubit-circle,
          :host([data-qubit-count='9']) .qubit-circle,
          :host([data-qubit-count='10']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='8']) .qubit-circle,
            :host([data-qubit-count='9']) .qubit-circle,
            :host([data-qubit-count='10']) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-show-kets]) .qubit-circle::before {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            white-space: nowrap;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
            font-size: 0.75rem;
            color: var(--colors-wolf, #777777);
            margin-bottom: -18px;
            content: '|' attr(data-ket) '⟩';
          }

          .qubit-circle__magnitude {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #e5e5e5;
            border-style: solid;
          }

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size='xs']) .qubit-circle__magnitude,
          :host([data-size='sm']) .qubit-circle__magnitude {
            border-width: 1px;
          }
          :host([data-size='base']) .qubit-circle__magnitude,
          :host([data-size='lg']) .qubit-circle__magnitude,
          :host([data-size='xl']) .qubit-circle__magnitude {
            border-width: 2px;
          }

          :host([data-qubit-count='5']) .qubit-circle__magnitude,
          :host([data-qubit-count='6']) .qubit-circle__magnitude,
          :host([data-qubit-count='7']) .qubit-circle__magnitude,
          :host([data-qubit-count='8']) .qubit-circle__magnitude,
          :host([data-qubit-count='9']) .qubit-circle__magnitude,
          :host([data-qubit-count='10']) .qubit-circle__magnitude {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__magnitude {
              border-width: 2px;
            }
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            content: '';
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-fox, #ff9600);
          }

          .qubit-circle[data-rounded-magnitude='0.1'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude='0.2'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude='0.3'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude='0.4'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude='0.5'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude='0.6'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude='0.7'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude='0.8'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude='0.9'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude='1'] > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          .qubit-circle__phase {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #777777;
            border-style: solid;
            transform: rotate(0deg);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size='xs']) .qubit-circle__phase,
          :host([data-size='sm']) .qubit-circle__phase {
            border-width: 1px;
          }
          :host([data-size='base']) .qubit-circle__phase,
          :host([data-size='lg']) .qubit-circle__phase,
          :host([data-size='xl']) .qubit-circle__phase {
            border-width: 2px;
          }

          :host([data-qubit-count='5']) .qubit-circle__phase,
          :host([data-qubit-count='6']) .qubit-circle__phase,
          :host([data-qubit-count='7']) .qubit-circle__phase,
          :host([data-qubit-count='8']) .qubit-circle__phase,
          :host([data-qubit-count='9']) .qubit-circle__phase,
          :host([data-qubit-count='10']) .qubit-circle__phase {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__phase {
              border-width: 2px;
            }
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] > .qubit-circle__phase {
            transform: rotate(-10deg);
          }

          .qubit-circle[data-rounded-phase='20'] > .qubit-circle__phase {
            transform: rotate(-20deg);
          }

          .qubit-circle[data-rounded-phase='30'] > .qubit-circle__phase {
            transform: rotate(-30deg);
          }

          .qubit-circle[data-rounded-phase='40'] > .qubit-circle__phase {
            transform: rotate(-40deg);
          }

          .qubit-circle[data-rounded-phase='50'] > .qubit-circle__phase {
            transform: rotate(-50deg);
          }

          .qubit-circle[data-rounded-phase='60'] > .qubit-circle__phase {
            transform: rotate(-60deg);
          }

          .qubit-circle[data-rounded-phase='70'] > .qubit-circle__phase {
            transform: rotate(-70deg);
          }

          .qubit-circle[data-rounded-phase='80'] > .qubit-circle__phase {
            transform: rotate(-80deg);
          }

          .qubit-circle[data-rounded-phase='90'] > .qubit-circle__phase {
            transform: rotate(-90deg);
          }

          .qubit-circle[data-rounded-phase='100'] > .qubit-circle__phase {
            transform: rotate(-100deg);
          }

          .qubit-circle[data-rounded-phase='110'] > .qubit-circle__phase {
            transform: rotate(-110deg);
          }

          .qubit-circle[data-rounded-phase='120'] > .qubit-circle__phase {
            transform: rotate(-120deg);
          }

          .qubit-circle[data-rounded-phase='130'] > .qubit-circle__phase {
            transform: rotate(-130deg);
          }

          .qubit-circle[data-rounded-phase='140'] > .qubit-circle__phase {
            transform: rotate(-140deg);
          }

          .qubit-circle[data-rounded-phase='150'] > .qubit-circle__phase {
            transform: rotate(-150deg);
          }

          .qubit-circle[data-rounded-phase='160'] > .qubit-circle__phase {
            transform: rotate(-160deg);
          }

          .qubit-circle[data-rounded-phase='170'] > .qubit-circle__phase {
            transform: rotate(-170deg);
          }

          .qubit-circle[data-rounded-phase='180'] > .qubit-circle__phase {
            transform: rotate(-180deg);
          }

          .qubit-circle[data-rounded-phase='190'] > .qubit-circle__phase {
            transform: rotate(-190deg);
          }

          .qubit-circle[data-rounded-phase='200'] > .qubit-circle__phase {
            transform: rotate(-200deg);
          }

          .qubit-circle[data-rounded-phase='210'] > .qubit-circle__phase {
            transform: rotate(-210deg);
          }

          .qubit-circle[data-rounded-phase='220'] > .qubit-circle__phase {
            transform: rotate(-220deg);
          }

          .qubit-circle[data-rounded-phase='230'] > .qubit-circle__phase {
            transform: rotate(-230deg);
          }

          .qubit-circle[data-rounded-phase='240'] > .qubit-circle__phase {
            transform: rotate(-240deg);
          }

          .qubit-circle[data-rounded-phase='250'] > .qubit-circle__phase {
            transform: rotate(-250deg);
          }

          .qubit-circle[data-rounded-phase='260'] > .qubit-circle__phase {
            transform: rotate(-260deg);
          }

          .qubit-circle[data-rounded-phase='270'] > .qubit-circle__phase {
            transform: rotate(-270deg);
          }

          .qubit-circle[data-rounded-phase='280'] > .qubit-circle__phase {
            transform: rotate(-280deg);
          }

          .qubit-circle[data-rounded-phase='290'] > .qubit-circle__phase {
            transform: rotate(-290deg);
          }

          .qubit-circle[data-rounded-phase='300'] > .qubit-circle__phase {
            transform: rotate(-300deg);
          }

          .qubit-circle[data-rounded-phase='310'] > .qubit-circle__phase {
            transform: rotate(-310deg);
          }

          .qubit-circle[data-rounded-phase='320'] > .qubit-circle__phase {
            transform: rotate(-320deg);
          }

          .qubit-circle[data-rounded-phase='330'] > .qubit-circle__phase {
            transform: rotate(-330deg);
          }

          .qubit-circle[data-rounded-phase='340'] > .qubit-circle__phase {
            transform: rotate(-340deg);
          }

          .qubit-circle[data-rounded-phase='350'] > .qubit-circle__phase {
            transform: rotate(-350deg);
          }

          .qubit-circle[data-rounded-phase='360'] > .qubit-circle__phase {
            transform: rotate(-360deg);
          }

          .qubit-circle__phase::after {
            width: 2px;
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
            content: '';
          }

          :host([data-qubit-count='5']) .qubit-circle__phase::after,
          :host([data-qubit-count='6']) .qubit-circle__phase::after,
          :host([data-qubit-count='7']) .qubit-circle__phase::after,
          :host([data-qubit-count='8']) .qubit-circle__phase::after,
          :host([data-qubit-count='9']) .qubit-circle__phase::after,
          :host([data-qubit-count='10']) .qubit-circle__phase::after {
            width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__phase::after {
              width: 2px;
            }
          }

          :host([data-size='xs']) .qubit-circle__phase::after,
          :host([data-size='sm']) .qubit-circle__phase::after {
            width: 1px;
          }
          :host([data-size='base']) .qubit-circle__phase::after,
          :host([data-size='lg']) .qubit-circle__phase::after,
          :host([data-size='xl']) .qubit-circle__phase::after {
            width: 2px;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`,
      this.shadowRoot!
    )

    for (const [i, each] of (this.getAttribute('data-magnitudes') || '1.0').split(',').entries()) {
      this.setRoundedMagnitude(this.qubitCircles[i], parseFloat(each))
    }
    for (const [i, each] of (this.getAttribute('data-phases') || '').split(',').entries()) {
      const qubitCircle = this.qubitCircles[i]
      const phase = each ? parseFloat(each) : 0
      this.setRoundedPhase(qubitCircle, phase)
      const qubitCirclePhaseEl = qubitCircle!.querySelector('.qubit-circle__phase') as HTMLElement
      qubitCirclePhaseEl!.style.transform = `rotate(${-phase}deg)`
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
      class="qubit-circle"
      data-ket="${ket}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
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
