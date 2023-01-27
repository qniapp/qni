export const SerializedZGateType = 'Z'

export type SerializedZGate = {
  type: typeof SerializedZGateType
  targets: number[]
  controls?: number[]
  antiControls?: number[]
  if?: string
}
