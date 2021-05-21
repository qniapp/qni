import { Draggable } from "./mixins"
import { ControlGate, CircuitElement, HadamardGate, NotGate, SwapGate } from "./gates"
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
    this.source?.remove()
    if (this.isDropped) {
      this.remove()
    } else {
      this.moveTo(0, 0)
    }
    this.circuitElement.animateJello = false
  }

  remove(): void {
    this.unsetInteract()
    this.element.parentNode?.removeChild(this.element)
  }

  get dropzone(): CircuitDropzone {
    return this.getDropzone() as CircuitDropzone
  }

  get circuitElement(): CircuitElement {
    return CircuitElement.create(this.circuitElementHTMLElement())
  }

  private circuitElementHTMLElement(): HTMLElement | null {
    return this.element.getElementsByClassName("gate").item(0) as HTMLElement
  }
}
