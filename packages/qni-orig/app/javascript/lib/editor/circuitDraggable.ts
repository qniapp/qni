import { Draggable } from "./mixins"
import {
  ControlGate,
  CircuitElement,
  HadamardGate,
  NotGate,
  SwapGate,
} from "./gates"
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

  grab(event: MouseEvent): void {
    this.createSource()
    this.grabbed = true
    this.moveToGrabbedPosition(event)

    const circuitElement = this.circuitElement
    if (
      circuitElement instanceof ControlGate ||
      circuitElement instanceof NotGate ||
      circuitElement instanceof HadamardGate ||
      circuitElement instanceof SwapGate
    ) {
      circuitElement.disconnectFromLowerBit()
      circuitElement.disconnectFromUpperBit()
    }
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
    this.source?.remove()
    if (this.isDropped) {
      this.remove()
    } else {
      this.moveTo(0, 0)
    }
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
}
