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
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.ch(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.h(...each.targets)
          }
          break
        case SerializedXGateType:
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.cnot(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.x(...each.targets)
          }
          break
        case SerializedYGateType:
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.cy(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.y(...each.targets)
          }
          break
        case SerializedZGateType:
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.cz(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.z(...each.targets)
          }
          break
        case SerializedSpacerGateType:
          break
        case SerializedPhaseGateType: {
          if (!each.angle) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.cphase(each.angle, [each.targets[0]], each.controls || [], each.antiControls || [])
          } else {
            this.cphase(each.angle, [each.targets[0]])
          }
          break
        }
        case SerializedSGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.cs(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.s(...each.targets)
          }
          break
        }
        case SerializedSDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.csDagger(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.sDagger(...each.targets)
          }
          break
        }
        case SerializedTGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.ct(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.t(...each.targets)
          }
          break
        }
        case SerializedTDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.ctDagger(each.targets, each.controls || [], each.antiControls || [])
          } else {
            this.tDagger(...each.targets)
          }
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
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acrnot(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.rnot(...each.targets)
          }
          break
        case SerializedRxGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acrx(each.controls || [], each.antiControls || [], each.angle, ...each.targets)
          } else {
            this.rx(each.angle, ...each.targets)
          }
          break
        case SerializedRyGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acry(each.controls || [], each.antiControls || [], each.angle, ...each.targets)
          } else {
            this.ry(each.angle, ...each.targets)
          }
          break
        case SerializedRzGateType:
          if (each.if && !this.flags[each.if]) break
          if (!each.angle) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acrz(each.controls || [], each.antiControls || [], each.angle, ...each.targets)
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
    this.cu(H, targets, [], [])
    return this
  }

  ch(targets: number[], controls: number[], antiControls: number[]): Simulator {
    this.cu(H, targets, controls, antiControls)
    return this
  }

  x(...targets: number[]): Simulator {
    this.cu(X, targets)
    return this
  }

  cnot(targets: number[], controls: number[], antiControls: number[] = []): Simulator {
    this.cu(X, targets, controls, antiControls)
    return this
  }

  y(...targets: number[]): Simulator {
    this.cu(Y, targets)
    return this
  }

  cy(targets: number[], controls: number[] = [], antiControls: number[] = []): Simulator {
    this.cu(Y, targets, controls, antiControls)
    return this
  }

  z(...targets: number[]): Simulator {
    this.u(Z, ...targets)
    return this
  }

  cz(targets: number[], controls: number[] = [], antiControls: number[] = []): Simulator {
    this.cu(Z, targets, controls, antiControls)
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    this.u(PHASE(phi), ...targets)
    return this
  }

  cphase(phi: string, targets: number[], controls: number[] = [], antiControls: number[] = []): Simulator {
    this.cu(PHASE(phi), targets, controls, antiControls)
    return this
  }

  s(...targets: number[]): Simulator {
    this.u(S, ...targets)
    return this
  }

  cs(targets: number[], controls: number[] = [], antiControls: number[] = []): Simulator {
    this.cu(S, targets, controls, antiControls)
    return this
  }

  sDagger(...targets: number[]): Simulator {
    this.u(SDagger, ...targets)
    return this
  }

  csDagger(targets: number[], controls: number[] = [], antiControls: number[] = []): Simulator {
    this.cu(SDagger, targets, controls, antiControls)
    return this
  }

  t(...targets: number[]): Simulator {
    this.u(T, ...targets)
    return this
  }

  ct(targets: number[], controls: number[], antiControls: number[]): Simulator {
    this.cu(T, targets, controls, antiControls)
    return this
  }

  tDagger(...targets: number[]): Simulator {
    this.u(TDagger, ...targets)
    return this
  }

  ctDagger(targets: number[], controls: number[] = [], antiControls: number[] = []): Simulator {
    this.cu(TDagger, targets, controls, antiControls)
    return this
  }

  swap(target0: number, target1: number): Simulator {
    this.cnot([target1], [target0]).cnot([target0], [target1]).cnot([target1], [target0])
    return this
  }

  cswap(control: number, target0: number, target1: number): Simulator {
    this.cnot([target1], [control, target0]).cnot([target0], [control, target1]).cnot([target1], [control, target0])
    return this
  }

  rnot(...targets: number[]): Simulator {
    this.u(RNOT, ...targets)
    return this
  }

  crnot(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu_old(allControls, RNOT, ...targets)
    this.x(...antiControls)
    return this
  }

  acrnot(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu_old(allControls, RNOT, ...targets)
    this.x(...antiControls)
    return this
  }

  rx(theta: string, ...targets: number[]): Simulator {
    this.u(RX(theta), ...targets)
    return this
  }

  acrx(controls: number | number[], antiControls: number[], theta: string, ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu_old(allControls, RX(theta), ...targets)
    this.x(...antiControls)
    return this
  }

  crx(controls: number | number[], theta: string, ...targets: number[]): Simulator {
    this.cu_old(controls, RX(theta), ...targets)
    return this
  }

  ry(theta: string, ...targets: number[]): Simulator {
    this.u(RY(theta), ...targets)
    return this
  }

  cry(controls: number | number[], theta: string, ...targets: number[]): Simulator {
    this.cu_old(controls, RY(theta), ...targets)
    return this
  }

  acry(controls: number | number[], antiControls: number[], theta: string, ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu_old(allControls, RY(theta), ...targets)
    this.x(...antiControls)
    return this
  }

  rz(theta: string, ...targets: number[]): Simulator {
    this.u(RZ(theta), ...targets)
    return this
  }

  crz(controls: number | number[], theta: string, ...targets: number[]): Simulator {
    this.cu_old(controls, RZ(theta), ...targets)
    return this
  }

  acrz(controls: number | number[], antiControls: number[], theta: string, ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu_old(allControls, RZ(theta), ...targets)
    this.x(...antiControls)
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

  private cu_old(controls: number | number[], u: Matrix, ...targets: number[]): void {
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
