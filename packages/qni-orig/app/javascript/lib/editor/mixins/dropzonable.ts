import { DraggableSource } from ".."
import { Interactable } from "./interactable"
import { Mixin } from "ts-mixer"
import { classNameFor } from "lib/base"

export class Dropzonable extends Mixin(Interactable) {
  set active(flag: boolean) {
    this.setClassName("dropzone:state:active", flag)
  }

  protected draggableElement(): HTMLElement | null {
    const el = Array.from(
      this.element.getElementsByClassName(classNameFor("draggable")),
    ).filter((each) => {
      return (
        !each.classList.contains(classNameFor("draggable:type:source")) &&
        !each.classList.contains(classNameFor("draggable:type:shadow"))
      )
    })[0]

    return el as HTMLElement
  }

  get draggableSource(): DraggableSource | null {
    const el = Array.from(
      this.element.getElementsByClassName(
        classNameFor("draggable:type:source"),
      ),
    )[0] as HTMLElement
    return el ? DraggableSource.create(el) : null
  }

  isEqualTo(other: Dropzonable): boolean {
    return this.element === other.element
  }
}
