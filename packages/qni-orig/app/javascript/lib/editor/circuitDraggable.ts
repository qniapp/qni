import { Draggable } from "./mixins"
import { ControlGate, Instruction, NotGate, SwapGate } from "./gates"
import { CircuitDropzone } from "./circuitDropzone"
import { Mixin } from "ts-mixer"

export class CircuitDraggable extends Mixin(Draggable) {
  static create(
    element: HTMLElement | Element | null | undefined,
  ): CircuitDraggable {
    const circuitDraggable = new CircuitDraggable()
    circuitDraggable.assignElement(element)
    return circuitDraggable
  }

  assignElement(element: HTMLElement | Element | null | undefined): void {
    this.element = this.validateElementClassName(
      element,
      "draggable:type:circuit",
    )
  }

  mouseDown(event: MouseEvent): void {
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)

    const instruction = this.instruction
    if (
      instruction instanceof ControlGate ||
      instruction instanceof NotGate ||
      instruction instanceof SwapGate
    ) {
      instruction.disconnectFromLowerBit()
      instruction.disconnectFromUpperBit()
    }
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
    this.source?.remove()
    if (this.isDropped) {
      this.remove()
    } else {
      this.moveTo(0, 0)
    }
    this.instruction.animateJello = false
  }

  remove(): void {
    this.unsetInteract()
    this.element.parentNode?.removeChild(this.element)
  }

  get dropzone(): CircuitDropzone {
    return this.getDropzone() as CircuitDropzone
  }

  get instruction(): Instruction {
    return Instruction.create(this.instructionElement())
  }

  private instructionElement(): HTMLElement | null {
    return this.element
      .getElementsByClassName("instruction")
      .item(0) as HTMLElement
  }
}
