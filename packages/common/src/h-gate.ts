export const SerializedHGateType = 'H'

export type SerializedHGate = {
  type: typeof SerializedHGateType
  targets: number[]
  controls?: number[]
  antiControls?: number[]
  if?: string
}
