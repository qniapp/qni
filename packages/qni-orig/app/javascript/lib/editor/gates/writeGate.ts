import { Instructionable, Valueable } from "./mixins"
import { Mixin } from "ts-mixer"
import { Util } from "lib/base"

export type WriteInstruction = { type: "|0>" | "|1>"; value: number }

export class WriteGate extends Mixin(Instructionable, Valueable) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:write")
  }

  serialize(): WriteInstruction {
    if (this.value == 0) {
      return { type: "|0>", value: this.value }
    } else {
      return { type: "|1>", value: this.value }
    }
  }

  toJson(): string {
    return `"|${this.value}>"`
  }

  get value(): number {
    const value = this.dataValue
    Util.notNull(value)
    Util.need(value === "0" || value === "1", "Must be 0 or 1")

    return parseInt(value)
  }
}
