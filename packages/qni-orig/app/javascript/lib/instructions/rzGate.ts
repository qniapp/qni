import { classNameFor } from "lib/base"
import {
  Complex,
  Matrix,
  parseFormula,
  PARSE_COMPLEX_TOKEN_MAP_RAD,
} from "lib/math"
import { RotationOperatorGate } from "./rotationOperatorGate"

export const RZ_GATE_INSTRUCTION_TYPE = "Rz"

export type RzGateInstruction = {
  type: typeof RZ_GATE_INSTRUCTION_TYPE
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

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

  serialize(): RzGateInstruction {
    return this._serialize(RZ_GATE_INSTRUCTION_TYPE) as RzGateInstruction
  }

  toJson(): string {
    return this._toJson(RZ_GATE_INSTRUCTION_TYPE)
  }
}
