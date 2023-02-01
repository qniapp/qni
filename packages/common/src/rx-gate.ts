export const SerializedRxGateType = 'Rx'

export type SerializedRxGate = {
  type: typeof SerializedRxGateType
  targets: number[]
  angle?: string
  controls?: number[]
  antiControls?: number[]
  if?: string
}
