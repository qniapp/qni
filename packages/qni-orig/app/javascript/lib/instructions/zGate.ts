import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { Disableable } from "./disableable"
import { Ifable } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { Matrix } from "lib/math"
import { classNameFor } from "lib/base"

export const Z_GATE_INSTRUCTION_TYPE = "Z"

export type ZGateInstruction = {
  type: typeof Z_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class ZGate extends ControllableMixin(
  ConnectableMixin(Disableable(Ifable(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:z")
  static readonly MATRIX = Matrix.PAULI_Z

  serialize(): ZGateInstruction {
    return {
      type: Z_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${Z_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${Z_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
