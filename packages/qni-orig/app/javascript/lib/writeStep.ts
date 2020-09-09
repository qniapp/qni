import { Gate } from "lib/gate"
import { Matrix } from "mathjs"
import { Qubit } from "lib/qubit"
import { ReadWriteStep } from "lib/readWriteStep"
import { multiply } from "mathjs"

export class WriteStep extends ReadWriteStep {
  run(
    qubit: Qubit,
    valueOrTargets: number | { [bit: number]: number },
    ...targets: number[]
  ): Qubit {
    const matrices = Array(qubit.nqubit).fill(Gate.I)

    if ("number" === typeof valueOrTargets) {
      let ts: number[]
      const v = valueOrTargets
      this.validateValue(v)

      if (targets.length > 0) {
        this.validateTargets(targets, qubit.nqubit)
        ts = targets
      } else {
        ts = Array.from(new Array(qubit.nqubit)).map((_v, i) => i)
      }

      ts.forEach((t) => {
        const m = this.prob0Operator(t, v, qubit.nqubit)
        if (this.prob0(qubit.matrix, m) == 0) {
          matrices[qubit.nqubit - 1 - t] = Gate.X
        }
      })
    } else {
      const ts = valueOrTargets

      for (const bit in ts) {
        const t = parseInt(bit)
        this.validateTargets([t], qubit.nqubit)
        const v = ts[bit]
        this.validateValue(v)

        const m = this.prob0Operator(t, ts[bit], qubit.nqubit)

        if (this.prob0(qubit.matrix, m) == 0) {
          matrices[qubit.nqubit - 1 - t] = Gate.X
        }
      }
    }
    const u = Gate.tensorProduct(matrices)
    const state = multiply(u, qubit.matrix)

    return new Qubit(state)
  }

  private validateValue(value: number): void {
    if (value != 0 && value != 1) {
      throw new Error(`Invalid value: ${value}`)
    }
  }

  private prob0Operator(bit: number, value: number, nqubit: number): Matrix[] {
    const m = Array<Matrix>(nqubit).fill(Gate.I)

    if (value == 0) {
      m[nqubit - 1 - bit] = Gate.KETBRA00
    } else {
      m[nqubit - 1 - bit] = Gate.KETBRA11
    }

    return m
  }
}
