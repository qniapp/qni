import { classNameFor } from "lib/base"
import { Complex, Matrix } from "lib/math"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { Disableable } from "./disableable"
import { Ifable } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"

export const ROOT_NOT_GATE_INSTRUCTION_TYPE = "X^½"

export type RootNotGateInstruction = {
  type: typeof ROOT_NOT_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class RootNotGate extends ControllableMixin(
  ConnectableMixin(Disableable(Ifable(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:rootNot")
  static get MATRIX(): Matrix {
    const i = Complex.I
    const mi = i.neg()

    return Matrix.square(i.plus(1), mi.plus(1), mi.plus(1), i.plus(1)).times(
      0.5,
    )
  }

  serialize(): RootNotGateInstruction {
    return {
      type: ROOT_NOT_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${ROOT_NOT_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${ROOT_NOT_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
