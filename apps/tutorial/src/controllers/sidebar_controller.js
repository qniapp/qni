import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['menu', 'body', 'bodyMd', 'opener']

  connect() {
    this.beforeUnloadHandler = this.saveScrollPositions.bind(this)
    this.media = window.matchMedia('(min-width: 768px)')
    this.resizeHandler = () => {
      if (this.media.matches) this.close()
    }
    const openChapters = (sessionStorage.getItem('sidebar-open-chapters') || '').split('\n')
    for (const body of [this.bodyTarget, this.bodyMdTarget]) {
      for (const chapter of body.querySelectorAll('details')) {
        if (openChapters.includes(chapter.querySelector('summary').textContent.trim()))
          chapter.open = true
      }
    }
    const bodyMdScroll = sessionStorage.getItem('sidebar-md-scroll')
    if (bodyMdScroll !== null) this.bodyMdTarget.scrollTop = parseInt(bodyMdScroll, 10)
    window.addEventListener('beforeunload', this.beforeUnloadHandler)
    this.media.addEventListener('change', this.resizeHandler)
  }

  disconnect() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler)
    this.media.removeEventListener('change', this.resizeHandler)
    this.close()
  }

  open() {
    this.menuTarget.showModal()
    this.openerTarget.setAttribute('aria-expanded', 'true')
    const sidebarScroll = sessionStorage.getItem('sidebar-scroll')
    if (sidebarScroll !== null) this.bodyTarget.scrollTop = parseInt(sidebarScroll, 10)
  }

  close() {
    if (this.menuTarget.open) {
      this.saveScrollPositions()
      this.menuTarget.close()
    }
  }

  closed() {
    this.openerTarget.setAttribute('aria-expanded', 'false')
  }

  trapFocus(event) {
    if (event.key !== 'Tab') return
    const controls = Array.from(
      this.menuTarget.querySelectorAll('button, summary, a[href]')
    ).filter((element) => element.getClientRects().length > 0)
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  backdrop(event) {
    if (event.target !== this.menuTarget) return
    const box = this.menuTarget.getBoundingClientRect()
    if (
      event.clientX < box.left ||
      event.clientX >= box.right ||
      event.clientY < box.top ||
      event.clientY >= box.bottom
    )
      this.close()
  }

  saveScrollPositions() {
    const body = this.menuTarget.open ? this.bodyTarget : this.bodyMdTarget
    if (body.getClientRects().length === 0) return
    sessionStorage.setItem(
      'sidebar-open-chapters',
      Array.from(body.querySelectorAll('details[open] > summary'), (summary) =>
        summary.textContent.trim()
      ).join('\n')
    )
    for (const [panel, key] of [
      [this.bodyTarget, 'sidebar-scroll'],
      [this.bodyMdTarget, 'sidebar-md-scroll'],
    ]) {
      if (panel.getClientRects().length > 0) sessionStorage.setItem(key, panel.scrollTop)
    }
  }
}
