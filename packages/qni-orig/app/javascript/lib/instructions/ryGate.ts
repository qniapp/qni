import { classNameFor } from "lib/base"
import { Matrix, parseFormula, PARSE_COMPLEX_TOKEN_MAP_RAD } from "lib/math"
import { RotationOperatorGate } from "./rotationOperatorGate"

export const RY_GATE_INSTRUCTION_TYPE = "Ry"

export type RyGateInstruction = {
  type: typeof RY_GATE_INSTRUCTION_TYPE
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

export class RyGate extends RotationOperatorGate {
  static readonly elementClassName = classNameFor("gate:ry")
  static MATRIX(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, -sinθ2, sinθ2, cosθ2)
  }

  serialize(): RyGateInstruction {
    return this._serialize(RY_GATE_INSTRUCTION_TYPE) as RyGateInstruction
  }

  toJson(): string {
    return this._toJson(RY_GATE_INSTRUCTION_TYPE)
  }
}
