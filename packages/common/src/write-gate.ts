export const SerializedWrite0GateType = '|0>'
export const SerializedWrite1GateType = '|1>'

// ??? type: 'Write', value: '0' | '1' のようにする？
export type SerializedWriteGate = {
  type: typeof SerializedWrite0GateType | typeof SerializedWrite1GateType
  targets: number[]
}
