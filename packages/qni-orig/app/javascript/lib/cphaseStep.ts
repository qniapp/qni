import { Gate } from "lib/gate"
import { Step } from "lib/step"
import { Matrix } from "mathjs"
import { Qubit } from "lib/qubit"
import { add, subtract, multiply } from "mathjs"

export class CphaseStep extends Step {
  run(qubit: Qubit, theta: string, targets: number[]): Qubit {
    this.validateTargets(targets, qubit.nqubit)

    const m0 = Array(qubit.nqubit).fill(Gate.I)
    const m1 = Array(qubit.nqubit).fill(Gate.I)

    m1[qubit.nqubit - targets.slice(-1)[0] - 1] = subtract(
      Gate.PHASE(theta),
      Gate.I,
    )
    for (const t of targets) {
      if (t != targets.slice(-1)[0]) {
        m1[qubit.nqubit - t - 1] = Gate.KETBRA11
      }
    }
    const u = add(Gate.tensorProduct(m0), Gate.tensorProduct(m1))
    const bits = multiply(u, qubit.matrix) as Matrix

    return new Qubit(bits)
  }
}
