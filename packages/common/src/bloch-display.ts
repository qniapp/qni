export const SerializedBlochDisplayType = 'Bloch'

export type SerializedBlochDisplay = {
  type: typeof SerializedBlochDisplayType
  targets: number[]
}
