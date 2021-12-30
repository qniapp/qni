export const SerializedControlGateType = '•'

export type SerializedControlGate = {
  type: typeof SerializedControlGateType
  targets: number[]
}
