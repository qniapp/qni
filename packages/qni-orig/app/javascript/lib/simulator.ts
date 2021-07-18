import { Complex, Matrix } from "./math"
import { SeriarizedInstruction } from "lib/instruction"
import { StateVector } from "lib/simulator/stateVector"
import {
  BLOCH_DISPLAY_INSTRUCTION_TYPE,
  CONTROL_GATE_INSTRUCTION_TYPE,
  HADAMARD_GATE_INSTRUCTION_TYPE,
  I_GATE_INSTRUCTION_TYPE,
  MEASURE_GATE_INSTRUCTION_TYPE,
  NOT_GATE_INSTRUCTION_TYPE,
  PHASE_GATE_INSTRUCTION_TYPE,
  QUBIT_LABEL_INSTRUCTION_TYPE,
  ROOT_NOT_GATE_INSTRUCTION_TYPE,
  RX_GATE_INSTRUCTION_TYPE,
  RY_GATE_INSTRUCTION_TYPE,
  RZ_GATE_INSTRUCTION_TYPE,
  SWAP_GATE_INSTRUCTION_TYPE,
  WRITE0_GATE_INSTRUCTION,
  WRITE1_GATE_INSTRUCTION,
  Y_GATE_INSTRUCTION_TYPE,
  Z_GATE_INSTRUCTION_TYPE,
} from "lib/instructions"
import {
  HadamardGate,
  NotGate,
  PhaseGate,
  RootNotGate,
  RxGate,
  RyGate,
  RzGate,
  YGate,
  ZGate,
} from "./instructions"

export class Simulator {
  public state: StateVector
  public blochVectors: { [bit: number]: [number, number, number] }
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
    this.blochVectors = {}
    const doneSwapTargets: [number, number][] = []
    const doneCPhaseTargets: [number, number][] = []
    const doneControlTargets: number[][] = []

    instructions.forEach((each, bit) => {
      switch (each.type) {
        case QUBIT_LABEL_INSTRUCTION_TYPE:
        case I_GATE_INSTRUCTION_TYPE:
          break
        case WRITE0_GATE_INSTRUCTION:
        case WRITE1_GATE_INSTRUCTION:
          this.write(each.value, bit)
          break
        case BLOCH_DISPLAY_INSTRUCTION_TYPE:
          this.blochVectors[bit] = this.state.blochVector(bit)
          break
        case HADAMARD_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.ch(each.controls, bit)
          break
        case NOT_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cnot(each.controls, bit)
          break
        case Y_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cy(each.controls, bit)
          break
        case Z_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cz(each.controls, bit)
          break
        case PHASE_GATE_INSTRUCTION_TYPE: {
          const controls = each.controls
          const targets = each.targets.sort()

          if (controls.length == 0) {
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
              this.cphase(targets[0], each.phi, targets[1])
              doneCPhaseTargets.push(targets as [number, number])
            }
          } else {
            this.cphase(controls, each.phi, bit)
          }
          break
        }
        case CONTROL_GATE_INSTRUCTION_TYPE: {
          const targets = each.targets.sort()

          if (targets.length < 2) break
          if (
            doneControlTargets.some((done) => {
              return String(done) === String(targets)
            })
          ) {
            break
          }
          const allControl = targets.every((each) => {
            return instructions[each].type === "•"
          })
          if (!allControl) break

          this.cz(targets.slice(1), targets[0])
          doneControlTargets.push(targets)
          break
        }
        case SWAP_GATE_INSTRUCTION_TYPE: {
          const controls = each.controls
          const targets = each.targets

          if (targets.length != 2) break
          if (
            doneSwapTargets.some((done) => {
              return done[0] === targets[0] && done[1] === targets[1]
            })
          ) {
            break
          }

          if (controls.length == 0) {
            this.swap(targets[0], targets[1])
            doneSwapTargets.push(targets)
          } else if (controls.length == 1) {
            doneSwapTargets.push(targets)
            this.cswap(controls[0], targets[0], targets[1])
          }
          break
        }
        case ROOT_NOT_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.crnot(each.controls, bit)
          break
        case RX_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.crx(each.controls, each.theta, bit)
          break
        case RY_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cry(each.controls, each.theta, bit)
          break
        case RZ_GATE_INSTRUCTION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.crz(each.controls, each.theta, bit)
          break
        case MEASURE_GATE_INSTRUCTION_TYPE:
          this.measure(bit)
          if (each.set) this.flags[each.set] = this.bits[bit] == 1
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

  h(...targets: number[]): Simulator {
    this.u(HadamardGate.MATRIX, ...targets)
    return this
  }

  ch(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, HadamardGate.MATRIX, ...targets)
    return this
  }

  x(...targets: number[]): Simulator {
    this.u(NotGate.MATRIX, ...targets)
    return this
  }

  cnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, NotGate.MATRIX, ...targets)
    return this
  }

  y(...targets: number[]): Simulator {
    this.u(YGate.MATRIX, ...targets)
    return this
  }

  cy(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, YGate.MATRIX, ...targets)
    return this
  }

  z(...targets: number[]): Simulator {
    this.u(ZGate.MATRIX, ...targets)
    return this
  }

  cz(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, ZGate.MATRIX, ...targets)
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    this.u(PhaseGate.MATRIX(phi), ...targets)
    return this
  }

  cphase(
    controls: number | number[],
    phi: string,
    ...targets: number[]
  ): Simulator {
    this.cu(controls, PhaseGate.MATRIX(phi), ...targets)
    return this
  }

  swap(target0: number, target1: number): Simulator {
    this.cnot(target0, target1).cnot(target1, target0).cnot(target0, target1)
    return this
  }

  cswap(control: number, target0: number, target1: number): Simulator {
    this.cnot([control, target0], target1)
      .cnot([control, target1], target0)
      .cnot([control, target0], target1)
    return this
  }

  rnot(...targets: number[]): Simulator {
    this.u(RootNotGate.MATRIX, ...targets)
    return this
  }

  crnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, RootNotGate.MATRIX, ...targets)
    return this
  }

  rx(theta: string, ...targets: number[]): Simulator {
    this.u(RxGate.MATRIX(theta), ...targets)
    return this
  }

  crx(
    controls: number | number[],
    theta: string,
    ...targets: number[]
  ): Simulator {
    this.cu(controls, RxGate.MATRIX(theta), ...targets)
    return this
  }

  ry(theta: string, ...targets: number[]): Simulator {
    this.u(RyGate.MATRIX(theta), ...targets)
    return this
  }

  cry(
    controls: number | number[],
    theta: string,
    ...targets: number[]
  ): Simulator {
    this.cu(controls, RyGate.MATRIX(theta), ...targets)
    return this
  }

  rz(theta: string, ...targets: number[]): Simulator {
    this.u(RzGate.MATRIX(theta), ...targets)
    return this
  }

  crz(
    controls: number | number[],
    theta: string,
    ...targets: number[]
  ): Simulator {
    this.cu(controls, RzGate.MATRIX(theta), ...targets)
    return this
  }

  measure(...targets: number[]): Simulator {
    targets.forEach((t) => {
      const pZero = this.pZero(t)
      const rand = Math.random()

      if (rand <= pZero) {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) != 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(
            bit,
            this.state.amplifier(bit).dividedBy(Math.sqrt(pZero)),
          )
        }
        this.bits[t] = 0
      } else {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) == 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(
            bit,
            this.state.amplifier(bit).dividedBy(Math.sqrt(1 - pZero)),
          )
        }
        this.bits[t] = 1
      }
    })
    return this
  }

  amplitudes(): [number, number][] {
    return this.state.matrix.getColumn(0).map((each) => {
      return [each.real, each.imag]
    })
  }

  private u(u: Matrix, ...targets: number[]): void {
    targets.forEach((t) => {
      this.state.timesQubitOperation(u, t, 0)
    })
  }

  private cu(
    controls: number | number[],
    u: Matrix,
    ...targets: number[]
  ): void {
    const cs = typeof controls === "number" ? [controls] : controls
    const controlMask = cs.reduce((result, each) => {
      return result | (1 << each)
    }, 0)

    targets.forEach((t) => {
      this.state.timesQubitOperation(u, t, controlMask)
    })
  }

  private pZero(target: number): number {
    let p = 0
    for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
      if ((bit & (1 << target)) == 0) {
        p += Math.pow(this.state.amplifier(bit).abs(), 2)
      }
    }
    return p
  }
}
