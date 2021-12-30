export const SerializedRxGateType = 'Rx'

export type SerializedRxGate = {
  type: typeof SerializedRxGateType
  targets: number[]
  angle?: string
  controls?: number[]
  if?: string
}
