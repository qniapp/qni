import { BlochDisplay, BlochDisplayInstruction } from "./blochDisplay"
import { ControlGate, ControlGateInstruction } from "./controlGate"
import { HadamardGate, HadamardGateInstruction } from "./hadamardGate"
import { IGate, IGateInstruction } from "./iGate"
import { InternalError } from "lib/error"
import { MeasureGate, MeasureInstruction } from "./measureGate"
import { NotGate, NotGateInstruction } from "./notGate"
import { PhaseGate, PhaseGateInstruction } from "./phaseGate"
import { QubitLabel, QubitLabelInstruction } from "./qubitLabel"
import { RootNotGate, RootNotGateInstruction } from "./rootNotGate"
import { RxGate, RxGateInstruction } from "./rxGate"
import { RyGate, RyGateInstruction } from "./ryGate"
import { RzGate, RzGateInstruction } from "./rzGate"
import { SwapGate, SwapGateInstruction } from "./swapGate"
import { WriteGate, WriteInstruction } from "./writeGate"
import { YGate, YGateInstruction } from "./yGate"
import { ZGate, ZGateInstruction } from "./zGate"
import { classNameFor } from "lib/base"

export type CircuitElement =
  | BlochDisplay
  | ControlGate
  | HadamardGate
  | IGate
  | MeasureGate
  | NotGate
  | PhaseGate
  | QubitLabel
  | RootNotGate
  | RxGate
  | RyGate
  | RzGate
  | SwapGate
  | WriteGate
  | YGate
  | ZGate

export const CircuitElement = {
  create(element?: HTMLElement | Element | null): CircuitElement {
    if (!element) return new IGate()

    const classList = element.classList
    if (classList.contains("write-gate")) {
      return WriteGate.create(element)
    } else if (classList.contains("hadamard-gate")) {
      return HadamardGate.create(element)
    } else if (classList.contains("not-gate")) {
      return NotGate.create(element)
    } else if (classList.contains("y-gate")) {
      return YGate.create(element)
    } else if (classList.contains("z-gate")) {
      return ZGate.create(element)
    } else if (classList.contains("measure-gate")) {
      return MeasureGate.create(element)
    } else if (classList.contains("phase-gate")) {
      return PhaseGate.create(element)
    } else if (classList.contains("root-not-gate")) {
      return RootNotGate.create(element)
    } else if (classList.contains("control-gate")) {
      return ControlGate.create(element)
    } else if (classList.contains("swap-gate")) {
      return SwapGate.create(element)
    } else if (classList.contains("rx-gate")) {
      return RxGate.create(element)
    } else if (classList.contains("ry-gate")) {
      return RyGate.create(element)
    } else if (classList.contains("rz-gate")) {
      return RzGate.create(element)
    } else if (classList.contains(classNameFor("display:bloch"))) {
      return new BlochDisplay(element)
    }

    throw new InternalError(`Unknown instruction: ${element.outerHTML}`)
  },
}

export type SeriarizedInstruction =
  | BlochDisplayInstruction
  | ControlGateInstruction
  | HadamardGateInstruction
  | IGateInstruction
  | MeasureInstruction
  | NotGateInstruction
  | PhaseGateInstruction
  | QubitLabelInstruction
  | RootNotGateInstruction
  | RxGateInstruction
  | RyGateInstruction
  | RzGateInstruction
  | SwapGateInstruction
  | WriteInstruction
  | YGateInstruction
  | ZGateInstruction
