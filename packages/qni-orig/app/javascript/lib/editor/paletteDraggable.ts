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

  mouseDown(event: MouseEvent): void {
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)
    this.circuitElement.animateJello = true
  }

  mouseUp(): void {
    this.moveTo(0, 0)
    this.grabbed = false
    this.circuitElement.animateJello = false
  }

  start(): void {
    this.dragging = true
  }

  end(): void {
    this.dragging = false
    this.moveTo(0, 0)
    this.circuitElement.animateJello = false
  }

  get dropzone(): PaletteDropzone {
    return this.getDropzone() as PaletteDropzone
  }
}
