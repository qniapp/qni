import { applyMixins } from "lib/base"
import { Instructionable } from "./mixins"

export type IGateInstruction = { type: "i-gate" }

export class IGate {
  serialize(): IGateInstruction {
    return { type: "i-gate" }
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGate extends Instructionable {}
applyMixins(IGate, [Instructionable])
