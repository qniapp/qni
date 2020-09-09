import { Gate } from "lib/gate"
import { Qubit } from "lib/qubit"
import { Step } from "lib/step"
import { multiply } from "mathjs"

export class CcnotStep extends Step {
  apply(qubit: Qubit, controls: number[], target: number): Qubit {
    this.validateControls(controls, qubit.nqubit)
    this.validateTargets([target], qubit.nqubit)

    const u = Gate.CCU(controls, target, Gate.X, qubit.nqubit)
    const bits = multiply(u, qubit.matrix)

    return new Qubit(bits)
  }
}
