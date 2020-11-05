import { Controller } from "stimulus"

type IframeSizeData = { id: string; width: number; height: number }

window.onmessage = (m: MessageEvent) => {
  if (typeof m.data != "string") return

  const data = JSON.parse(m.data) as IframeSizeData
  if (typeof data.id != "string") return
  const event = new CustomEvent<IframeSizeData>("iframeSize", { detail: data })
  const iframe = document.getElementById(data.id)

  if (!iframe) throw new Error(`iframe ${data.id} not found`)
  iframe.dispatchEvent(event)
}

export default class CircuitThumbnailController extends Controller {
  static targets = ["loader", "thumbnailContainer", "thumbnail", "iframe"]
  declare readonly thumbnailContainerTarget: HTMLElement
  declare readonly iframeTarget: HTMLIFrameElement
  declare readonly loaderTarget: HTMLElement
  declare readonly thumbnailTarget: HTMLElement

  private iframeWidth: number | undefined
  private iframeHeight: number | undefined

  iframeLazyLoad(): void {
    if (!this.iframeTarget.contentWindow) {
      throw new Error("contentWindow not found")
    }

    this.iframeTarget.contentWindow.postMessage(this.element.id, "*")
  }

  iframeSize(event: CustomEvent<IframeSizeData>): void {
    this.iframeWidth = event.detail.width
    this.iframeHeight = event.detail.height

    this.resizeIframe(this.iframeWidth, this.iframeHeight)
    this.resizeThumbnail(this.iframeWidth, this.iframeHeight)
    this.hideLoader()
    this.thumbnailContainerTarget.classList.remove("invisible")
    this.masonryEl.dispatchEvent(new CustomEvent("circuitThumbnailResized"))
  }

  resize(): void {
    if (!this.iframeWidth || !this.iframeHeight) return

    this.resizeIframe(this.iframeWidth, this.iframeHeight)
    this.resizeThumbnail(this.iframeWidth, this.iframeHeight)
    this.masonryEl.dispatchEvent(new CustomEvent("circuitThumbnailResized"))
  }

  private hideLoader(): void {
    this.loaderTarget.classList.add("hidden")
  }

  private resizeIframe(width: number, height: number): void {
    this.iframeTarget.style.width = `${width}px`
    this.iframeTarget.style.height = `${height}px`
  }

  private resizeThumbnail(iframeWidth: number, iframeHeight: number): void {
    if (this.cardBodyWidth < iframeWidth) {
      const scale = this.cardBodyWidth / iframeWidth
      this.thumbnailContainerTarget.style.width = `${this.cardBodyWidth}px`
      this.thumbnailContainerTarget.style.height = `${iframeHeight * scale}px`
      this.thumbnailTarget.style.transform = `scale(${scale},${scale})`
    } else if (this.cardBodyHeight * 2 < iframeHeight) {
      this.thumbnailContainerTarget.style.width = `${this.cardBodyWidth}px`
      this.thumbnailContainerTarget.style.height = `${iframeHeight / 2}px`
      this.thumbnailTarget.style.transform = "scale(0.5,0.5)"
    } else {
      this.thumbnailContainerTarget.style.height = `${iframeHeight}px`
    }
  }

  private get cardBodyWidth(): number {
    return this.element.clientWidth
  }

  private get cardBodyHeight(): number {
    return this.element.clientHeight
  }

  private get masonryEl(): HTMLElement {
    const el = document.getElementById("masonry")

    if (!el) throw new Error("Masonry element not found")
    return el
  }
}
