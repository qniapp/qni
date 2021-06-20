import { Util } from "lib/base"
import { Matrix, MathType, subset, index } from "mathjs"

import { matrix, kron, conj, transpose, sparse } from "mathjs"
import { sqrt } from "mathjs"
import { complex, divide } from "mathjs"

export class StateVector {
  public matrix: Matrix
  public size: number
  public nqubit: number

  constructor(bits: string | Matrix) {
    if ("string" === typeof bits) {
      this.matrix = this.bitstringToMatrix(bits)
    } else {
      this.matrix = bits
    }

    this.size = this.matrix.size()[0]
    this.nqubit = Math.log2(this.size)
  }

  get bra(): Matrix {
    return conj(transpose(this.matrix))
  }

  get ket(): Matrix {
    return this.matrix
  }

  amplifier(i: number): number {
    return subset(this.matrix, index(i, 0)) as unknown as number
  }

  setAmplifier(i: number, value: number): void {
    this.matrix.subset(index(i, 0), value)
  }

  toString(): string {
    return this.matrix.toString()
  }

  private bitstringToMatrix(bits: string): Matrix {
    if (/^[01+-]+$/.exec(bits)) {
      return bits
        .split("")
        .map((each) => {
          return this.ketVector(each)
        })
        .reduce((result, each) => {
          return sparse(kron(result, each))
        })
    } else {
      return this.ketVector(bits)
    }
  }

  private ketVector(bit: string): Matrix {
    const matrices: { [bit: string]: Matrix | MathType } = {
      "0": matrix([[1], [0]], "sparse"),
      "1": matrix([[0], [1]], "sparse"),
      "+": divide(matrix([[1], [1]], "sparse"), sqrt(2)),
      "-": divide(matrix([[1], [-1]], "sparse"), sqrt(2)),
      i: divide(
        matrix([[1], [complex(0, 1) as unknown as number]], "sparse"),
        sqrt(2),
      ),
      "-i": divide(
        matrix([[1], [complex(0, -1) as unknown as number]], "sparse"),
        sqrt(2),
      ),
    }
    const m = matrices[bit]
    Util.notNull(m)

    return m as Matrix
  }
}
