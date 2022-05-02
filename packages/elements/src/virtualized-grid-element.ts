import {Complex, DetailedError, Util, describe} from '@qni/common'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, target, targets} from '@github/catalyst'

@controller
export class VirtualizedGridElement extends HTMLElement {
  @attr qubitCount = 1
  @attr cols = 0
  @attr rows = 0
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

  // FIXME: set amplitudes() に変更
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
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  /* inner container */

  private get innerHeight(): number {
    return this.rows * this.qubitCircleSize
  }

  private get innerWidth(): number {
    return this.cols * this.qubitCircleSize
  }

  /* window */

  private get windowHeight(): number {
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
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get windowWidth(): number {
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
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private redrawWindowAndInnerContainer(): void {
    render(
      html`<div
        data-target="virtualized-grid.window"
        data-action="scroll:virtualized-grid#maybeRedrawQubitCircles"
        style="overflow: auto; height: ${this.windowHeight}px; width: ${this.windowWidth}px"
      >
        <div
          data-target="virtualized-grid.innerContainer"
          style="position: relative; height: ${this.innerHeight}px; width: ${this.innerWidth}px"
        ></div>
      </div>`,
      this
    )
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
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

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

    this.colStartIndex = colStartIndex
    this.colEndIndex = colEndIndex
    this.rowStartIndex = rowStartIndex
    this.rowEndIndex = rowEndIndex

    const data = []
    for (let row = rowStartIndex; row <= rowEndIndex; row++) {
      for (let col = colStartIndex; col <= colEndIndex; col++) {
        data.push({row, col})
      }
    }

    render(this.allQubitCirclesHtml(data), this.innerContainer)

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

  private allQubitCirclesHtml(data: Array<{col: number; row: number}>): TemplateResult {
    return html`${data.map(this.qubitCircleHtml.bind(this))}`
  }

  private qubitCircleHtml(data: {row: number; col: number}): TemplateResult {
    const ket = data.col + data.row * this.cols
    const top = this.qubitCircleSize * data.row
    const left = this.qubitCircleSize * data.col

    return html`<div
      class="qubit-circle"
      data-ket="${ket}"
      data-targets="virtualized-grid.qubitCircles"
      style="position: absolute; top: ${top}px; left: ${left}px"
    >
      <div class="qubit-circle__body">
        <div class="qubit-circle__magnitude"></div>
        <div class="qubit-circle__phase"></div>
      </div>
    </div>`
  }

  private get calculateColStartIndex(): number {
    return Math.floor(this.window.scrollLeft / this.qubitCircleSize)
  }

  private get calculateColEndIndex(): number {
    return Math.min(this.cols - 1, Math.floor((this.window.scrollLeft + this.windowWidth) / this.qubitCircleSize))
  }

  private get calculateRowStartIndex(): number {
    return Math.floor(this.window.scrollTop / this.qubitCircleSize)
  }

  private get calculateRowEndIndex(): number {
    return Math.min(this.rows - 1, Math.floor((this.window.scrollTop + this.windowHeight) / this.qubitCircleSize))
  }
}
