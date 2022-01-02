export const SerializedMeasurementGateType = 'Measure'

export type SerializedMeasurementGate = {
  type: typeof SerializedMeasurementGateType
  targets: number[]
  flag?: string
}
