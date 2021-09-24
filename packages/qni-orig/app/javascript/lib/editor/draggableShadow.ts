import { Util, classNameFor } from "lib/base"
import { DraggableItem } from "./draggableItem"
import { Dropzonable } from "./mixins"
import { Instruction } from "lib/operation"

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
    Util.notNull(draggableSource)

    const el = draggableSource.clonePlainDraggableElement()
    this.disableAction(el)
    this.dropzone.element.insertBefore(el, this.dropzone.element.firstChild)

    el.classList.remove(classNameFor("draggable:type:palette"))
    el.setAttribute("data-draggable-shadow", "")
    el.classList.remove(classNameFor("gate:state:disabled"))
    el.classList.remove(classNameFor("connectable:lowerBit"))
    el.classList.remove(classNameFor("connectable:upperBit"))
    if (el.classList.contains(classNameFor("gate:measure"))) {
      el.setAttribute("data-value", "")
    }
  }

  remove(): void {
    this.dropzone.element.removeChild(this.element)
  }

  toPlainDraggableElement(): HTMLElement {
    const el = this.element
    el.removeAttribute("data-draggable-shadow")
    el.classList.remove(classNameFor("draggable:type:palette"))
    el.classList.add(classNameFor("draggable:type:circuit"))
    this.enableAction(el)

    return el
  }

  private get element(): HTMLElement {
    const className = classNameFor("draggable")
    const el = this.dropzone.element.getElementsByClassName(className).item(0)
    Util.notNull(el)

    return el as HTMLElement
  }

  private instruction(draggableElement = this.element): Instruction {
    return Instruction.create(draggableElement)
  }

  private disableAction(element: HTMLElement) {
    const dataAction = element.getAttribute("data-action")
    element.setAttribute("data-action-disabled", dataAction || "")
    element.setAttribute("data-action", "")
  }

  private enableAction(element: HTMLElement) {
    element.setAttribute(
      "data-action",
      element.getAttribute("data-action-disabled") || "",
    )
  }
}
