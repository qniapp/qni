import { Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"

export const I_GATE_INSTRUCTION_TYPE = "I"

export type IGateInstruction = { type: typeof I_GATE_INSTRUCTION_TYPE }

export class IGate extends Mixin(Instructionable) {
  serialize(): IGateInstruction {
    return { type: I_GATE_INSTRUCTION_TYPE }
  }

  toJson(): string {
    return "1"
  }
}
