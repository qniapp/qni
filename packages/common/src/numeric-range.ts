import {Config} from './config'

export type CreateArrayWithLengthX<LENGTH extends number, ACC extends unknown[] = []> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>

export type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never
> = START_ARR['length'] extends END ? ACC | END : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>

export type ResizeableSpan = NumericRange<CreateArrayWithLengthX<1>, typeof Config.MAX_QUBIT_COUNT>

export const isResizeableSpan = (arg: unknown): arg is ResizeableSpan =>
  typeof arg == 'number' && 1 <= arg && arg <= Config.MAX_QUBIT_COUNT
