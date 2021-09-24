import { IGateOperation, I_GATE_OPERATION_TYPE } from "lib/operation"

export class IGate {
  serialize(): IGateOperation {
    return { type: I_GATE_OPERATION_TYPE }
  }

  toJson(): string {
    return I_GATE_OPERATION_TYPE
  }
}
