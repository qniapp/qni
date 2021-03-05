import { DropEventHandlers, Dropzonable, Occupiable } from "./mixins"
import { Mixin } from "ts-mixer"

export class PaletteDropzone extends Mixin(Dropzonable, Occupiable) {
  static create(
    element: HTMLElement | Element | null | undefined,
  ): PaletteDropzone {
    const paletteDropzone = new PaletteDropzone()
    paletteDropzone.assignElement(element)
    return paletteDropzone
  }

  assignElement(element: HTMLElement | Element | null | undefined): void {
    this.element = this.validateElementClassName(
      element,
      "dropzone:type:palette",
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setInteract(_handlers: DropEventHandlers): void {}
}
