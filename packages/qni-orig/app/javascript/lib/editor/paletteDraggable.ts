import { classNameFor } from "lib/base"
import { Draggable } from "./draggable"
import { PaletteDropzone } from "./paletteDropzone"

export class PaletteDraggable extends Draggable {
  static elementClassName = classNameFor("draggable:type:palette")

  grab(event: MouseEvent): void {
    this.simulatorElement.dispatchEvent(
      new CustomEvent("userGrabbingGate", { bubbles: false }),
    )
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)
  }

  get dropzone(): PaletteDropzone {
    return this.getDropzone() as PaletteDropzone
  }

  protected startDragging(event: Interact.DragEvent): void {
    const draggable = new PaletteDraggable(event.target)
    draggable.dragging = true
  }

  protected dragMove(event: Interact.DragEvent): void {
    const draggable = new PaletteDraggable(event.target)
    draggable.move(event.dx, event.dy)
  }

  protected endDragging(event: Interact.DragEvent): void {
    const draggable = new PaletteDraggable(event.target)
    draggable.dragging = false
    draggable.moveTo(0, 0)
    this.simulatorElement.dispatchEvent(
      new CustomEvent("userReleasedGate", { bubbles: false }),
    )
  }
}
