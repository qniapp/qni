export const SerializedTGateType = 'T'

export type SerializedTGate = {
  type: typeof SerializedTGateType
  targets: number[]
  controls?: number[]
  if?: string
}
