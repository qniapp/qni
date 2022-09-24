export const SerializedQftGateType = 'QFT'

export type SerializedQftGate = {
  type: typeof SerializedQftGateType
  nqubit: number
  targets: number[]
  controls?: number[]
}
