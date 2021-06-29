import { Draggable } from "./mixins"
import { Mixin } from "ts-mixer"
import { PaletteDropzone } from "./paletteDropzone"
import { Util } from "lib/base"

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
    this.simulatorElement.dispatchEvent(
      new CustomEvent("userReleasedGate", { bubbles: false }),
    )
  }

  private get simulatorElement(): HTMLElement {
    const el = document.getElementById("simulator")
    Util.notNull(el)

    return el
  }
}
