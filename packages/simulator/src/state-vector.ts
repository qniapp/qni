import {Complex, DetailedError} from '@qni/common'
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
    return this.matrix.element(0, index)._unsafeUnwrap()
  }

  setAmplifier(index: number, value: Complex): void {
    this.matrix.set(0, index, value)
  }

  blochVector(bit: number): [number, number, number] {
    return this.qubitDensityMatrix(bit).qubitDensityMatrixToBlochVector()
  }

  isApproximatelyEqualTo(other: StateVector | unknown, epsilon: number): boolean {
    return other instanceof StateVector && this.matrix.isApproximatelyEqualTo(other.matrix, epsilon)
  }

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number): void {
    this.matrix = this.matrix.timesQubitOperation(operation2x2, qubitIndex, controlMask, controlMask)
  }

  toString(): string {
    return this.matrix.toString()
  }

  private bitstringToMatrix(bitString: string): Matrix {
    let paren = false
    let parenToken = ''
    const kets = []
    const invalidBitStringError = new DetailedError('Invalid StateVector bit string', bitString)

    for (const char of bitString.split('')) {
      switch (char) {
        case '0': {
          if (paren) throw invalidBitStringError
          kets.push(Matrix.col(1, 0))
          break
        }
        case '1': {
          if (paren) throw invalidBitStringError
          kets.push(Matrix.col(0, 1))
          break
        }
        case '+': {
          if (paren) throw invalidBitStringError
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
          if (paren) throw invalidBitStringError
          paren = true
          parenToken = ''
          break
        }
        case ')': {
          if (!paren) throw invalidBitStringError
          if (parenToken !== '-i') throw invalidBitStringError
          kets.push(Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5)))
          paren = false
          break
        }
        default:
          throw invalidBitStringError
      }
    }

    if (kets.length === 0) throw invalidBitStringError
    return kets.reduce((result, each) => result.tensorProduct(each))
  }

  qubitDensityMatrix(qubitIndex: number): Matrix {
    if (qubitIndex < 0 || qubitIndex >= this.nqubit) {
      throw new DetailedError('Qubit index out of range', qubitIndex)
    }

    const traceBits = [...Array(Math.log2(this.matrix.height)).keys()].filter(each => each !== qubitIndex)
    const removeBits = (num: number, bits: number[]) => {
      return bits
        .sort()
        .reverse()
        .reduce((result, each) => {
          let mask = result >> (each + 1)
          mask = mask << each
          const right = ((1 << each) - 1) & result

          return mask | right
        }, num)
    }

    let densityMatrix = Matrix.zero(2, 2)._unsafeUnwrap()

    for (let bra = 0; bra < this.matrix.height; bra++) {
      for (let ket = 0; ket < this.matrix.height; ket++) {
        const survived = traceBits.every(b => {
          return ((bra >> b) & 1) === ((ket >> b) & 1)
        })
        if (!survived) continue

        const amp = this.matrix
          .element(0, ket)
          ._unsafeUnwrap()
          .times(this.matrix.element(0, bra)._unsafeUnwrap().conjugate())
        if (amp.isEqualTo(0)) continue

        const ketMat = removeBits(ket, traceBits) === 0 ? Matrix.col(1, 0) : Matrix.col(0, 1)
        const braMat = removeBits(bra, traceBits) === 0 ? Matrix.row(1, 0) : Matrix.row(0, 1)
        const ketBra = ketMat.times(braMat)

        densityMatrix = densityMatrix.plus(ketBra.times(amp))
      }
    }

    return densityMatrix
  }
}
