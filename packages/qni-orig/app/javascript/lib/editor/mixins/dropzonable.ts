import { Constructor } from "lib/instructions"
import { DraggableSource } from ".."
import { Elementable } from "lib/mixins/elementable"
import { classNameFor } from "lib/base"

export declare class Dropzonable {
  get element(): HTMLElement
  set active(flag: boolean)
  draggableElement(): HTMLElement | null
  get draggableSource(): DraggableSource | null
  isEqualTo(other: Dropzonable): boolean
}

export function DropzonableMixin<TBase extends Constructor<Elementable>>(
  Base: TBase,
): Constructor<Dropzonable> & TBase {
  class DropzonableMixinClass extends Base {
    set active(flag: boolean) {
      this.setClassName("dropzone:state:active", flag)
    }

    draggableElement(): HTMLElement | null {
      const el = Array.from(
        this.element.getElementsByClassName(classNameFor("draggable")),
      ).filter((each) => {
        return (
          !each.hasAttribute("data-draggable-source") &&
          !each.hasAttribute("data-draggable-shadow")
        )
      })[0]

      return el as HTMLElement
    }

    get draggableSource(): DraggableSource | null {
      const el = this.element.querySelector(".draggable[data-draggable-source]")
      return el ? new DraggableSource(el) : null
    }

    isEqualTo(other: Dropzonable): boolean {
      return this.element === other.element
    }
  }

  return DropzonableMixinClass as Constructor<Dropzonable> & TBase
}
