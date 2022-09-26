import {Range} from './range'

export const SerializedQftDaggerGateType = 'QFT†'

export type SerializedQftDaggerGate = {
  type: typeof SerializedQftDaggerGateType
  span: Range<1, 16>
  targets: number[]
}
