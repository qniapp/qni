import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { Disableable } from "./disableable"
import { Ifable } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { Matrix } from "lib/math"
import { classNameFor } from "lib/base"

export const NOT_GATE_INSTRUCTION_TYPE = "X"

export type NotGateInstruction = {
  type: typeof NOT_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class NotGate extends ControllableMixin(
  ConnectableMixin(Disableable(Ifable(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:not")
  static readonly MATRIX = Matrix.PAULI_X

  serialize(): NotGateInstruction {
    return {
      type: NOT_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${NOT_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${NOT_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
