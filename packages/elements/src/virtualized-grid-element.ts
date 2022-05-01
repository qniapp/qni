import {Complex, Util} from '@qni/common'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, target, targets} from '@github/catalyst'

@controller
export class VirtualizedGridElement extends HTMLElement {
  @attr cols = 0
  @attr rows = 0
  @attr qubitCircleHeight = 0
  @attr qubitCircleWidth = 0
  @attr colStartIndex = -1
  @attr colEndIndex = -1
  @attr rowStartIndex = -1
  @attr rowEndIndex = -1

  @target window!: HTMLElement
  @target innerContainer!: HTMLElement
  @targets qubitCircles!: HTMLElement[]

  // FIXME: set amplitudes() に変更
  setAmplitudes(amplitudes: {[ket: number]: Complex}) {
    const qubitCircles = this.qubitCircles

    for (const [i, amplitude] of Object.entries(amplitudes)) {
      const qubitCircle = qubitCircles[parseInt(i)]
      Util.notNull(qubitCircle)

      qubitCircle.setAttribute('data-amplitude-real', amplitude.real.toString())
      qubitCircle.setAttribute('data-amplitude-imag', amplitude.imag.toString())

      const magnitude = amplitude.abs()
      this.setRoundedMagnitude(qubitCircle, magnitude)

      const phaseDeg = (amplitude.phase() / Math.PI) * 180
      this.setRoundedPhase(qubitCircle, phaseDeg)
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

  get innerHeight(): number {
    return this.rows * this.qubitCircleHeight
  }

  get innerWidth(): number {
    return this.cols * this.qubitCircleWidth
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.maybeRedrawQubitCircles()
  }

  update(): void {
    render(
      html`<div
        class="h-16 w-32"
        data-target="virtualized-grid.window"
        data-action="scroll:virtualized-grid#maybeRedrawQubitCircles"
        style="overflow: auto;"
      >
        <div
          data-target="virtualized-grid.innerContainer"
          style="position: relative; height: ${this.innerHeight}px; width: ${this.innerWidth}px"
        ></div>
      </div>`,
      this
    )
    render(html`<slot></slot>`, this.shadowRoot!)
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
  }

  private allQubitCirclesHtml(data: Array<{col: number; row: number}>): TemplateResult {
    return html`${data.map(this.qubitCircleHtml.bind(this))}`
  }

  private qubitCircleHtml(data: {row: number; col: number}): TemplateResult {
    const ket = data.col + data.row * 10
    const top = this.qubitCircleHeight * data.row
    const left = this.qubitCircleWidth * data.col

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
    return Math.floor(this.window.scrollTop / this.qubitCircleHeight)
  }

  private get calculateColEndIndex(): number {
    return Math.min(this.cols - 1, Math.floor((this.window.scrollTop + this.windowHeight) / this.qubitCircleHeight))
  }

  private get calculateRowStartIndex(): number {
    return Math.floor(this.window.scrollLeft / this.qubitCircleWidth)
  }

  private get calculateRowEndIndex(): number {
    return Math.min(this.rows - 1, Math.floor((this.window.scrollLeft + this.windowWidth) / this.qubitCircleWidth))
  }

  private get windowHeight(): number {
    return this.window.clientHeight
  }

  private get windowWidth(): number {
    return this.window.clientWidth
  }
}
