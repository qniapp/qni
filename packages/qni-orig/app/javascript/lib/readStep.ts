import { Gate } from "lib/gate"
import { Matrix } from "mathjs"
import { Qubit } from "lib/qubit"
import { ReadWriteStep } from "lib/readWriteStep"
import { divide } from "mathjs"
import { multiply } from "mathjs"
import { sqrt } from "mathjs"

export class ReadStep extends ReadWriteStep {
  run(
    qubit: Qubit,
    ...targets: number[]
  ): { qubit: Qubit; bits: { [bit: number]: number } } {
    this.validateTargets(targets, qubit.nqubit)

    let state = qubit.matrix
    const bits: { [bit: number]: number } = {}
    let ts: number[]

    if (targets.length == 0) {
      ts = Array.from(new Array(qubit.nqubit)).map((_v, i) => i)
    } else {
      ts = targets
    }

    ts.forEach((t) => {
      const m = Array(qubit.nqubit).fill(Gate.I)
      m[qubit.nqubit - 1 - t] = Gate.KETBRA00

      const prob0 = this.prob0(state, m)
      let u: Matrix

      if (Math.random() <= prob0) {
        bits[t] = 0
        u = multiply(divide(1, sqrt(prob0)), Gate.tensorProduct(m)) as Matrix
      } else {
        bits[t] = 1
        m[qubit.nqubit - 1 - t] = Gate.KETBRA11
        u = multiply(
          divide(1, sqrt(1 - prob0)),
          Gate.tensorProduct(m),
        ) as Matrix
      }
      state = multiply(u, state)
    })

    return { qubit: new Qubit(state), bits: bits }
  }
}
