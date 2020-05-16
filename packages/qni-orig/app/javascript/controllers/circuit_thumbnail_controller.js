import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["iframe", "thumbnail"];

  init() {
    this.resizeIframe()
    this.resizeThumbnail()
    this.shuffleController.circuitLoaded(this.element)
  }

  resize() {
    this.resizeIframe()
    this.resizeThumbnail()
  }

  resizeIframe() {
    this.iframeTarget.style.width = this.iframeWidth + "px"
    this.iframeTarget.style.height = this.iframeHeight + "px"
  }

  resizeThumbnail() {
    if (this.cardBodyWidth < this.iframeWidth) {
      const scale = this.cardBodyWidth / this.iframeWidth
      this.element.style.width = this.cardBodyWidth + "px"
      this.element.style.height = this.iframeHeight * scale + "px"
      this.thumbnailTarget.style.transform = `scale(${scale},${scale})`
    } else if (this.cardBodyHeight * 2 < this.iframeHeight) {
      this.element.style.width = this.cardBodyWidth + "px"
      this.element.style.height = this.iframeHeight / 2 + "px"
      this.thumbnailTarget.style.transform = "scale(0.5,0.5)"
    } else {
      this.element.style.height = this.iframeHeight + "px"
    }
  }

  get iframeWidth() {
    return (this._iframeWidth =
      this._iframeWidth ||
      this.iframeTarget.contentWindow.document.documentElement.scrollWidth)
  }

  get iframeHeight() {
    return (this._iframeHeight =
      this._iframeHeight ||
      this.iframeTarget.contentWindow.document.documentElement.scrollHeight)
  }

  get cardBodyWidth() {
    return this.element.parentElement.clientWidth
  }

  get cardBodyHeight() {
    return this.element.parentElement.clientHeight
  }

  get shuffleController() {
    return this.application.getControllerForElementAndIdentifier(
      document.getElementById("shuffle"),
      "shuffle",
    )
  }
}
