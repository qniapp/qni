import { BlochDisplayElement } from "../components/blochDisplayElement"
import { ControlGateElement } from "../components/controlGateElement"
import { HGateElement } from "../components/hGateElement"
import { MeasurementGateElement } from "../components/measurementGateElement"
import { PhaseGateElement } from "../components/phaseGateElement"
import { RnotGateElement } from "../components/rnotGateElement"
import { RxGateElement } from "../components/rxGateElement"
import { RyGateElement } from "../components/ryGateElement"
import { RzGateElement } from "../components/rzGateElement"
import { SwapGateElement } from "../components/swapGateElement"
import { WriteGateElement } from "../components/writeGateElement"
import { XGateElement } from "../components/xGateElement"
import { YGateElement } from "../components/yGateElement"
import { ZGateElement } from "../components/zGateElement"

export const I_GATE_OPERATION_TYPE = "1"
export const H_GATE_OPERATION_TYPE = "H"
export const X_GATE_OPERATION_TYPE = "X"
export const Y_GATE_OPERATION_TYPE = "Y"
export const Z_GATE_OPERATION_TYPE = "Z"
export const PHASE_GATE_OPERATION_TYPE = "P"
export const RNOT_GATE_OPERATION_TYPE = "X^½"
export const RX_GATE_OPERATION_TYPE = "Rx"
export const RY_GATE_OPERATION_TYPE = "Ry"
export const RZ_GATE_OPERATION_TYPE = "Rz"
export const CONTROL_GATE_OPERATION_TYPE = "•"
export const SWAP_GATE_OPERATION_TYPE = "Swap"
export const BLOCH_DISPLAY_OPERATION_TYPE = "Bloch"
export const WRITE_GATE_OPERATION_TYPE = "Write"
export const WRITE0_GATE_OPERATION_TYPE = "|0>"
export const WRITE1_GATE_OPERATION_TYPE = "|1>"
export const MEASUREMENT_GATE_OPERATION_TYPE = "Measure"

export type IGateOperation = { type: typeof I_GATE_OPERATION_TYPE }

export type HGateOperation = {
  type: typeof H_GATE_OPERATION_TYPE
  controls: number[]
  if: string | null
}

export type XGateOperation = {
  type: typeof X_GATE_OPERATION_TYPE
  controls: number[]
  if: string | null
}

export type YGateOperation = {
  type: typeof Y_GATE_OPERATION_TYPE
  controls: number[]
  if: string | null
}

export type ZGateOperation = {
  type: typeof Z_GATE_OPERATION_TYPE
  controls: number[]
  if: string | null
}

export type PhaseGateOperation = {
  type: typeof PHASE_GATE_OPERATION_TYPE
  phi: string
  controls: number[]
  targets: number[]
  if: string | null
}

export type RnotGateOperation = {
  type: typeof RNOT_GATE_OPERATION_TYPE
  controls: number[]
  if: string | null
}

export type RxGateOperation = {
  type: typeof RX_GATE_OPERATION_TYPE
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

export type RyGateOperation = {
  type: typeof RY_GATE_OPERATION_TYPE
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

export type RzGateOperation = {
  type: typeof RZ_GATE_OPERATION_TYPE
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

export type ControlGateOperation = {
  type: typeof CONTROL_GATE_OPERATION_TYPE
  targets: number[]
}

export type SwapGateOperation = {
  type: typeof SWAP_GATE_OPERATION_TYPE
  targets: [number, number] | []
  controls: number[]
}

export type BlochDisplayOperation = {
  type: typeof BLOCH_DISPLAY_OPERATION_TYPE
}

export type WriteGateOperation = {
  type: typeof WRITE_GATE_OPERATION_TYPE
  value: 0 | 1
}

export type MeasurementOperation = {
  type: typeof MEASUREMENT_GATE_OPERATION_TYPE
  flag: string | null
}

export type CircuitOperation =
  | IGateOperation
  | HGateOperation
  | XGateOperation
  | YGateOperation
  | ZGateOperation
  | PhaseGateOperation
  | RnotGateOperation
  | RxGateOperation
  | RyGateOperation
  | RzGateOperation
  | ControlGateOperation
  | SwapGateOperation
  | BlochDisplayOperation
  | WriteGateOperation
  | MeasurementOperation

export type CircuitOperationElement =
  | HGateElement
  | XGateElement
  | YGateElement
  | ZGateElement
  | PhaseGateElement
  | RnotGateElement
  | RxGateElement
  | RyGateElement
  | RzGateElement
  | ControlGateElement
  | SwapGateElement
  | BlochDisplayElement
  | WriteGateElement
  | MeasurementGateElement
