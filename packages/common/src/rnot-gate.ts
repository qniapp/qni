export const SerializedRnotGateType = 'X^½'

export type SerializedRnotGate = {
  type: typeof SerializedRnotGateType
  targets: number[]
  controls?: number[]
  if?: string
}
