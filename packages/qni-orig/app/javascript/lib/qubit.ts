import { Matrix } from "mathjs"

import { matrix, kron, conj, transpose } from "mathjs"
import { sqrt } from "mathjs"
import { complex, divide } from "mathjs"

export class Qubit {
  public matrix: Matrix

  constructor(bits: string | Matrix) {
    if ("string" === typeof bits) {
      this.matrix = this.bitstringToMatrix(bits)
    } else {
      this.matrix = bits
    }
  }

  get bra(): Matrix {
    return conj(transpose(this.matrix))
  }

  get ket(): Matrix {
    return this.matrix
  }

  get nqubit(): number {
    return Math.log2(this.size)
  }

  get size(): number {
    return this.matrix.size()[0]
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
          return kron(result, each)
        })
    } else {
      return this.ketVector(bits)
    }
  }

  private ketVector(bit: string): Matrix {
    const matrices: { [bit: string]: Matrix } = {
      "0": matrix([[1], [0]]),
      "1": matrix([[0], [1]]),
      "+": divide(matrix([[1], [1]]), sqrt(2)) as Matrix,
      "-": divide(matrix([[1], [-1]]), sqrt(2)) as Matrix,
      i: divide(
        matrix([[1], [(complex(0, 1) as unknown) as number]]),
        sqrt(2),
      ) as Matrix,
      "-i": divide(
        matrix([[1], [(complex(0, -1) as unknown) as number]]),
        sqrt(2),
      ) as Matrix,
    }
    const m: Matrix = matrices[bit]
    if (!m) {
      throw new Error(`Unknown bit: ${bit}`)
    }

    return m
  }
}
