import { RX_GATE_OPERATION_TYPE, RxGateOperation } from "lib/operation"
import { RotationOperatorGate } from "./rotationOperatorGate"
import { classNameFor } from "lib/base"

export class RxGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:rx")

  serialize(): RxGateOperation {
    return this._serialize(RX_GATE_OPERATION_TYPE) as RxGateOperation
  }

  toJson(): string {
    return this._toJson(RX_GATE_OPERATION_TYPE)
  }
}
