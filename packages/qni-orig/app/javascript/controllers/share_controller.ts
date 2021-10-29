import { Controller } from "stimulus"
import { Util } from "lib/base"

export default class ShareController extends Controller {
  static values = {
    defaultTitle: String,
    circuitUrl: String,
  }

  static targets = ["modal", "circuitTitleInput", "urlText"]

  declare defaultTitleValue: string
  declare circuitUrlValue: string
  declare modalTarget: HTMLElement
  declare circuitTitleInputTarget: HTMLInputElement
  declare urlTextTarget: HTMLElement

  openModal(): void {
    this.modalTarget.classList.remove("hidden")
    this.initCircuitTitleInput()
    this.updateUrlText()
  }

  closeModal(): void {
    this.modalTarget.classList.add("hidden")
  }

  update(): void {
    const newTitle = this.circuitTitleInputTarget.value
    const jsonData = JSON.parse(Util.urlJson)
    jsonData.title = newTitle

    this.updateDocumentTitle(newTitle)
    Util.updateUrlJson(JSON.stringify(jsonData))
    this.updateUrlText()
  }

  tweet(): void {
    window.open(this.tweetUrl, "_blank")
  }

  private initCircuitTitleInput(): void {
    const jsonData = JSON.parse(Util.urlJson)
    this.circuitTitleInputTarget.value = jsonData.title || ""
    this.circuitTitleInputTarget.focus()
  }

  private updateDocumentTitle(title: string): void {
    if (title === "") {
      document.title = this.defaultTitleValue
    } else {
      document.title = title
    }
  }

  private updateUrlText(): void {
    this.urlTextTarget.textContent = location.toString()
  }

  private get tweetUrl(): string {
    const hashtagsParam = "hashtags=qni"
    const urlParam = `url=${encodeURIComponent(window.location.href)}`
    const params = [hashtagsParam, urlParam]
    const title = JSON.parse(Util.urlJson).title

    if (title) {
      const textParam = `text=${encodeURIComponent(title)}`
      params.unshift(textParam)
    }

    return `https://twitter.com/share?${params.join("&")}`
  }
}
