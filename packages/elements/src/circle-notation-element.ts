import {Complex, DetailedError, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import tippy, {Instance, ReferenceElement, roundArrow} from 'tippy.js'
import {debounce} from '@github/mini-throttle/decorators'
import fastdom from 'fastdom'
import {forceSigned} from './util'

@controller
export class CircleNotationElement extends HTMLElement {
  @attr qubitCount = 1
  @attr qubitCircleSize = 'xl'
  @attr cols = 0
  @attr rows = 0
  @attr paddingX = 0
  @attr paddingY = 0
  @attr overscan = 0
  @attr qubitCirclePopupTemplateId = 'qubit-circle-popup-template'
  @attr coloredPhase = false

  @target window!: HTMLElement
  @target innerContainer!: HTMLElement
  @target basicCircleNotationButton: HTMLButtonElement | undefined
  @target coloredPhaseButton: HTMLButtonElement | undefined
  @targets qubitCircles!: HTMLElement[]

  vertical = true
  lastClientHeight: number | null = null
  lastClientWidth: number | null = null
  lastWindowScrollTop: number | null = null
  lastWindowScrollLeft: number | null = null
  lastColStartIndex = -1
  lastColEndIndex = -1
  lastRowStartIndex = -1
  lastRowEndIndex = -1

  startBasicCircleNotationMode(): void {
    if (this.basicCircleNotationButton !== undefined) {
      this.basicCircleNotationButton.classList.remove('hover:border-slate-300')
      this.basicCircleNotationButton.classList.add('border-transparent')
      this.basicCircleNotationButton.classList.add('border-sky-300')
    }

    if (this.coloredPhaseButton !== undefined) {
      this.coloredPhaseButton.classList.remove('border-sky-300')
      this.coloredPhaseButton.classList.add('border-transparent')
      this.coloredPhaseButton.classList.add('hover:border-slate-300')
    }

    this.coloredPhase = false
    this.clearInnerContainer()
    this.drawQubitCircles()
    this.dispatchVisibilityChangedEvent()
  }

  startColoredPhaseMode(): void {
    if (this.coloredPhaseButton !== undefined) {
      this.coloredPhaseButton.classList.remove('hover:border-slate-300')
      this.coloredPhaseButton.classList.remove('border-transparent')
      this.coloredPhaseButton.classList.add('border-sky-300')
    }

    if (this.basicCircleNotationButton !== undefined) {
      this.basicCircleNotationButton.classList.remove('border-sky-300')
      this.basicCircleNotationButton.classList.add('border-transparent')
      this.basicCircleNotationButton.classList.add('hover:border-slate-300')
    }

    this.coloredPhase = true
    this.clearInnerContainer()
    this.drawQubitCircles()
    this.dispatchVisibilityChangedEvent()
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-qubit-count') {
      Util.notNull(newValue)

      const qubitCount = parseInt(newValue)
      this.updateQubitCircleSize(qubitCount)
      this.updateDimension(qubitCount)
      this.resizeWindow()
      this.resizeInnerContainer()
      this.clearInnerContainer()
      this.drawQubitCircles()
      this.dispatchVisibilityChangedEvent()
    }
  }

  private updateQubitCircleSize(qubitCount: number): void {
    switch (qubitCount) {
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
        throw new DetailedError('unsupported qubit count', qubitCount)
    }
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
        if (this.vertical) {
          this.rows = 8
          this.cols = 16
        } else {
          this.rows = 4
          this.cols = 32
        }
        break
      }
      case 8: {
        if (this.vertical) {
          this.rows = 16
          this.cols = 16
        } else {
          this.rows = 8
          this.cols = 32
        }
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
    fastdom.mutate(() => {
      for (const each of this.qubitCircles) {
        const ketStr = each.getAttribute('data-ket')
        Util.notNull(ketStr)

        const ket = parseInt(ketStr)
        const amplitude = amplitudes[ket]
        if (amplitude === undefined) continue

        // magnitude
        const magnitude = Math.floor(amplitude.abs() * 100000) / 100000
        const magnitudeEl = each.children.item(0) as HTMLElement
        Util.notNull(magnitudeEl)

        // phase
        const phaseDeg = (amplitude.phase() / Math.PI) * 180
        const phaseEl = each.children.item(1) as HTMLElement
        Util.notNull(phaseEl)

        let cssPhaseDeg = Math.trunc(phaseDeg)
        if (cssPhaseDeg < 0) cssPhaseDeg = 360 + cssPhaseDeg

        each.setAttribute('data-amplitude-real', amplitude.real.toString())
        each.setAttribute('data-amplitude-imag', amplitude.imag.toString())

        if (magnitude === 0) {
          each.classList.add('magnitude-0')
        } else {
          each.classList.remove('magnitude-0')
        }
        magnitudeEl.style.setProperty('--magnitude', magnitude.toString())

        if (this.coloredPhase) {
          each.classList.add('phase-hidden')

          if (magnitude === 0) {
            magnitudeEl.style.setProperty('--magnitude', '0')
          } else {
            magnitudeEl.style.setProperty('--magnitude', '1')
          }

          if (
            (-22.5 <= phaseDeg && phaseDeg < 22.5) ||
            (337.5 <= phaseDeg && phaseDeg <= 360) ||
            (-337.5 < phaseDeg && phaseDeg <= -360)
          ) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(168 85 247)') // purple-500
          } else if ((22.5 <= phaseDeg && phaseDeg < 67.5) || (-337.5 <= phaseDeg && phaseDeg < -292.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(236 72 153)') // pink-500
          } else if ((67.5 <= phaseDeg && phaseDeg < 112.5) || (-292.5 <= phaseDeg && phaseDeg < -247.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(239 68 68)') // red-500
          } else if ((112.5 <= phaseDeg && phaseDeg < 157.5) || (-247.5 <= phaseDeg && phaseDeg < -202.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(234 179 8)') // yellow-500
          } else if ((157.5 <= phaseDeg && phaseDeg < 202.5) || (-202.5 <= phaseDeg && phaseDeg < -157.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(132 204 22)') // lime-500
          } else if ((202.5 <= phaseDeg && phaseDeg < 247.5) || (-157.5 <= phaseDeg && phaseDeg < -112.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(34 197 94)') // green-500
          } else if ((247.5 <= phaseDeg && phaseDeg < 292.5) || (-112.5 <= phaseDeg && phaseDeg < -67.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(6 182 212)') // cyan-500
          } else if ((292.5 <= phaseDeg && phaseDeg < 337.5) || (-67.5 <= phaseDeg && phaseDeg < -22.5)) {
            magnitudeEl.style.setProperty('--magnitude-color', 'rgb(99 102 241)') // indigo-500
          } else {
            magnitudeEl.style.removeProperty('--magnitude-color')
          }
        } else {
          magnitudeEl.style.setProperty('--magnitude-color', 'rgb(14 165 233)')
        }

        phaseEl.style.setProperty('--phase', `-${cssPhaseDeg.toString()}deg`)
      }
    })
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.startLayoutOrientationChangeObserver()
    this.resizeWindow()
    this.resizeInnerContainer()
    this.drawNewlyVisibleQubuitCircles()

    this.dispatchEvent(new CustomEvent('circle-notation-init', {bubbles: true}))
  }

  private startLayoutOrientationChangeObserver(): void {
    this.detectViewportOrientation()
    const resizeObserver = new ResizeObserver(this.detectViewportOrientation.bind(this))
    resizeObserver.observe(document.body)
  }

  private detectViewportOrientation(): void {
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
      this.updateQubitCircleSize(this.qubitCount)
      this.updateDimension(this.qubitCount)
      this.resizeWindow()
      this.clearInnerContainer()
      this.drawQubitCircles()
      this.dispatchVisibilityChangedEvent()
    }
  }

  update(): void {
    render(
      html`<style>
          circle-notation {
            --magnitude: 0;
            --magnitude-color: rgb(14 165 233); /* sky-500 */
            --phase: 0deg;
          }

          /* border */

          .qubit-circle {
            position: absolute;
            border-color: rgb(226 232 240); /* slate-200 */
            border-radius: 9999px;
            border-style: solid;
            box-sizing: border-box;
          }

          .qubit-circle:hover,
          .qubit-circle:not(.magnitude-0):hover {
            border-color: rgb(220 38 38); /* red-600 */
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

          .qubit-circle:hover .qubit-circle__magnitude {
            background-color: rgb(249 115 22); /* orange-500 */
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
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            transform-origin: bottom;
            transform: rotate(var(--phase));
          }

          .qubit-circle.magnitude-0 .qubit-circle__phase,
          .qubit-circle.phase-hidden .qubit-circle__phase {
            display: none;
          }
        </style>

        <slot></slot>

        <div
          class="circle-notation__window"
          data-target="circle-notation.window"
          data-action="scroll:circle-notation#drawNewlyVisibleQubuitCircles scroll:circle-notation#removeInvisibleQubitCircles"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px; overflow: auto;"
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
    return this.rows * this.qubitCircleSizePx + (this.rows - 1) * this.gap + this.paddingY * 2
  }

  private get innerWidth(): number {
    return this.cols * this.qubitCircleSizePx + (this.cols - 1) * this.gap + this.paddingX * 2
  }

  private clearInnerContainer(): void {
    if (this.innerContainer === undefined) return

    this.innerContainer.textContent = ''
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
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 10: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 11: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 12: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 13: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 14: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 15: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      case 16: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16 + this.gap * 15
        } else {
          return this.qubitCircleSizePx * 32 + this.gap * 31
        }
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get windowHeight(): number {
    const qubitCirclesAreaPlusPaddingHeight = this.qubitCirclesAreaHeight + this.paddingY * 2

    if (this.vertical) {
      const clientHeight = this.clientHeight
      if (this.rows > 4 && clientHeight < qubitCirclesAreaPlusPaddingHeight) {
        return clientHeight
      } else {
        return qubitCirclesAreaPlusPaddingHeight
      }
    } else {
      return qubitCirclesAreaPlusPaddingHeight
    }
  }

  private get windowWidth(): number {
    const qubitCirclesAreaPlusPaddingWidth = this.qubitCirclesAreaWidth + this.paddingX * 2

    if (this.vertical) {
      const clientWidth = this.clientWidth
      if (this.cols > 16 && clientWidth < qubitCirclesAreaPlusPaddingWidth) {
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
          return 18
        } else {
          return 32
        }
      }
      case 7: {
        return 18
      }
      case 8: {
        return 18
      }
      case 9: {
        return 18
      }
      case 10: {
        return 18
      }
      case 11: {
        return 18
      }
      case 12: {
        return 18
      }
      case 13: {
        return 18
      }
      case 14: {
        return 18
      }
      case 15: {
        return 18
      }
      case 16: {
        return 18
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private drawQubitCircles(): void {
    if (this.window === undefined) return

    const positions: Array<{col: number; row: number}> = []

    fastdom.measure(() => {
      this.lastColStartIndex = this.visibleColStartIndex
      this.lastColEndIndex = this.visibleColEndIndex
      this.lastRowStartIndex = this.visibleRowStartIndex
      this.lastRowEndIndex = this.visibleRowEndIndex

      for (let row = this.lastRowStartIndex; row <= this.lastRowEndIndex; row++) {
        for (let col = this.lastColStartIndex; col <= this.lastColEndIndex; col++) {
          positions.push({col, row})
        }
      }
    })

    fastdom.mutate(() => {
      const fragment = document.createDocumentFragment()
      for (const each of this.allQubitCircleElements(positions)) {
        fragment.appendChild(each)
      }

      this.innerContainer.appendChild(fragment)
    })
  }

  @debounce(10)
  drawNewlyVisibleQubuitCircles(): void {
    if (this.window === undefined) return

    let colStartIndex
    let colEndIndex
    let rowStartIndex
    let rowEndIndex
    const positions: Array<{col: number; row: number}> = []

    fastdom.measure(() => {
      colStartIndex = this.overscanColStartIndex
      colEndIndex = this.overscanColEndIndex
      rowStartIndex = this.overscanRowStartIndex
      rowEndIndex = this.overscanRowEndIndex

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
            positions.push({col, row})
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
      for (const each of this.allQubitCircleElements(positions)) {
        fragment.appendChild(each)
      }

      this.innerContainer.appendChild(fragment)

      if (positions.length !== 0) {
        this.dispatchVisibilityChangedEvent()
      }
    })
  }

  @debounce(100)
  removeInvisibleQubitCircles(): void {
    let colStartIndex: number
    let colEndIndex: number
    let rowStartIndex: number
    let rowEndIndex: number

    fastdom.measure(() => {
      colStartIndex = this.overscanColStartIndex
      colEndIndex = this.overscanColEndIndex
      rowStartIndex = this.overscanRowStartIndex
      rowEndIndex = this.overscanRowEndIndex
    })

    fastdom.mutate(() => {
      for (const each of this.qubitCircles) {
        const dataCol = each.getAttribute('data-col')
        const dataRow = each.getAttribute('data-row')
        Util.notNull(dataCol)
        Util.notNull(dataRow)
        const col = parseInt(dataCol)
        const row = parseInt(dataRow)

        if (col < colStartIndex || colEndIndex < col || row < rowStartIndex || rowEndIndex < row) {
          const popup = (each as ReferenceElement)._tippy as Instance
          if (popup !== undefined) popup.destroy()
          each.remove()
        }
      }
    })
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
    qubitCircle.style.setProperty('position', 'absolute')
    qubitCircle.style.setProperty('top', `${top}px`)
    qubitCircle.style.setProperty('left', `${left}px`)
    qubitCircle.style.setProperty('width', `${this.qubitCircleSizePx}px`)
    qubitCircle.style.setProperty('height', `${this.qubitCircleSizePx}px`)
    qubitCircle.style.setProperty('border-width', `${this.qubitCircleLineWidth}px`)

    const magnitude = document.createElement('div')
    magnitude.className = 'qubit-circle__magnitude'
    magnitude.style.setProperty('--magnitude', '0')

    const phase = document.createElement('div')
    phase.className = 'qubit-circle__phase'
    phase.style.setProperty('width', `${this.qubitCircleLineWidth}px`)

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
    const index = this.visibleColStartIndex - this.overscan

    if (index < 0) {
      return 0
    } else {
      return index
    }
  }

  private get overscanColEndIndex(): number {
    const index = this.visibleColEndIndex + this.overscan

    if (index > this.cols - 1) {
      return this.cols - 1
    } else {
      return index
    }
  }

  private get overscanRowStartIndex(): number {
    const index = this.visibleRowStartIndex - this.overscan

    if (index < 0) {
      return 0
    } else {
      return index
    }
  }

  private get overscanRowEndIndex(): number {
    const index = this.visibleRowEndIndex + this.overscan

    if (index > this.rows - 1) {
      return this.rows - 1
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

    return Math.min(this.cols - 1, index)
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

    return Math.min(this.rows - 1, index)
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

  showQubitCirclePopup(event: MouseEvent): void {
    const qubitCircle = event.target as HTMLElement
    Util.need(qubitCircle.classList.contains('qubit-circle'), 'not a qubit-circle')

    const popup = tippy(qubitCircle, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      theme: 'qni'
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

    const ketBinaryEl = this.qubitCirclePopupTemplate.content.querySelector('.ket-binary')
    const ketDecimalEl = this.qubitCirclePopupTemplate.content.querySelector('.ket-decimal')
    const amplitudeRealEl = this.qubitCirclePopupTemplate.content.querySelector('.amplitude-real')
    const amplitudeImagEl = this.qubitCirclePopupTemplate.content.querySelector('.amplitude-imag')
    const probabilityEl = this.qubitCirclePopupTemplate.content.querySelector('.probability')
    const phaseEl = this.qubitCirclePopupTemplate.content.querySelector('.phase')

    if (ketBinaryEl) {
      ketBinaryEl.textContent = ket.toString(2).padStart(this.qubitCount, '0')
    }

    if (ketDecimalEl) {
      ketDecimalEl.textContent = ket.toString()
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
    tmpDiv.appendChild(this.qubitCirclePopupTemplate.content.cloneNode(true))

    // eslint-disable-next-line github/no-inner-html
    popup.setContent(tmpDiv.innerHTML)
    popup.show()
  }

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
