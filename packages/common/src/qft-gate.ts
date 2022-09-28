import {ResizeableSpan} from './numeric-range'

export const SerializedQftGateType = 'QFT'

export type SerializedQftGate = {
  type: typeof SerializedQftGateType
  span: ResizeableSpan
  targets: number[]
}
