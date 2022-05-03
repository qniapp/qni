import {Complex, DetailedError, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {debounce} from '@github/mini-throttle/decorators'

@controller
export class VirtualizedGridElement extends HTMLElement {
  @attr qubitCount = 1
  @attr cols = 0
  @attr rows = 0
  @attr paddingX = 16
  @attr paddingY = 20
  @attr colStartIndex = -1
  @attr colEndIndex = -1
  @attr rowStartIndex = -1
  @attr rowEndIndex = -1

  @target window!: HTMLElement
  @target innerContainer!: HTMLElement
  @targets qubitCircles!: HTMLElement[]

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-qubit-count') {
      switch (newValue) {
        case '1': {
          this.rows = 1
          this.cols = 2
          break
        }
        case '2': {
          this.rows = 1
          this.cols = 4
          break
        }
        case '3': {
          this.rows = 1
          this.cols = 8
          break
        }
        case '4': {
          this.rows = 2
          this.cols = 8
          break
        }
        case '5': {
          this.rows = 2
          this.cols = 16
          break
        }
        case '6': {
          this.rows = 4
          this.cols = 16
          break
        }
        case '7': {
          this.rows = 4
          this.cols = 32
          break
        }
        case '8': {
          this.rows = 8
          this.cols = 32
          break
        }
        case '9': {
          this.rows = 16
          this.cols = 32
          break
        }
        case '10': {
          this.rows = 32
          this.cols = 32
          break
        }
        case '11': {
          this.rows = 32
          this.cols = 64
          break
        }
        default:
          throw new DetailedError('unsupported qubit count', newValue)
      }
      this.redrawWindowAndInnerContainer()
      this.maybeRedrawQubitCircles()
    }
  }

  get visibleQubitCircleKets(): number[] {
    const kets = this.qubitCircles.map(each => {
      const ketStr = each.getAttribute('data-ket')
      Util.notNull(ketStr)
      return parseInt(ketStr)
    })

    return kets
  }

  setAmplitudes(amplitudes: {[ket: number]: Complex}) {
    for (const each of this.qubitCircles) {
      const ketStr = each.getAttribute('data-ket')
      Util.notNull(ketStr)

      const ket = parseInt(ketStr)
      const amplitude = amplitudes[ket]
      if (amplitude === undefined) continue

      each.setAttribute('data-amplitude-real', amplitude.real.toString())
      each.setAttribute('data-amplitude-imag', amplitude.imag.toString())

      const magnitude = amplitude.abs()
      this.setRoundedMagnitude(each, magnitude)

      const phaseDeg = (amplitude.phase() / Math.PI) * 180
      this.setRoundedPhase(each, phaseDeg)
    }
  }

  private setRoundedMagnitude(qubitCircle: HTMLElement, magnitude: number): void {
    let roundedMag = Math.round(magnitude * 100)
    roundedMag = roundedMag < 10 ? (roundedMag === 0 ? 0 : 10) : Math.round(roundedMag / 10) * 10
    roundedMag = roundedMag / 100

    qubitCircle.setAttribute('data-magnitude', (Math.floor(magnitude * 100000) / 100000).toString())
    qubitCircle.setAttribute('data-rounded-magnitude', roundedMag.toString())
  }

  private setRoundedPhase(qubitCircle: HTMLElement, phase: number): void {
    let roundedPhase = Math.round(phase / 10) * 10
    if (roundedPhase < 0) roundedPhase = 360 + roundedPhase

    qubitCircle.setAttribute('data-phase', phase.toString())
    qubitCircle.setAttribute('data-rounded-phase', roundedPhase.toString())
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.redrawWindowAndInnerContainer()
    this.maybeRedrawQubitCircles()

    this.dispatchEvent(new Event('circle-notation-init', {bubbles: true}))
  }

  update(): void {
    render(
      html`<style>
          :host([data-qubit-count='1']) .qubit-circle,
          :host([data-qubit-count='2']) .qubit-circle,
          :host([data-qubit-count='3']) .qubit-circle {
            height: 64px;
            width: 64px;
          }
          :host([data-qubit-count='4']) .qubit-circle {
            height: 48px;
            width: 48px;
          }
          :host([data-qubit-count='5']) .qubit-circle,
          :host([data-qubit-count='6']) .qubit-circle {
            height: 32px;
            width: 32px;
          }
          :host([data-qubit-count='7']) .qubit-circle,
          :host([data-qubit-count='8']) .qubit-circle,
          :host([data-qubit-count='9']) .qubit-circle,
          :host([data-qubit-count='10']) .qubit-circle,
          :host([data-qubit-count='11']) .qubit-circle {
            height: 17px;
            width: 17px;
          }

          /* magnitude */

          .qubit-circle__magnitude {
            position: absolute;
            border-style: solid;
            border-color: rgb(226 232 240); /* slate-200 */
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
          }

          :host([data-qubit-count='1']) .qubit-circle__magnitude,
          :host([data-qubit-count='2']) .qubit-circle__magnitude,
          :host([data-qubit-count='3']) .qubit-circle__magnitude,
          :host([data-qubit-count='4']) .qubit-circle__magnitude,
          :host([data-qubit-count='5']) .qubit-circle__magnitude,
          :host([data-qubit-count='6']) .qubit-circle__magnitude {
            border-width: 2px;
          }
          :host([data-qubit-count='7']) .qubit-circle__magnitude,
          :host([data-qubit-count='8']) .qubit-circle__magnitude,
          :host([data-qubit-count='9']) .qubit-circle__magnitude,
          :host([data-qubit-count='10']) .qubit-circle__magnitude,
          :host([data-qubit-count='11']) .qubit-circle__magnitude {
            border-width: 1px;
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            background-color: rgb(14 165 233); /* sky-500 */
            transform-origin: center;
            transform: scaleX(0) scaleY(0);

            content: '';
          }

          .qubit-circle[data-rounded-magnitude='0'] .qubit-circle__magnitude::after {
            transform: scaleX(0) scaleY(0);
          }

          .qubit-circle[data-rounded-magnitude='0.1'] .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude='0.2'] .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude='0.3'] .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude='0.4'] .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude='0.5'] .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude='0.6'] .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude='0.7'] .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude='0.8'] .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude='0.9'] .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude='1'] .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          /* phase */

          .qubit-circle__phase {
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-style: solid;
            border-color: rgb(100 116 139); /* slate-500 */
            border-radius: 9999px;
            transform-origin: center;
          }

          :host([data-qubit-count='1']) .qubit-circle__phase,
          :host([data-qubit-count='2']) .qubit-circle__phase,
          :host([data-qubit-count='3']) .qubit-circle__phase,
          :host([data-qubit-count='4']) .qubit-circle__phase,
          :host([data-qubit-count='5']) .qubit-circle__phase,
          :host([data-qubit-count='6']) .qubit-circle__phase {
            border-width: 2px;
          }
          :host([data-qubit-count='7']) .qubit-circle__phase,
          :host([data-qubit-count='8']) .qubit-circle__phase,
          :host([data-qubit-count='9']) .qubit-circle__phase,
          :host([data-qubit-count='10']) .qubit-circle__phase,
          :host([data-qubit-count='11']) .qubit-circle__phase {
            border-width: 1px;
          }

          .qubit-circle__phase::after {
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem; /* 4px */
            border-bottom-left-radius: 0.25rem; /* 4px */

            content: '';
          }

          :host([data-qubit-count='1']) .qubit-circle__phase::after,
          :host([data-qubit-count='2']) .qubit-circle__phase::after,
          :host([data-qubit-count='3']) .qubit-circle__phase::after,
          :host([data-qubit-count='4']) .qubit-circle__phase::after,
          :host([data-qubit-count='5']) .qubit-circle__phase::after,
          :host([data-qubit-count='6']) .qubit-circle__phase::after {
            width: 0.125rem; /* 2px */
          }
          :host([data-qubit-count='7']) .qubit-circle__phase::after,
          :host([data-qubit-count='8']) .qubit-circle__phase::after,
          :host([data-qubit-count='9']) .qubit-circle__phase::after,
          :host([data-qubit-count='10']) .qubit-circle__phase::after,
          :host([data-qubit-count='11']) .qubit-circle__phase::after {
            width: 1px;
          }

          .qubit-circle:not([data-rounded-magnitude]) .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] .qubit-circle__phase {
            transform: rotate(-10deg) !important;
          }

          .qubit-circle[data-rounded-phase='20'] .qubit-circle__phase {
            transform: rotate(-20deg) !important;
          }

          .qubit-circle[data-rounded-phase='30'] .qubit-circle__phase {
            transform: rotate(-30deg) !important;
          }

          .qubit-circle[data-rounded-phase='40'] .qubit-circle__phase {
            transform: rotate(-40deg) !important;
          }

          .qubit-circle[data-rounded-phase='50'] .qubit-circle__phase {
            transform: rotate(-50deg) !important;
          }

          .qubit-circle[data-rounded-phase='60'] .qubit-circle__phase {
            transform: rotate(-60deg) !important;
          }

          .qubit-circle[data-rounded-phase='70'] .qubit-circle__phase {
            transform: rotate(-70deg) !important;
          }

          .qubit-circle[data-rounded-phase='80'] .qubit-circle__phase {
            transform: rotate(-80deg) !important;
          }

          .qubit-circle[data-rounded-phase='90'] .qubit-circle__phase {
            transform: rotate(-90deg) !important;
          }

          .qubit-circle[data-rounded-phase='100'] .qubit-circle__phase {
            transform: rotate(-100deg) !important;
          }

          .qubit-circle[data-rounded-phase='110'] .qubit-circle__phase {
            transform: rotate(-110deg) !important;
          }

          .qubit-circle[data-rounded-phase='120'] .qubit-circle__phase {
            transform: rotate(-120deg) !important;
          }

          .qubit-circle[data-rounded-phase='130'] .qubit-circle__phase {
            transform: rotate(-130deg) !important;
          }

          .qubit-circle[data-rounded-phase='140'] .qubit-circle__phase {
            transform: rotate(-140deg) !important;
          }

          .qubit-circle[data-rounded-phase='150'] .qubit-circle__phase {
            transform: rotate(-150deg) !important;
          }

          .qubit-circle[data-rounded-phase='160'] .qubit-circle__phase {
            transform: rotate(-160deg) !important;
          }

          .qubit-circle[data-rounded-phase='170'] .qubit-circle__phase {
            transform: rotate(-170deg) !important;
          }

          .qubit-circle[data-rounded-phase='180'] .qubit-circle__phase {
            transform: rotate(-180deg) !important;
          }

          .qubit-circle[data-rounded-phase='190'] .qubit-circle__phase {
            transform: rotate(-190deg) !important;
          }

          .qubit-circle[data-rounded-phase='200'] .qubit-circle__phase {
            transform: rotate(-200deg) !important;
          }

          .qubit-circle[data-rounded-phase='210'] .qubit-circle__phase {
            transform: rotate(-210deg) !important;
          }

          .qubit-circle[data-rounded-phase='220'] .qubit-circle__phase {
            transform: rotate(-220deg) !important;
          }

          .qubit-circle[data-rounded-phase='230'] .qubit-circle__phase {
            transform: rotate(-230deg) !important;
          }

          .qubit-circle[data-rounded-phase='240'] .qubit-circle__phase {
            transform: rotate(-240deg) !important;
          }

          .qubit-circle[data-rounded-phase='250'] .qubit-circle__phase {
            transform: rotate(-250deg) !important;
          }

          .qubit-circle[data-rounded-phase='260'] .qubit-circle__phase {
            transform: rotate(-260deg) !important;
          }

          .qubit-circle[data-rounded-phase='270'] .qubit-circle__phase {
            transform: rotate(-270deg) !important;
          }

          .qubit-circle[data-rounded-phase='280'] .qubit-circle__phase {
            transform: rotate(-280deg) !important;
          }

          .qubit-circle[data-rounded-phase='290'] .qubit-circle__phase {
            transform: rotate(-290deg) !important;
          }

          .qubit-circle[data-rounded-phase='300'] .qubit-circle__phase {
            transform: rotate(-300deg) !important;
          }

          .qubit-circle[data-rounded-phase='310'] .qubit-circle__phase {
            transform: rotate(-310deg) !important;
          }

          .qubit-circle[data-rounded-phase='320'] .qubit-circle__phase {
            transform: rotate(-320deg) !important;
          }

          .qubit-circle[data-rounded-phase='330'] .qubit-circle__phase {
            transform: rotate(-330deg) !important;
          }

          .qubit-circle[data-rounded-phase='340'] .qubit-circle__phase {
            transform: rotate(-340deg) !important;
          }

          .qubit-circle[data-rounded-phase='350'] .qubit-circle__phase {
            transform: rotate(-350deg) !important;
          }

          .qubit-circle[data-rounded-phase='360'] .qubit-circle__phase {
            transform: rotate(-360deg) !important;
          }
        </style>
        <div
          data-target="virtualized-grid.window"
          data-action="scroll:virtualized-grid#maybeRedrawQubitCircles"
          style="overflow: auto; height: ${this.windowHeight}px; width: ${this.windowWidth}px"
        >
          <div
            data-target="virtualized-grid.innerContainer"
            style="position: relative; height: ${this.innerHeight}px; width: ${this.innerWidth}px"
          ></div>
        </div>`,
      this.shadowRoot!
    )
  }

  /* inner container */

  private get innerHeight(): number {
    return this.rows * this.qubitCircleSize + this.paddingY * 2
  }

  private get innerWidth(): number {
    return this.cols * this.qubitCircleSize + this.paddingX * 2
  }

  /* window */

  private get qubitCirclesAreaHeight(): number {
    switch (this.qubitCount) {
      case 1: {
        return this.qubitCircleSize
      }
      case 2: {
        return this.qubitCircleSize
      }
      case 3: {
        return this.qubitCircleSize
      }
      case 4: {
        return this.qubitCircleSize * 2
      }
      case 5: {
        return this.qubitCircleSize * 2
      }
      case 6: {
        return this.qubitCircleSize * 4
      }
      case 7: {
        return this.qubitCircleSize * 4
      }
      case 8: {
        return this.qubitCircleSize * 8
      }
      case 9: {
        return this.qubitCircleSize * 8
      }
      case 10: {
        return this.qubitCircleSize * 8
      }
      case 11: {
        return this.qubitCircleSize * 8
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get qubitCirclesAreaWidth(): number {
    switch (this.qubitCount) {
      case 1: {
        return this.qubitCircleSize * 2
      }
      case 2: {
        return this.qubitCircleSize * 4
      }
      case 3: {
        return this.qubitCircleSize * 8
      }
      case 4: {
        return this.qubitCircleSize * 8
      }
      case 5: {
        return this.qubitCircleSize * 16
      }
      case 6: {
        return this.qubitCircleSize * 16
      }
      case 7: {
        return this.qubitCircleSize * 32
      }
      case 8: {
        return this.qubitCircleSize * 32
      }
      case 9: {
        return this.qubitCircleSize * 32
      }
      case 10: {
        return this.qubitCircleSize * 32
      }
      case 11: {
        return this.qubitCircleSize * 32
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get windowHeight(): number {
    return this.qubitCirclesAreaHeight + this.paddingY * 2
  }

  private get windowWidth(): number {
    return this.qubitCirclesAreaWidth + this.paddingX * 2
  }

  private redrawWindowAndInnerContainer(): void {
    if (this.window === undefined) return

    this.window.style.height = `${this.windowHeight}px`
    this.window.style.width = `${this.windowWidth}px`
    this.innerContainer.style.height = `${this.innerHeight}px`
    this.innerContainer.style.width = `${this.innerWidth}px`
    this.innerContainer.innerHTML = ''
  }

  /* qubit circle */

  private get qubitCircleSize(): number {
    switch (this.qubitCount) {
      case 1: {
        return 64
      }
      case 2: {
        return 64
      }
      case 3: {
        return 64
      }
      case 4: {
        return 48
      }
      case 5: {
        return 32
      }
      case 6: {
        return 32
      }
      case 7: {
        return 17
      }
      case 8: {
        return 17
      }
      case 9: {
        return 17
      }
      case 10: {
        return 17
      }
      case 11: {
        return 17
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  @debounce(16)
  private maybeRedrawQubitCircles(): void {
    const colStartIndex = this.calculateColStartIndex
    const colEndIndex = this.calculateColEndIndex
    const rowStartIndex = this.calculateRowStartIndex
    const rowEndIndex = this.calculateRowEndIndex

    if (
      this.colStartIndex === colStartIndex &&
      this.colEndIndex === colEndIndex &&
      this.rowStartIndex === rowStartIndex &&
      this.rowEndIndex === rowEndIndex
    ) {
      return
    }

    const data = []
    for (let row = rowStartIndex; row <= rowEndIndex; row++) {
      for (let col = colStartIndex; col <= colEndIndex; col++) {
        data.push({row, col})
      }
    }

    this.colStartIndex = colStartIndex
    this.colEndIndex = colEndIndex
    this.rowStartIndex = rowStartIndex
    this.rowEndIndex = rowEndIndex

    // console.log(`rowStartIndex = ${this.rowStartIndex}`)
    // console.log(`rowEndIndex = ${this.rowEndIndex}`)

    const start = new Date()
    // eslint-disable-next-line github/no-inner-html
    this.innerContainer.innerHTML = this.allQubitCirclesHtml(data)
    const end = new Date()
    console.log('経過時間 (ミリ秒):', end.getTime() - start.getTime())

    this.dispatchVisibilityChangedEvent()
  }

  private dispatchVisibilityChangedEvent(): void {
    this.dispatchEvent(
      new CustomEvent('circle-notation-visibility-change', {
        detail: this.visibleQubitCircleKets,
        bubbles: true
      })
    )
  }

  private allQubitCirclesHtml(data: Array<{col: number; row: number}>): string {
    return data.map(this.qubitCircleHtml.bind(this)).join('')
  }

  private qubitCircleHtml(data: {row: number; col: number}): string {
    const ket = data.col + data.row * this.cols
    const top = this.qubitCircleSize * data.row + this.paddingY
    const left = this.qubitCircleSize * data.col + this.paddingX

    // eslint-disable-next-line github/unescaped-html-literal
    return `<div
      class="qubit-circle"
      data-ket="${ket}"
      data-targets="virtualized-grid.qubitCircles"
      style="position: absolute; top: ${top}px; left: ${left}px"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`
  }

  private get calculateColStartIndex(): number {
    const scrollLeft = this.window.scrollLeft

    if (scrollLeft < this.paddingX) {
      return 0
    } else {
      return Math.floor((scrollLeft - this.paddingX) / this.qubitCircleSize)
    }
  }

  private get calculateColEndIndex(): number {
    const scrollLeft = this.window.scrollLeft

    if (scrollLeft < this.paddingX) {
      return Math.min(
        this.cols - 1,
        Math.floor((this.windowWidth - (this.paddingX - scrollLeft)) / this.qubitCircleSize)
      )
    } else {
      return Math.min(
        this.cols - 1,
        Math.floor((this.windowWidth + (scrollLeft - this.paddingX)) / this.qubitCircleSize)
      )
    }
  }

  private get calculateRowStartIndex(): number {
    const scrollTop = this.window.scrollTop

    if (scrollTop < this.paddingY) {
      return 0
    } else {
      return Math.floor((scrollTop - this.paddingY) / this.qubitCircleSize)
    }
  }

  private get calculateRowEndIndex(): number {
    const scrollTop = this.window.scrollTop

    if (scrollTop < this.paddingY) {
      return Math.min(
        this.rows - 1,
        Math.floor((this.windowHeight - (this.paddingY - scrollTop)) / this.qubitCircleSize)
      )
    } else {
      return Math.min(
        this.rows - 1,
        Math.floor((this.windowHeight + (scrollTop - this.paddingY)) / this.qubitCircleSize)
      )
    }
  }
}
