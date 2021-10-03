import { RZ_GATE_OPERATION_TYPE, RzGateOperation } from "lib/operation"
import { RotationOperatorGate } from "./rotationOperatorGate"
import { classNameFor } from "lib/base"

export class RzGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:rz")

  serialize(): RzGateOperation {
    return this._serialize(RZ_GATE_OPERATION_TYPE) as RzGateOperation
  }

  toJson(): string {
    return this._toJson(RZ_GATE_OPERATION_TYPE)
  }
}
