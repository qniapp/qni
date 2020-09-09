import { Gate } from "lib/gate"
import { Qubit } from "lib/qubit"
import { Step } from "lib/step"
import { multiply } from "mathjs"

export class SwapStep extends Step {
  run(qubit: Qubit, target0: number, target1: number): Qubit {
    this.validateTargets([target0, target1], qubit.nqubit)

    const ucnot1 = Gate.CNOT(target0, target1, qubit.nqubit)
    const ucnot2 = Gate.CNOT(target1, target0, qubit.nqubit)

    const u = this.multiply(ucnot1, ucnot2, ucnot1)
    const bits = multiply(u, qubit.matrix)

    return new Qubit(bits)
  }
}
