import { Elementable } from "lib/mixins"
import { applyMixins, classNameFor } from "lib/base"

export class DraggableSource {
  constructor(element: HTMLElement) {
    this.element = this.validateElementClassName(
      element,
      "draggable:type:source",
    )
  }

  remove(): void {
    this.element.parentNode?.removeChild(this.element)
  }

  clonePlainDraggableElement(): Element {
    const element = this.element.cloneNode(true) as Element
    element.classList.remove(classNameFor("draggable:type:source"))
    return element
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DraggableSource extends Elementable {}
applyMixins(DraggableSource, [Elementable])
