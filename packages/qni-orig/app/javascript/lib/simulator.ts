import {
  BLOCH_DISPLAY_OPERATION_TYPE,
  CONTROL_GATE_OPERATION_TYPE,
  CircuitOperation,
  H_GATE_OPERATION_TYPE,
  I_GATE_OPERATION_TYPE,
  MEASUREMENT_GATE_OPERATION_TYPE,
  PHASE_GATE_OPERATION_TYPE,
  RNOT_GATE_OPERATION_TYPE,
  RX_GATE_OPERATION_TYPE,
  RY_GATE_OPERATION_TYPE,
  RZ_GATE_OPERATION_TYPE,
  SWAP_GATE_OPERATION_TYPE,
  WRITE_GATE_OPERATION_TYPE,
  X_GATE_OPERATION_TYPE,
  Y_GATE_OPERATION_TYPE,
  Z_GATE_OPERATION_TYPE,
} from "lib/operation"
import { Complex, Matrix } from "./math"
import {
  HGate,
  PhaseGate,
  RnotGate,
  RxGate,
  RyGate,
  RzGate,
  XGate,
  YGate,
  ZGate,
} from "lib/instructions"
import { StateVector } from "lib/simulator/stateVector"

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

  runStep(instructions: CircuitOperation[]): Simulator {
    this.blochVectors = {}
    const doneSwapTargets: Array<[number, number]> = []
    const doneCPhaseTargets: Array<[number, number]> = []
    const doneControlTargets: number[][] = []

    for (const [bit, each] of instructions.entries()) {
      switch (each.type) {
        case I_GATE_OPERATION_TYPE:
          break
        case WRITE_GATE_OPERATION_TYPE:
          this.write(each.value, bit)
          break
        case BLOCH_DISPLAY_OPERATION_TYPE:
          this.blochVectors[bit] = this.state.blochVector(bit)
          break
        case H_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.ch(each.controls, bit)
          break
        case X_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cnot(each.controls, bit)
          break
        case Y_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cy(each.controls, bit)
          break
        case Z_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cz(each.controls, bit)
          break
        case PHASE_GATE_OPERATION_TYPE: {
          const controls = each.controls
          const targets = each.targets.sort()

          if (controls.length === 0) {
            if (targets.length === 0) {
              if (each.phi) {
                this.phase(each.phi, bit)
              }
            } else if (targets.length === 2) {
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
        case CONTROL_GATE_OPERATION_TYPE: {
          const targets = each.targets.sort()

          if (targets.length < 2) break
          if (
            doneControlTargets.some((done) => {
              return String(done) === String(targets)
            })
          ) {
            break
          }
          const allControl = targets.every((c) => {
            return instructions[c].type === "•"
          })
          if (!allControl) break

          this.cz(targets.slice(1), targets[0])
          doneControlTargets.push(targets)
          break
        }
        case SWAP_GATE_OPERATION_TYPE: {
          const controls = each.controls
          const targets = each.targets

          if (targets.length !== 2) break
          if (
            doneSwapTargets.some((done) => {
              return done[0] === targets[0] && done[1] === targets[1]
            })
          ) {
            break
          }

          if (controls.length === 0) {
            this.swap(targets[0], targets[1])
            doneSwapTargets.push(targets)
          } else if (controls.length === 1) {
            doneSwapTargets.push(targets)
            this.cswap(controls[0], targets[0], targets[1])
          }
          break
        }
        case RNOT_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.crnot(each.controls, bit)
          break
        case RX_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.crx(each.controls, each.theta, bit)
          break
        case RY_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.cry(each.controls, each.theta, bit)
          break
        case RZ_GATE_OPERATION_TYPE:
          if (each.if && !this.flags[each.if]) break
          this.crz(each.controls, each.theta, bit)
          break
        case MEASUREMENT_GATE_OPERATION_TYPE:
          this.measure(bit)
          if (each.flag) this.flags[each.flag] = this.bits[bit] === 1
          break
        default:
          throw new Error("Unknown instruction")
      }
    }

    return this
  }

  write(value: number, ...targets: number[]): Simulator {
    for (const t of targets) {
      const pZero = this.pZero(t)
      if ((value === 0 && pZero === 0) || (value === 1 && pZero === 1)) {
        this.x(t)
      }
    }
    return this
  }

  h(...targets: number[]): Simulator {
    this.u(HGate.MATRIX, ...targets)
    return this
  }

  ch(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, HGate.MATRIX, ...targets)
    return this
  }

  x(...targets: number[]): Simulator {
    this.u(XGate.MATRIX, ...targets)
    return this
  }

  cnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, XGate.MATRIX, ...targets)
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
    this.u(RnotGate.MATRIX, ...targets)
    return this
  }

  crnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, RnotGate.MATRIX, ...targets)
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
    for (const t of targets) {
      const pZero = this.pZero(t)
      const rand = Math.random()

      if (rand <= pZero) {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) !== 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(
            bit,
            this.state.amplifier(bit).dividedBy(Math.sqrt(pZero)),
          )
        }
        this.bits[t] = 0
      } else {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) === 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(
            bit,
            this.state.amplifier(bit).dividedBy(Math.sqrt(1 - pZero)),
          )
        }
        this.bits[t] = 1
      }
    }
    return this
  }

  amplitudes(): Array<[number, number]> {
    return this.state.matrix.getColumn(0).map((each) => {
      return [each.real, each.imag]
    })
  }

  private u(u: Matrix, ...targets: number[]): void {
    for (const t of targets) {
      this.state.timesQubitOperation(u, t, 0)
    }
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

    for (const t of targets) {
      this.state.timesQubitOperation(u, t, controlMask)
    }
  }

  private pZero(target: number): number {
    let p = 0
    for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
      if ((bit & (1 << target)) === 0) {
        p += Math.pow(this.state.amplifier(bit).abs(), 2)
      }
    }
    return p
  }
}
