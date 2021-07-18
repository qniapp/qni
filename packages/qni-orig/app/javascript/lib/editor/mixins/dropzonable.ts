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

  return DropzonableMixinClass as Constructor<Dropzonable> & TBase
}
