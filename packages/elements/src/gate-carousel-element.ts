import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, targets} from '@github/catalyst'
import chevronLeftIcon from '../icon/chevron-left.svg'
import chevronRightIcon from '../icon/chevron-right.svg'

@controller
export class GateCarouselElement extends HTMLElement {
  @attr currentGateSetIndex = 0
  @targets gateSets!: HTMLElement[]
  @targets dots!: HTMLElement[]

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.toggleGateSets()
    this.toggleDots()
  }

  prevGateSet(): void {
    this.currentGateSetIndex--
    if (this.currentGateSetIndex < 0) {
      this.currentGateSetIndex = this.dots.length - 1
    }
    this.toggleGateSets()
    this.toggleDots()
  }

  nextGateSet(): void {
    this.currentGateSetIndex++
    if (this.currentGateSetIndex >= this.dots.length) {
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

  update(): void {
    render(
      html`
        <style>
          button {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            padding: 0;
            border-width: 0px;
            color: rgb(24 24 27);
            background-color: transparent;
          }

          .body {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1.5rem;
          }

          :host([data-targets='gate-carousel.gateSets']).hidden {
            display: none;
          }

          .dot-group {
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

        <button type="button" aria-label="prev gate set" data-action="click:gate-carousel#prevGateSet" style="left: 0">
          ${this.iconHtml(chevronLeftIcon)}
        </button>
        <button type="button" aria-label="next gate set" data-action="click:gate-carousel#nextGateSet" style="right: 0">
          ${this.iconHtml(chevronRightIcon)}
        </button>

        <div class="body">
          <slot></slot>

          <div class="dot-group">${this.dotsHtml()}</div>
        </div>
      `,
      this.shadowRoot!
    )
  }

  private iconHtml(svg: string): TemplateResult {
    return html`${this.iconSvg(svg)}`
  }

  private iconSvg(icon: string): TemplateResult {
    return html(([icon] as unknown) as TemplateStringsArray)
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
