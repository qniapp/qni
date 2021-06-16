import { Draggable } from "./mixins"
import { Mixin } from "ts-mixer"
import { PaletteDropzone } from "./paletteDropzone"

export class PaletteDraggable extends Mixin(Draggable) {
  static create(
    element: HTMLElement | Element | null | undefined,
  ): PaletteDraggable {
    const paletteDraggable = new PaletteDraggable()
    paletteDraggable.assignElement(element)
    return paletteDraggable
  }

  assignElement(element: HTMLElement | Element | null | undefined): void {
    this.element = this.validateElementClassName(
      element,
      "draggable:type:palette",
    )
  }

  grab(event: MouseEvent): void {
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)
  }

  mouseUp(): void {
    this.moveTo(0, 0)
    this.grabbed = false
  }

  start(): void {
    this.dragging = true
  }

  end(): void {
    this.dragging = false
    this.moveTo(0, 0)
  }

  get dropzone(): PaletteDropzone {
    return this.getDropzone() as PaletteDropzone
  }
}
