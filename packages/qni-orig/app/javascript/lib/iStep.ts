import { Qubit } from "lib/qubit"
import { Step } from "lib/step"

export class IStep extends Step {
  run(qubit: Qubit, targets: number[] = []): Qubit {
    this.validateTargets(targets, qubit.nqubit)

    return qubit
  }
}
