import {Complex, DetailedError, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import tippy, {Instance, ReferenceElement} from 'tippy.js'
import fastdom from 'fastdom'
import {forceSigned} from './util'

@controller
export class CircleNotationElement extends HTMLElement {
  /** Number of qubits. */
  @attr qubitCount = 0
  /** Size of qubit circles. */
  @attr qubitCircleSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base'
  /** Number of columns. */
  @attr colCount = 0
  /** Number of rows. */
  @attr rowCount = 0
  /** Control the horizontal padding of the inner container. */
  @attr paddingX = 0
  /** Control the vertical padding of the inner container. */
  @attr paddingY = 0
  /**
   * Number of rows/columns to render above/below the visible bounds.
   * This can help reduce flickering during scrolling.
   */
  @attr overscanCount = 0
  /** Controls color phase mode ON/OFF */
  @attr colorPhase = false
  /** ID of qubit circle popup template element */
  @attr qubitCirclePopupTemplateId = 'qubit-circle-popup-template'
  @attr showQubitCirclePopupAmplitude = true
  @attr showQubitCirclePopupProbability = true
  @attr showQubitCirclePopupPhase = true
  /** @internal */
  @attr vertical = true
  @attr slideIn = false

  /** @internal */
  @target window!: HTMLElement
  /** @internal */
  @target innerContainer!: HTMLElement
  /** @internal */
  @targets qubitCircles!: HTMLElement[]

  visibleQubitCircleKets: number[] = []

  private lastWindowScrollTop: number | null = null
  private lastWindowScrollLeft: number | null = null
  private lastColStartIndex = -1
  private lastColEndIndex = -1
  private lastRowStartIndex = -1
  private lastRowEndIndex = -1
  private qubitCirclePositions: Array<{col: number; row: number}> = []

  /** @internal */
  startBasicCircleNotationMode(): void {
    this.colorPhase = false
  }

  /** @internal */
  startColorPhaseMode(): void {
    this.colorPhase = true
  }

  /** @internal */
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-qubit-count' && this.window !== undefined && this.innerContainer !== undefined) {
      Util.notNull(newValue)

      this.updateQubitCircleSize()
      this.updateDimension()
      this.resizeWindow()
      this.resizeInnerContainer()
      this.drawQubitCircles()
    }

    if (name === 'data-color-phase') {
      this.drawQubitCircles()
    }
  }

  private updateQubitCircleSize(): void {
    if (this.qubitCount === 0) return

    switch (this.qubitCount) {
      case 1: {
        this.qubitCircleSize = 'xl'
        break
      }
      case 2: {
        this.qubitCircleSize = 'xl'
        break
      }
      case 3: {
        if (this.vertical) {
          this.qubitCircleSize = 'lg'
        } else {
          this.qubitCircleSize = 'xl'
        }
        break
      }
      case 4: {
        if (this.vertical) {
          this.qubitCircleSize = 'base'
        } else {
          this.qubitCircleSize = 'lg'
        }
        break
      }
      case 5: {
        if (this.vertical) {
          this.qubitCircleSize = 'sm'
        } else {
          this.qubitCircleSize = 'base'
        }
        break
      }
      case 6: {
        if (this.vertical) {
          this.qubitCircleSize = 'xs'
        } else {
          this.qubitCircleSize = 'base'
        }
        break
      }
      case 7: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 8: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 9: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 10: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 11: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 12: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 13: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 14: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 15: {
        this.qubitCircleSize = 'xs'
        break
      }
      case 16: {
        this.qubitCircleSize = 'xs'
        break
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private updateDimension(): void {
    if (this.qubitCount === 0) return

    switch (this.qubitCount) {
      case 1: {
        this.rowCount = 1
        this.colCount = 2
        break
      }
      case 2: {
        this.rowCount = 1
        this.colCount = 4
        break
      }
      case 3: {
        if (this.vertical) {
          this.rowCount = 2
          this.colCount = 4
        } else {
          this.rowCount = 1
          this.colCount = 8
        }
        break
      }
      case 4: {
        this.rowCount = 2
        this.colCount = 8
        break
      }
      case 5: {
        if (this.vertical) {
          this.rowCount = 4
          this.colCount = 8
        } else {
          this.rowCount = 2
          this.colCount = 16
        }
        break
      }
      case 6: {
        this.rowCount = 4
        this.colCount = 16
        break
      }
      case 7: {
        if (this.vertical) {
          this.rowCount = 8
          this.colCount = 16
        } else {
          this.rowCount = 4
          this.colCount = 32
        }
        break
      }
      case 8: {
        if (this.vertical) {
          this.rowCount = 16
          this.colCount = 16
        } else {
          this.rowCount = 8
          this.colCount = 32
        }
        break
      }
      case 9: {
        this.rowCount = 16
        this.colCount = 32
        break
      }
      case 10: {
        this.rowCount = 32
        this.colCount = 32
        break
      }
      case 11: {
        this.rowCount = 32
        this.colCount = 64
        break
      }
      case 12: {
        this.rowCount = 64
        this.colCount = 64
        break
      }
      case 13: {
        this.rowCount = 64
        this.colCount = 128
        break
      }
      case 14: {
        this.rowCount = 128
        this.colCount = 128
        break
      }
      case 15: {
        this.rowCount = 128
        this.colCount = 256
        break
      }
      case 16: {
        this.rowCount = 256
        this.colCount = 256
        break
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private updateVisibleQubitCircleKets(): void {
    this.visibleQubitCircleKets = this.qubitCircles.map(each => {
      const ketStr = each.getAttribute('data-ket')
      Util.notNull(ketStr)
      return parseInt(ketStr)
    })
    Util.need(
      this.visibleQubitCircleKets.length <= 2 ** this.qubitCount,
      `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`
    )

    this.dispatchEvent(
      new CustomEvent('circle-notation-visibility-change', {
        detail: this.visibleQubitCircleKets,
        bubbles: true
      })
    )
  }

  setAmplitudes(amplitudes: {[ket: number]: Complex}) {
    fastdom.mutate(() => {
      for (const each of this.qubitCircles) {
        const ketStr = each.getAttribute('data-ket')
        Util.notNull(ketStr)

        const ket = parseInt(ketStr)
        const amplitude = amplitudes[ket]
        if (amplitude === undefined) continue

        const magnitude = Math.floor(amplitude.abs() * 100000) / 100000
        const phaseDeg = (amplitude.phase() / Math.PI) * 180

        each.setAttribute('data-amplitude-real', amplitude.real.toString())
        each.setAttribute('data-amplitude-imag', amplitude.imag.toString())

        if (magnitude === 0) {
          each.classList.add('magnitude-0')
        } else {
          each.classList.remove('magnitude-0')
          each.style.setProperty('--magnitude', magnitude.toString())
        }

        let cssPhaseDeg = Math.trunc(phaseDeg)
        if (cssPhaseDeg < 0) cssPhaseDeg = 360 + cssPhaseDeg

        each.style.setProperty('--phase', `-${cssPhaseDeg.toString()}deg`)
      }
    })
  }

  /** @internal */
  connectedCallback(): void {
    this.prepareSlideInAnimation()
    this.attachShadow({mode: 'open'})
    this.renderShadowRoot()
    this.startLayoutOrientationChangeObserver()
    this.updateDimension()
    this.resizeWindow()
    this.resizeInnerContainer()
    this.drawQubitCircles()
    this.startSlideInAnimation()
  }

  private prepareSlideInAnimation(): void {
    if (!this.slideIn) return
    if (!this.isMobile()) return

    fastdom.mutate(() => {
      this.style.visibility = 'hidden'
      this.style.top = '-240px'
    })
  }

  private startSlideInAnimation(): void {
    if (!this.slideIn) return
    if (!this.isMobile()) return

    fastdom.mutate(() => {
      this.style.visibility = 'visible'

      this.animate(
        [{transform: 'translateY(0px)'}, {transform: 'translateY(256px)'}, {transform: 'translateY(240px)'}],
        {
          duration: 400,
          fill: 'forwards'
        }
      )
    })
  }

  private isMobile(): boolean {
    return !window.matchMedia('(min-width: 640px)').matches
  }

  private startLayoutOrientationChangeObserver(): void {
    this.vertical = this.isVertical()
    const resizeObserver = new ResizeObserver(this.detectViewportOrientation.bind(this))
    resizeObserver.observe(document.body)
  }

  private detectViewportOrientation(): void {
    let changed = false

    if (this.isVertical()) {
      if (!this.vertical) changed = true
      this.vertical = true
    } else {
      if (this.vertical) changed = true
      this.vertical = false
    }

    if (changed) {
      this.updateQubitCircleSize()
      this.updateDimension()
      this.resizeWindow()
      this.drawQubitCircles()
    }
  }

  private isVertical(): boolean {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    return vw < 768
  }

  private renderShadowRoot(): void {
    render(
      html`<style>
          circle-notation {
            --magnitude: 0;
            --magnitude-color: rgb(14 165 233); /* sky-500 */
            --phase: 0deg;
            --width: 0px;
            --border-width: 0px;
            --phase-width: 0px;
          }

          /* border */

          .qubit-circle {
            position: absolute;
            width: var(--width);
            height: var(--height);
            border-color: rgb(226 232 240); /* slate-200 */
            border-radius: 9999px;
            border-style: solid;
            border-width: var(--border-width);
            box-sizing: border-box;
          }

          .qubit-circle:hover {
            filter: brightness(0.9);
          }

          .qubit-circle:not(.magnitude-0) {
            border-color: rgb(100 116 139); /* slate-500 */
          }

          /* magnitude */

          .qubit-circle__magnitude {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            background-color: var(--magnitude-color);
            transform-origin: center;
            transform: scaleX(var(--magnitude)) scaleY(var(--magnitude));
          }

          .qubit-circle.magnitude-0 .qubit-circle__magnitude {
            display: none;
          }

          :host([data-color-phase]) .qubit-circle__magnitude {
            transform: scaleX(1) scaleY(1);
            filter: hue-rotate(var(--phase));
          }

          /* phase */

          .qubit-circle__phase {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            width: var(--phase-width);
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            transform-origin: bottom;
            transform: rotate(var(--phase));
          }

          .qubit-circle.magnitude-0 .qubit-circle__phase {
            display: none;
          }
        </style>

        <slot></slot>

        <div
          class="circle-notation__window"
          data-target="circle-notation.window"
          data-action="scroll:circle-notation#update"
          style="height: ${this.windowHeight}px; width: ${this
            .windowWidth}px; overflow: auto; overscroll-behavior: none;"
        >
          <div
            class="circle-notation__inner-container"
            data-target="circle-notation.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px; position: relative;"
          ></div>
        </div>`,
      this.shadowRoot!
    )
  }

  /* inner container */

  private get innerHeight(): number {
    if (this.qubitCount === 0) return 0

    return this.rowCount * this.qubitCircleSizePx + (this.rowCount - 1) * this.gap + this.paddingY * 2
  }

  private get innerWidth(): number {
    if (this.qubitCount === 0) return 0

    return this.colCount * this.qubitCircleSizePx + (this.colCount - 1) * this.gap + this.paddingX * 2
  }

  /* window */

  private get qubitCirclesAreaHeight(): number {
    switch (this.qubitCount) {
      case 1: {
        return this.qubitCircleSizePx
      }
      case 2: {
        return this.qubitCircleSizePx
      }
      case 3: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 2 + this.gap
        } else {
          return this.qubitCircleSizePx
        }
      }
      case 4: {
        return this.qubitCircleSizePx * 2 + this.gap
      }
      case 5: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 4 + this.gap * 3
        } else {
          return this.qubitCircleSizePx * 2 + this.gap
        }
      }
      case 6: {
        return this.qubitCircleSizePx * 4 + this.gap * 3
      }
      case 7: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 4 + this.gap * 3
        }
      }
      case 8: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 9: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 10: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 11: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 12: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 13: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 14: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 15: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 16: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5 + this.gap * 4
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get qubitCirclesAreaWidth(): number {
    switch (this.qubitCount) {
      case 1: {
        return this.qubitCircleSizePx * 2 + this.gap
      }
      case 2: {
        return this.qubitCircleSizePx * 4 + this.gap * 3
      }
      case 3: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 4 + this.gap * 3
        } else {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        }
      }
      case 4: {
        return this.qubitCircleSizePx * 8 + this.gap * 7
      }
      case 5: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 8 + this.gap * 7
        } else {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        }
      }
      case 6: {
        return this.qubitCircleSizePx * 16 + this.gap * 15
      }
      case 7: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 8: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 9: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 10: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 11: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 12: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 13: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 14: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 15: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      case 16: {
        return this.qubitCircleSizePx * 32 + this.gap * 31
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get windowHeight(): number {
    if (this.qubitCount === 0) return 0

    const qubitCirclesAreaPlusPaddingHeight = this.qubitCirclesAreaHeight + this.paddingY * 2

    if (this.vertical) {
      const clientHeight = this.clientHeight

      if (this.rowCount > 4 && clientHeight < qubitCirclesAreaPlusPaddingHeight) {
        return clientHeight
      } else {
        return qubitCirclesAreaPlusPaddingHeight
      }
    } else {
      return qubitCirclesAreaPlusPaddingHeight
    }
  }

  private get windowWidth(): number {
    if (this.qubitCount === 0) return 0

    const qubitCirclesAreaPlusPaddingWidth = this.qubitCirclesAreaWidth + this.paddingX * 2

    if (this.vertical) {
      const clientWidth = this.clientWidth

      if (this.colCount >= 16 && clientWidth < qubitCirclesAreaPlusPaddingWidth) {
        return clientWidth
      } else {
        return qubitCirclesAreaPlusPaddingWidth
      }
    } else {
      return qubitCirclesAreaPlusPaddingWidth
    }
  }

  private resizeWindow(): void {
    if (this.window === undefined) return

    this.window.style.height = `${this.windowHeight}px`
    this.window.style.width = `${this.windowWidth}px`
  }

  private resizeInnerContainer(): void {
    if (this.innerContainer === undefined) return

    this.innerContainer.style.height = `${this.innerHeight}px`
    this.innerContainer.style.width = `${this.innerWidth}px`
  }

  /* qubit circle */

  private get qubitCircleSizePx(): number {
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
          return 24
        } else {
          return 32
        }
      }
      case 6: {
        if (this.vertical) {
          return 16
        } else {
          return 32
        }
      }
      case 7: {
        return 16
      }
      case 8: {
        return 16
      }
      case 9: {
        return 16
      }
      case 10: {
        return 16
      }
      case 11: {
        return 16
      }
      case 12: {
        return 16
      }
      case 13: {
        return 16
      }
      case 14: {
        return 16
      }
      case 15: {
        return 16
      }
      case 16: {
        return 16
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private drawQubitCircles(): void {
    Util.notNull(this.window)
    Util.notNull(this.innerContainer)

    if (this.qubitCount === 0) return

    fastdom.mutate(() => {
      this.style.setProperty('--width', `${this.qubitCircleSizePx}px`)
      this.style.setProperty('--height', `${this.qubitCircleSizePx}px`)
      this.style.setProperty('--magnitude', '0')
      this.style.setProperty('--magnitude-color', 'rgb(14 165 233)')
      this.style.setProperty('--border-width', `${this.qubitCircleLineWidth}px`)
      this.style.setProperty('--phase-width', `${this.qubitCircleLineWidth}px`)

      const positions: Array<{col: number; row: number}> = []

      this.lastColStartIndex = this.visibleColStartIndex
      this.lastColEndIndex = this.visibleColEndIndex
      this.lastRowStartIndex = this.visibleRowStartIndex
      this.lastRowEndIndex = this.visibleRowEndIndex

      for (let row = this.lastRowStartIndex; row <= this.lastRowEndIndex; row++) {
        for (let col = this.lastColStartIndex; col <= this.lastColEndIndex; col++) {
          positions.push({col, row})
        }
      }

      const fragment = document.createDocumentFragment()
      for (const each of this.allQubitCircleElements(positions)) {
        fragment.appendChild(each)
      }

      this.innerContainer.textContent = ''
      this.innerContainer.appendChild(fragment)
      this.updateVisibleQubitCircleKets()
    })
  }

  /** @internal */
  update() {
    this.drawNewlyVisibleQubitCircles()
    this.removeInvisibleQubitCircles()
  }

  private drawNewlyVisibleQubitCircles(): void {
    if (this.window === undefined) return
    if (this.innerContainer === undefined) return

    fastdom.measure(() => {
      this.qubitCirclePositions = []
      const colStartIndex = this.overscanColStartIndex
      const colEndIndex = this.overscanColEndIndex
      const rowStartIndex = this.overscanRowStartIndex
      const rowEndIndex = this.overscanRowEndIndex

      if (
        this.lastColStartIndex === colStartIndex &&
        this.lastColEndIndex === colEndIndex &&
        this.lastRowStartIndex === rowStartIndex &&
        this.lastRowEndIndex === rowEndIndex
      ) {
        return
      }

      for (let row = rowStartIndex; row <= rowEndIndex; row++) {
        for (let col = colStartIndex; col <= colEndIndex; col++) {
          if (
            col < this.lastColStartIndex ||
            this.lastColEndIndex < col ||
            row < this.lastRowStartIndex ||
            this.lastRowEndIndex < row
          ) {
            this.qubitCirclePositions.push({col, row})
          }
        }
      }

      this.lastColStartIndex = colStartIndex
      this.lastColEndIndex = colEndIndex
      this.lastRowStartIndex = rowStartIndex
      this.lastRowEndIndex = rowEndIndex
    })

    fastdom.mutate(() => {
      const fragment = document.createDocumentFragment()
      for (const each of this.allQubitCircleElements(this.qubitCirclePositions)) {
        fragment.appendChild(each)
      }

      this.innerContainer.appendChild(fragment)

      if (this.qubitCirclePositions.length !== 0) {
        this.updateVisibleQubitCircleKets()
      }
    })
  }

  private removeInvisibleQubitCircles() {
    fastdom.mutate(() => {
      for (const each of this.qubitCircles) {
        const dataCol = each.getAttribute('data-col')
        const dataRow = each.getAttribute('data-row')
        Util.notNull(dataCol)
        Util.notNull(dataRow)

        const col = parseInt(dataCol)
        const row = parseInt(dataRow)

        if (
          col < this.lastColStartIndex ||
          this.lastColEndIndex < col ||
          row < this.lastRowStartIndex ||
          this.lastRowEndIndex < row
        ) {
          const popup = (each as ReferenceElement)._tippy as Instance
          if (popup !== undefined) popup.destroy()
          each.remove()
        }
      }
    })
  }

  private allQubitCircleElements(positions: Array<{col: number; row: number}>): HTMLDivElement[] {
    return positions.map(this.qubitCircleElement.bind(this))
  }

  private qubitCircleElement(position: {row: number; col: number}): HTMLDivElement {
    const ket = position.col + position.row * this.colCount
    const top = this.qubitCircleSizePx * position.row + position.row * this.gap + this.paddingY
    const left = this.qubitCircleSizePx * position.col + position.col * this.gap + this.paddingX

    // <div
    //   class="qubit-circle"
    //   data-ket="${ket}"
    //   data-targets="circle-notation.qubitCircles"
    //   data-action="mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"
    //   data-amplitude-real="0"
    //   data-amplitude-imag="0"
    //   style="position: absolute; top: ${top}px; left: ${left}px; border-width: ${borderWidth}px"
    // >
    //   <div class="qubit-circle__magnitude" style="--magnitude:0;"></div>
    //   <div class="qubit-circle__phase"></div>
    // </div>

    const qubitCircle = document.createElement('div')
    qubitCircle.className = 'qubit-circle magnitude-0'
    qubitCircle.setAttribute('data-col', position.col.toString())
    qubitCircle.setAttribute('data-row', position.row.toString())
    qubitCircle.setAttribute('data-ket', ket.toString())
    qubitCircle.setAttribute('data-targets', 'circle-notation.qubitCircles')
    qubitCircle.setAttribute('data-amplitude-real', '0')
    qubitCircle.setAttribute('data-amplitude-imag', '0')
    qubitCircle.setAttribute(
      'data-action',
      'mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup'
    )
    qubitCircle.style.setProperty('top', `${top}px`)
    qubitCircle.style.setProperty('left', `${left}px`)

    const magnitude = document.createElement('div')
    magnitude.className = 'qubit-circle__magnitude'

    const phase = document.createElement('div')
    phase.className = 'qubit-circle__phase'

    qubitCircle.appendChild(magnitude)
    qubitCircle.appendChild(phase)

    return qubitCircle
  }

  private get gap(): number {
    return this.qubitCircleLineWidth
  }

  private get qubitCircleLineWidth(): number {
    switch (this.qubitCount) {
      case 1: {
        return 2
      }
      case 2: {
        return 2
      }
      case 3: {
        return 2
      }
      case 4: {
        return 2
      }
      case 5: {
        if (this.vertical) {
          return 1
        } else {
          return 2
        }
      }
      case 6: {
        if (this.vertical) {
          return 1
        } else {
          return 2
        }
      }
      case 7: {
        return 1
      }
      case 8: {
        return 1
      }
      case 9: {
        return 1
      }
      case 10: {
        return 1
      }
      case 11: {
        return 1
      }
      case 12: {
        return 1
      }
      case 13: {
        return 1
      }
      case 14: {
        return 1
      }
      case 15: {
        return 1
      }
      case 16: {
        return 1
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  /* visible row and column indices */

  private get overscanColStartIndex(): number {
    const index = this.visibleColStartIndex - this.overscanCount

    if (index < 0) {
      return 0
    } else {
      return index
    }
  }

  private get overscanColEndIndex(): number {
    const index = this.visibleColEndIndex + this.overscanCount

    if (index > this.colCount - 1) {
      return this.colCount - 1
    } else {
      return index
    }
  }

  private get overscanRowStartIndex(): number {
    const index = this.visibleRowStartIndex - this.overscanCount

    if (index < 0) {
      return 0
    } else {
      return index
    }
  }

  private get overscanRowEndIndex(): number {
    const index = this.visibleRowEndIndex + this.overscanCount

    if (index > this.rowCount - 1) {
      return this.rowCount - 1
    } else {
      return index
    }
  }

  private get visibleColStartIndex(): number {
    const width = this.windowScrollLeft - this.paddingX
    if (width < 0) return 0

    let index = Math.floor(width / (this.qubitCircleSizePx + this.gap))
    const rest = width % this.qubitCircleSizePx
    if (rest > this.qubitCircleSizePx) index++

    return index
  }

  private get visibleColEndIndex(): number {
    const width = this.windowWidth + this.windowScrollLeft - this.paddingX
    let index = Math.floor(width / (this.qubitCircleSizePx + this.gap))
    const rest = width % this.qubitCircleSizePx

    if (rest > this.qubitCircleSizePx) {
      index++
    }

    return Math.min(this.colCount - 1, index)
  }

  private get visibleRowStartIndex(): number {
    const height = this.windowScrollTop - this.paddingY
    if (height < 0) return 0

    let index = Math.floor(height / (this.qubitCircleSizePx + this.gap))
    const rest = height % this.qubitCircleSizePx
    if (rest > this.qubitCircleSizePx) index++

    return index
  }

  private get visibleRowEndIndex(): number {
    const height = this.windowHeight + this.windowScrollTop - this.paddingY
    let index = Math.floor(height / (this.qubitCircleSizePx + this.gap))
    const rest = height % this.qubitCircleSizePx

    if (rest > this.qubitCircleSizePx) {
      index++
    }

    return Math.min(this.rowCount - 1, index)
  }

  private get windowScrollTop(): number {
    if (this.lastWindowScrollTop === null) {
      this.lastWindowScrollTop = this.window.scrollTop

      window.setTimeout(() => {
        this.lastWindowScrollTop = null
      }, 10)
    }

    return this.lastWindowScrollTop
  }

  private get windowScrollLeft(): number {
    if (this.lastWindowScrollLeft === null) {
      this.lastWindowScrollLeft = this.window.scrollLeft

      window.setTimeout(() => {
        this.lastWindowScrollLeft = null
      }, 10)
    }

    return this.lastWindowScrollLeft
  }

  /* qubit-circle popup */

  /** @internal */
  showQubitCirclePopup(event: MouseEvent): void {
    const qubitCircle = event.target as HTMLElement
    Util.need(qubitCircle.classList.contains('qubit-circle'), 'not a qubit-circle')

    const popup = tippy(qubitCircle, {
      allowHTML: true,
      animation: false,
      delay: 0,
      theme: 'qubit-circle'
      // trigger: 'manual', // debug
    })

    if (this.qubitCirclePopupTemplate === null) return

    const dataKet = qubitCircle.getAttribute('data-ket')
    Util.notNull(dataKet)
    const dataAmplitudeReal = qubitCircle.getAttribute('data-amplitude-real')
    Util.notNull(dataAmplitudeReal)
    const dataAmplitudeImag = qubitCircle.getAttribute('data-amplitude-imag')
    Util.notNull(dataAmplitudeImag)

    const ket = parseInt(dataKet)
    const amplitudeReal = parseFloat(dataAmplitudeReal)
    const amplitudeImag = parseFloat(dataAmplitudeImag)
    const amplitude = new Complex(amplitudeReal, amplitudeImag)
    const magnitude = amplitude.abs()
    const phase = (amplitude.phase() / Math.PI) * 180

    const template = document.importNode(this.qubitCirclePopupTemplate.content, true)
    const ketBinaryEl = template.getElementById('qubit-circle-popup--ket-binary-value')
    const ketDecimalEl = template.getElementById('qubit-circle-popup--ket-decimal-value')
    const amplitudeEl = template.getElementById('qubit-circle-popup--amplitude')
    const amplitudeRealValueEl = template.getElementById('qubit-circle-popup--amplitude-real-value')
    const amplitudeImagValueEl = template.getElementById('qubit-circle-popup--amplitude-imag-value')
    const probabilityEl = template.getElementById('qubit-circle-popup--probability')
    const probabilityValueEl = template.getElementById('qubit-circle-popup--probability-value')
    const phaseEl = template.getElementById('qubit-circle-popup--phase')
    const phaseValueEl = template.getElementById('qubit-circle-popup--phase-value')

    Util.notNull(amplitudeEl)
    Util.notNull(amplitudeRealValueEl)
    Util.notNull(amplitudeImagValueEl)
    Util.notNull(probabilityEl)
    Util.notNull(probabilityValueEl)
    Util.notNull(phaseEl)
    Util.notNull(phaseValueEl)

    if (ketBinaryEl) {
      ketBinaryEl.textContent = ket.toString(2).padStart(this.qubitCount, '0')
    }

    if (ketDecimalEl) {
      ketDecimalEl.textContent = ket.toString()
    }

    if (this.showQubitCirclePopupAmplitude) {
      amplitudeRealValueEl.textContent = forceSigned(amplitude.real, 5)
      amplitudeImagValueEl.textContent = `${forceSigned(amplitude.imag, 5)}i`
    } else {
      amplitudeEl.style.display = 'none'
    }

    if (this.showQubitCirclePopupProbability) {
      probabilityValueEl.textContent = `${forceSigned(magnitude * magnitude * 100, 4)}%`
    } else {
      probabilityEl.style.display = 'none'
    }

    if (this.showQubitCirclePopupPhase) {
      phaseValueEl.textContent = `${forceSigned(phase, 2)}°`
    } else {
      phaseEl.style.display = 'none'
    }

    const tmpDiv = document.createElement('div')
    tmpDiv.appendChild(template)

    // eslint-disable-next-line github/no-inner-html
    popup.setContent(tmpDiv.innerHTML)
    popup.show()
  }

  /** @internal */
  hideQubitCirclePopup(event: MouseEvent): void {
    const qubitCircle = event.target as HTMLElement
    Util.need(qubitCircle.classList.contains('qubit-circle'), 'not a qubit-circle')

    const popup = (qubitCircle as ReferenceElement)._tippy as Instance
    Util.notNull(popup)

    popup.destroy()
  }

  private get qubitCirclePopupTemplate(): HTMLTemplateElement | null {
    return document.getElementById(this.qubitCirclePopupTemplateId) as HTMLTemplateElement
  }
}
