import interact from "interactjs"
import { CircuitDraggable } from "./circuitDraggable"
import { CircuitStep } from "./circuitStep"
import { DraggableItem } from "./draggableItem"
import { DraggableShadow } from "./draggableShadow"
import { DropEventHandlers, Dropzonable, Occupiable } from "./mixins"
import { Instruction, Readout, Write } from "./instructions"
import { applyMixins, classNameFor } from "lib/base"
import { InternalError } from "lib/error"

export class CircuitDropzone {
  private _circuitStep: CircuitStep | undefined

  constructor(element: HTMLElement | Element | null | undefined) {
    this.element = this.validateElementClassName(
      element,
      "dropzone:type:circuit",
    )
  }

  setInteract(handlers: DropEventHandlers): void {
    this.unsetInteract()
    interact(this.element as Interact.Target).dropzone({
      accept: `.${classNameFor("draggable")}`,
      overlap: "pointer",
      ondragenter: handlers.onDragEnter,
      ondragleave: handlers.onDragLeave,
      ondrop: handlers.onDrop,
      checker: (
        _dragEvent, // related dragmove or dragend
        _event, // Touch, Pointer or Mouse Event
        dropped, // bool default checker result
        _dropzone, // dropzone Interactable
        dropElement, // dropzone element
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _draggable, // draggable Interactable
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _draggableElement,
      ) => {
        return (
          dropped &&
          !dropElement.classList.contains(
            classNameFor("dropzone:state:occupied"),
          )
        )
      },
    })
  }

  enter(draggable: DraggableItem): void {
    this.active = true
    if (draggable.instruction instanceof Write) this.write = true
    if (draggable.instruction instanceof Readout) this.readout = true
    new DraggableShadow(draggable, this).create()
  }

  leave(draggable: DraggableItem): void {
    this.active = false
    if (this.element !== draggable.dropzone.element) {
      new DraggableShadow(draggable, this).remove()
    }
    this.write = false
    this.readout = false
  }

  drop(draggable: DraggableItem): Element | void {
    this.active = false
    this.occupied = true

    // 元の dropzone に戻ったとき
    if (this.element === draggable.dropzone.element) return

    const el = new DraggableShadow(draggable, this).toPlainDraggableElement()
    return new CircuitDraggable(el).element
  }

  get draggable(): CircuitDraggable | null {
    const el = this.draggableElement()

    if (el) return new CircuitDraggable(el)
    return null
  }

  get circuitStep(): CircuitStep {
    if (this._circuitStep) return this._circuitStep

    const className = classNameFor("circuitStep")
    const el = this.element.closest(`.${className}`)
    if (!el) throw new InternalError(`.${className} not found`)

    this._circuitStep = new CircuitStep(el)
    return this._circuitStep
  }

  get bit(): number {
    const allDropzoneEls = this.circuitStep.dropzones.map((each) => {
      return each.element
    })
    return allDropzoneEls.indexOf(this.element)
  }

  get instruction(): Instruction {
    const draggable = this.draggable

    if (draggable && !draggable.isGrabbed()) {
      return draggable.instruction
    }
    return Instruction.create()
  }

  clear(): void {
    this.occupied = false
    this.draggable?.remove()
    this.draggableSource?.remove()
  }

  remove(): void {
    this.unsetInteract()
    this.element.parentNode?.removeChild(this.element)
  }

  set write(flag: boolean) {
    this.setClassName("draggable:type:write", flag)
  }

  set readout(flag: boolean) {
    this.setClassName("draggable:type:readout", flag)
  }

  connectWithLowerBit(): void {
    this.element.classList.add(classNameFor("dropzone:connection:lowerBit"))
  }

  connectWithUpperBit(): void {
    this.element.classList.add(classNameFor("dropzone:connection:upperBit"))
  }

  disconnectFromLowerBit(): void {
    this.element.classList.remove(classNameFor("dropzone:connection:lowerBit"))
  }

  disconnectFromUpperBit(): void {
    this.element.classList.remove(classNameFor("dropzone:connection:upperBit"))
  }

  set wireActive(flag: boolean) {
    const classList = this.element.classList
    const className = classNameFor("dropzone:state:wireInactive")

    if (flag) {
      classList.remove(className)
    } else {
      classList.add(className)
    }
  }

  isInPage(): boolean {
    return this.element === document.body
      ? false
      : document.body.contains(this.element)
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CircuitDropzone extends Dropzonable, Occupiable {}
applyMixins(CircuitDropzone, [Dropzonable, Occupiable])
