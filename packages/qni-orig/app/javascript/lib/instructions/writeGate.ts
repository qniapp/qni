import { Util, attributeNameFor, classNameFor } from "lib/base"
import { InstructionWithElement } from "./instructionWithElement"

export const WRITE0_GATE_INSTRUCTION = "|0>"
export const WRITE1_GATE_INSTRUCTION = "|1>"

export type WriteInstruction = {
  type: typeof WRITE0_GATE_INSTRUCTION | typeof WRITE1_GATE_INSTRUCTION
  value: number
}

export class WriteGate extends InstructionWithElement {
  static readonly elementClassName = classNameFor("gate:write")

  serialize(): WriteInstruction {
    return {
      type: this.value == 0 ? WRITE0_GATE_INSTRUCTION : WRITE1_GATE_INSTRUCTION,
      value: this.value,
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
