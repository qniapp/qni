import { applyMixins } from "lib/base"
import { Draggable } from "./mixins"
import { PaletteDropzone } from "./paletteDropzone"

export class PaletteDraggable {
  constructor(element: HTMLElement | Element | null | undefined) {
    this.element = this.validateElementClassName(
      element,
      "draggable:type:palette",
    )
  }

  mouseDown(event: MouseEvent): void {
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)
    this.instruction.animateJello = true
  }

  mouseUp(): void {
    this.moveTo(0, 0)
    this.grabbed = false
    this.instruction.animateJello = false
  }

  start(): void {
    this.dragging = true
  }

  end(): void {
    this.dragging = false
    this.moveTo(0, 0)
    this.instruction.animateJello = false
  }

  get dropzone(): PaletteDropzone {
    return this.getDropzone() as PaletteDropzone
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaletteDraggable extends Draggable {}
applyMixins(PaletteDraggable, [Draggable])
