import { Instructionable, Valueable } from "./mixins"
import { InternalError } from "lib/error"
import { applyMixins } from "lib/base"

export type WriteInstruction = { type: "write"; value: number }

export class WriteGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:writeGate",
    )
  }

  serialize(): WriteInstruction {
    return { type: "write", value: this.value }
  }

  get value(): number {
    const value = this.dataValue
    if (!value) throw new InternalError("Couldn't get Write value")
    return parseInt(value)
  }
}

export interface WriteGate extends Instructionable, Valueable {}
applyMixins(WriteGate, [Instructionable, Valueable])
