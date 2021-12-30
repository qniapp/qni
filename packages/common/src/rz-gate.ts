export const SerializedRzGateType = 'Rz'

export type SerializedRzGate = {
  type: typeof SerializedRzGateType
  targets: number[]
  angle?: string
  controls?: number[]
  if?: string
}
