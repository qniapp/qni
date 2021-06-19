import { Qubit } from "lib/simulator/qubit"
import { SeriarizedInstruction } from "lib/editor/gates"

import { pow, sum } from "mathjs"
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
    const doneSwapTargets: [number, number][] = []
    const doneCPhaseTargets: [number, number][] = []

    instructions.forEach((each, bit) => {
      switch (each.type) {
        case "qubit-label":
          break
        case "i-gate":
          break
        case "write":
          this.write(each.value, bit)
          break
        case "readout":
          this.read(bit)
          if (each.set) {
            this.flags[each.set] = this.bits[bit] == 1
          }
          break
        case "not-gate": {
          const controls = each.controls

          if (controls.length == 0) {
            if (each.if && this.flags[each.if]) {
              this.x(bit)
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
          break
        }
        case "root-not-gate":
          if (each.if) {
            if (this.flags[each.if]) {
              this.rnot(bit)
            }
            break
          }
          this.rnot(bit)
          break
        case "phase-gate": {
          const targets = each.targets

          if (targets.length == 0) {
            if (each.phi) {
              this.phase(each.phi, bit)
            }
          } else if (targets.length == 2) {
            if (
              doneCPhaseTargets.some((done) => {
                return done[0] === targets[0] && done[1] === targets[1]
              })
            ) {
              break
            }
            this.cphase(each.phi, targets[0], targets[1])
            doneCPhaseTargets.push(targets)
          }
          break
        }
        case "hadamard-gate": {
          if (each.controls.length == 0) {
            if (each.if) {
              if (this.flags[each.if]) {
                this.h(bit)
              }
              break
            }
            this.h(bit)
            break
          } else {
            const target = bit
            const targetInstruction = instructions[target]
            if (targetInstruction.type !== "hadamard-gate") {
              break
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

              Array.from(Array(2 ** this.state.nqubit).keys()).forEach((b) => {
                const isHable = controls
                  .map((c) => {
                    return (b & (1 << c)) != 0
                  })
                  .every((c) => {
                    return c
                  })
                if (!isHable) return

                if ((b & (1 << target)) == 0) {
                  const a0 = b
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
          break
        }
        case "control-gate": {
          const targets = each.targets

          if (
            targets.length == 2 &&
            instructions[targets[0]].type === "control-gate" &&
            instructions[targets[1]].type === "control-gate"
          ) {
            if (
              doneCPhaseTargets.some((done) => {
                return done[0] === targets[0] && done[1] === targets[1]
              })
            ) {
              break
            }

            this.cphase("pi", targets[0], targets[1])
            doneCPhaseTargets.push(targets)
          }
          break
        }
        case "swap-gate": {
          const targets = each.targets

          if (targets.length != 2) break
          if (
            doneSwapTargets.some((done) => {
              return done[0] === targets[0] && done[1] === targets[1]
            })
          ) {
            break
          }

          if (each.controls.length == 0) {
            this.swap(targets[0], targets[1])
            doneSwapTargets.push(targets)
          } else if (each.controls.length == 1) {
            doneSwapTargets.push(targets)
            this.cswap(each.controls[0], targets[0], targets[1])
          }
          break
        }
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

  magnitude(bit: number): number {
    return round(abs(this.amplitude(bit)), 6)
  }

  degree(bit: number): number {
    return round(multiply(divide(arg(this.amplitude(bit)), pi), 180), 3)
  }

  amplitude(bit: number): number {
    return subset(this.state.matrix, index(bit, 0)) as unknown as number
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
}
