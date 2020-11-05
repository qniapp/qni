import { DropEventHandlers, Dropzonable, Occupiable } from "./mixins"
import { applyMixins } from "lib/base"

export class PaletteDropzone {
  constructor(element: HTMLElement | Element | null | undefined) {
    this.element = this.validateElementClassName(
      element,
      "dropzone:type:palette",
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setInteract(_handlers: DropEventHandlers): void {}
}

export interface PaletteDropzone extends Dropzonable, Occupiable {}
applyMixins(PaletteDropzone, [Dropzonable, Occupiable])
