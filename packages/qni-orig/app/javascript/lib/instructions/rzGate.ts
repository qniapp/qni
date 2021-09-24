import {
  Complex,
  Matrix,
  PARSE_COMPLEX_TOKEN_MAP_RAD,
  parseFormula,
} from "lib/math"
import { RZ_GATE_OPERATION_TYPE, RzGateOperation } from "lib/operation"
import { RotationOperatorGate } from "./rotationOperatorGate"
import { classNameFor } from "lib/base"

export class RzGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:rz")
  static MATRIX(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const e = Complex.from(Math.E)
    const i = Complex.I

    return Matrix.square(
      e.raisedTo(i.neg().times(θ / 2)),
      0,
      0,
      e.raisedTo(i.times(θ / 2)),
    )
  }

  serialize(): RzGateOperation {
    return this._serialize(RZ_GATE_OPERATION_TYPE) as RzGateOperation
  }

  toJson(): string {
    return this._toJson(RZ_GATE_OPERATION_TYPE)
  }
}
