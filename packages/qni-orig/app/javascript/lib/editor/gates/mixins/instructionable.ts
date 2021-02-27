import { CircuitDropzone } from "lib/editor"
import { Elementable } from "lib/mixins"
import { InternalError } from "lib/error"
import { SeriarizedInstruction } from ".."
import { applyMixins, classNameFor } from "lib/base"
import { Animatable } from "./animatable"

export abstract class Instructionable {
  abstract serialize(): SeriarizedInstruction

  get bit(): number {
    return this.circuitDropzone.bit
  }

  set bordered(value: boolean) {
    if (!this.element) return

    const classList = this.element.classList
    const className = classNameFor("instruction:state:bordered")

    if (value) {
      classList.add(className)
    } else {
      classList.remove(className)
    }
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
    return new CircuitDropzone(el)
  }
}

export interface Instructionable extends Elementable, Animatable {}
applyMixins(Instructionable, [Elementable, Animatable])
