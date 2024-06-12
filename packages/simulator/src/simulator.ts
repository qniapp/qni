import {
  Complex,
  ResizeableSpan,
  SerializedBlochDisplayType,
  SerializedCircuitStep,
  SerializedControlGateType,
  SerializedHGateType,
  SerializedMeasurementGateType,
  SerializedPhaseGateType,
  SerializedQftDaggerGateType,
  SerializedQftGateType,
  SerializedRnotGateType,
  SerializedRxGateType,
  SerializedRyGateType,
  SerializedRzGateType,
  SerializedSDaggerGateType,
  SerializedSGateType,
  SerializedSpacerGateType,
  SerializedSwapGateType,
  SerializedTDaggerGateType,
  SerializedTGateType,
  SerializedWrite0GateType,
  SerializedWrite1GateType,
  SerializedXGateType,
  SerializedYGateType,
  SerializedZGateType,
} from '@qni/common'
import {H, X, Y, Z, S, SDagger, T, TDagger, PHASE, RNOT, RX, RY, RZ} from './gate-matrices'
import {Matrix} from './matrix'
import {StateVector} from './state-vector'
import {round} from './util'

export class Simulator {
  public state: StateVector
  public blochVectors!: {[bit: number]: [number, number, number]}
  public measuredBits: {[bit: number]: number}
  public flags: {[key: string]: boolean}

  constructor(bits: string) {
    this.state = new StateVector(bits)
    this.measuredBits = {}
    this.flags = {}
  }

  runStep(operations: SerializedCircuitStep): Simulator {
    this.blochVectors = {}

    for (const each of operations) {
      switch (each.type) {
        case SerializedHGateType:
          if (each.if && !this.flags[each.if]) break
          this.ch(each.targets, each.controls, each.antiControls)
          break
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
        case SerializedXGateType:
          if (each.if && !this.flags[each.if]) break
          this.cnot(each.targets, each.controls, each.antiControls)
          break
        case SerializedYGateType:
          if (each.if && !this.flags[each.if]) break
          this.cy(each.targets, each.controls, each.antiControls)
          break
        case SerializedZGateType:
          if (each.if && !this.flags[each.if]) break
          this.cz(each.targets, each.controls, each.antiControls)
          break
        case SerializedSpacerGateType:
          break
        case SerializedPhaseGateType: {
          if (!each.angle) break
          this.cphase(each.angle, [each.targets[0]], each.controls, each.antiControls)
          break
        }
        case SerializedSGateType: {
          if (each.if && !this.flags[each.if]) break
          this.cs(each.targets, each.controls, each.antiControls)
          break
        }
        case SerializedSDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          this.csDagger(each.targets, each.controls, each.antiControls)
          break
        }
        case SerializedTGateType: {
          if (each.if && !this.flags[each.if]) break
          this.ct(each.targets, each.controls, each.antiControls)
          break
        }
        case SerializedTDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          this.ctDagger(each.targets, each.controls, each.antiControls)
          break
        }
        case SerializedQftGateType:
          this.qft(each.span, ...each.targets)
          break
        case SerializedQftDaggerGateType:
          this.qftDagger(each.span, ...each.targets)
          break
        case SerializedControlGateType: {
          this.cz([each.targets[0]], each.targets.slice(1))
          break
        }
        case SerializedSwapGateType: {
          this.cswap(each.targets[0], each.targets[1], each.controls)
          break
        }
        case SerializedRnotGateType:
          if (each.if && !this.flags[each.if]) break
          this.crnot(each.targets, each.controls, each.antiControls)
          break
        case SerializedRxGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          this.crx(each.angle, each.targets, each.controls, each.antiControls)
          break
        case SerializedRyGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          this.cry(each.angle, each.targets, each.controls, each.antiControls)
          break
        case SerializedRzGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          this.crz(each.angle, each.targets, each.controls, each.antiControls)
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

  /**
   * Applies the Hadamard gate to the specified qubit targets.
   */
  h(...targets: number[]): Simulator {
    this.cu(H, targets)
    return this
  }

  /**
   * Applies the controlled-Hadamard (CH) gate to the specified qubits.
   */
  ch(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(H, targets, controls, antiControls)
    return this
  }

  /**
   * Applies the X gate to the specified qubit targets.
   */
  x(...targets: number[]): Simulator {
    this.cu(X, targets)
    return this
  }

  cnot(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(X, targets, controls, antiControls)
    return this
  }

  y(...targets: number[]): Simulator {
    this.cu(Y, targets)
    return this
  }

  cy(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(Y, targets, controls, antiControls)
    return this
  }

  z(...targets: number[]): Simulator {
    this.u(Z, ...targets)
    return this
  }

  cz(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(Z, targets, controls, antiControls)
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    this.u(PHASE(phi), ...targets)
    return this
  }

  cphase(phi: string, targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(PHASE(phi), targets, controls, antiControls)
    return this
  }

  s(...targets: number[]): Simulator {
    this.u(S, ...targets)
    return this
  }

  cs(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(S, targets, controls, antiControls)
    return this
  }

  sDagger(...targets: number[]): Simulator {
    this.u(SDagger, ...targets)
    return this
  }

  csDagger(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(SDagger, targets, controls, antiControls)
    return this
  }

  t(...targets: number[]): Simulator {
    this.u(T, ...targets)
    return this
  }

  ct(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(T, targets, controls, antiControls)
    return this
  }

  tDagger(...targets: number[]): Simulator {
    this.u(TDagger, ...targets)
    return this
  }

  ctDagger(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(TDagger, targets, controls, antiControls)
    return this
  }

  swap(target0: number, target1: number): Simulator {
    this.cswap(target0, target1)
    return this
  }

  cswap(target0: number, target1: number, controls: number[] = []): Simulator {
    this.cnot([target1], controls.concat([target0]))
      .cnot([target0], controls.concat([target1]))
      .cnot([target1], controls.concat([target0]))
    return this
  }

  rnot(...targets: number[]): Simulator {
    this.u(RNOT, ...targets)
    return this
  }

  crnot(targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(RNOT, targets, controls, antiControls)
    return this
  }

  rx(theta: string, ...targets: number[]): Simulator {
    this.u(RX(theta), ...targets)
    return this
  }

  crx(theta: string, targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(RX(theta), targets, controls, antiControls)
    return this
  }

  ry(theta: string, ...targets: number[]): Simulator {
    this.u(RY(theta), ...targets)
    return this
  }

  cry(theta: string, targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(RY(theta), targets, controls, antiControls)
    return this
  }

  rz(theta: string, ...targets: number[]): Simulator {
    this.u(RZ(theta), ...targets)
    return this
  }

  crz(theta: string, targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(RZ(theta), targets, controls, antiControls)
    return this
  }

  qft(span: ResizeableSpan, ...targets: number[]): Simulator {
    for (const each of targets) {
      this.qftSingleTargetBit(span, each)
    }
    return this
  }

  private qftSingleTargetBit(span: ResizeableSpan, target: number): Simulator {
    for (let i = 0; i < span; i++) {
      this.h(target + i)
      for (let j = 1; j < span - i; j++) {
        this.cphase(`π/${2 ** j}`, [target + i], [target + i + j])
      }
    }
    return this
  }

  qftDagger(span: ResizeableSpan, ...targets: number[]): Simulator {
    for (const each of targets) {
      this.qftDaggerSingleTargetBit(span, each)
    }
    return this
  }

  private qftDaggerSingleTargetBit(span: ResizeableSpan, target: number): Simulator {
    for (let i = span - 1; i >= 0; i--) {
      for (let j = span - i - 1; j > 0; j--) {
        this.cphase(`-π/${2 ** j}`, [target + i], [target + i + j])
      }
      this.h(target + i)
    }
    return this
  }

  measure(...targets: number[]): Simulator {
    for (const t of targets) {
      const pZero = this.pZero(t)
      const rand = Math.random()

      if (rand <= pZero) {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) !== 0) this.state.setAmplifier(bit, Complex.ZERO)
          const res = this.state.amplifier(bit).div(Math.sqrt(pZero))
          if (res.isOk()) {
            this.state.setAmplifier(bit, res.value)
          } else {
            throw Error(res.error.message)
          }
        }
        this.measuredBits[t] = 0
      } else {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) === 0) this.state.setAmplifier(bit, Complex.ZERO)
          const res = this.state.amplifier(bit).div(Math.sqrt(1 - pZero))
          if (res.isOk()) {
            this.state.setAmplifier(bit, res.value)
          } else {
            throw Error(res.error.message)
          }
        }
        this.measuredBits[t] = 1
      }
    }
    return this
  }

  amplitudes(): Complex[] {
    return this.state.matrix.column(0)._unsafeUnwrap()
  }

  private u(u: Matrix, ...targets: number[]): void {
    for (const t of targets) {
      this.state.timesQubitOperation(u, t, 0)
    }
  }

  private cu(u: Matrix, targets: number[], controls: number[] = [], antiControls: number[] = []): void {
    for (const t of targets) {
      this.state.applyControlledGate(u, t, controls, antiControls)
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
