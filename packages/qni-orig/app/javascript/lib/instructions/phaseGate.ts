import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { InstructionWithElement } from "./instructionWithElement"
import { TargetableMixin } from "./targetable"
import { Util, attributeNameFor, classNameFor } from "lib/base"
import {
  Complex,
  Matrix,
  parseFormula,
  PARSE_COMPLEX_TOKEN_MAP_RAD,
} from "lib/math"

export const PHASE_GATE_INSTRUCTION_TYPE = "P"

export type PhaseGateInstruction = {
  type: typeof PHASE_GATE_INSTRUCTION_TYPE
  phi: string
  controls: number[]
  targets: number[]
}

export class PhaseGate extends ControllableMixin(
  TargetableMixin(ConnectableMixin(InstructionWithElement)),
) {
  static readonly elementClassName = classNameFor("gate:phase")
  static MATRIX(phi: string): Matrix {
    const φ = parseFormula<number>(phi, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const e = Complex.from(Math.E)

    return Matrix.square(1, 0, 0, e.raisedTo(Complex.I.times(φ)))
  }

  serialize(): PhaseGateInstruction {
    return {
      type: PHASE_GATE_INSTRUCTION_TYPE,
      phi: this.phi,
      controls: this.controls,
      targets: this.targets,
    }
  }

  toJson(): string {
    const phi = this.phi.replace("pi", "π").replace("/", "_")
    return `"${PHASE_GATE_INSTRUCTION_TYPE}(${phi})"`
  }

  get phi(): string {
    const attr = this.element.getAttribute(attributeNameFor("instruction:phi"))
    Util.notNull(attr)

    return attr
  }
}
