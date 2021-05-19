import { ControlGate, ControlGateInstruction } from "./controlGate"
import { DownGate, DownGateInstruction } from "./downGate"
import { HadamardGate, HadamardGateInstruction } from "./hadamardGate"
import { IGate, IGateInstruction } from "./iGate"
import { InternalError } from "lib/error"
import { NotGate, NotGateInstruction } from "./notGate"
import { PhaseGate, PhaseGateInstruction } from "./phaseGate"
import { QubitLabel, QubitLabelInstruction } from "./qubitLabel"
import { ReadoutGate, ReadoutInstruction } from "./readoutGate"
import { RootNotGate, RootNotGateInstruction } from "./rootNotGate"
import { SwapGate, SwapGateInstruction } from "./swapGate"
import { UpGate, UpGateInstruction } from "./upGate"
import { WriteGate, WriteInstruction } from "./writeGate"

export type CircuitElement =
  | QubitLabel
  | IGate
  | NotGate
  | HadamardGate
  | PhaseGate
  | ControlGate
  | RootNotGate
  | ReadoutGate
  | WriteGate
  | DownGate
  | UpGate
  | DownGate
  | SwapGate

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
    } else if (classList.contains("readout-gate")) {
      return ReadoutGate.create(element)
    } else if (classList.contains("phase-gate")) {
      return PhaseGate.create(element)
    } else if (classList.contains("root-not-gate")) {
      return RootNotGate.create(element)
    } else if (classList.contains("control-gate")) {
      return ControlGate.create(element)
    } else if (classList.contains("down-gate")) {
      return DownGate.create(element)
    } else if (classList.contains("up-gate")) {
      return UpGate.create(element)
    } else if (classList.contains("swap-gate")) {
      return SwapGate.create(element)
    }

    throw new InternalError(`Unknown instruction: ${element.outerHTML}`)
  },
}

export type SeriarizedInstruction =
  | QubitLabelInstruction
  | IGateInstruction
  | NotGateInstruction
  | HadamardGateInstruction
  | PhaseGateInstruction
  | ControlGateInstruction
  | RootNotGateInstruction
  | ReadoutInstruction
  | WriteInstruction
  | DownGateInstruction
  | UpGateInstruction
  | DownGateInstruction
  | SwapGateInstruction
