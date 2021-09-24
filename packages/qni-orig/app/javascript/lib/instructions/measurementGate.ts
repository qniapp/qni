import {
  MEASUREMENT_GATE_OPERATION_TYPE,
  MeasurementOperation,
} from "lib/operation"
import { FlaggableMixin } from "./flaggable"
import { InstructionWithElement } from "./instructionWithElement"
import { InternalError } from "lib/error"
import { ValueableMixin } from "./valueable"
import { classNameFor } from "lib/base"

export class MeasurementGate extends FlaggableMixin(
  ValueableMixin(InstructionWithElement),
) {
  static readonly elementClassName = classNameFor("gate:measure")

  serialize(): MeasurementOperation {
    return {
      type: MEASUREMENT_GATE_OPERATION_TYPE,
      flag: this.flag,
    }
  }

  toJson(): string {
    if (this.flag) {
      return `"${MEASUREMENT_GATE_OPERATION_TYPE}>${this.flag}"`
    } else {
      return `"${MEASUREMENT_GATE_OPERATION_TYPE}"`
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
  }
}
