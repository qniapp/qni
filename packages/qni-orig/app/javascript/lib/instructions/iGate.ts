export const I_GATE_INSTRUCTION_TYPE = "1"

export type IGateInstruction = { type: typeof I_GATE_INSTRUCTION_TYPE }

export class IGate {
  serialize(): IGateInstruction {
    return { type: I_GATE_INSTRUCTION_TYPE }
  }

  toJson(): string {
    return I_GATE_INSTRUCTION_TYPE
  }
}
