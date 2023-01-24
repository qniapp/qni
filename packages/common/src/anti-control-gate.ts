export const SerializedAntiControlGateType = '◦'

export type SerializedAntiControlGate = {
  type: typeof SerializedAntiControlGateType
  targets: number[]
}
