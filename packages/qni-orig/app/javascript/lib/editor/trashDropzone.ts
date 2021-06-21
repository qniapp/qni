import "@interactjs/auto-start"
import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/dev-tools"
import interact from "@interactjs/interact"
import { Interactable } from "@interactjs/types"
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const interactable = interact(this.element) as Interactable
    interactable.dropzone({
      accept: `.${classNameFor("draggable")}`,
      overlap: 0.2,
      ondrop: handlers.onDrop,
    })
  }
}
