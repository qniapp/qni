import {Complex} from '@qni/common'
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
export const H = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5))

/**
 * Pauli X gate.
 *
 * ```
 * X = | 0 1 |
 *     | 1 0 |
 * ```
 */
export const X = Matrix.square(0, 1, 1, 0)

/**
 * Pauli Y gate.
 *
 * ```
 * Y = | 0 -i |
 *     | i  0 |
 * ```
 */
export const Y = Matrix.square(0, mi, i, 0)

/**
 * Pauli Z gate.
 *
 * ```
 * Z = | 1  0 |
 *     | 0 -1 |
 * ```
 */
export const Z = Matrix.square(1, 0, 0, -1)

/**
 * S gate.
 *
 * ```
 * S = | 1 0 |
 *     | 0 i |
 * ```
 */
export const S = Matrix.square(1, 0, 0, i)

/**
 * S† gate.
 *
 * ```
 * S† = | 1  0 |
 *      | 0 -i |
 * ```
 */
export const SDagger = Matrix.square(1, 0, 0, mi)

/**
 * T gate.
 *
 * ```
 * T = | 1          0 |
 *     | 0  exp(iπ/4) |
 * ```
 */
export const T = Matrix.square(1, 0, 0, i.times(Math.PI / 4).exp())

/**
 * T† gate.
 *
 * ```
 * T = | 1           0 |
 *     | 0  exp(-iπ/4) |
 * ```
 */
export const TDagger = Matrix.square(1, 0, 0, i.times(Math.PI / -4).exp())
