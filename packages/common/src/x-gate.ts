export const SerializedXGateType = 'X'

export type SerializedXGate = {
  type: typeof SerializedXGateType
  targets: number[]
  controls?: number[]
  if?: string
}
