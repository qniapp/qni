import { Matrix } from "mathjs"
import { add, subtract, multiply, divide } from "mathjs"
import { complex, i } from "mathjs"
import { kron } from "mathjs"
import { parse } from "mathjs"
import { sin, cos } from "mathjs"
import { sparse, matrix, identity } from "mathjs"
import { sqrt } from "mathjs"

export class Gate {
  static get I(): Matrix {
    return identity(2) as Matrix
  }

  static get X(): Matrix {
    return matrix([
      [0, 1],
      [1, 0],
    ])
  }

  static get H(): Matrix {
    return divide(
      matrix([
        [1, 1],
        [1, -1],
      ]),
      sqrt(2),
    ) as Matrix
  }

  static PHASE(theta: string): Matrix {
    const pi = parse(theta).evaluate() as number

    return matrix([
      [1, 0],
      [0, (complex(cos(pi), sin(pi)) as unknown) as number],
    ])
  }

  static get RNOT(): Matrix {
    return divide(
      matrix([
        [subtract(1, i) as number, add(1, i) as number],
        [add(1, i) as number, subtract(1, i) as number],
      ]),
      2,
    ) as Matrix
  }

  static CNOT(control: number, target: number, nqubit: number): Matrix {
    return this.CU(control, [target], Gate.X, nqubit)
  }

  static U(nqubit: number, targets: number[], gate: Matrix): Matrix {
    let m: Matrix[]

    if (targets.length == 0) {
      m = Array<Matrix>(nqubit).fill(gate)
    } else {
      m = Array<Matrix>(nqubit).fill(Gate.I)
      for (const t of targets) {
        m[nqubit - 1 - t] = gate
      }
    }

    return this.tensorProduct(m)
  }

  static CU(
    control: number,
    targets: number[],
    gate: Matrix,
    nqubit: number,
  ): Matrix {
    const m0 = Array(nqubit).fill(Gate.I)
    const m1 = Array(nqubit).fill(Gate.I)

    m0[nqubit - 1 - control] = this.KETBRA00
    m1[nqubit - 1 - control] = this.KETBRA11
    for (const t of targets) m1[nqubit - 1 - t] = gate

    return add(this.tensorProduct(m0), this.tensorProduct(m1)) as Matrix
  }

  static CCU(
    controls: number[],
    target: number,
    gate: Matrix,
    nqubit: number,
  ): Matrix {
    const m0 = Array(nqubit).fill(Gate.I)
    const m1 = Array(nqubit).fill(Gate.I)

    m1[nqubit - 1 - target] = subtract(gate, Gate.I)
    for (const c of controls) m1[nqubit - 1 - c] = Gate.KETBRA11

    return add(this.tensorProduct(m0), this.tensorProduct(m1)) as Matrix
  }

  static get KET0(): Matrix {
    return matrix([[1], [0]])
  }

  static get BRA0(): Matrix {
    return matrix([[1, 0]])
  }

  static get KET1(): Matrix {
    return matrix([[0], [1]])
  }

  static get BRA1(): Matrix {
    return matrix([[0, 1]])
  }

  static get KETBRA00(): Matrix {
    return multiply(this.KET0, this.BRA0)
  }

  static get KETBRA11(): Matrix {
    return multiply(this.KET1, this.BRA1)
  }

  static tensorProduct(matrices: Matrix[]): Matrix {
    return matrices.reduce((pre, value) => {
      return sparse(kron(pre, value))
    })
  }
}
