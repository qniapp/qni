import { CircuitDropzone } from "./circuitDropzone"
import { Draggable } from "./draggable"
import { Instruction } from "lib/instruction"
import { classNameFor } from "lib/base"

export class CircuitDraggable extends Draggable {
  static elementClassName = classNameFor("draggable:type:circuit")

  grab(event: MouseEvent): void {
    this.simulatorElement.dispatchEvent(
      new CustomEvent("userReleasedGate", { bubbles: false }),
    )

    this.createSource()
    this.grabbed = true

    const instruction = this.instruction
    if (
      "disconnectFromLowerBit" in instruction &&
      "disconnectFromUpperBit" in instruction
    ) {
      instruction.disconnectFromLowerBit()
      instruction.disconnectFromUpperBit()
    }

    this.moveToGrabbedPosition(event)
  }

  remove(): void {
    this.unsetInteract()
    this.removeElement()
  }

  get dropzone(): CircuitDropzone {
    return this.getDropzone() as CircuitDropzone
  }

  get instruction(): Instruction {
    return Instruction.create(this.element)
  }

  protected startDragging(event: Interact.DragEvent): void {
    const draggable = new CircuitDraggable(event.target)
    draggable.dragging = true
  }

  protected dragMove(event: Interact.DragEvent): void {
    const draggable = new CircuitDraggable(event.target)
    draggable.move(event.dx, event.dy)
  }

  protected endDragging(event: Interact.DragEvent): void {
    const draggable = new CircuitDraggable(event.target)
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
}
