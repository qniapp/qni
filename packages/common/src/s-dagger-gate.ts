export const SerializedSDaggerGateType = 'S†'

export type SerializedSDaggerGate = {
  type: typeof SerializedSDaggerGateType
  targets: number[]
  controls?: number[]
  antiControls?: number[]
  if?: string
}
