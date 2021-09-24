import { Util, attributeNameFor, classNameFor } from "lib/base"
import { WRITE_GATE_OPERATION_TYPE, WriteGateOperation } from "lib/operation"
import { InstructionWithElement } from "./instructionWithElement"

export class WriteGate extends InstructionWithElement {
  static readonly elementClassName = classNameFor("gate:write")

  serialize(): WriteGateOperation {
    return {
      type: WRITE_GATE_OPERATION_TYPE,
      value: this.value as 0 | 1,
    }
  }

  toJson(): string {
    return `"|${this.value}>"`
  }

  get value(): number {
    const attrName = attributeNameFor("instruction:valueable:value")
    const value = this.element.getAttribute(attrName)
    Util.notNull(value)
    Util.need(value === "0" || value === "1", "Must be 0 or 1")

    return parseInt(value)
  }
}
