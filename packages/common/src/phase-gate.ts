export const SerializedPhaseGateType = 'P'

export type SerializedPhaseGate = {
  type: typeof SerializedPhaseGateType
  angle?: string
  targets: number[]
  controls?: number[]
}
