import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'

@controller
export class VirtualizedListElement extends HTMLElement {
  @attr numItems = 0
  @attr itemHeight = 40
  @attr windowHeight = 128
  @attr currentStartIndex = -1
  @attr currentEndIndex = -1

  get innerHeight(): number {
    return this.numItems * this.itemHeight
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    const startIndex = this.startIndex
    const endIndex = this.endIndex

    if (this.currentStartIndex !== startIndex || this.currentEndIndex !== endIndex) {
      this.currentStartIndex = startIndex
      this.currentEndIndex = endIndex

      let itemsHtml = html``
      for (let i = startIndex; i <= endIndex; i++) {
        itemsHtml = html`${itemsHtml}${this.itemHtml(i)}`
      }

      render(
        html`<div style="position: relative; height: ${this.innerHeight}px">${itemsHtml}<slot></slot></div>`,
        this.shadowRoot!
      )
    }
  }

  private itemHtml(index: number): TemplateResult {
    const top = this.itemHeight * index
    return html`<div style="position: absolute; top: ${top}px; height: ${this.itemHeight}px; width: 100%">
      ${index}
    </div>`
  }

  private get startIndex(): number {
    return Math.floor(this.scrollTop / this.itemHeight)
  }

  private get endIndex(): number {
    return Math.min(
      this.numItems - 1, // don't render past the end of the list
      Math.floor((this.scrollTop + this.windowHeight) / this.itemHeight)
    )
  }
}
