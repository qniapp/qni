import { classNameFor } from "lib/base"
import { InstructionWithElement } from "./instructionWithElement"

export const BLOCH_DISPLAY_INSTRUCTION_TYPE = "Bloch"

export type BlochDisplayInstruction = {
  type: typeof BLOCH_DISPLAY_INSTRUCTION_TYPE
}

export class BlochDisplay extends InstructionWithElement {
  static readonly elementClassName = classNameFor("display:bloch")

  serialize(): BlochDisplayInstruction {
    return {
      type: BLOCH_DISPLAY_INSTRUCTION_TYPE,
    }
  }

  toJson(): string {
    return `"${BLOCH_DISPLAY_INSTRUCTION_TYPE}"`
  }
}
