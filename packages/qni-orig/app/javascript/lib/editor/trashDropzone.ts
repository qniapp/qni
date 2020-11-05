import interact from "interactjs"
import { DropEventHandlers, Dropzonable } from "./mixins"
import { applyMixins, classNameFor } from "lib/base"

export class TrashDropzone {
  constructor(element: HTMLElement | Element | null | undefined) {
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TrashDropzone extends Dropzonable {}
applyMixins(TrashDropzone, [Dropzonable])
