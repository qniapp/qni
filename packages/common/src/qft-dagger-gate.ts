import {ResizeableSpan} from './numeric-range'

export const SerializedQftDaggerGateType = 'QFT†'

export type SerializedQftDaggerGate = {
  type: typeof SerializedQftDaggerGateType
  span: ResizeableSpan
  targets: number[]
}
