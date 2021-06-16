import { Elementable } from "lib/mixins"
import { classNameFor } from "lib/base"
import { Mixin } from "ts-mixer"

export class DraggableSource extends Mixin(Elementable) {
  static create(element: HTMLElement): DraggableSource {
    const draggableSource = new DraggableSource()
    draggableSource.assignElement(element)
    return draggableSource
  }

  assignElement(element: HTMLElement): void {
    this.element = this.validateElementClassName(
      element,
      "draggable:type:source",
    )
  }

  remove(): void {
    this.element.parentNode?.removeChild(this.element)
  }

  clonePlainDraggableElement(): HTMLElement {
    const element = this.element.cloneNode(true) as HTMLElement
    element.classList.remove(classNameFor("draggable:type:source"))
    return element
  }
}
