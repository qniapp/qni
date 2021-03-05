import { Instructionable, Valueable } from "./mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"

export type WriteInstruction = { type: "write"; value: number }

export class WriteGate extends Mixin(Instructionable, Valueable) {
  static create(element: Element): WriteGate {
    const writeGate = new WriteGate()
    writeGate.assignElement(element)
    return writeGate
  }

  serialize(): WriteInstruction {
    return { type: "write", value: this.value }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:write")
  }

  get value(): number {
    const value = this.dataValue
    if (!value) throw new InternalError("Couldn't get Write value")
    return parseInt(value)
  }
}
