export const SerializedQftDaggerGateType = 'QFT†1'

export type SerializedQftDaggerGate = {
  type: typeof SerializedQftDaggerGateType
  targets: number[]
  controls?: number[]
  if?: string
}
