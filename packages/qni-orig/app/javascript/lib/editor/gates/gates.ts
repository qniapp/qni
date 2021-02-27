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

export type Instruction =
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

export const Instruction = {
  create(element?: HTMLElement | Element | null): Instruction {
    if (!element) return new IGate()

    const classList = element.classList
    if (classList.contains("write-gate")) {
      return new WriteGate(element)
    } else if (classList.contains("hadamard-gate")) {
      return new HadamardGate(element)
    } else if (classList.contains("not-gate")) {
      return new NotGate(element)
    } else if (classList.contains("readout-gate")) {
      return new ReadoutGate(element)
    } else if (classList.contains("phase-gate")) {
      return new PhaseGate(element)
    } else if (classList.contains("root-not-gate")) {
      return new RootNotGate(element)
    } else if (classList.contains("control-gate")) {
      return new ControlGate(element)
    } else if (classList.contains("down-gate")) {
      return new DownGate(element)
    } else if (classList.contains("up-gate")) {
      return new UpGate(element)
    } else if (classList.contains("swap-gate")) {
      return new SwapGate(element)
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
