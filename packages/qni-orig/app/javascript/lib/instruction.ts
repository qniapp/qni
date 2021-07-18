import { BlochDisplay, BlochDisplayInstruction } from "lib/instructions"
import { ControlGate, ControlGateInstruction } from "lib/instructions"
import { HadamardGate, HadamardGateInstruction } from "lib/instructions"
import { IGate, IGateInstruction } from "lib/instructions"
import { InternalError } from "lib/error"
import { MeasureGate, MeasureInstruction } from "lib/instructions"
import { NotGate, NotGateInstruction } from "lib/instructions"
import { PhaseGate, PhaseGateInstruction } from "lib/instructions"
import { QubitLabel, QubitLabelInstruction } from "lib/instructions"
import { RootNotGate, RootNotGateInstruction } from "lib/instructions"
import { RxGate, RxGateInstruction } from "lib/instructions"
import { RyGate, RyGateInstruction } from "lib/instructions"
import { RzGate, RzGateInstruction } from "lib/instructions"
import { SwapGate, SwapGateInstruction } from "lib/instructions"
import { WriteGate, WriteInstruction } from "lib/instructions"
import { YGate, YGateInstruction } from "lib/instructions"
import { ZGate, ZGateInstruction } from "lib/instructions"
import { classNameFor } from "lib/base"

export type Instruction =
  | BlochDisplay
  | ControlGate
  | HadamardGate
  | IGate
  | MeasureGate
  | NotGate
  | YGate
  | ZGate
  | PhaseGate
  | QubitLabel
  | RootNotGate
  | RxGate
  | RyGate
  | RzGate
  | SwapGate
  | WriteGate

export type InstructionWithElement = Exclude<Instruction, IGate>

export type SeriarizedInstruction =
  | BlochDisplayInstruction
  | ControlGateInstruction
  | HadamardGateInstruction
  | IGateInstruction
  | MeasureInstruction
  | NotGateInstruction
  | YGateInstruction
  | ZGateInstruction
  | PhaseGateInstruction
  | QubitLabelInstruction
  | RootNotGateInstruction
  | RxGateInstruction
  | RyGateInstruction
  | RzGateInstruction
  | SwapGateInstruction
  | WriteInstruction

export const Instruction = {
  create(element?: HTMLElement | Element | null): Instruction {
    if (!element) return new IGate()

    const classList = element.classList
    if (classList.contains(classNameFor("gate:write"))) {
      return new WriteGate(element)
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
    } else if (classList.contains(classNameFor("gate:measure"))) {
      return new MeasureGate(element)
    } else if (classList.contains(classNameFor("display:bloch"))) {
      return new BlochDisplay(element)
    }

    throw new InternalError(`Unknown instruction: ${element.outerHTML}`)
  },
}
