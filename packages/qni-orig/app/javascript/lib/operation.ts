import {
  BlochDisplay,
  ControlGate,
  HGate,
  IGate,
  MeasurementGate,
  PhaseGate,
  QubitLabel,
  RnotGate,
  RxGate,
  RyGate,
  RzGate,
  SwapGate,
  WriteGate,
  XGate,
  YGate,
  ZGate,
} from "lib/instructions"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { HGateElement } from "h_gate_component/hGateElement"
import { MeasurementGateElement } from "measurement_gate_component/measurementGateElement"
import { PhaseGateElement } from "phase_gate_component/phaseGateElement"
import { RnotGateElement } from "rnot_gate_component/rnotGateElement"
import { RxGateElement } from "rx_gate_component/rxGateElement"
import { RyGateElement } from "ry_gate_component/ryGateElement"
import { RzGateElement } from "rz_gate_component/rzGateElement"
import { SwapGateElement } from "swap_gate_component/swapGateElement"
import { WriteGateElement } from "write_gate_component/writeGateElement"
import { XGateElement } from "x_gate_component/xGateElement"
import { YGateElement } from "y_gate_component/yGateElement"
import { ZGateElement } from "z_gate_component/zGateElement"
import { classNameFor } from "lib/base"

export type Instruction =
  | IGate
  | HGate
  | BlochDisplay
  | ControlGate
  | MeasurementGate
  | XGate
  | YGate
  | ZGate
  | PhaseGate
  | QubitLabel
  | RnotGate
  | RxGate
  | RyGate
  | RzGate
  | SwapGate
  | WriteGate

export type InstructionWithElement = Exclude<Instruction, IGate>

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

export const Instruction = {
  create(element?: HTMLElement | Element | null): Instruction {
    if (!element) return new IGate()

    const classList = element.classList
    if (classList.contains(classNameFor("gate:write"))) {
      return new WriteGate(element)
    } else if (classList.contains(classNameFor("gate:hadamard"))) {
      return new HGate(element)
    } else if (classList.contains(classNameFor("gate:not"))) {
      return new XGate(element)
    } else if (classList.contains(classNameFor("gate:y"))) {
      return new YGate(element)
    } else if (classList.contains(classNameFor("gate:z"))) {
      return new ZGate(element)
    } else if (classList.contains(classNameFor("gate:phase"))) {
      return new PhaseGate(element)
    } else if (classList.contains(classNameFor("gate:control"))) {
      return new ControlGate(element)
    } else if (classList.contains(classNameFor("gate:swap"))) {
      return new SwapGate(element)
    } else if (classList.contains(classNameFor("gate:rootNot"))) {
      return new RnotGate(element)
    } else if (classList.contains(classNameFor("gate:rx"))) {
      return new RxGate(element)
    } else if (classList.contains(classNameFor("gate:ry"))) {
      return new RyGate(element)
    } else if (classList.contains(classNameFor("gate:rz"))) {
      return new RzGate(element)
    } else if (classList.contains(classNameFor("gate:measure"))) {
      return new MeasurementGate(element)
    } else if (classList.contains(classNameFor("display:bloch"))) {
      return new BlochDisplay(element)
    }

    throw new Error(`Unknown instruction: ${element.outerHTML}`)
  },
}
