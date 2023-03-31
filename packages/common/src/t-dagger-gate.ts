export const SerializedTDaggerGateType = 'T†'

export type SerializedTDaggerGate = {
  type: typeof SerializedTDaggerGateType
  targets: number[]
  controls?: number[]
  antiControls?: number[]
  if?: string
}
