import { Gate } from "lib/gate"
import { Qubit } from "lib/qubit"
import { Step } from "lib/step"
import { multiply } from "mathjs"

export class XStep extends Step {
  run(qubit: Qubit, targets: number[] = []): Qubit {
    this.validateTargets(targets, qubit.nqubit)

    const u = Gate.U(qubit.nqubit, targets, Gate.X)
    const bits = multiply(u, qubit.matrix)

    return new Qubit(bits)
  }
}
