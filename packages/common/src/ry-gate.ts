export const SerializedRyGateType = 'Ry'

export type SerializedRyGate = {
  type: typeof SerializedRyGateType
  targets: number[]
  angle?: string
  controls?: number[]
  antiControls?: number[]
  if?: string
}
