import {Complex, DetailedError, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {debounce} from '@github/mini-throttle/decorators'

@controller
export class VirtualizedGridElement extends HTMLElement {
  @attr qubitCount = 1
  @attr size = 'xl'
  @attr cols = 0
  @attr rows = 0
  @attr paddingX = 0
  @attr paddingY = 0
  @attr colStartIndex = -1
  @attr colEndIndex = -1
  @attr rowStartIndex = -1
  @attr rowEndIndex = -1
  @attr vertical = true

  @target window!: HTMLElement
  @target innerContainer!: HTMLElement
  @targets qubitCircles!: HTMLElement[]

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-qubit-count') {
      Util.notNull(newValue)

      this.updateSize(parseInt(newValue))
      this.updateDimension(parseInt(newValue))
      this.redrawWindowAndInnerContainer()
      this.clearInnerContainer()
      this.drawQubitCircles()
      this.dispatchVisibilityChangedEvent()
    }
  }

  private updateSize(qubitCount: number): void {
    switch (qubitCount) {
      case 1: {
        this.size = 'xl'
        break
      }
      case 2: {
        this.size = 'xl'
        break
      }
      case 3: {
        if (this.vertical) {
          this.size = 'lg'
        } else {
          this.size = 'xl'
        }
        break
      }
      case 4: {
        if (this.vertical) {
          this.size = 'base'
        } else {
          this.size = 'lg'
        }
        break
      }
      case 5: {
        if (this.vertical) {
          this.size = 'sm'
        } else {
          this.size = 'base'
        }
        break
      }
      case 6: {
        if (this.vertical) {
          this.size = 'xs'
        } else {
          this.size = 'base'
        }
        break
      }
      case 7: {
        this.size = 'xs'
        break
      }
      case 8: {
        this.size = 'xs'
        break
      }
      case 9: {
        this.size = 'xs'
        break
      }
      case 10: {
        this.size = 'xs'
        break
      }
      case 11: {
        this.size = 'xs'
        break
      }
      case 12: {
        this.size = 'xs'
        break
      }
      case 13: {
        this.size = 'xs'
        break
      }
      case 14: {
        this.size = 'xs'
        break
      }
      case 15: {
        this.size = 'xs'
        break
      }
      case 16: {
        this.size = 'xs'
        break
      }
      default:
        throw new DetailedError('unsupported qubit count', qubitCount)
    }

    // console.log(`size = ${this.size}`)
  }

  private updateDimension(qubitCount: number): void {
    switch (qubitCount) {
      case 1: {
        this.rows = 1
        this.cols = 2
        break
      }
      case 2: {
        this.rows = 1
        this.cols = 4
        break
      }
      case 3: {
        if (this.vertical) {
          this.rows = 2
          this.cols = 4
        } else {
          this.rows = 1
          this.cols = 8
        }
        break
      }
      case 4: {
        this.rows = 2
        this.cols = 8
        break
      }
      case 5: {
        if (this.vertical) {
          this.rows = 4
          this.cols = 8
        } else {
          this.rows = 2
          this.cols = 16
        }
        break
      }
      case 6: {
        this.rows = 4
        this.cols = 16
        break
      }
      case 7: {
        this.rows = 4
        this.cols = 32
        break
      }
      case 8: {
        this.rows = 8
        this.cols = 32
        break
      }
      case 9: {
        this.rows = 16
        this.cols = 32
        break
      }
      case 10: {
        this.rows = 32
        this.cols = 32
        break
      }
      case 11: {
        this.rows = 32
        this.cols = 64
        break
      }
      case 12: {
        this.rows = 64
        this.cols = 64
        break
      }
      case 13: {
        this.rows = 64
        this.cols = 128
        break
      }
      case 14: {
        this.rows = 128
        this.cols = 128
        break
      }
      case 15: {
        this.rows = 128
        this.cols = 256
        break
      }
      case 16: {
        this.rows = 256
        this.cols = 256
        break
      }
      default:
        throw new DetailedError('unsupported qubit count', qubitCount)
    }

    // console.log(`cols = ${this.cols}`)
    // console.log(`rows = ${this.rows}`)
  }

  private get visibleQubitCircleKets(): number[] {
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

      // set magnitude
      const magnitude = Math.floor(amplitude.abs() * 100000) / 100000
      const magnitudeEl = each.children.item(0) as HTMLElement
      Util.notNull(magnitudeEl)
      magnitudeEl.style.setProperty('--magnitude', magnitude.toString())

      // set phase
      const phaseDeg = (amplitude.phase() / Math.PI) * 180
      const phaseEl = each.children.item(1) as HTMLElement
      Util.notNull(phaseEl)

      let cssPhaseDeg = Math.trunc(phaseDeg)
      if (cssPhaseDeg < 0) cssPhaseDeg = 360 + cssPhaseDeg

      phaseEl.style.setProperty('--phase', `-${cssPhaseDeg.toString()}deg`)
    }
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.startResizeObserver()
    this.updatePadding()
    this.redrawWindowAndInnerContainer()
    this.maybeRedrawQubitCircles()

    this.dispatchEvent(new Event('circle-notation-init', {bubbles: true}))
  }

  private startResizeObserver(): void {
    this.detectLayoutOrientation()
    const ro = new ResizeObserver(this.detectLayoutOrientation.bind(this))
    ro.observe(document.body)
  }

  private detectLayoutOrientation(): void {
    let changed = false
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw < 768) {
      if (!this.vertical) changed = true
      this.vertical = true
    } else {
      if (this.vertical) changed = true
      this.vertical = false
    }

    if (changed) {
      this.updateSize(this.qubitCount)
      this.updatePadding()
      this.updateDimension(this.qubitCount)
      this.redrawWindowAndInnerContainer()
      this.clearInnerContainer()
      this.drawQubitCircles()
      this.dispatchVisibilityChangedEvent()
    }
  }

  private updatePadding(): void {
    this.style.removeProperty('padding')

    const style = window.getComputedStyle(this)
    this.paddingX = parseInt(style.paddingLeft, 10)
    this.paddingY = parseInt(style.paddingTop, 10)
    this.style.paddingTop = '0px'
    this.style.paddingRight = '0px'
    this.style.paddingBottom = '0px'
    this.style.paddingLeft = '0px'

    // console.log(`paddingX = ${this.paddingX}`)
    // console.log(`paddingY = ${this.paddingY}`)
  }

  update(): void {
    render(
      html`<style>
          :root {
            --magnitude: 0;
            --phase: 0deg;
          }

          .virtualized-grid__window {
            overflow: auto;
          }

          .virtualized-grid__inner-container {
            position: relative;
          }

          .qubit-circle {
            position: absolute;
          }

          :host([data-size='xl']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-size='base']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-size='sm']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          :host([data-size='xs']) .qubit-circle {
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

          :host([data-size='xl']) .qubit-circle__magnitude,
          :host([data-size='lg']) .qubit-circle__magnitude,
          :host([data-size='base']) .qubit-circle__magnitude {
            border-width: 2px;
          }
          :host([data-size='sm']) .qubit-circle__magnitude,
          :host([data-size='xs']) .qubit-circle__magnitude {
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
            transform: scaleX(var(--magnitude)) scaleY(var(--magnitude));

            content: '';
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
            transform: rotate(var(--phase));
          }

          .qubit-circle[data-amplitude-real='0'][data-amplitude-imag='0'] .qubit-circle__phase {
            transform: scaleX(0) scaleY(0);
          }

          :host([data-size='xl']) .qubit-circle__phase,
          :host([data-size='lg']) .qubit-circle__phase,
          :host([data-size='base']) .qubit-circle__phase {
            border-width: 2px;
          }
          :host([data-size='sm']) .qubit-circle__phase,
          :host([data-size='xs']) .qubit-circle__phase {
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

          :host([data-size='xl']) .qubit-circle__phase::after,
          :host([data-size='lg']) .qubit-circle__phase::after,
          :host([data-size='base']) .qubit-circle__phase::after {
            width: 0.125rem; /* 2px */
          }
          :host([data-size='sm']) .qubit-circle__phase::after,
          :host([data-size='xs']) .qubit-circle__phase::after {
            width: 1px;
          }
        </style>

        <div
          class="virtualized-grid__window"
          data-target="virtualized-grid.window"
          data-action="scroll:virtualized-grid#maybeRedrawQubitCircles"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px"
        >
          <div
            class="virtualized-grid__inner-container"
            data-target="virtualized-grid.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px"
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

  private clearInnerContainer(): void {
    if (this.innerContainer === undefined) return

    this.innerContainer.textContent = ''
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
        if (this.vertical) {
          return this.qubitCircleSize * 2
        } else {
          return this.qubitCircleSize
        }
      }
      case 4: {
        return this.qubitCircleSize * 2
      }
      case 5: {
        if (this.vertical) {
          return this.qubitCircleSize * 4
        } else {
          return this.qubitCircleSize * 2
        }
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
      case 12: {
        return this.qubitCircleSize * 8
      }
      case 13: {
        return this.qubitCircleSize * 8
      }
      case 14: {
        return this.qubitCircleSize * 8
      }
      case 15: {
        return this.qubitCircleSize * 8
      }
      case 16: {
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
        if (this.vertical) {
          return this.qubitCircleSize * 4
        } else {
          return this.qubitCircleSize * 8
        }
      }
      case 4: {
        return this.qubitCircleSize * 8
      }
      case 5: {
        if (this.vertical) {
          return this.qubitCircleSize * 8
        } else {
          return this.qubitCircleSize * 16
        }
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
      case 12: {
        return this.qubitCircleSize * 32
      }
      case 13: {
        return this.qubitCircleSize * 32
      }
      case 14: {
        return this.qubitCircleSize * 32
      }
      case 15: {
        return this.qubitCircleSize * 32
      }
      case 16: {
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

    // console.log(`window.height = ${this.windowHeight}`)
    // console.log(`window.width = ${this.windowWidth}`)
    // console.log(`innerContainer.height = ${this.innerHeight}`)
    // console.log(`innerContainer.width = ${this.innerWidth}`)
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
        if (this.vertical) {
          return 48
        } else {
          return 64
        }
      }
      case 4: {
        if (this.vertical) {
          return 32
        } else {
          return 48
        }
      }
      case 5: {
        if (this.vertical) {
          return 23
        } else {
          return 32
        }
      }
      case 6: {
        if (this.vertical) {
          return 17
        } else {
          return 32
        }
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
      case 12: {
        return 17
      }
      case 13: {
        return 17
      }
      case 14: {
        return 17
      }
      case 15: {
        return 17
      }
      case 16: {
        return 17
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private drawQubitCircles(): void {
    if (this.window === undefined) return

    this.colStartIndex = this.calculateColStartIndex
    this.colEndIndex = this.calculateColEndIndex
    this.rowStartIndex = this.calculateRowStartIndex
    this.rowEndIndex = this.calculateRowEndIndex

    const positions = []
    for (let row = this.rowStartIndex; row <= this.rowEndIndex; row++) {
      for (let col = this.colStartIndex; col <= this.colEndIndex; col++) {
        positions.push({col, row})
      }
    }

    const fragment = document.createDocumentFragment()
    for (const each of this.allQubitCircleElements(positions)) {
      fragment.appendChild(each)
    }

    this.innerContainer.appendChild(fragment)
  }

  @debounce(10)
  private maybeRedrawQubitCircles(): void {
    if (this.window === undefined) return

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

    // console.log(`colStartIndex = ${colStartIndex}`)
    // console.log(`colEndIndex = ${colEndIndex}`)
    // console.log(`rowStartIndex = ${rowStartIndex}`)
    // console.log(`rowEndIndex = ${rowEndIndex}`)

    const positions = []
    for (let row = rowStartIndex; row <= rowEndIndex; row++) {
      for (let col = colStartIndex; col <= colEndIndex; col++) {
        if (col < this.colStartIndex || this.colEndIndex < col || row < this.rowStartIndex || this.rowEndIndex < row) {
          positions.push({col, row})
        }
      }
    }

    this.colStartIndex = colStartIndex
    this.colEndIndex = colEndIndex
    this.rowStartIndex = rowStartIndex
    this.rowEndIndex = rowEndIndex

    const fragment = document.createDocumentFragment()
    for (const each of this.allQubitCircleElements(positions)) {
      fragment.appendChild(each)
    }

    this.innerContainer.appendChild(fragment)

    for (const each of this.qubitCircles) {
      const dataCol = each.getAttribute('data-col')
      const dataRow = each.getAttribute('data-row')
      Util.notNull(dataCol)
      Util.notNull(dataRow)
      const col = parseInt(dataCol)
      const row = parseInt(dataRow)

      if (col < colStartIndex || colEndIndex < col || row < rowStartIndex || rowEndIndex < row) {
        each.remove()
      }
    }

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

  private allQubitCircleElements(positions: Array<{col: number; row: number}>): HTMLDivElement[] {
    return positions.map(this.qubitCircleElement.bind(this))
  }

  private qubitCircleElement(position: {row: number; col: number}): HTMLDivElement {
    const ket = position.col + position.row * this.cols
    const top = this.qubitCircleSize * position.row + this.paddingY
    const left = this.qubitCircleSize * position.col + this.paddingX

    // <div
    //   class="qubit-circle"
    //   data-ket="${ket}"
    //   data-targets="virtualized-grid.qubitCircles"
    //   data-amplitude-real="0"
    //   data-amplitude-imag="0"
    //   style="top: ${top}px; left: ${left}px"
    // >
    //   <div class="qubit-circle__magnitude" style="--magnitude:0;"></div>
    //   <div class="qubit-circle__phase"></div>
    // </div>

    const qubitCircle = document.createElement('div')
    qubitCircle.className = 'qubit-circle'
    qubitCircle.setAttribute('data-col', position.col.toString())
    qubitCircle.setAttribute('data-row', position.row.toString())
    qubitCircle.setAttribute('data-ket', ket.toString())
    qubitCircle.setAttribute('data-targets', 'virtualized-grid.qubitCircles')
    qubitCircle.setAttribute('data-amplitude-real', '0')
    qubitCircle.setAttribute('data-amplitude-imag', '0')
    qubitCircle.style.setProperty('top', `${top}px`)
    qubitCircle.style.setProperty('left', `${left}px`)

    const magnitude = document.createElement('div')
    magnitude.className = 'qubit-circle__magnitude'
    magnitude.style.setProperty('--magnitude', '0')

    const phase = document.createElement('div')
    phase.className = 'qubit-circle__phase'

    qubitCircle.appendChild(magnitude)
    qubitCircle.appendChild(phase)

    return qubitCircle
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
