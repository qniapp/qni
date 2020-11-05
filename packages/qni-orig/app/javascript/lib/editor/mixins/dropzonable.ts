import { applyMixins, classNameFor } from "lib/base"
import { DraggableSource } from ".."
import { Interactable } from "./interactable"

export abstract class Dropzonable {
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
    return el ? new DraggableSource(el) : null
  }

  isEqualTo(other: Dropzonable): boolean {
    return this.element === other.element
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Dropzonable extends Interactable {}
applyMixins(Dropzonable, [Interactable])
