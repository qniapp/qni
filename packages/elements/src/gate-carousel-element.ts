import {Operation, isOperation} from './operation'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, target, targets} from '@github/catalyst'
import {Util} from '@qni/common'
import chevronLeftIcon from '../icon/chevron-left.svg'
import chevronRightIcon from '../icon/chevron-right.svg'

@controller
export class GateCarouselElement extends HTMLElement {
  @attr currentGateSetIndex = 0
  @target contentClipper!: HTMLElement
  @targets gateSets!: HTMLElement[]
  @targets dots!: HTMLElement[]

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.validateCurrentGateSetIndex()
    this.toggleGateSets()
    this.toggleDots()
    this.startPopinAnimation()
  }

  private startPopinAnimation(): void {
    let poppedinGateCount = 0
    const popinGates: HTMLElement[] = []

    this.addEventListener('animationend', event => {
      if (isOperation(event.target)) {
        poppedinGateCount++
      }

      if (poppedinGateCount === popinGates.length) {
        for (const popinGate of popinGates) {
          popinGate.parentElement?.removeChild(popinGate)
        }
        for (const gateSet of this.gateSets) {
          gateSet.classList.remove('invisible')
        }
        this.contentClipper.style.overflow = 'visible'
      }
    })

    const originalTop = window.innerHeight - this.getBoundingClientRect().top
    this.style.top = `${window.innerHeight}px`
    this.style.bottom = 'auto'
    this.contentClipper.style.overflow = 'hidden'

    for (const gate of this.gatesInActiveGateSet) {
      const popinGate = gate.cloneNode(false) as HTMLElement

      popinGate.style.position = 'fixed'
      popinGate.style.top = `${originalTop}px`
      popinGate.style.left = `${gate.offsetLeft}px`

      this.append(popinGate)
      popinGates.push(popinGate)
    }

    this.classList.add('animate')
    for (const [i, popinGate] of popinGates.entries()) {
      popinGate.classList.add(`animate-gate${i}`)
    }
  }

  private get gatesInActiveGateSet(): Operation[] {
    return Array.from(this.activeGateSet.children).map(each => {
      const gate = each.children.item(0)
      Util.need(isOperation(gate), `${gate} must be an operation.`)

      return gate as Operation
    })
  }

  private get activeGateSet(): HTMLElement {
    const gateSet = this.gateSets[this.currentGateSetIndex]
    Util.notNull(gateSet)

    return gateSet
  }

  private validateCurrentGateSetIndex(): void {
    Util.need(this.currentGateSetIndex >= 0, 'data-current-gate-set-index must be >= 0')
    Util.need(
      this.currentGateSetIndex < this.gateSets.length,
      `data-current-gate-set-index must be < ${this.gateSets.length}`
    )
  }

  prevGateSet(): void {
    this.currentGateSetIndex--
    if (this.currentGateSetIndex < 0) {
      this.currentGateSetIndex = this.gateSets.length - 1
    }
    this.toggleGateSets()
    this.toggleDots()
  }

  nextGateSet(): void {
    this.currentGateSetIndex++
    if (this.currentGateSetIndex >= this.gateSets.length) {
      this.currentGateSetIndex = 0
    }
    this.toggleGateSets()
    this.toggleDots()
  }

  private toggleDots(): void {
    for (const [i, dot] of this.dots.entries()) {
      if (i === this.currentGateSetIndex) {
        dot.classList.add('dot--active')
      } else {
        dot.classList.remove('dot--active')
      }
    }
  }

  private toggleGateSets(): void {
    for (const [i, gateSet] of this.gateSets.entries()) {
      if (i === this.currentGateSetIndex) {
        gateSet.classList.remove('hidden')
      } else {
        gateSet.classList.add('hidden')
      }
    }
  }

  private update(): void {
    render(
      html`
        <style>
          button {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 100%;
            padding: 0;
            border-width: 0px;
            color: rgb(24 24 27); /* zinc-900 */
            background-color: transparent;
            touch-action: manipulation;
          }

          #content-clipper {
            width: 100%;
            height: 100%;
          }

          #body {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1.5rem;
          }

          :host([data-targets='gate-carousel.gateSets']).hidden {
            display: none;
          }

          #dot-group {
            display: flex;
            flex-direction: row;
            column-gap: 0.5rem;
            padding: 0.5rem;
          }

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 9999px;
            background-color: rgb(228 228 231); /* zinc-200 */
          }

          .dot--active {
            background-color: rgb(14 165 233); /* sky-500 */
          }
        </style>

        <div id="content-clipper" data-target="gate-carousel.contentClipper">
          <button
            type="button"
            aria-label="prev gate set"
            data-action="click:gate-carousel#prevGateSet"
            style="left: 0"
          >
            ${this.iconHtml(chevronLeftIcon)}
          </button>
          <button
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(chevronRightIcon)}
          </button>

          <div id="body">
            <slot></slot>

            <div id="dot-group">${this.dotsHtml()}</div>
          </div>
        </div>
      `,
      this.shadowRoot!
    )
  }

  private iconHtml(svg: string): TemplateResult {
    return html(([svg] as unknown) as TemplateStringsArray)
  }

  private dotsHtml(): TemplateResult {
    let dots = html``

    for (let i = 0; i < this.gateSets.length; i++) {
      dots = html`${dots}
        <div class="dot" data-targets="gate-carousel.dots"></div>`
    }
    return dots
  }
}
