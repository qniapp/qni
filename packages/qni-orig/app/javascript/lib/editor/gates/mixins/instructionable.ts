import { CircuitDropzone } from "lib/editor"
import { Elementable } from "lib/mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"
import { SeriarizedInstruction } from ".."
import { classNameFor } from "lib/base"

export class Instructionable extends Mixin(Elementable) {
  // @ts-ignore: "Abstract methods can only appear within an abstract class"
  serialize(): SeriarizedInstruction

  get bit(): number {
    return this.circuitDropzone.bit
  }

  private get circuitDropzone(): CircuitDropzone {
    if (!this.element) throw new InternalError("Element not set")

    const el = this.element.closest(`.${classNameFor("dropzone:type:circuit")}`)
    return CircuitDropzone.create(el)
  }
}
