import { classNameFor } from "lib/base"
import {
  Complex,
  Matrix,
  parseFormula,
  PARSE_COMPLEX_TOKEN_MAP_RAD,
} from "lib/math"
import { RotationOperatorGate } from "./rotationOperatorGate"

export const RX_GATE_INSTRUCTION_TYPE = "Rx"

export type RxGateInstruction = {
  type: typeof RX_GATE_INSTRUCTION_TYPE
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

export class RxGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:rx")
  static MATRIX(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const mi = Complex.I.neg()
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, mi.times(sinθ2), mi.times(sinθ2), cosθ2)
  }

  serialize(): RxGateInstruction {
    return this._serialize(RX_GATE_INSTRUCTION_TYPE) as RxGateInstruction
  }

  toJson(): string {
    return this._toJson(RX_GATE_INSTRUCTION_TYPE)
  }
}
