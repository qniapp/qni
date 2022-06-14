import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'

@controller
export class SlideInElement extends HTMLElement {
  @attr direction: 'up' | 'down' | '' = ''
  @attr directionDesktop: 'up' | 'down' | '' = ''
  @attr duration = 800
  @attr marginTop = 0
  @attr marginBottom = 0

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

          this.prepareAnimation()
          this.startAnimation()
        }
      }
    })
    observer.observe(shadowRoot, {childList: true})

    this.renderShadowRoot()
  }

  private startViewSizeChangeEventListener(): void {
    const mobileMediaQuery = window.matchMedia('(max-width: 639px)')
    mobileMediaQuery.addEventListener('change', this.handleViewSizeChange.bind(this))
    this.handleViewSizeChange(mobileMediaQuery)
  }

  private handleViewSizeChange(mobileMediaQuery: MediaQueryList): void {
    this.mobile = mobileMediaQuery.matches
  }

  private prepareAnimation(): void {
    if (this.mobile) {
      if (this.direction === 'up') {
        this.style.bottom = 'auto'
        this.style.top = `${window.innerHeight}px`
      } else if (this.direction === 'down') {
        this.style.top = `-${this.offsetHeight + this.marginTop}px`
      }
    } else {
      if (this.directionDesktop === 'up') {
        this.style.bottom = 'auto'
        this.style.top = `${window.innerHeight}px`
      } else if (this.directionDesktop === 'down') {
        this.style.top = `-${this.offsetHeight}px`
      }
    }
  }

  private startAnimation(): void {
    if (this.mobile) {
      if (this.direction === 'up') {
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
      } else if (this.direction === 'down') {
        this.animate(
          [
            {transform: 'translateY(0px)'},
            {transform: `translateY(${this.offsetHeight + this.marginTop + 16}px)`},
            {transform: `translateY(${this.offsetHeight + this.marginTop}px)`}
          ],
          {
            duration: this.duration,
            fill: 'forwards',
            easing: 'ease-out'
          }
        )
      }
    } else {
      if (this.directionDesktop === 'up') {
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
      } else if (this.directionDesktop === 'down') {
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
      }
    }
  }

  private renderShadowRoot(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }
}
