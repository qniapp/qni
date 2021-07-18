import "@interactjs/auto-start"
import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/dev-tools"
import interact from "@interactjs/interact"
import { Interactable } from "@interactjs/types"

import {
  DropEventHandlers,
  DndableMixin,
  DropzonableMixin,
  OccupiableMixin,
} from "./mixins"
import { Elementable } from "lib/mixins"
import { classNameFor } from "lib/base"

export class TrashDropzone extends DropzonableMixin(
  OccupiableMixin(DndableMixin(Elementable)),
) {
  static elementClassName = classNameFor("dropzone:type:trash")

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
