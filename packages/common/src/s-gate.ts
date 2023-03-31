export const SerializedSGateType = 'S'

export type SerializedSGate = {
  type: typeof SerializedSGateType
  targets: number[]
  controls?: number[]
  antiControls?: number[]
  if?: string
}
