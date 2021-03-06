import { Instructionable, Valueable } from "./mixins"
import { Mixin } from "ts-mixer"
import { Util } from "lib/base"

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

  get value(): number {
    const value = this.dataValue
    Util.notNull(value)
    return parseInt(value)
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:write")
  }
}
