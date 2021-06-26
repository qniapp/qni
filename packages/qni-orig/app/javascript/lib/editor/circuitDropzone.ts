import "@interactjs/auto-start"
import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/dev-tools"
import interact from "@interactjs/interact"
import { Interactable } from "@interactjs/types"
import { CircuitDraggable } from "./circuitDraggable"
import { CircuitStep } from "./circuitStep"
import { DraggableItem } from "./draggableItem"
import { DraggableShadow } from "./draggableShadow"
import { DropEventHandlers, Dropzonable, Occupiable } from "./mixins"
import { CircuitElement } from "./gates"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"
import { classNameFor } from "lib/base"

export class CircuitDropzone extends Mixin(Dropzonable, Occupiable) {
  private _circuitStep: CircuitStep | undefined

  static create(
    element: HTMLElement | Element | null | undefined,
  ): CircuitDropzone {
    const circuitDropzone = new CircuitDropzone()
    circuitDropzone.assignElement(element)
    return circuitDropzone
  }

  assignElement(element: HTMLElement | Element | null | undefined): void {
    this.element = this.validateElementClassName(
      element,
      "dropzone:type:circuit",
    )
  }

  setInteract(handlers: DropEventHandlers): void {
    this.unsetInteract()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const interactable = interact(this.element) as Interactable
    interactable.dropzone({
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
    new DraggableShadow(draggable, this).create()
  }

  leave(draggable: DraggableItem): void {
    this.active = false
    if (this.element !== draggable.dropzone.element) {
      new DraggableShadow(draggable, this).remove()
    }
  }

  drop(draggable: DraggableItem): HTMLElement | void {
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

    this._circuitStep = CircuitStep.create(el)
    return this._circuitStep
  }

  get bit(): number {
    const allDropzoneEls = this.circuitStep.dropzones.map((each) => {
      return each.element
    })
    return allDropzoneEls.indexOf(this.element)
  }

  get instruction(): CircuitElement {
    const draggable = this.draggable

    if (draggable && !draggable.isGrabbed()) {
      return draggable.circuitElement
    }
    return CircuitElement.create()
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

  connectWithLowerBit(): void {
    this.element.classList.add(classNameFor("connectable:lowerBit"))
  }

  connectWithUpperBit(): void {
    this.element.classList.add(classNameFor("connectable:upperBit"))
  }

  disconnectFromLowerBit(): void {
    this.element.classList.remove(classNameFor("connectable:lowerBit"))
  }

  disconnectFromUpperBit(): void {
    this.element.classList.remove(classNameFor("connectable:upperBit"))
  }

  set wireActive(flag: boolean) {
    const classList = this.element.classList
    const className = classNameFor("wireable:inactive")

    if (flag) {
      classList.remove(className)
    } else {
      classList.add(className)
    }
  }

  set inputWireActive(flag: boolean) {
    const classList = this.element.classList
    const className = classNameFor("wireable:inputInactive")

    this.wireActive = true
    if (flag) {
      classList.remove(className)
    } else {
      classList.add(className)
    }
  }

  set outputWireActive(flag: boolean) {
    const classList = this.element.classList
    const className = classNameFor("wireable:outputInactive")

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
