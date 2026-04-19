import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['menu', 'body', 'bodyMd']

  connect() {
    this.beforeUnloadHandler = this.saveScrollPositions.bind(this)

    const bodyMdScroll = sessionStorage.getItem('sidebar-md-scroll')
    if (bodyMdScroll !== null) {
      this.bodyMdTarget.scrollTop = parseInt(bodyMdScroll, 10)
    }

    window.addEventListener('beforeunload', this.beforeUnloadHandler)
  }

  disconnect() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler)
  }

  open() {
    this.menuTarget.classList.remove('hidden')

    const sidebarScroll = sessionStorage.getItem('sidebar-scroll')
    if (sidebarScroll !== null) {
      this.bodyTarget.scrollTop = parseInt(sidebarScroll, 10)
    }
  }

  close() {
    this.menuTarget.classList.add('hidden')
  }

  saveScrollPositions() {
    sessionStorage.setItem('sidebar-scroll', this.bodyTarget.scrollTop)
    sessionStorage.setItem('sidebar-md-scroll', this.bodyMdTarget.scrollTop)
  }
}
