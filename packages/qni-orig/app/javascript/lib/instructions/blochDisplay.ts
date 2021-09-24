import {
  BLOCH_DISPLAY_OPERATION_TYPE,
  BlochDisplayOperation,
} from "lib/operation"
import { InstructionWithElement } from "./instructionWithElement"
import { classNameFor } from "lib/base"

export class BlochDisplay extends InstructionWithElement {
  static readonly elementClassName = classNameFor("display:bloch")

  serialize(): BlochDisplayOperation {
    return {
      type: BLOCH_DISPLAY_OPERATION_TYPE,
    }
  }

  toJson(): string {
    return `"${BLOCH_DISPLAY_OPERATION_TYPE}"`
  }
}
