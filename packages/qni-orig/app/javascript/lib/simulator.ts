import {
  ControlGateInstruction,
  HadamardGateInstruction,
  NotGateInstruction,
  PhaseGateInstruction,
  ReadoutInstruction,
  RootNotGateInstruction,
  SeriarizedInstruction,
  SwapGateInstruction,
  WriteInstruction,
} from "lib/editor/gates"
import { StateVector } from "lib/simulator/stateVector"

import { Complex, pow, sum } from "mathjs"
import { abs, arg, round } from "mathjs"
import { add, subtract, divide, multiply } from "mathjs"
import { complex, i } from "mathjs"
import { parse } from "mathjs"
import { pi } from "mathjs"
import { sin, cos } from "mathjs"
import { sqrt } from "mathjs"

export class Simulator {
  public state: StateVector
  public bits: { [bit: number]: number }
  public flags: { [key: string]: boolean }

  constructor(bits: string | StateVector) {
    if ("string" === typeof bits) {
      this.state = new StateVector(bits)
    } else {
      this.state = bits
    }
    this.bits = {}
    this.flags = {}
  }

  runStep(instructions: SeriarizedInstruction[]): Simulator {
    const doneSwapTargets: [number, number][] = []
    const doneCPhaseTargets: [number, number][] = []

    instructions.forEach((each, bit) => {
      switch (each.type) {
        case "qubit-label":
        case "i-gate":
          break
        case "write":
          this.handleWriteGate(each, bit)
          break
        case "readout":
          this.handleReadoutGate(each, bit)
          break
        case "not-gate":
          this.handleNotGate(each, bit)
          break
        case "root-not-gate":
          this.handleRootNotGate(each, bit)
          break
        case "phase-gate":
          this.handlePhaseGate(each, bit, doneCPhaseTargets)
          break
        case "hadamard-gate":
          this.handleHadamardGate(each, bit)
          break
        case "control-gate":
          this.handleControlGate(each, instructions, doneCPhaseTargets)
          break
        case "swap-gate":
          this.handleSwapGate(each, doneSwapTargets)
          break
        default:
          throw new Error("Unknown instruction")
      }
    })

    return this
  }

  write(value: number, ...targets: number[]): Simulator {
    targets.forEach((t) => {
      const pZero = this.pZero(t)
      if ((value == 0 && pZero == 0) || (value == 1 && pZero == 1)) {
        this.x(t)
      }
    })
    return this
  }

  x(...targets: number[]): Simulator {
    targets.forEach((t) => {
      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va1)
          this.state.setAmplifier(a1, va0)
        }
      })
    })
    return this
  }

  h(...targets: number[]): Simulator {
    targets.forEach((t) => {
      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, divide(add(va0, va1), sqrt(2)) as number)
          this.state.setAmplifier(
            a1,
            divide(subtract(va0, va1), sqrt(2)) as number,
          )
        }
      })
    })
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    const numPhi = parse(phi).evaluate() as number
    const u11 = complex(cos(numPhi), sin(numPhi)) as unknown as number

    targets.forEach((t) => {
      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a1, multiply(u11, va1))
        }
      })
    })
    return this
  }

  rnot(...targets: number[]): Simulator {
    targets.forEach((t) => {
      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            divide(
              add(multiply(subtract(1, i), va0), multiply(add(1, i), va1)),
              2,
            ) as number,
          )
          this.state.setAmplifier(
            a1,
            divide(
              add(multiply(add(1, i), va0), multiply(subtract(1, i), va1)),
              2,
            ) as number,
          )
        }
      })
    })
    return this
  }

  swap(target0: number, target1: number): Simulator {
    this.cnot(target0, target1).cnot(target1, target0).cnot(target0, target1)
    return this
  }

  cswap(control: number, target0: number, target1: number): Simulator {
    this.ccnot(control, target0, target1)
      .ccnot(control, target1, target0)
      .ccnot(control, target0, target1)
    return this
  }

  cnot(control: number, ...targets: number[]): Simulator {
    targets.forEach((t) => {
      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
        if ((bit & (1 << t)) == 0 && (bit & (1 << control)) != 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va1)
          this.state.setAmplifier(a1, va0)
        }
      })
    })
    return this
  }

  ch(control: number, ...targets: number[]): Simulator {
    targets.forEach((t) => {
      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
        if ((bit & (1 << t)) == 0 && (bit & (1 << control)) != 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, divide(sum(va0, va1), sqrt(2)))
          this.state.setAmplifier(
            a1,
            divide(subtract(va0, va1), sqrt(2)) as number,
          )
        }
      })
    })
    return this
  }

  cphase(phi: string, target0: number, target1: number): Simulator {
    const numPhi = parse(phi).evaluate() as number
    const u11 = complex(cos(numPhi), sin(numPhi)) as unknown as number

    Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
      if ((bit & (1 << target0)) == 0 && (bit & (1 << target1)) != 0) {
        const a0 = bit
        const a1 = a0 ^ (1 << target0)
        const va1 = this.state.amplifier(a1)

        this.state.setAmplifier(a1, multiply(u11, va1))
      }
    })
    return this
  }

  ccz(control1: number, control2: number, target: number): Simulator {
    Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
      if (
        (bit & (1 << target)) != 0 &&
        (bit & (1 << control1)) != 0 &&
        (bit & (1 << control2)) != 0
      ) {
        this.state.setAmplifier(bit, multiply(-1, this.state.amplifier(bit)))
      }
    })
    return this
  }

  ccnot(control1: number, control2: number, target: number): Simulator {
    this.h(target).ccz(control1, control2, target).h(target)
    return this
  }

  read(...targets: number[]): Simulator {
    targets.forEach((t) => {
      const pZero = this.pZero(t)
      const rand = Math.random()
      if (rand <= pZero) {
        Array.from(Array(2 ** this.state.nqubit).keys()).map((bit) => {
          if ((bit & (1 << t)) != 0) this.state.setAmplifier(bit, 0)
          this.state.setAmplifier(
            bit,
            divide(this.state.amplifier(bit), sqrt(pZero)),
          )
        })
        this.bits[t] = 0
      } else {
        Array.from(Array(2 ** this.state.nqubit).keys()).map((bit) => {
          if ((bit & (1 << t)) == 0) this.state.setAmplifier(bit, 0)
          this.state.setAmplifier(
            bit,
            divide(this.state.amplifier(bit), sqrt(1 - pZero)),
          )
        })
        this.bits[t] = 1
      }
    })
    return this
  }

  magnitudes(): number[] {
    return this.state.matrix
      .map((each) => {
        return abs(each)
      }, true)
      .toArray()
      .map((each) => {
        return (each as Complex[])[0]
      })
  }

  phases(): number[] {
    return this.state.matrix
      .map((each) => {
        return multiply(divide(arg(each), pi), 180)
      }, true)
      .toArray()
      .map((each) => {
        return (each as Complex[])[0]
      })
  }

  private pZero(target: number): number {
    const value = Array.from(Array(2 ** this.state.nqubit).keys())
      .map((bit) => {
        if ((bit & (1 << target)) == 0) {
          return pow(abs(this.state.amplifier(bit)), 2)
        } else {
          return 0
        }
      })
      .reduce((prev, each) => {
        return add(prev, each)
      }) as number
    return round(value, 5)
  }

  private handleWriteGate(gate: WriteInstruction, bit: number): void {
    this.write(gate.value, bit)
  }

  private handleReadoutGate(gate: ReadoutInstruction, bit: number): void {
    this.read(bit)
    if (gate.set) {
      this.flags[gate.set] = this.bits[bit] == 1
    }
  }

  private handleNotGate(gate: NotGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.x(bit)
        }
      } else {
        this.x(bit)
      }
    } else if (controls.length == 1) {
      this.cnot(controls[0], bit)
    } else {
      const allControlsMet = controls
        .map((c) => {
          return this.pZero(c) != 1
        })
        .every((c) => {
          return c
        })
      if (allControlsMet) {
        Array.from(Array(2 ** this.state.nqubit).keys()).forEach((b) => {
          const isXable = controls
            .map((c) => {
              return (b & (1 << c)) != 0
            })
            .every((c) => {
              return c
            })
          if (!isXable) return

          if ((b & (1 << bit)) == 0) {
            const a0 = b
            const a1 = a0 ^ (1 << bit)
            const va0 = this.state.amplifier(a0)
            const va1 = this.state.amplifier(a1)

            this.state.setAmplifier(a0, va1)
            this.state.setAmplifier(a1, va0)
          }
        })
      }
    }
  }

  private handleRootNotGate(gate: RootNotGateInstruction, bit: number): void {
    if (gate.if) {
      if (this.flags[gate.if]) {
        this.rnot(bit)
      }
    } else {
      this.rnot(bit)
    }
  }

  private handlePhaseGate(
    gate: PhaseGateInstruction,
    bit: number,
    gatesDone: [number, number][],
  ): void {
    const controls = gate.controls
    const targets = gate.targets

    if (controls.length == 0) {
      if (targets.length == 0) {
        if (gate.phi) {
          this.phase(gate.phi, bit)
        }
      } else if (targets.length == 2) {
        if (
          gatesDone.some((done) => {
            return done[0] === targets[0] && done[1] === targets[1]
          })
        ) {
          return
        }
        this.cphase(gate.phi, targets[0], targets[1])
        gatesDone.push(targets)
      }
    } else {
      const allControlsMet = controls
        .map((c) => {
          return this.pZero(c) != 1
        })
        .every((c) => {
          return c
        })
      if (!allControlsMet) return

      Array.from(Array(2 ** this.state.nqubit).keys()).forEach((b) => {
        const isPhasable = controls
          .map((c) => {
            return (b & (1 << c)) != 0
          })
          .every((c) => {
            return c
          })
        if (!isPhasable) return

        const numPhi = parse(gate.phi).evaluate() as number
        const u11 = complex(cos(numPhi), sin(numPhi)) as unknown as number
        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a1, multiply(u11, va1))
        }
      })
    }
  }

  private handleHadamardGate(gate: HadamardGateInstruction, bit: number): void {
    if (gate.controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.h(bit)
        }
      } else {
        this.h(bit)
      }
    } else {
      const controls = gate.controls

      if (controls.length >= 1) {
        const allControlsMet = controls
          .map((c) => {
            return this.pZero(c) != 1
          })
          .every((c) => {
            return c
          })
        if (!allControlsMet) return

        Array.from(Array(2 ** this.state.nqubit).keys()).forEach((b) => {
          const isHable = controls
            .map((c) => {
              return (b & (1 << c)) != 0
            })
            .every((c) => {
              return c
            })
          if (!isHable) return

          if ((b & (1 << bit)) == 0) {
            const a0 = b
            const a1 = a0 ^ (1 << bit)
            const va0 = this.state.amplifier(a0)
            const va1 = this.state.amplifier(a1)

            this.state.setAmplifier(a0, divide(sum(va0, va1), sqrt(2)))
            this.state.setAmplifier(
              a1,
              divide(subtract(va0, va1), sqrt(2)) as number,
            )
          }
        })
      }
    }
  }

  private handleControlGate(
    gate: ControlGateInstruction,
    instructions: SeriarizedInstruction[],
    gatesDone: [number, number][],
  ): void {
    const targets = gate.targets

    if (
      targets.length == 2 &&
      instructions[targets[0]].type === "control-gate" &&
      instructions[targets[1]].type === "control-gate"
    ) {
      if (
        gatesDone.some((done) => {
          return done[0] === targets[0] && done[1] === targets[1]
        })
      ) {
        return
      }

      this.cphase("pi", targets[0], targets[1])
      gatesDone.push(targets)
    }
  }

  private handleSwapGate(
    gate: SwapGateInstruction,
    gatesDone: [number, number][],
  ): void {
    const targets = gate.targets

    if (targets.length != 2) return
    if (
      gatesDone.some((done) => {
        return done[0] === targets[0] && done[1] === targets[1]
      })
    ) {
      return
    }

    if (gate.controls.length == 0) {
      this.swap(targets[0], targets[1])
      gatesDone.push(targets)
    } else if (gate.controls.length == 1) {
      gatesDone.push(targets)
      this.cswap(gate.controls[0], targets[0], targets[1])
    }
  }
}
