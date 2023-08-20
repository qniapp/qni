import {Complex, radian} from '@qni/common'
import {Matrix} from './matrix'

const i = Complex.I
const mi = i.neg()

/**
 * Hadamard gate.
 *
 * ```
 * H = 1/√2 * | 1  1 |
 *            | 1 -1 |
 * ```
 */
export const H = safeSquareMatrix(1, 1, 1, -1).times(Math.sqrt(0.5))

/**
 * Pauli X gate.
 *
 * ```
 * X = | 0 1 |
 *     | 1 0 |
 * ```
 */
export const X = safeSquareMatrix(0, 1, 1, 0)

/**
 * Pauli Y gate.
 *
 * ```
 * Y = | 0 -i |
 *     | i  0 |
 * ```
 */
export const Y = safeSquareMatrix(0, mi, i, 0)

/**
 * Pauli Z gate.
 *
 * ```
 * Z = | 1  0 |
 *     | 0 -1 |
 * ```
 */
export const Z = safeSquareMatrix(1, 0, 0, -1)

/**
 * S gate.
 *
 * ```
 * S = | 1 0 |
 *     | 0 i |
 * ```
 */
export const S = safeSquareMatrix(1, 0, 0, i)

/**
 * S† gate.
 *
 * ```
 * S† = | 1  0 |
 *      | 0 -i |
 * ```
 */
export const SDagger = S.adjoint()

/**
 * T gate.
 *
 * ```
 * T = | 1          0 |
 *     | 0  exp(iπ/4) |
 * ```
 */
export const T = safeSquareMatrix(1, 0, 0, i.times(Math.PI / 4).exp())

/**
 * T† gate.
 *
 * ```
 * T = | 1           0 |
 *     | 0  exp(-iπ/4) |
 * ```
 */
export const TDagger = T.adjoint()

/**
 * Phase (P) gate.
 *
 * ```
 * P(φ) = | 1        0 |
 *        | 0  exp(iφ) |
 * ```
 */
export function PHASE(phi: string): Matrix {
  const φ = radian(phi)

  return safeSquareMatrix(1, 0, 0, i.times(φ).exp())
}

/**
 * RNOT (√X) gate.
 *
 * ```
 * √X = 1/2 * | 1+i 1-i |
 *            | 1-i 1+i |
 * ```
 */
export const RNOT = safeSquareMatrix(i.plus(1), mi.plus(1), mi.plus(1), i.plus(1)).times(0.5)

/**
 * Rx gate.
 *
 * ```
 * Rx(θ) = | cos(θ/2)   -isin(θ/2) |
 *         | -isin(θ/2)  cos(θ/2)  |
 *
 * e.g.,
 * Rx(π/2) = | cos(π/4)   -isin(π/4) |
 *           | -isin(π/4)  cos(π/4)  |
 *
 *         = 1/√2 * |  1 -i |
 *                  | -i  1 |
 * ```
 */
export function RX(theta: string): Matrix {
  const θ = radian(theta)
  const cosθ2 = Math.cos(θ / 2)
  const sinθ2 = Math.sin(θ / 2)

  return safeSquareMatrix(cosθ2, mi.times(sinθ2), mi.times(sinθ2), cosθ2)
}

/**
 * Ry gate.
 *
 * ```
 * Ry(θ) = | cos(θ/2) -sin(θ/2) |
 *         | sin(θ/2)  cos(θ/2)  |
 *
 * e.g.,
 * Ry(π/2) = | cos(π/4) -sin(π/4) |
 *           | sin(π/4)  cos(π/4) |
 *
 *         = 1/√2 * | 1 -1 |
 *                  | 1  1 |
 * ```
 */
export function RY(theta: string): Matrix {
  const θ = radian(theta)
  const cosθ2 = Math.cos(θ / 2)
  const sinθ2 = Math.sin(θ / 2)

  return safeSquareMatrix(cosθ2, -sinθ2, sinθ2, cosθ2)
}

/**
 * Rz gate.
 *
 * ```
 * Rz(θ) = | exp(-iθ/2)          0 |
 *         |          0  exp(iθ/2) |
 *
 * e.g.,
 * Rz(π/2) = | exp(-iπ/4)          0 |
 *           |          0  exp(iπ/4) |
 *
 *         = 1/√2 * | 1-i   0 |
 *                  |   0 1+i |
 * ```
 */
export function RZ(theta: string): Matrix {
  const θ = radian(theta)

  return safeSquareMatrix(mi.times(θ / 2).exp(), 0, 0, i.times(θ / 2).exp())
}

function safeSquareMatrix(...elements: Array<number | Complex>): Matrix {
  const res = Matrix.square(...elements)

  if (res.isOk()) {
    return res.value
  }

  throw res.error
}
