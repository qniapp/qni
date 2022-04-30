import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, target} from '@github/catalyst'

@controller
export class VirtualizedGridElement extends HTMLElement {
  @attr cols = 0
  @attr rows = 0
  @attr itemHeight = 0
  @attr itemWidth = 0
  @attr colStartIndex = -1
  @attr colEndIndex = -1
  @attr rowStartIndex = -1
  @attr rowEndIndex = -1

  @target window!: HTMLElement
  @target innerContainer!: HTMLElement

  get innerHeight(): number {
    return this.cols * this.itemHeight
  }

  get innerWidth(): number {
    return this.rows * this.itemWidth
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.updateItems()
  }

  update(): void {
    render(
      html`<div
          data-target="virtualized-grid.window"
          data-action="scroll:virtualized-grid#updateItems"
          style="width: 100%; height: 100%; overflow: auto;"
        >
          <div
            data-target="virtualized-grid.innerContainer"
            style="position: relative; height: ${this.innerHeight}px; width: ${this.innerWidth}px"
          ></div>
        </div>
        <slot></slot>`,
      this.shadowRoot!
    )
  }

  updateItems(): void {
    const colStartIndex = this.calculateColStartIndex
    const colEndIndex = this.calculateColEndIndex
    const rowStartIndex = this.calculateRowStartIndex
    const rowEndIndex = this.calculateRowEndIndex

    if (
      this.colStartIndex !== colStartIndex ||
      this.colEndIndex !== colEndIndex ||
      this.rowStartIndex !== rowStartIndex ||
      this.rowEndIndex !== rowEndIndex
    ) {
      this.colStartIndex = colStartIndex
      this.colEndIndex = colEndIndex
      this.rowStartIndex = rowStartIndex
      this.rowEndIndex = rowEndIndex

      const data = []
      for (let col = colStartIndex; col <= colEndIndex; col++) {
        for (let row = rowStartIndex; row <= rowEndIndex; row++) {
          data.push({col, row})
        }
      }

      const itemsHtml = (items: Array<{col: number; row: number}>) => html`${items.map(this.itemHtml.bind(this))}`
      render(itemsHtml(data), this.innerContainer)
    }
  }

  private itemHtml(data: {col: number; row: number}): TemplateResult {
    const index = data.col * 10 + data.row
    const top = this.itemHeight * data.col
    const left = this.itemWidth * data.row

    return html`<div
      style="position: absolute; top: ${top}px; left: ${left}px; height: ${this.itemHeight}px; width: ${this
        .itemWidth}px; border-width: 1px; border-color: rgb(0 0 0); border-style: solid; box-sizing: border-box;"
    >
      ${index}
    </div>`
  }

  private get calculateColStartIndex(): number {
    return Math.floor(this.window.scrollTop / this.itemHeight)
  }

  private get calculateColEndIndex(): number {
    return Math.min(
      this.cols - 1, // don't render past the end of the list
      Math.floor((this.window.scrollTop + this.windowHeight) / this.itemHeight)
    )
  }

  private get calculateRowStartIndex(): number {
    return Math.floor(this.window.scrollLeft / this.itemWidth)
  }

  private get calculateRowEndIndex(): number {
    return Math.min(
      this.rows - 1, // don't render past the end of the list
      Math.floor((this.window.scrollLeft + this.windowWidth) / this.itemWidth)
    )
  }

  private get windowHeight(): number {
    return this.window.clientHeight
  }

  private get windowWidth(): number {
    return this.window.clientWidth
  }
}
