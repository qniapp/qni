import { Gate } from "lib/gate"
import { Qubit } from "lib/qubit"
import { Step } from "lib/step"
import { multiply } from "mathjs"

export class CnotStep extends Step {
  run(qubit: Qubit, control: number, targets: number[]): Qubit {
    this.validateControls([control], qubit.nqubit)
    this.validateTargets(targets, qubit.nqubit)

    const u = Gate.CU(control, targets, Gate.X, qubit.nqubit)
    const bits = multiply(u, qubit.matrix)

    return new Qubit(bits)
  }
}
