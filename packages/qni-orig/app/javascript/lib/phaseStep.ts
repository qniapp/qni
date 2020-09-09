import { Gate } from "lib/gate"
import { Qubit } from "lib/qubit"
import { Step } from "lib/step"
import { multiply } from "mathjs"

export class PhaseStep extends Step {
  run(qubit: Qubit, theta: string, targets: number[]): Qubit {
    this.validateTargets(targets, qubit.nqubit)

    const u = Gate.U(qubit.nqubit, targets, Gate.PHASE(theta))
    const qMatrix = multiply(u, qubit.matrix)

    return new Qubit(qMatrix)
  }
}
