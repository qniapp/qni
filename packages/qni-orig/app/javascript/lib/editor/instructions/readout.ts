import { InternalError } from "lib/error"
import { applyMixins, attributeNameFor } from "lib/base"
import { Instructionable, Popuppable, Valueable } from "./mixins"

export type ReadoutInstruction = {
  type: "readout"
  value: number | null
  set: string | null
}

export class Readout {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:readout",
    )
  }

  serialize(): ReadoutInstruction {
    return {
      type: "readout",
      value: this.value,
      set: this.element.getAttribute(attributeNameFor("instruction:set")),
    }
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

export interface Readout extends Instructionable, Popuppable, Valueable {}
applyMixins(Readout, [Instructionable, Popuppable, Valueable])
