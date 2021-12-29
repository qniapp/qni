export const HGateElementType = 'H'

export type SerializedHGate = {
  type: typeof HGateElementType
  targets: number[]
  controls?: number[]
  if?: string
}
