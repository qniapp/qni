import {
  Complex,
  Range,
  SerializedBlochDisplayType,
  SerializedCircuitStep,
  SerializedControlGateType,
  SerializedHGateType,
  SerializedMeasurementGateType,
  SerializedPhaseGateType,
  SerializedQftGateType,
  SerializedQftDaggerGateType,
  SerializedRnotGateType,
  SerializedRxGateType,
  SerializedRyGateType,
  SerializedRzGateType,
  SerializedSwapGateType,
  SerializedTGateType,
  SerializedWrite0GateType,
  SerializedWrite1GateType,
  SerializedXGateType,
  SerializedYGateType,
  SerializedZGateType
} from '@qni/common'
import {Matrix} from './matrix'
import {StateVector} from './state-vector'
import {round} from './util'

export class Simulator {
  public state: StateVector
  public blochVectors!: {[bit: number]: [number, number, number]}
  public measuredBits: {[bit: number]: number}
  public flags: {[key: string]: boolean}

  constructor(bits: string | StateVector) {
    if ('string' === typeof bits) {
      this.state = new StateVector(bits)
    } else {
      this.state = bits
    }

    this.measuredBits = {}
    this.flags = {}
  }

  runStep(operations: SerializedCircuitStep): Simulator {
    this.blochVectors = {}

    for (const each of operations) {
      switch (each.type) {
        case SerializedWrite0GateType:
          this.write(0, ...each.targets)
          break
        case SerializedWrite1GateType:
          this.write(1, ...each.targets)
          break
        case SerializedBlochDisplayType:
          for (const target of each.targets) {
            this.blochVectors[target] = this.state.blochVector(target)
          }
          break
        case SerializedHGateType:
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.ch(each.controls, ...each.targets)
          } else {
            this.h(...each.targets)
          }
          break
        case SerializedXGateType:
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.cnot(each.controls, ...each.targets)
          } else {
            this.x(...each.targets)
          }
          break
        case SerializedYGateType:
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.cy(each.controls, ...each.targets)
          } else {
            this.y(...each.targets)
          }
          break
        case SerializedZGateType:
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.cz(each.controls, ...each.targets)
          } else {
            this.z(...each.targets)
          }
          break
        case SerializedPhaseGateType: {
          if (!each.angle) break

          if (each.controls && each.controls.length > 0) {
            this.cphase(each.controls, each.angle, each.targets[0])
          } else {
            this.cphase(each.targets.slice(1), each.angle, each.targets[0])
          }
          break
        }
        case SerializedTGateType: {
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.ct(each.controls, ...each.targets)
          } else {
            this.t(...each.targets)
          }
          break
        }
        case SerializedQftGateType:
          this.qft(each.nqubit, ...each.targets)
          break
        case SerializedQftDaggerGateType:
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.cqftDagger(each.controls, ...each.targets)
          } else {
            this.qftDagger(...each.targets)
          }
          break
        case SerializedControlGateType: {
          this.cz(each.targets.slice(1), each.targets[0])
          break
        }
        case SerializedSwapGateType: {
          // TODO: controls が複数の場合にも対応
          if (each.controls && each.controls.length === 1) {
            this.cswap(each.controls[0], each.targets[0], each.targets[1])
          } else {
            this.swap(each.targets[0], each.targets[1])
          }
          break
        }
        case SerializedRnotGateType:
          if (each.if && !this.flags[each.if]) break
          if (each.controls && each.controls.length > 0) {
            this.crnot(each.controls, ...each.targets)
          } else {
            this.rnot(...each.targets)
          }
          break
        case SerializedRxGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          if (each.controls && each.controls.length > 0) {
            this.crx(each.controls, each.angle, ...each.targets)
          } else {
            this.rx(each.angle, ...each.targets)
          }
          break
        case SerializedRyGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          if (each.controls && each.controls.length > 0) {
            this.cry(each.controls, each.angle, ...each.targets)
          } else {
            this.ry(each.angle, ...each.targets)
          }
          break
        case SerializedRzGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          if (each.controls && each.controls.length > 0) {
            this.crz(each.controls, each.angle, ...each.targets)
          } else {
            this.rz(each.angle, ...each.targets)
          }
          break
        case SerializedMeasurementGateType:
          for (const target of each.targets) {
            this.measure(target)
            if (each.flag) this.flags[each.flag] = this.measuredBits[target] === 1
          }
          break
        default:
          throw new Error('Unknown instruction')
      }
    }

    return this
  }

  write(value: number, ...targets: number[]): Simulator {
    for (const t of targets) {
      const pZero = round(this.pZero(t), 5)

      if ((value === 0 && pZero === 0) || (value === 1 && pZero === 1)) {
        this.x(t)
      }
    }
    return this
  }

  h(...targets: number[]): Simulator {
    this.u(Matrix.H, ...targets)
    return this
  }

  ch(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.H, ...targets)
    return this
  }

  x(...targets: number[]): Simulator {
    this.u(Matrix.PAULI_X, ...targets)
    return this
  }

  cnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.PAULI_X, ...targets)
    return this
  }

  y(...targets: number[]): Simulator {
    this.u(Matrix.PAULI_Y, ...targets)
    return this
  }

  cy(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.PAULI_Y, ...targets)
    return this
  }

  z(...targets: number[]): Simulator {
    this.u(Matrix.PAULI_Z, ...targets)
    return this
  }

  cz(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.PAULI_Z, ...targets)
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    this.u(Matrix.PHASE(phi), ...targets)
    return this
  }

  cphase(controls: number | number[], phi: string, ...targets: number[]): Simulator {
    this.cu(controls, Matrix.PHASE(phi), ...targets)
    return this
  }

  t(...targets: number[]): Simulator {
    this.u(Matrix.T, ...targets)
    return this
  }

  ct(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.T, ...targets)
    return this
  }

  swap(target0: number, target1: number): Simulator {
    this.cnot(target0, target1).cnot(target1, target0).cnot(target0, target1)
    return this
  }

  cswap(control: number, target0: number, target1: number): Simulator {
    this.cnot([control, target0], target1).cnot([control, target1], target0).cnot([control, target0], target1)
    return this
  }

  rnot(...targets: number[]): Simulator {
    this.u(Matrix.RNOT, ...targets)
    return this
  }

  crnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.RNOT, ...targets)
    return this
  }

  rx(theta: string, ...targets: number[]): Simulator {
    this.u(Matrix.RX(theta), ...targets)
    return this
  }

  crx(controls: number | number[], theta: string, ...targets: number[]): Simulator {
    this.cu(controls, Matrix.RX(theta), ...targets)
    return this
  }

  ry(theta: string, ...targets: number[]): Simulator {
    this.u(Matrix.RY(theta), ...targets)
    return this
  }

  cry(controls: number | number[], theta: string, ...targets: number[]): Simulator {
    this.cu(controls, Matrix.RY(theta), ...targets)
    return this
  }

  rz(theta: string, ...targets: number[]): Simulator {
    this.u(Matrix.RZ(theta), ...targets)
    return this
  }

  crz(controls: number | number[], theta: string, ...targets: number[]): Simulator {
    this.cu(controls, Matrix.RZ(theta), ...targets)
    return this
  }

  qft(nqubit: Range<1, 16>, ...targets: number[]): Simulator {
    for (const each of targets) {
      this.qftSingleTargetBit(nqubit, each)
    }
    return this
  }

  private qftSingleTargetBit(nqubit: Range<1, 16>, target: number): Simulator {
    switch (nqubit) {
      case 1: {
        this.h(target)
        break
      }
      case 2: {
        this.swap(target, target + 1)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .h(target + 1)
        break
      }
      case 3: {
        this.swap(target, target + 2)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .h(target + 2)
        break
      }
      case 4: {
        this.swap(target, target + 3)
          .swap(target + 1, target + 2)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .h(target + 3)
        break
      }
      case 5: {
        this.swap(target, target + 4)
          .swap(target + 1, target + 3)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .h(target + 4)
        break
      }
      case 6: {
        this.swap(target, target + 5)
          .swap(target + 1, target + 4)
          .swap(target + 2, target + 3)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .h(target + 5)
        break
      }
      case 7: {
        this.swap(target, target + 6)
          .swap(target + 1, target + 5)
          .swap(target + 2, target + 4)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .h(target + 6)
        break
      }
      case 8: {
        this.swap(target, target + 7)
          .swap(target + 1, target + 6)
          .swap(target + 2, target + 5)
          .swap(target + 3, target + 4)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .h(target + 7)
        break
      }
      default: {
        throw new Error('Not implemented')
      }
    }
    return this
  }

  qftDagger(...targets: number[]): Simulator {
    this.u(Matrix.H, ...targets)
    return this
  }

  cqftDagger(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Matrix.H, ...targets)
    return this
  }

  measure(...targets: number[]): Simulator {
    for (const t of targets) {
      const pZero = this.pZero(t)
      const rand = Math.random()

      if (rand <= pZero) {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) !== 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(bit, this.state.amplifier(bit).dividedBy(Math.sqrt(pZero)))
        }
        this.measuredBits[t] = 0
      } else {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) === 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(bit, this.state.amplifier(bit).dividedBy(Math.sqrt(1 - pZero)))
        }
        this.measuredBits[t] = 1
      }
    }
    return this
  }

  amplitudes(): Complex[] {
    return this.state.matrix.columnAt(0)
  }

  private u(u: Matrix, ...targets: number[]): void {
    for (const t of targets) {
      this.state.timesQubitOperation(u, t, 0)
    }
  }

  private cu(controls: number | number[], u: Matrix, ...targets: number[]): void {
    const cs = typeof controls === 'number' ? [controls] : controls
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
