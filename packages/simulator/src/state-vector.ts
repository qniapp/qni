import {Complex} from '@qni/common'
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
      const ketPattern = /^.*\|.+>$/
      if (ketPattern.test(bits)) {
        this.matrix = this.ketstringToMatrix(bits)
      } else {
        this.matrix = this.bitstringToMatrix(bits)
      }
    } else {
      this.matrix = bits
    }

    this.size = this.matrix.height
    this.nqubit = Math.log2(this.size)

    this.toWolfram = this.toString
  }

  amplifier(index: number): Complex {
    return this.matrix.element(index, 0)._unsafeUnwrap()
  }

  setAmplifier(index: number, value: Complex): Result<StateVector, Error> {
    const res = this.matrix.set(index, 0, value)
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

  applyControlledGate(
    operation2x2: Matrix,
    qubitIndex: number,
    controls: number[] = [],
    antiControls: number[] = [],
  ): Matrix {
    this.matrix = this.matrix.applyControlledGate(operation2x2, qubitIndex, controls, antiControls)
    return this.matrix
  }

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number): Matrix {
    this.matrix = this.matrix.timesQubitOperation(operation2x2, qubitIndex, controlMask)
    return this.matrix
  }

  toString(): string {
    return this.matrix.toString()
  }
  toWolfram = this.toString.bind(this)

  private bitstringToMatrix(bitString: string): Matrix {
    let paren = false
    let parenToken = ''
    const kets = []
    const invalidBitStringError = new Error(`Invalid StateVector bit string: ${bitString}`)

    for (const char of bitString.split('')) {
      switch (char) {
        case '0': {
          if (paren) throw invalidBitStringError
          kets.push(Matrix.column_vector(1, 0)._unsafeUnwrap())
          break
        }
        case '1': {
          if (paren) throw invalidBitStringError
          kets.push(Matrix.column_vector(0, 1)._unsafeUnwrap())
          break
        }
        case '+': {
          if (paren) throw invalidBitStringError
          kets.push(Matrix.column_vector(1, 1)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap())
          break
        }
        case '-': {
          if (paren) {
            parenToken += '-'
          } else {
            kets.push(Matrix.column_vector(1, -1)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap())
          }
          break
        }
        case 'i': {
          if (paren) {
            parenToken += 'i'
          } else {
            kets.push(Matrix.column_vector(1, new Complex(0, 1))._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap())
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
          kets.push(Matrix.column_vector(1, new Complex(0, -1))._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap())
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

  private ketstringToMatrix(ket: string): Matrix {
    const match = ket.match(/^(.*)\|(.+)>$/)
    if (match === null) {
      throw new Error(`ketString: invalid ket ${ket}`)
    }
    const coefLabel = match[1]
    const ketLabel = match[2]

    if (coefLabel === '') {
      return this.bitstringToMatrix(ketLabel)
    } else {
      let coef: number | Complex
      if (coefLabel === '-') {
        coef = -1
      } else if (coefLabel === 'i') {
        coef = Complex.I
      } else if (coefLabel === '-i') {
        coef = Complex.I.times(-1)
      } else {
        throw new Error(`ketString: invalid coef ${coefLabel}`)
      }

      const vector = new StateVector(ketLabel).matrix.mult(coef)

      if (vector.isErr()) {
        throw new Error(`ketString: invalid ket ${ketLabel}`)
      }

      return vector.value
    }
  }

  qubitDensityMatrix(qubitIndex: number): Matrix {
    if (qubitIndex < 0 || qubitIndex >= this.nqubit) {
      throw new Error(`Qubit index out of range: ${qubitIndex}`)
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
          .element(ket, 0)
          ._unsafeUnwrap()
          .times(this.matrix.element(bra, 0)._unsafeUnwrap().conjugate())
        if (amp.isEqualTo(0)) continue

        const ketMat =
          removeBits(ket, traceBits) === 0
            ? Matrix.column_vector(1, 0)._unsafeUnwrap()
            : Matrix.column_vector(0, 1)._unsafeUnwrap()
        const braMat =
          removeBits(bra, traceBits) === 0
            ? Matrix.rows([[1, 0]])._unsafeUnwrap()
            : Matrix.rows([[0, 1]])._unsafeUnwrap()
        const ketBra = ketMat.mult(braMat)._unsafeUnwrap()

        densityMatrix = densityMatrix.add(ketBra.mult(amp)._unsafeUnwrap())._unsafeUnwrap()
      }
    }

    return densityMatrix
  }
}
