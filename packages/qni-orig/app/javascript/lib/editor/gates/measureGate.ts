import { Instructionable, Valueable } from "./mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"
import { attributeNameFor, classNameFor, instructionNameFor } from "lib/base"

export type MeasureInstruction = {
  type: string
  value: number | null
  set: string | null
}

export class MeasureGate extends Mixin(Instructionable, Valueable) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:measure")
  }

  serialize(): MeasureInstruction {
    return {
      type: instructionNameFor("gate:measure"),
      value: this.value,
      set: this.set,
    }
  }

  toJson(): string {
    if (this.set) {
      return `"${instructionNameFor("gate:measure")}>${this.set}"`
    } else {
      return `"${instructionNameFor("gate:measure")}"`
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
    if (value === null) throw new InternalError("Cannot set Measure value null")

    this.dataValue = value.toString()
    this.updated()
  }

  get set(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:set"))
  }

  private updated(): void {
    this.element.classList.add(classNameFor("gate:state:updated"))
  }
}
