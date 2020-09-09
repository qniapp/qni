import { Controller } from "stimulus"

window.onmessage = (m) => {
  if (m.data.type == "webpackOk") {
    return
  }

  const json = JSON.parse(m.data)
  const event = new CustomEvent("iframeSize")
  event.json = json

  if (json.id.type != "webpackOk") {
    document.getElementById(json.id).dispatchEvent(event)
  }
}

export default class extends Controller {
  static targets = ["loader", "thumbnailContainer", "thumbnail", "iframe"]

  iframeLazyLoad() {
    this.iframeTarget.contentWindow.postMessage(this.element.id, "*")
  }

  iframeSize(event) {
    this.iframeWidth = event.json.width
    this.iframeHeight = event.json.height

    this.resizeIframe()
    this.resizeThumbnail()
    this.hideLoader()
    this.thumbnailContainerTarget.classList.remove("invisible")
    this.masonry.dispatchEvent(new CustomEvent("circuitThumbnailResized"))
  }

  resize() {
    this.resizeIframe()
    this.resizeThumbnail()
    this.masonry.dispatchEvent(new CustomEvent("circuitThumbnailResized"))
  }

  // Private

  hideLoader() {
    this.loaderTarget.classList.add("hidden")
  }

  resizeIframe() {
    this.iframeTarget.style.width = this.iframeWidth + "px"
    this.iframeTarget.style.height = this.iframeHeight + "px"
  }

  resizeThumbnail() {
    if (this.cardBodyWidth < this.iframeWidth) {
      const scale = this.cardBodyWidth / this.iframeWidth
      this.thumbnailContainerTarget.style.width = this.cardBodyWidth + "px"
      this.thumbnailContainerTarget.style.height =
        this.iframeHeight * scale + "px"
      this.thumbnailTarget.style.transform = `scale(${scale},${scale})`
    } else if (this.cardBodyHeight * 2 < this.iframeHeight) {
      this.thumbnailContainerTarget.style.width = this.cardBodyWidth + "px"
      this.thumbnailContainerTarget.style.height = this.iframeHeight / 2 + "px"
      this.thumbnailTarget.style.transform = "scale(0.5,0.5)"
    } else {
      this.thumbnailContainerTarget.style.height = this.iframeHeight + "px"
    }
  }

  // get iframeWidth() {
  //   return (this.originalIframeWidth =
  //     this.originalIframeWidth ||
  //     this.iframeTarget.contentWindow.document.documentElement.scrollWidth)
  // }

  // get iframeHeight() {
  //   return (this.originalIframeHeight =
  //     this.originalIframeHeight ||
  //     this.iframeTarget.contentWindow.document.documentElement.scrollHeight)
  // }

  get cardBodyWidth() {
    return this.element.clientWidth
  }

  get cardBodyHeight() {
    return this.element.clientHeight
  }

  get masonry() {
    return document.getElementById("masonry")
  }
}
