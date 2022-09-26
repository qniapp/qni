import {Range} from './range'

export const SerializedQftGateType = 'QFT'

export type SerializedQftGate = {
  type: typeof SerializedQftGateType
  span: Range<1, 16>
  targets: number[]
}
