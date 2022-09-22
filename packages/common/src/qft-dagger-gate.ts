export const SerializedQftDaggerGateType = 'QFT†'

export type SerializedQftDaggerGate = {
  type: typeof SerializedQftDaggerGateType
  targets: number[]
  controls?: number[]
  if?: string
}
