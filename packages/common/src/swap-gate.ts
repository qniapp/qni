export const SerializedSwapGateType = 'Swap'

export type SerializedSwapGate = {
  type: typeof SerializedSwapGateType
  targets: [number, number]
  controls?: number[]
  antiControls?: number[]
}
