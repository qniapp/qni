import tippy, {Instance, roundArrow} from 'tippy.js'
import {Controller} from '@hotwired/stimulus'

export default class ClipboardController extends Controller {
  private popup!: Instance

  connect(): void {
    this.popup = tippy(this.element, {
      arrow: roundArrow + roundArrow,
      content: 'Copied to clipboard',
      duration: [0, 250],
      placement: 'bottom',
      theme: 'qni',
      trigger: 'manual'
    })
  }

  disconnect(): void {
    this.popup.destroy()
  }

  copyCurrentUrlToClipboard(): void {
    const url = window.location.href
    const tmpUrlHolder = document.createElement('input')

    document.body.appendChild(tmpUrlHolder)
    tmpUrlHolder.value = url
    tmpUrlHolder.select()
    document.execCommand('copy')
    document.body.removeChild(tmpUrlHolder)

    this.popup.show()
    setTimeout(this.hidePopup.bind(this), 1000)
  }

  private hidePopup(): void {
    this.popup.hide()
  }
}
