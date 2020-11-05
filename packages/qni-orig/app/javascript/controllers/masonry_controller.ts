import { Controller } from "stimulus"
import MagicGrid from "magic-grid"
import LazyLoad from "vanilla-lazyload"

export default class MasonryController extends Controller {
  private _magicGrid: MagicGrid | undefined

  connect(): void {
    this._magicGrid = new MagicGrid({
      container: this.element as HTMLElement,
      gutter: 0,
      static: true,
    })
    this.magicGrid.positionItems()

    new LazyLoad({
      callback_loaded: this.iframeLazyLoad.bind(this),
    })
  }

  update(): void {
    this.magicGrid.positionItems()
  }

  private get magicGrid(): MagicGrid {
    if (!this._magicGrid) throw new Error("MagicGrid not initialized")
    return this._magicGrid
  }

  private iframeLazyLoad(el: HTMLElement): void {
    const event = new CustomEvent("iframeLazyLoad")
    el.dispatchEvent(event)
  }
}
