import { Controller } from "stimulus"
import MagicGrid from "magic-grid"
import LazyLoad from "vanilla-lazyload"

export default class extends Controller {
  connect() {
    this.magicGrid = new MagicGrid({
      container: this.element,
      gutter: 0,
      static: true,
    })
    this.magicGrid.positionItems()

    this.lazyload = new LazyLoad({
      callback_loaded: this.iframeLazyLoad,
    })
  }

  update() {
    this.magicGrid.positionItems()
  }

  // Private

  iframeLazyLoad(el) {
    const event = new CustomEvent("iframeLazyLoad")
    el.dispatchEvent(event)
  }
}
