import { DraggableItem } from "./draggableItem"
import { Dropzonable } from "./mixins"
import { Instruction } from "./gates"
import { InternalError } from "lib/error"
import { classNameFor } from "lib/base"

export class DraggableShadow {
  private draggable: DraggableItem
  private dropzone: Dropzonable

  constructor(draggable: DraggableItem, dropzone: Dropzonable) {
    this.draggable = draggable
    this.dropzone = dropzone
  }

  create(): void {
    if (this.dropzone.isEqualTo(this.draggable.dropzone)) return

    const draggableSource = this.draggable.source
    if (!draggableSource) {
      throw new InternalError("Draggable source not found")
    }

    const el = draggableSource.clonePlainDraggableElement()
    el.classList.add(classNameFor("draggable:type:shadow"))

    const instructionEl = this.instructionElement(el)
    instructionEl.classList.remove(classNameFor("gate:connection:lowerBit"))
    instructionEl.classList.remove(classNameFor("gate:connection:upperBit"))
    instructionEl.classList.add("animate__animated", "animate__jello")

    this.dropzone.element.insertBefore(el, this.dropzone.element.firstChild)
  }

  remove(): void {
    this.dropzone.element.removeChild(this.element)
  }

  toPlainDraggableElement(): Element {
    const el = this.element
    el.classList.remove(classNameFor("draggable:type:shadow"))
    el.classList.remove(classNameFor("draggable:type:palette"))
    el.classList.add(classNameFor("draggable:type:circuit"))

    this.instruction().jello = false

    return el
  }

  private get element(): Element {
    const className = classNameFor("draggable")
    const el = this.dropzone.element.getElementsByClassName(className).item(0)
    if (!el) throw new InternalError(`.${className} not found`)

    return el
  }

  private instruction(draggableElement = this.element): Instruction {
    return Instruction.create(this.instructionElement(draggableElement))
  }

  private instructionElement(draggableElement = this.element): Element {
    const className = classNameFor("instruction")
    const el = draggableElement.getElementsByClassName(className).item(0)
    if (!el) throw new InternalError(`.${className} not found`)

    return el
  }
}
