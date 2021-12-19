import {Complex} from '@qni/common'
import {Matrix} from './matrix'

export class StateVector {
  public matrix: Matrix
  public size: number
  public nqubit: number

  get bra(): Matrix {
    return this.matrix.adjoint()
  }

  get ket(): Matrix {
    return this.matrix
  }

  constructor(bits: string | Matrix) {
    if ('string' === typeof bits) {
      this.matrix = this.bitstringToMatrix(bits)
    } else {
      this.matrix = bits
    }

    this.size = this.matrix.height
    this.nqubit = Math.log2(this.size)
  }

  amplifier(index: number): Complex {
    return this.matrix.cell(0, index)
  }

  setAmplifier(index: number, value: Complex): void {
    this.matrix.set(0, index, value)
  }

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number): void {
    this.matrix = this.matrix.timesQubitOperation(operation2x2, qubitIndex, controlMask, controlMask)
  }

  blochVector(bit: number): [number, number, number] {
    return this.matrix.qubitDensityMatrix(bit).qubitDensityMatrixToBlochVector()
  }

  isApproximatelyEqualTo(other: StateVector | unknown, epsilon: number): boolean {
    return other instanceof StateVector && this.matrix.isApproximatelyEqualTo(other.matrix, epsilon)
  }

  toString(): string {
    return this.matrix.toString()
  }

  private bitstringToMatrix(bitString: string): Matrix {
    let paren = false
    let parenToken = ''
    const kets = []

    for (const char of bitString.split('')) {
      switch (char) {
        case '0': {
          if (paren) throw new Error(`Invalid bit string: ${bitString}`)
          kets.push(Matrix.col(1, 0))
          break
        }
        case '1': {
          if (paren) throw new Error(`Invalid bit string: ${bitString}`)
          kets.push(Matrix.col(0, 1))
          break
        }
        case '+': {
          if (paren) throw new Error(`Invalid bit string: ${bitString}`)
          kets.push(Matrix.col(1, 1).times(Math.sqrt(0.5)))
          break
        }
        case '-': {
          if (paren) {
            parenToken += '-'
          } else {
            kets.push(Matrix.col(1, -1).times(Math.sqrt(0.5)))
          }
          break
        }
        case 'i': {
          if (paren) {
            parenToken += 'i'
          } else {
            kets.push(Matrix.col(1, new Complex(0, 1)).times(Math.sqrt(0.5)))
          }
          break
        }
        case '(': {
          if (paren) throw new Error(`Invalid bit string: ${bitString}`)
          paren = true
          parenToken = ''
          break
        }
        case ')': {
          if (!paren) throw new Error(`Invalid bit string: ${bitString}`)
          if (parenToken !== '-i') throw new Error(`Invalid bit string: ${bitString}`)
          kets.push(Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5)))
          paren = false
          break
        }
      }
    }

    return kets.reduce((result, each) => result.tensorProduct(each))
  }
}
