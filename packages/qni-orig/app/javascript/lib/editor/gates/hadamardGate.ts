import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export const HADAMARD_GATE_INSTRUCTION_TYPE = "H"

export type HadamardGateInstruction = {
  type: typeof HADAMARD_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class HadamardGate extends Mixin(
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:hadamard")
  }

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
