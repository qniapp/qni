import {
  Complex,
  Matrix,
  PARSE_COMPLEX_TOKEN_MAP_RAD,
  parseFormula,
} from "lib/math"
import { RX_GATE_OPERATION_TYPE, RxGateOperation } from "lib/operation"
import { RotationOperatorGate } from "./rotationOperatorGate"
import { classNameFor } from "lib/base"

export class RxGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:rx")
  static MATRIX(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const mi = Complex.I.neg()
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, mi.times(sinθ2), mi.times(sinθ2), cosθ2)
  }

  serialize(): RxGateOperation {
    return this._serialize(RX_GATE_OPERATION_TYPE) as RxGateOperation
  }

  toJson(): string {
    return this._toJson(RX_GATE_OPERATION_TYPE)
  }
}
