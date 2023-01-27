export const SerializedYGateType = 'Y'

export type SerializedYGate = {
  type: typeof SerializedYGateType
  targets: number[]
  controls?: number[]
  antiControls?: number[]
  if?: string
}
