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
    } else if (classList.contains(classNameFor("gate:hadamard"))) {
      return new HadamardGate(element)
    } else if (classList.contains(classNameFor("gate:not"))) {
      return new NotGate(element)
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
      return new RootNotGate(element)
    } else if (classList.contains(classNameFor("gate:rx"))) {
      return new RxGate(element)
    } else if (classList.contains(classNameFor("gate:ry"))) {
      return new RyGate(element)
    } else if (classList.contains(classNameFor("gate:rz"))) {
      return new RzGate(element)
    } else if (classList.contains("measure-gate")) {
      return MeasureGate.create(element)
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
