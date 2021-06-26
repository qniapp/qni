import { Draggable } from "./mixins"
import { Mixin } from "ts-mixer"
import { PaletteDropzone } from "./paletteDropzone"

export class PaletteDraggable extends Mixin(Draggable) {
  constructor(element: HTMLElement) {
    super()
    this.element = this.validateElementClassName(
      element,
      "draggable:type:palette",
    )
  }

  enableDnd(): void {
    this.setInteract({
      onStart: this.startDragging.bind(this),
      onMove: this.dragMove.bind(this),
      onEnd: this.endDragging.bind(this),
    })
  }

  grab(event: MouseEvent): void {
    this.element.dispatchEvent(
      new CustomEvent("userGrabbingGate", { bubbles: true }),
    )
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)
  }

  get dropzone(): PaletteDropzone {
    return this.getDropzone() as PaletteDropzone
  }

  private startDragging(event: Interact.DragEvent) {
    const draggable = new PaletteDraggable(event.target as HTMLElement)
    draggable.dragging = true
  }

  private dragMove(event: Interact.DragEvent) {
    const draggable = new PaletteDraggable(event.target as HTMLElement)
    draggable.move(event.dx, event.dy)
  }

  private endDragging(event: Interact.DragEvent) {
    const draggable = new PaletteDraggable(event.target as HTMLElement)
    draggable.dragging = false
    draggable.moveTo(0, 0)
    this.element.dispatchEvent(
      new CustomEvent("userReleasedGate", { bubbles: true }),
    )
  }
}
