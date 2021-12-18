import {Complex, Util} from '@qni/common'
import {Matrix} from './matrix'

export class StateVector {
  public matrix: Matrix
  public size: number
  public nqubit: number

  constructor(bits: string | Matrix) {
    if ('string' === typeof bits) {
      this.matrix = this.bitstringToMatrix(bits)
    } else {
      this.matrix = bits
    }

    this.size = this.matrix.height
    this.nqubit = Math.log2(this.size)
  }

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number): void {
    this.matrix = this.matrix.timesQubitOperation(operation2x2, qubitIndex, controlMask, controlMask)
  }

  blochVector(bit: number): [number, number, number] {
    return this.matrix.qubitDensityMatrix(bit).qubitDensityMatrixToBlochVector()
  }

  get bra(): Matrix {
    return this.matrix.adjoint()
  }

  get ket(): Matrix {
    return this.matrix
  }

  amplifier(index: number): Complex {
    return this.matrix.cell(0, index)
  }

  setAmplifier(index: number, value: Complex): void {
    this.matrix.set(0, index, value)
  }

  isApproximatelyEqualTo(other: StateVector | unknown, epsilon: number): boolean {
    return other instanceof StateVector && this.matrix.isApproximatelyEqualTo(other.matrix, epsilon)
  }

  toString(): string {
    return this.matrix.toString()
  }

  private bitstringToMatrix(bitString: string): Matrix {
    if (/^[01+-]+$/.exec(bitString)) {
      return bitString
        .split('')
        .map(each => this.ketVector(each))
        .reduce((result, each) => result.tensorProduct(each))
    } else {
      return this.ketVector(bitString)
    }
  }

  private ketVector(bitChar: string): Matrix {
    const matrices: {[bit: string]: Matrix} = {
      '0': Matrix.col(1, 0),
      '1': Matrix.col(0, 1),
      '+': Matrix.col(1, 1).times(Math.sqrt(0.5)),
      '-': Matrix.col(1, -1).times(Math.sqrt(0.5)),
      i: Matrix.col(1, new Complex(0, 1)).times(Math.sqrt(0.5)),
      '-i': Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5))
    }
    const m = matrices[bitChar]
    Util.notNull(m)

    return m
  }
}
