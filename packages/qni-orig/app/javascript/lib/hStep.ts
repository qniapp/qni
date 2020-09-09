import { Gate } from "lib/gate"
import { Step } from "lib/step"
import { Qubit } from "lib/qubit"
import { multiply } from "mathjs"

export class HStep extends Step {
  run(qubit: Qubit, targets: number[] = []): Qubit {
    this.validateTargets(targets, qubit.nqubit)

    const u = Gate.U(qubit.nqubit, targets, Gate.H)
    const bits = multiply(u, qubit.matrix)

    return new Qubit(bits)
  }
}
