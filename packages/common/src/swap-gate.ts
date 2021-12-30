export const SerializedSwapGateType = 'Swap'

export type SerializedSwapGate = {
  type: typeof SerializedSwapGateType
  targets: number[]
  controls?: number[]
}
