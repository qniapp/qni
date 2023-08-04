import {Controller} from '@hotwired/stimulus'
import {Util} from '@qni/common'

export default class ShareController extends Controller {
  static values = {
    defaultTitle: String,
    circuitUrl: String,
  }

  static targets = ['modal', 'circuitTitleInput', 'urlText']

  declare defaultTitleValue: string
  declare circuitUrlValue: string
  declare modalTarget: HTMLElement
  declare circuitTitleInputTarget: HTMLInputElement
  declare urlTextTarget: HTMLElement

  openModal(): void {
    this.modalTarget.classList.remove('hidden')
    this.initCircuitTitleInput()
    this.updateUrlText()
  }

  closeModal(): void {
    this.modalTarget.classList.add('hidden')
  }

  update(): void {
    const newTitle = this.circuitTitleInputTarget.value
    const res = Util.safeJsonParse(Util.urlJson)

    let jsonData = null
    if (res.isOk()) {
      jsonData = res.value
    } else {
      // eslint-disable-next-line no-console
      console.error(res.error.message)
      // eslint-disable-next-line no-console
      console.error(Util.urlJson)
      return
    }

    jsonData.title = newTitle

    this.updateDocumentTitle(newTitle)
    history.pushState('', '', encodeURIComponent(JSON.stringify(jsonData)))
    this.updateUrlText()
  }

  tweet(): void {
    window.open(this.tweetUrl, '_blank')
  }

  private initCircuitTitleInput(): void {
    const res = Util.safeJsonParse(Util.urlJson)
    let title = ''
    if (res.isOk()) {
      title = res.value.title || ''
    } else {
      // eslint-disable-next-line no-console
      console.error(res.error.message)
      // eslint-disable-next-line no-console
      console.error(Util.urlJson)
    }

    this.circuitTitleInputTarget.value = title
    this.circuitTitleInputTarget.focus()
  }

  private updateDocumentTitle(title: string): void {
    if (title === '') {
      document.title = this.defaultTitleValue
    } else {
      document.title = title
    }
  }

  private updateUrlText(): void {
    this.urlTextTarget.textContent = location.toString()
  }

  private get tweetUrl(): string {
    const hashtagsParam = 'hashtags=qni'
    const urlParam = `url=${encodeURIComponent(window.location.href)}`
    const params = [hashtagsParam, urlParam]
    const res = Util.safeJsonParse(Util.urlJson)

    let title = null
    if (res.isOk()) {
      title = res.value.title
    } else {
      // eslint-disable-next-line no-console
      console.error(res.error.message)
      // eslint-disable-next-line no-console
      console.error(Util.urlJson)
    }

    if (title) {
      const textParam = `text=${encodeURIComponent(title)}`
      params.unshift(textParam)
    }

    return `https://twitter.com/share?${params.join('&')}`
  }
}
