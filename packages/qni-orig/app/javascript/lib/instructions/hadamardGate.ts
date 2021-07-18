import { classNameFor } from "lib/base"
import { Matrix } from "lib/math"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { Disableable } from "./disableable"
import { Ifable } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"

export const HADAMARD_GATE_INSTRUCTION_TYPE = "H"

export type HadamardGateInstruction = {
  type: typeof HADAMARD_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class HadamardGate extends ControllableMixin(
  ConnectableMixin(Disableable(Ifable(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:hadamard")
  static readonly MATRIX = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5))

  serialize(): HadamardGateInstruction {
    return {
      type: HADAMARD_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${HADAMARD_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${HADAMARD_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
