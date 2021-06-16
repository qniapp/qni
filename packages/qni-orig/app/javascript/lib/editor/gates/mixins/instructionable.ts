import { Animatable } from "./animatable"
import { CircuitDropzone } from "lib/editor"
import { Elementable } from "lib/mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"
import { SeriarizedInstruction } from ".."
import { classNameFor } from "lib/base"

export class Instructionable extends Mixin(Elementable, Animatable) {
  // @ts-ignore: "Abstract methods can only appear within an abstract class"
  serialize(): SeriarizedInstruction

  get bit(): number {
    return this.circuitDropzone.bit
  }

  set animateJello(value: boolean) {
    if (!this.element) return

    const classList = this.element.classList

    if (value) {
      classList.add("animate__animated", "animate__jello")
    } else {
      classList.remove("animate__animated", "animate__jello")
    }
  }

  private get circuitDropzone(): CircuitDropzone {
    if (!this.element) throw new InternalError("Element not set")

    const el = this.element.closest(`.${classNameFor("dropzone:type:circuit")}`)
    return CircuitDropzone.create(el)
  }
}
