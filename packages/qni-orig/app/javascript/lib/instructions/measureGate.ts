import { InstructionWithElement } from "./instructionWithElement"
import { InternalError } from "lib/error"
import { ValueableMixin } from "./valueable"
import { classNameFor } from "lib/base"
import { FlaggableMixin } from "./flaggable"

export const MEASURE_GATE_INSTRUCTION_TYPE = "Measure"

export type MeasureInstruction = {
  type: typeof MEASURE_GATE_INSTRUCTION_TYPE
  value: number | null
  flag: string | null
}

export class MeasureGate extends FlaggableMixin(
  ValueableMixin(InstructionWithElement),
) {
  static readonly elementClassName = classNameFor("gate:measure")

  serialize(): MeasureInstruction {
    return {
      type: MEASURE_GATE_INSTRUCTION_TYPE,
      value: this.value,
      flag: this.flag,
    }
  }

  toJson(): string {
    if (this.flag) {
      return `"${MEASURE_GATE_INSTRUCTION_TYPE}>${this.flag}"`
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

  private updated(): void {
    this.classList.add(classNameFor("gate:state:updated"))
  }
}
