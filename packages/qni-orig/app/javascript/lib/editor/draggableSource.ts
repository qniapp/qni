import { classNameFor } from "lib/base"
import { Elementable } from "lib/mixins"

export class DraggableSource extends Elementable {
  static elementClassName = classNameFor("draggable")

  remove(): void {
    this.removeElement()
  }

  clonePlainDraggableElement(): HTMLElement {
    const element = this.element.cloneNode(true) as HTMLElement
    element.removeAttribute("data-draggable-source")
    return element
  }
}
