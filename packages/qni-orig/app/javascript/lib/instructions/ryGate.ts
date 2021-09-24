import { Matrix, PARSE_COMPLEX_TOKEN_MAP_RAD, parseFormula } from "lib/math"
import { RY_GATE_OPERATION_TYPE, RyGateOperation } from "lib/operation"
import { RotationOperatorGate } from "./rotationOperatorGate"
import { classNameFor } from "lib/base"

export class RyGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:ry")
  static MATRIX(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, -sinθ2, sinθ2, cosθ2)
  }

  serialize(): RyGateOperation {
    return this._serialize(RY_GATE_OPERATION_TYPE) as RyGateOperation
  }

  toJson(): string {
    return this._toJson(RY_GATE_OPERATION_TYPE)
  }
}
