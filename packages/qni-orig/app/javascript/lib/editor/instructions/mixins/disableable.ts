import { classNameFor } from "lib/base"

export abstract class Disableable {
  public element!: HTMLElement

  get disabled(): boolean {
    return this.element.classList.contains(classNameFor("gate:state:disabled"))
  }

  set disabled(flag: boolean) {
    const className = classNameFor("gate:state:disabled")

    if (flag) {
      this.element.classList.add(className)
    } else {
      this.element.classList.remove(className)
    }
  }
}
