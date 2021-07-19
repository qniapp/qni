import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { IfableMixin } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { Matrix } from "lib/math"
import { classNameFor } from "lib/base"

export const Y_GATE_INSTRUCTION_TYPE = "Y"

export type YGateInstruction = {
  type: typeof Y_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class YGate extends ControllableMixin(
  ConnectableMixin(DisableableMixin(IfableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:y")
  static readonly MATRIX = Matrix.PAULI_Y

  serialize(): YGateInstruction {
    return {
      type: Y_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${Y_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${Y_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
