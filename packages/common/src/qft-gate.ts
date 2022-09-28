export const SerializedQftGateType = 'QFT1'

export type SerializedQftGate = {
  type: typeof SerializedQftGateType
  targets: number[]
  controls?: number[]
  if?: string
}
