import { Gate } from "lib/gate"
import { Qubit } from "lib/qubit"
import { Step } from "lib/step"
import { multiply } from "mathjs"

export class CswapStep extends Step {
  apply(qubit: Qubit, control: number, targets: number[]): Qubit {
    this.validateControls([control], qubit.nqubit)
    this.validateTargets(targets, qubit.nqubit)

    const uccnot1 = Gate.CCU(
      [targets[0], control],
      targets[1],
      Gate.X,
      qubit.nqubit,
    )
    const uccnot2 = Gate.CCU(
      [targets[1], control],
      targets[0],
      Gate.X,
      qubit.nqubit,
    )

    const u = this.multiply(uccnot1, uccnot2, uccnot1)
    const bits = multiply(u, qubit.matrix)

    return new Qubit(bits)
  }
}
