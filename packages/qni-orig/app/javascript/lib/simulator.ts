import { Qubit } from "lib/simulator/qubit"
import { SeriarizedInstruction, PhaseGateInstruction } from "lib/editor/gates"

import { Matrix, pow, sum } from "mathjs"
import { abs, arg, round } from "mathjs"
import { add, subtract, divide, multiply } from "mathjs"
import { complex, i } from "mathjs"
import { parse } from "mathjs"
import { pi } from "mathjs"
import { sin, cos } from "mathjs"
import { sqrt } from "mathjs"
import { subset, index } from "mathjs"

export class Simulator {
  public state: Qubit
  public bits: { [bit: number]: number }
  public flags: { [key: string]: boolean }

  constructor(bits: string | Qubit) {
    if ("string" === typeof bits) {
      this.state = new Qubit(bits)
    } else {
      this.state = bits
    }
    this.bits = {}
    this.flags = {}
  }

  runStep(instructions: SeriarizedInstruction[]): Simulator {
    this.applyWriteGates(instructions)
    this.applyReadouts(instructions)
    this.applyCNotGates(instructions)
    this.applyCHadamardGates(instructions)
    this.applyCCNotGates(instructions)
    this.applyCPhaseGates(this.cphaseInstructions(instructions))
    this.applySwapGates(instructions)
    this.applyDownGates(instructions)
    this.applyCSwapGates(instructions)

    instructions.forEach((each, bit) => {
      if (each.type === "qubit-label") {
        return
      } else if (each.type === "write") {
        return
      } else if (each.type === "readout") {
        return
      } else if (each.type === "i-gate") {
        return
      } else if (each.type === "control-gate") {
        return
      } else if (each.type === "hadamard-gate") {
        if (each.controls.length > 0) {
          return
        } else if (each.if) {
          if (this.flags[each.if]) {
            this.h(bit)
          }
        }
        this.h(bit)
        return
      } else if (each.type === "not-gate") {
        if (each.controls.length > 0) {
          return
        } else if (each.if) {
          if (this.flags[each.if]) {
            this.x(bit)
          }
          return
        }
        this.x(bit)
        return
      } else if (each.type === "phase-gate") {
        if (each.targets.length > 0) {
          return
        } else if (each.theta) {
          this.phase(each.theta, bit)
          return
        }
        return
      } else if (each.type === "root-not-gate") {
        this.rnot(bit)
        return
      } else if (each.type === "up-gate" && each.controls.length > 0) {
        return
      } else if (each.type === "down-gate") {
        return
      } else if (each.type === "up-gate") {
        return
      } else if (each.type === "swap-gate") {
        return
      }

      throw new Error("Unknown instruction")
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

  down(target: number): Simulator {
    this.swap(target, target + 1)
    return this
  }

  up(target: number): Simulator {
    this.swap(target, target - 1)
    return this
  }

  cswap(control: number, target0: number, target1: number): Simulator {
    if (this.pZero(control) != 1) this.swap(target0, target1)
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

  magnitude(bit: number): number {
    return round(abs(this.amplitude(bit)), 6)
  }

  degree(bit: number): number {
    return round(multiply(divide(arg(this.amplitude(bit)), pi), 180), 3)
  }

  amplitude(bit: number): number {
    return subset(this.state.matrix, index(bit, 0)) as unknown as number
  }

  private applyWriteGates(instructions: SeriarizedInstruction[]) {
    instructions.forEach((each, i) => {
      if (each.type !== "write") return
      this.write(each.value, i)
    })
  }

  private applyReadouts(instructions: SeriarizedInstruction[]): void {
    instructions.forEach((each, i) => {
      if (each.type !== "readout") return

      this.read(i)
      if (each.set) {
        this.flags[each.set] = this.bits[i] == 1
      }
    })
  }

  private applyCNotGates(instructions: SeriarizedInstruction[]): void {
    instructions.forEach((each, index) => {
      if (each.type === "control-gate" && each.targets.length > 0) {
        const targets = each.targets
        const targetInstruction = instructions[targets[0]]
        if (targetInstruction.type !== "not-gate") {
          return
        }
        const controls = targetInstruction.controls

        if (controls.length == 1) {
          this.cnot(index, ...each.targets)
        }
      }
    })
  }

  private applyCHadamardGates(instructions: SeriarizedInstruction[]): void {
    instructions.forEach((each, index) => {
      if (each.type === "hadamard-gate" && each.controls.length > 0) {
        const target = index
        const targetInstruction = instructions[target]
        if (targetInstruction.type !== "hadamard-gate") {
          return
        }
        const controls = targetInstruction.controls

        if (controls.length >= 1) {
          const allControlsMet = controls
            .map((c) => {
              return this.pZero(c) != 1
            })
            .every((c) => {
              return c
            })
          if (!allControlsMet) return

          Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
            const isHable = controls
              .map((c) => {
                return (bit & (1 << c)) != 0
              })
              .every((c) => {
                return c
              })
            if (!isHable) return

            if ((bit & (1 << target)) == 0) {
              const a0 = bit
              const a1 = a0 ^ (1 << target)
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
    })
  }

  private applyCCNotGates(instructions: SeriarizedInstruction[]): void {
    const doneControls: number[][] = []

    instructions.forEach((each) => {
      if (each.type === "control-gate" && each.targets.length > 0) {
        const targets = each.targets
        const targetInstruction = instructions[targets[0]]
        if (targetInstruction.type !== "not-gate") {
          return
        }
        const controls = targetInstruction.controls

        if (
          doneControls.some((done) => {
            return done.sort().toString() === controls.sort().toString()
          })
        ) {
          return
        }

        if (controls.length >= 2) {
          const allControlsMet = controls
            .map((c) => {
              return this.pZero(c) != 1
            })
            .every((c) => {
              return c
            })
          if (!allControlsMet) return

          targets.forEach((t) => {
            Array.from(Array(2 ** this.state.nqubit).keys()).forEach((bit) => {
              const isXable = controls
                .map((c) => {
                  return (bit & (1 << c)) != 0
                })
                .every((c) => {
                  return c
                })
              if (!isXable) return

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

          doneControls.push(controls.sort())
        }
      }
    })
  }

  private applyCPhaseGates(instructions: PhaseGateInstruction[]): void {
    const doneCPhaseTargets: number[][] = []

    instructions.forEach((each) => {
      if (
        doneCPhaseTargets.some((done) => {
          if (done.length != each.targets.length) return false
          for (let i = 0, n = done.length; i < n; ++i) {
            if (done[i] !== each.targets[i]) return false
          }
          return true
        })
      ) {
        return
      }

      this.cphase(each.theta || "pi", each.targets[0], each.targets[1])

      doneCPhaseTargets.push(each.targets)
    })
  }

  private cphaseInstructions(
    instructions: SeriarizedInstruction[],
  ): PhaseGateInstruction[] {
    return instructions.filter((each) => {
      if (each.type !== "phase-gate" && each.type !== "control-gate") {
        return false
      }
      if (each.targets.length == 0) return false

      return each.targets.every((bit) => {
        return (
          (each.type === "phase-gate" &&
            instructions[bit].type === "phase-gate") ||
          (each.type === "control-gate" &&
            instructions[bit].type === "control-gate")
        )
      })
    }) as PhaseGateInstruction[]
  }

  private applySwapGates(instructions: SeriarizedInstruction[]): void {
    const doneSwapTargets: [number, number][] = []

    instructions.forEach((each) => {
      if (each.type !== "swap-gate") return
      if (each.targets.length == 0) return
      if (
        doneSwapTargets.some((done) => {
          return (
            each.targets &&
            done[0] === each.targets[0] &&
            done[1] === each.targets[1]
          )
        })
      ) {
        return
      }

      this.swap(each.targets[0], each.targets[1])
      doneSwapTargets.push(each.targets)
    })
  }

  private applyDownGates(instructions: SeriarizedInstruction[]): void {
    instructions.forEach((each, index) => {
      if (each.type === "down-gate" && each.controls.length == 0) {
        this.down(index)
      }
    })
  }

  private applyCSwapGates(instructions: SeriarizedInstruction[]): void {
    instructions.forEach((each, index) => {
      if (each.type === "control-gate" && each.targets.length == 2) {
        const targetInstruction = instructions[each.targets[0]]
        if (targetInstruction.type !== "down-gate") {
          return
        }
        this.cswap(index, each.targets[0], each.targets[1])
      }
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

  private multiply(...matrices: Matrix[]): Matrix {
    return matrices.reduce((pre, value) => {
      return multiply(pre, value)
    })
  }
}
