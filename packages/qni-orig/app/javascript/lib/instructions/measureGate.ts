import { InstructionWithElement } from "./instructionWithElement"
import { InternalError } from "lib/error"
import { ValueableMixin } from "./valueable"
import { attributeNameFor, classNameFor } from "lib/base"

export const MEASURE_GATE_INSTRUCTION_TYPE = "Measure"

export type MeasureInstruction = {
  type: typeof MEASURE_GATE_INSTRUCTION_TYPE
  value: number | null
  set: string | null
}

export class MeasureGate extends ValueableMixin(InstructionWithElement) {
  static readonly elementClassName = classNameFor("gate:measure")

  serialize(): MeasureInstruction {
    return {
      type: MEASURE_GATE_INSTRUCTION_TYPE,
      value: this.value,
      set: this.set,
    }
  }

  toJson(): string {
    if (this.set) {
      return `"${MEASURE_GATE_INSTRUCTION_TYPE}>${this.set}"`
    } else {
      return `"${MEASURE_GATE_INSTRUCTION_TYPE}"`
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
    this.classList.add(classNameFor("gate:state:updated"))
  }
}
