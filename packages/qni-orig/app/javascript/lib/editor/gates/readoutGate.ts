import { Instructionable, Popuppable, Valueable } from "./mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"
import { attributeNameFor } from "lib/base"

export type ReadoutInstruction = {
  type: "readout"
  value: number | null
  set: string | null
}

export class ReadoutGate extends Mixin(Instructionable, Popuppable, Valueable) {
  static create(element: Element): ReadoutGate {
    const readoutGate = new ReadoutGate()
    readoutGate.assignElement(element)
    return readoutGate
  }

  serialize(): ReadoutInstruction {
    return {
      type: "readout",
      value: this.value,
      set: this.element.getAttribute(attributeNameFor("instruction:set")),
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:readout")
  }

  get value(): number | null {
    const value = this.dataValue

    if (value !== null) {
      return parseInt(value)
    } else {
      return null
    }
  }

  set value(value: number | null) {
    if (value === null) throw new InternalError("Cannot set Readout value null")

    this.dataValue = value.toString()
  }
}
