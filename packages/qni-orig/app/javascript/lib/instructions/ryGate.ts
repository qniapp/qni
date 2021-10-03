import { RY_GATE_OPERATION_TYPE, RyGateOperation } from "lib/operation"
import { RotationOperatorGate } from "./rotationOperatorGate"
import { classNameFor } from "lib/base"

export class RyGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:ry")

  serialize(): RyGateOperation {
    return this._serialize(RY_GATE_OPERATION_TYPE) as RyGateOperation
  }

  toJson(): string {
    return this._toJson(RY_GATE_OPERATION_TYPE)
  }
}
