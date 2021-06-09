import { classNameFor } from "lib/base"

export class RunButton {
  private element: HTMLInputElement

  constructor(element: HTMLInputElement) {
    this.element = element
  }

  set running(value: boolean) {
    if (value) {
      this.element.classList.add(classNameFor("runButton::running"))
      this.element.disabled = true
    } else {
      this.element.classList.remove(classNameFor("runButton::running"))
      this.element.disabled = false
    }
  }
}
