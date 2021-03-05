import interact from "interactjs"
import { DropEventHandlers, Dropzonable } from "./mixins"
import { classNameFor } from "lib/base"
import { Mixin } from "ts-mixer"

export class TrashDropzone extends Mixin(Dropzonable) {
  static create(
    element: HTMLElement | Element | null | undefined,
  ): TrashDropzone {
    const trashDropzone = new TrashDropzone()
    trashDropzone.assignElement(element)
    return trashDropzone
  }

  assignElement(element: HTMLElement | Element | null | undefined): void {
    this.element = this.validateElementClassName(element, "dropzone:type:trash")
  }

  setInteract(handlers: DropEventHandlers): void {
    this.unsetInteract()
    interact(this.element as Interact.Target).dropzone({
      accept: `.${classNameFor("draggable")}`,
      overlap: 0.2,
      ondrop: handlers.onDrop,
    })
  }
}
