import { CcnotStep } from "lib/ccnotStep"
import { CnotStep } from "lib/cnotStep"
import { CphaseStep } from "lib/cphaseStep"
import { CswapStep } from "lib/cswapStep"
import { HStep } from "lib/hStep"
import { IStep } from "lib/iStep"
import { PhaseStep } from "lib/phaseStep"
import { Qubit } from "lib/qubit"
import { ReadStep } from "lib/readStep"
import { RnotStep } from "lib/rnotStep"
import { SwapStep } from "lib/swapStep"
import { WriteStep } from "lib/writeStep"
import { XStep } from "lib/xStep"

import { abs, arg, round } from "mathjs"
import { subset, index } from "mathjs"
import { divide, multiply } from "mathjs"
import { pi } from "mathjs"

export class Circuit {
  public state: Qubit

  constructor(bits: string | Qubit) {
    if ("string" === typeof bits) {
      this.state = new Qubit(bits)
    } else {
      this.state = bits
    }
  }

  nop(): Circuit {
    return this
  }

  write(
    valueOrTargets: number | { [bit: number]: number },
    ...targets: number[]
  ): Circuit {
    const qubit = new WriteStep().run(this.state, valueOrTargets, ...targets)

    return new Circuit(qubit)
  }

  read(
    ...targets: number[]
  ): { circuit: Circuit; bits: { [bit: number]: number } } {
    const result = new ReadStep().run(this.state, ...targets)

    return { circuit: new Circuit(result.qubit), bits: result.bits }
  }

  i(...targets: number[]): Circuit {
    const qubit = new IStep().run(this.state, targets)

    return new Circuit(qubit)
  }

  x(...targets: number[]): Circuit {
    const qubit = new XStep().run(this.state, targets)

    return new Circuit(qubit)
  }

  h(...targets: number[]): Circuit {
    const qubit = new HStep().run(this.state, targets)

    return new Circuit(qubit)
  }

  phase(theta: string, ...targets: number[]): Circuit {
    const qubit = new PhaseStep().run(this.state, theta, targets)

    return new Circuit(qubit)
  }

  rnot(...targets: number[]): Circuit {
    const qubit = new RnotStep().run(this.state, targets)

    return new Circuit(qubit)
  }

  cnot(control: number, targets: number[]): Circuit {
    const qubit = new CnotStep().run(this.state, control, targets)

    return new Circuit(qubit)
  }

  cphase(theta: string, targets: number[]): Circuit {
    const qubit = new CphaseStep().run(this.state, theta, targets)

    return new Circuit(qubit)
  }

  swap(target0: number, target1: number): Circuit {
    const qubit = new SwapStep().run(this.state, target0, target1)

    return new Circuit(qubit)
  }

  down(target: number): Circuit {
    const qubit = new SwapStep().run(this.state, target, target + 1)

    return new Circuit(qubit)
  }

  up(target: number): Circuit {
    const qubit = new SwapStep().run(this.state, target - 1, target)

    return new Circuit(qubit)
  }

  ccnot(controls: number[], target: number): Circuit {
    const qubit = new CcnotStep().apply(this.state, controls, target)

    return new Circuit(qubit)
  }

  cswap(control: number, targets: number[]): Circuit {
    const qubit = new CswapStep().apply(this.state, control, targets)

    return new Circuit(qubit)
  }

  magnitude(bit: number): number {
    return round(abs(this.amplitude(bit)), 3)
  }

  degree(bit: number): number {
    return round(multiply(divide(arg(this.amplitude(bit)), pi), 180), 3)
  }

  amplitude(bit: number): number {
    return (subset(this.state.matrix, index(bit, 0)) as unknown) as number
  }
}
