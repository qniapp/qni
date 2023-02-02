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
  @targets popinAnimationGates!: HTMLElement[]

  connectedCallback(): void {
    window.addEventListener('load', this.startAnimation.bind(this))
    this.startBreakpointChangeEventListener(this.startAnimation.bind(this))

    this.attachShadow({mode: 'open'})
    this.update()
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return
    if (newValue === null) return

    if (name === 'data-current-gate-set-index') {
      this.validateCurrentGateSetIndex()
      this.toggleGateSets()
      this.toggleDots()
    }
  }

  private startBreakpointChangeEventListener(listener: () => void): void {
    const mobileMediaQuery = window.matchMedia('(max-width: 639px)')
    mobileMediaQuery.addEventListener('change', listener)
  }

  private startAnimation(): void {
    this.toggleGateSets()
    this.toggleDots()
    this.removePopinAnimationGates()
    this.enableContentClipping()
    this.makeAllGateSetsInvisible()
    this.createPopinAnimationGates()
    this.animatePopinAnimationGates()
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
            width: 36px;
            height: 100%;
            padding: 0;
            border-width: 0px;
            color: rgb(24 24 27); /* zinc-900 */
            background-color: transparent;
            touch-action: manipulation;
          }

          #prev-button {
            border-top-left-radius: 0.75rem; /* 12px */
            border-bottom-left-radius: 0.75rem; /* 12px */
          }

          #next-button {
            border-top-right-radius: 0.75rem; /* 12px */
            border-bottom-right-radius: 0.75rem; /* 12px */
          }

          #content-clipper {
            position: relative;
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
            id="prev-button"
            type="button"
            aria-label="prev gate set"
            data-action="click:gate-carousel#prevGateSet"
            style="left: 0"
          >
            ${this.iconHtml(chevronLeftIcon)}
          </button>
          <button
            id="next-button"
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

  /* content clipping */

  private enableContentClipping(): void {
    this.contentClipper.style.overflow = 'hidden'
  }

  private disableContentClipping(): void {
    this.contentClipper.style.overflow = 'visible'
  }

  private removePopinAnimationGates(): void {
    for (const popinGate of this.popinAnimationGates) {
      popinGate.parentElement?.removeChild(popinGate)
    }
  }

  /* gate sets */

  prevGateSet(): void {
    if (this.currentGateSetIndex === 0) {
      this.currentGateSetIndex = this.gateSets.length - 1
    } else {
      this.currentGateSetIndex--
    }
  }

  nextGateSet(): void {
    if (this.currentGateSetIndex === this.gateSets.length - 1) {
      this.currentGateSetIndex = 0
    } else {
      this.currentGateSetIndex++
    }
  }

  private validateCurrentGateSetIndex(): void {
    Util.need(this.currentGateSetIndex >= 0, 'data-current-gate-set-index must be >= 0')
    Util.need(
      this.currentGateSetIndex < this.gateSets.length,
      `data-current-gate-set-index must be < ${this.gateSets.length}`
    )
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

  private makeAllGateSetsVisible(): void {
    for (const gateSet of this.gateSets) {
      gateSet.classList.remove('invisible')
    }
  }

  private makeAllGateSetsInvisible(): void {
    for (const gateSet of this.gateSets) {
      gateSet.classList.add('invisible')
    }
  }

  private get activeGateSet(): HTMLElement {
    const gateSet = this.gateSets[this.currentGateSetIndex]
    Util.notNull(gateSet)

    return gateSet
  }

  private get gatesInActiveGateSet(): Operation[] {
    return Array.from(this.activeGateSet.children).map(each => {
      const gate = each.children.item(0)
      Util.need(isOperation(gate), `${gate} must be an operation.`)

      return gate as Operation
    })
  }

  /* pop-in animation gates */

  private createPopinAnimationGates(): void {
    for (const each of this.gatesInActiveGateSet) {
      const gate = each.cloneNode(false) as HTMLElement

      gate.setAttribute('data-targets', 'gate-carousel.popinAnimationGates')
      gate.style.position = 'absolute'
      gate.style.top = `${this.offsetHeight}px`
      gate.style.left = `${each.offsetLeft}px`

      this.append(gate)
    }
  }

  private animatePopinAnimationGates(): void {
    for (const [i, popinGate] of this.popinAnimationGates.entries()) {
      Util.need(i < 4, '#popinGates must be < 4')

      let duration = 0
      if (i === 0) {
        duration = 500
      } else if (i === 1) {
        duration = 600
      } else if (i === 2) {
        duration = 700
      } else if (i === 3) {
        duration = 800
      }

      const animation = popinGate.animate(
        [
          {transform: 'translateY(0px)', offset: 0},
          {transform: 'translateY(0px)', offset: 0.2},
          {transform: 'translateY(-88px)', offset: 0.6},
          {transform: 'translateY(-72px)', offset: 1}
        ],
        {
          duration,
          fill: 'forwards',
          easing: 'ease-out'
        }
      )

      animation.onfinish = () => {
        if (popinGate === this.popinAnimationGates[this.popinAnimationGates.length - 1]) {
          this.removePopinAnimationGates()
          this.makeAllGateSetsVisible()
          this.disableContentClipping()
        }
      }
    }
  }

  /* dots */

  private toggleDots(): void {
    for (const [i, dot] of this.dots.entries()) {
      if (i === this.currentGateSetIndex) {
        dot.classList.add('dot--active')
      } else {
        dot.classList.remove('dot--active')
      }
    }
  }
}
