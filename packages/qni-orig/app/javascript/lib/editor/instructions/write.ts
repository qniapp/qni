import { Instructionable, Valueable } from "./mixins"
import { InternalError } from "lib/error"
import { applyMixins } from "lib/base"

export type WriteInstruction = { type: "write"; value: number }

export class Write {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:write",
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

export interface Write extends Instructionable, Valueable {}
applyMixins(Write, [Instructionable, Valueable])
