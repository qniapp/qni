import { DraggableItem } from "./draggableItem"
import { Dropzonable } from "./mixins"
import { CircuitElement } from "./gates"
import { Util, classNameFor } from "lib/base"

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
    el.classList.remove(classNameFor("draggable:type:palette"))
    el.classList.add(classNameFor("draggable:type:shadow"))
    el.classList.remove(classNameFor("gate:state:disabled"))
    el.classList.remove(classNameFor("connectable:lowerBit"))
    el.classList.remove(classNameFor("connectable:upperBit"))
    if (el.classList.contains(classNameFor("gate:type:measure"))) {
      el.setAttribute("data-value", "")
    }

    this.disableAction(el)

    this.dropzone.element.insertBefore(el, this.dropzone.element.firstChild)
  }

  remove(): void {
    this.dropzone.element.removeChild(this.element)
  }

  toPlainDraggableElement(): HTMLElement {
    const el = this.element
    el.classList.remove(classNameFor("draggable:type:shadow"))
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

  private instruction(draggableElement = this.element): CircuitElement {
    return CircuitElement.create(draggableElement)
  }

  private disableAction(element: HTMLElement) {
    const dataAction = element.dataset.action
    element.dataset.actionDisabled = dataAction
    element.dataset.action = ""
  }

  private enableAction(element: HTMLElement) {
    element.dataset.action = element.dataset.actionDisabled
  }
}
