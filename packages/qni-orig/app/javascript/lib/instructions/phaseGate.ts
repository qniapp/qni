import { Complex, Matrix, parseAngle } from "lib/math"
import { PHASE_GATE_OPERATION_TYPE, PhaseGateOperation } from "lib/operation"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { InstructionWithElement } from "./instructionWithElement"
import { PhiableMixin } from "./phiable"
import { TargetableMixin } from "./targetable"
import { classNameFor } from "lib/base"

export class PhaseGate extends PhiableMixin(
  ControllableMixin(TargetableMixin(ConnectableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:phase")
  static MATRIX(phi: string): Matrix {
    const φ = parseAngle(phi)
    const e = Complex.from(Math.E)

    return Matrix.square(1, 0, 0, e.raisedTo(Complex.I.times(φ)))
  }

  cphaseTargetInstructions(): PhaseGate[] {
    const instructions = this.circuitDropzone.circuitStep.instructions
    return this.targets.map((each) => {
      return instructions[each] as PhaseGate
    })
  }

  serialize(): PhaseGateOperation {
    return {
      type: PHASE_GATE_OPERATION_TYPE,
      phi: this.phi,
      controls: this.controls,
      targets: this.targets,
      if: null,
    }
  }

  toJson(): string {
    const phi = this.phi.replace(/pi/g, "π").replace(/\//g, "_")
    return `"${PHASE_GATE_OPERATION_TYPE}(${phi})"`
  }
}
