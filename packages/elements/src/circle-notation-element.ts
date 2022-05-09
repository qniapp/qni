import {Complex, DetailedError, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import tippy, {Instance, ReferenceElement, roundArrow} from 'tippy.js'
import {debounce} from '@github/mini-throttle/decorators'
import {forceSigned} from './util'

@controller
export class CircleNotationElement extends HTMLElement {
  @attr qubitCount = 1
  @attr qubitCircleSize = 'xl'
  @attr cols = 0
  @attr rows = 0
  @attr paddingX = 0
  @attr paddingY = 0
  @attr colStartIndex = -1
  @attr colEndIndex = -1
  @attr rowStartIndex = -1
  @attr rowEndIndex = -1
  @attr vertical = true
  @attr qubitCirclePopupTemplateId = 'qubit-circle-popup-template'

  @target window!: HTMLElement
  @target innerContainer!: HTMLElement
  @targets qubitCircles!: HTMLElement[]

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-qubit-count') {
      Util.notNull(newValue)

      const qubitCount = parseInt(newValue)
      this.updateQubitCircleSize(qubitCount)
      this.updateDimension(qubitCount)
      this.redrawWindowAndInnerContainer()
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

    // console.log(`cols = ${this.cols}`)
    // console.log(`rows = ${this.rows}`)
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

    this.dispatchEvent(new CustomEvent('circle-notation-init', {bubbles: true}))
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
      this.updateQubitCircleSize(this.qubitCount)
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

          .circle-notation__window {
            overflow: auto;
          }

          .circle-notation__inner-container {
            position: relative;
          }

          .qubit-circle {
            position: absolute;
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-circle-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-qubit-circle-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-qubit-circle-size='base']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-circle-size='sm']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          :host([data-qubit-circle-size='xs']) .qubit-circle {
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

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: rgb(220 38 38); /* red-600 */
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle__magnitude,
          :host([data-qubit-circle-size='lg']) .qubit-circle__magnitude,
          :host([data-qubit-circle-size='base']) .qubit-circle__magnitude {
            border-width: 2px;
          }
          :host([data-qubit-circle-size='sm']) .qubit-circle__magnitude,
          :host([data-qubit-circle-size='xs']) .qubit-circle__magnitude {
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

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: rgb(249 115 22); /* orange-500 */
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

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: rgb(220 38 38); /* red-600 */
          }

          :host([data-qubit-circle-size='xl']) .qubit-circle__phase,
          :host([data-qubit-circle-size='lg']) .qubit-circle__phase,
          :host([data-qubit-circle-size='base']) .qubit-circle__phase {
            border-width: 2px;
          }
          :host([data-qubit-circle-size='sm']) .qubit-circle__phase,
          :host([data-qubit-circle-size='xs']) .qubit-circle__phase {
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

          :host([data-qubit-circle-size='xl']) .qubit-circle__phase::after,
          :host([data-qubit-circle-size='lg']) .qubit-circle__phase::after,
          :host([data-qubit-circle-size='base']) .qubit-circle__phase::after {
            width: 0.125rem; /* 2px */
          }
          :host([data-qubit-circle-size='sm']) .qubit-circle__phase::after,
          :host([data-qubit-circle-size='xs']) .qubit-circle__phase::after {
            width: 1px;
          }
        </style>

        <div
          class="circle-notation__window"
          data-target="circle-notation.window"
          data-action="scroll:circle-notation#maybeRedrawQubitCircles"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px"
        >
          <div
            class="circle-notation__inner-container"
            data-target="circle-notation.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px"
          ></div>
        </div>`,
      this.shadowRoot!
    )
  }

  /* inner container */

  private get innerHeight(): number {
    return this.rows * this.qubitCircleSizePx + this.paddingY * 2
  }

  private get innerWidth(): number {
    return this.cols * this.qubitCircleSizePx + this.paddingX * 2
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
          return this.qubitCircleSizePx * 2
        } else {
          return this.qubitCircleSizePx
        }
      }
      case 4: {
        return this.qubitCircleSizePx * 2
      }
      case 5: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 4
        } else {
          return this.qubitCircleSizePx * 2
        }
      }
      case 6: {
        return this.qubitCircleSizePx * 4
      }
      case 7: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 4
        }
      }
      case 8: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 9: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 10: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 11: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 12: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 13: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 14: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 15: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 16: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 5
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get qubitCirclesAreaWidth(): number {
    switch (this.qubitCount) {
      case 1: {
        return this.qubitCircleSizePx * 2
      }
      case 2: {
        return this.qubitCircleSizePx * 4
      }
      case 3: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 4
        } else {
          return this.qubitCircleSizePx * 8
        }
      }
      case 4: {
        return this.qubitCircleSizePx * 8
      }
      case 5: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 8
        } else {
          return this.qubitCircleSizePx * 16
        }
      }
      case 6: {
        return this.qubitCircleSizePx * 16
      }
      case 7: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 8: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 9: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 10: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 11: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 12: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 13: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 14: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 15: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      case 16: {
        if (this.vertical) {
          return this.qubitCircleSizePx * 16
        } else {
          return this.qubitCircleSizePx * 32
        }
      }
      default:
        throw new DetailedError('unsupported qubit count', this.qubitCount)
    }
  }

  private get windowHeight(): number {
    return this.qubitCirclesAreaHeight + this.paddingY * 2
  }

  private get windowWidth(): number {
    Util.notNull(this.parentElement)
    const qubitCirclesAreaPlusPaddingWidth = this.qubitCirclesAreaWidth + this.paddingX * 2

    if (this.vertical) {
      if (this.cols > 16 && qubitCirclesAreaPlusPaddingWidth < this.parentElement.clientWidth) {
        return this.parentElement.clientWidth
      } else {
        return qubitCirclesAreaPlusPaddingWidth
      }
    } else {
      return qubitCirclesAreaPlusPaddingWidth
    }
  }

  // TODO: redrawWindow → maybeResizeWindow
  // TODO: redrawInnerContainer → maybeResizeInnerContainer
  // TODO: コメントを消す
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
        const popup = (each as ReferenceElement)._tippy as Instance
        if (popup !== undefined) popup.destroy()
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
    const top = this.qubitCircleSizePx * position.row + this.paddingY
    const left = this.qubitCircleSizePx * position.col + this.paddingX

    // <div
    //   class="qubit-circle"
    //   data-ket="${ket}"
    //   data-targets="circle-notation.qubitCircles"
    //   data-action="mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"
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
      return Math.floor((scrollLeft - this.paddingX) / this.qubitCircleSizePx)
    }
  }

  private get calculateColEndIndex(): number {
    const scrollLeft = this.window.scrollLeft

    if (scrollLeft < this.paddingX) {
      return Math.min(
        this.cols - 1,
        Math.floor((this.windowWidth - (this.paddingX - scrollLeft)) / this.qubitCircleSizePx)
      )
    } else {
      return Math.min(
        this.cols - 1,
        Math.floor((this.windowWidth + (scrollLeft - this.paddingX)) / this.qubitCircleSizePx)
      )
    }
  }

  private get calculateRowStartIndex(): number {
    const scrollTop = this.window.scrollTop

    if (scrollTop < this.paddingY) {
      return 0
    } else {
      return Math.floor((scrollTop - this.paddingY) / this.qubitCircleSizePx)
    }
  }

  private get calculateRowEndIndex(): number {
    const scrollTop = this.window.scrollTop

    if (scrollTop < this.paddingY) {
      return Math.min(
        this.rows - 1,
        Math.floor((this.windowHeight - (this.paddingY - scrollTop)) / this.qubitCircleSizePx)
      )
    } else {
      return Math.min(
        this.rows - 1,
        Math.floor((this.windowHeight + (scrollTop - this.paddingY)) / this.qubitCircleSizePx)
      )
    }
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

    const ketBinaryEl = this.qubitCirclePopupTemplate.content.querySelector('.qubit-circle-popup-template__ket-binary')
    const ketDecimalEl = this.qubitCirclePopupTemplate.content.querySelector(
      '.qubit-circle-popup-template__ket-decimal'
    )
    const amplitudeRealEl = this.qubitCirclePopupTemplate.content.querySelector(
      '.qubit-circle-popup-template__amplitude-real'
    )
    const amplitudeImagEl = this.qubitCirclePopupTemplate.content.querySelector(
      '.qubit-circle-popup-template__amplitude-imag'
    )
    const probabilityEl = this.qubitCirclePopupTemplate.content.querySelector(
      '.qubit-circle-popup-template__probability'
    )
    const phaseEl = this.qubitCirclePopupTemplate.content.querySelector('.qubit-circle-popup-template__phase')

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
