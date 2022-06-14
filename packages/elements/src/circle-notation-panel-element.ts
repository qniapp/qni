import {attr, controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {CircleNotationElement} from './circle-notation-element'

@controller
export class CircleNotationPanelElement extends HTMLElement {
  @attr slideIn = false
  @attr duration = 400
  @attr marginTop = 0
  @attr marginBottom = 0

  @target circleNotation!: CircleNotationElement

  private mobile = false

  connectedCallback(): void {
    this.startViewSizeChangeEventListener()
    const shadowRoot = this.attachShadow({mode: 'open'})

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.addedNodes) {
          const styles = window.getComputedStyle(this)
          this.marginTop = parseFloat(styles.getPropertyValue('margin-top')) || 0
          this.marginBottom = parseFloat(styles.getPropertyValue('margin-bottom')) || 0

          this.prepareSlideInAnimation()
          this.startSlideInAnimation()
        }
      }
    })
    observer.observe(shadowRoot, {childList: true})

    this.renderShadowRoot()
  }

  startBasicCircleNotationMode(): void {
    this.circleNotation.startBasicCircleNotationMode()
  }

  startColorPhaseMode(): void {
    this.circleNotation.startColorPhaseMode()
  }

  private renderShadowRoot(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private startViewSizeChangeEventListener(): void {
    const mobileMediaQuery = window.matchMedia('(max-width: 639px)')
    mobileMediaQuery.addEventListener('change', this.handleViewSizeChange.bind(this))
    this.handleViewSizeChange(mobileMediaQuery)
  }

  private handleViewSizeChange(mobileMediaQuery: MediaQueryList): void {
    this.mobile = mobileMediaQuery.matches
  }

  private prepareSlideInAnimation(): void {
    if (!this.slideIn) return

    if (this.mobile) {
      this.style.top = `-${this.offsetHeight}px`
    } else {
      this.style.bottom = 'auto'
      this.style.top = `${window.innerHeight}px`
    }
  }

  private startSlideInAnimation(): void {
    if (!this.slideIn) return

    if (this.mobile) {
      this.animate(
        [
          {transform: 'translateY(0px)'},
          {transform: `translateY(${this.offsetHeight + 16}px)`},
          {transform: `translateY(${this.offsetHeight}px)`}
        ],
        {
          duration: this.duration,
          fill: 'forwards',
          easing: 'ease-out'
        }
      )
    } else {
      this.animate(
        [
          {transform: 'translateY(0px)'},
          {transform: `translateY(-${this.offsetHeight + this.marginBottom + 16}px)`},
          {transform: `translateY(-${this.offsetHeight + this.marginBottom}px)`}
        ],
        {
          duration: this.duration,
          fill: 'forwards',
          easing: 'ease-out'
        }
      )
    }
  }
}
