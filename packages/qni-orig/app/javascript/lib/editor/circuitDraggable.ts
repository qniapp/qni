import { CircuitDropzone } from "./circuitDropzone"
import { CircuitElement } from "./gates"
import { Connectable } from "./gates/mixins"
import { Draggable } from "./mixins"
import { Mixin, hasMixin } from "ts-mixer"
import { Util } from "lib/base"

export class CircuitDraggable extends Mixin(Draggable) {
  constructor(element: HTMLElement) {
    super()
    this.element = this.validateElementClassName(
      element,
      "draggable:type:circuit",
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
      new CustomEvent("userReleasedGate", { bubbles: false }),
    )

    this.createSource()
    this.grabbed = true

    const circuitElement = this.circuitElement
    if (hasMixin(circuitElement, Connectable)) {
      circuitElement.disconnectFromLowerBit()
      circuitElement.disconnectFromUpperBit()
    }

    this.moveToGrabbedPosition(event)
  }

  remove(): void {
    this.unsetInteract()
    this.element.parentNode?.removeChild(this.element)
  }

  get dropzone(): CircuitDropzone {
    return this.getDropzone() as CircuitDropzone
  }

  get circuitElement(): CircuitElement {
    return CircuitElement.create(this.element)
  }

  private startDragging(event: Interact.DragEvent) {
    const draggable = new CircuitDraggable(event.target as HTMLElement)
    draggable.dragging = true
  }

  private dragMove(event: Interact.DragEvent) {
    const draggable = new CircuitDraggable(event.target as HTMLElement)
    draggable.move(event.dx, event.dy)
  }

  private endDragging(event: Interact.DragEvent) {
    const draggable = new CircuitDraggable(event.target as HTMLElement)
    draggable.dragging = false
    draggable.source?.remove()
    if (draggable.isDropped) {
      draggable.remove()
    } else {
      draggable.moveTo(0, 0)
    }

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
