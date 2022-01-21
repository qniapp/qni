import {Controller} from '@hotwired/stimulus'

export default class MenuController extends Controller {
  static values = {activeClass: String}
  static targets = ['button', 'dropdown']

  declare activeClassValue: string
  declare buttonTarget: HTMLElement
  declare dropdownTarget: HTMLElement

  connect(): void {
    document.addEventListener('click', this.maybeHideDropdown.bind(this))
  }

  toggleDropdown(): void {
    const isActive = !this.dropdownTarget.classList.toggle('hidden')

    if (isActive) {
      this.buttonTarget.classList.add(this.activeClassValue)
    } else {
      this.buttonTarget.classList.remove(this.activeClassValue)
    }
  }

  private maybeHideDropdown(event: Event): void {
    const clickedEl = event.target as HTMLElement

    if (!this.element.contains(clickedEl)) {
      this.dropdownTarget.classList.add('hidden')
      this.buttonTarget.classList.remove(this.activeClassValue)
    }
  }
}
