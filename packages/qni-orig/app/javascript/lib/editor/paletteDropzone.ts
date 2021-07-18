import { classNameFor } from "lib/base"
import { Elementable } from "lib/mixins"
import {
  DropEventHandlers,
  DndableMixin,
  DropzonableMixin,
  OccupiableMixin,
} from "./mixins"

export class PaletteDropzone extends DropzonableMixin(
  OccupiableMixin(DndableMixin(Elementable)),
) {
  static elementClassName = classNameFor("dropzone:type:palette")

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setInteract(_handlers: DropEventHandlers): void {}
}
