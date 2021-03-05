import { attributeNameFor, classNameFor } from "lib/base"

export class Ifable {
  public element!: HTMLElement

  get if(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:if"))
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
