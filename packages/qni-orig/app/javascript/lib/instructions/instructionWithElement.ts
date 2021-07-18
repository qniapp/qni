import { CircuitDropzone } from "lib/editor"
import { Elementable } from "lib/mixins"

export class InstructionWithElement extends Elementable {
  get bit(): number {
    return this.circuitDropzone.bit
  }

  private get circuitDropzone(): CircuitDropzone {
    return new CircuitDropzone(this.element.parentElement)
  }
}
