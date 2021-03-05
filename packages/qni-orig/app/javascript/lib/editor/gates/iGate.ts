import { Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"

export type IGateInstruction = { type: "i-gate" }

export class IGate extends Mixin(Instructionable) {
  serialize(): IGateInstruction {
    return { type: "i-gate" }
  }
}
