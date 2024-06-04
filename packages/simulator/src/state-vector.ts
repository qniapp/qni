import {Complex, DetailedError, Util} from '@qni/common'
import {Matrix} from './matrix'
import {ok, err, Result} from 'neverthrow'

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

  setAmplifier(index: number, value: Complex): Result<StateVector, Error> {
    const res = this.matrix.set(0, index, value)
    if (res.isErr()) {
      return err(Error(res.error.message))
    }

    return ok(this)
  }

  blochVector(bit: number): [number, number, number] {
    return this.qubitDensityMatrix(bit).qubitDensityMatrixToBlochVector()
  }

  isApproximatelyEqualTo(other: StateVector | unknown, epsilon: number): boolean {
    return other instanceof StateVector && this.matrix.nearlyEq(other.matrix, epsilon)
  }

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number): Matrix {
    Util.need((controlMask & (1 << qubitIndex)) === 0, 'Matrix.timesQubitOperation: self-controlled')
    Util.need(operation2x2.width === 2 && operation2x2.height === 2, 'Matrix.timesQubitOperation: not 2x2')

    const {width: w, height: h, buffer: old} = this.matrix
    const [ar, ai, br, bi, cr, ci, dr, di] = operation2x2.buffer

    Util.need(h >= 2 << qubitIndex, 'Matrix.timesQubitOperation: qubit index out of range')

    const buf = new Float64Array(old)
    let i = 0
    for (let r = 0; r < h; r++) {
      const isControlled = ((controlMask & r) ^ controlMask) !== 0
      const qubitVal = (r & (1 << qubitIndex)) !== 0
      for (let c = 0; c < w; c++) {
        if (!isControlled && !qubitVal) {
          const j = i + (1 << qubitIndex) * 2 * w
          const xr = buf[i]
          const xi = buf[i + 1]
          const yr = buf[j]
          const yi = buf[j + 1]

          buf[i] = xr * ar - xi * ai + yr * br - yi * bi
          buf[i + 1] = xr * ai + xi * ar + yr * bi + yi * br
          buf[j] = xr * cr - xi * ci + yr * dr - yi * di
          buf[j + 1] = xr * ci + xi * cr + yr * di + yi * dr
        }
        i += 2
      }
    }

    this.matrix = new Matrix(w, h, buf)
    return this.matrix
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
          kets.push(Matrix.col(1, 1).mult(Math.sqrt(0.5))._unsafeUnwrap())
          break
        }
        case '-': {
          if (paren) {
            parenToken += '-'
          } else {
            kets.push(Matrix.col(1, -1).mult(Math.sqrt(0.5))._unsafeUnwrap())
          }
          break
        }
        case 'i': {
          if (paren) {
            parenToken += 'i'
          } else {
            kets.push(Matrix.col(1, new Complex(0, 1)).mult(Math.sqrt(0.5))._unsafeUnwrap())
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
          kets.push(Matrix.col(1, new Complex(0, -1)).mult(Math.sqrt(0.5))._unsafeUnwrap())
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

    let densityMatrix = Matrix.build(2, 2)._unsafeUnwrap()

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
        const ketBra = ketMat.mult(braMat)._unsafeUnwrap()

        densityMatrix = densityMatrix.add(ketBra.mult(amp)._unsafeUnwrap())._unsafeUnwrap()
      }
    }

    return densityMatrix
  }
}
