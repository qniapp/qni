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

type GateControlOptions = {
  controls?: number[]
  antiControls?: number[]
}

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
          this.h(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedXGateType:
          if (each.if && !this.flags[each.if]) break
          this.x(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedYGateType:
          if (each.if && !this.flags[each.if]) break
          this.y(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedZGateType:
          if (each.if && !this.flags[each.if]) break
          this.z(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedRnotGateType:
          if (each.if && !this.flags[each.if]) break
          this.rnot(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedSGateType: {
          if (each.if && !this.flags[each.if]) break
          this.s(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        }
        case SerializedSDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          this.sDagger(...each.targets, {controls: each.controls, antiControls: each.antiControls})
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
        case SerializedPhaseGateType: {
          if (!each.angle) break
          this.cphase(each.angle, [each.targets[0]], each.controls, each.antiControls)
          break
        }
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
        case SerializedSwapGateType: {
          this.cswap(each.targets[0], each.targets[1], each.controls)
          break
        }
        case SerializedControlGateType: {
          this.z(each.targets[0], {controls: each.targets.slice(1)})
          break
        }
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
        case SerializedSpacerGateType:
          break
        case SerializedQftGateType:
          this.qft(each.span, ...each.targets)
          break
        case SerializedQftDaggerGateType:
          this.qftDagger(each.span, ...each.targets)
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

  /**
   * Applies the H gate to the specified qubit targets.
   */
  h(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(H, targets, options.controls, options.antiControls)
    return this
  }

  /**
   * Applies the X gate to the specified qubit targets.
   */
  x(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(X, targets, options.controls, options.antiControls)
    return this
  }

  /**
   * Applies the Y gate to the specified qubit targets.
   */
  y(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(Y, targets, options.controls, options.antiControls)
    return this
  }

  /**
   * Applies the Z gate to the specified qubit targets.
   */
  z(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(Z, targets, options.controls, options.antiControls)
    return this
  }

  /**
   * Applies the √X gate to the specified qubit targets.
   */
  rnot(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(RNOT, targets, options.controls, options.antiControls)
    return this
  }

  /**
   * Applies the S gate to the specified qubit targets.
   */
  s(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(S, targets, options.controls, options.antiControls)
    return this
  }

  /**
   * Applies the S† gate to the specified qubit targets.
   */
  sDagger(...args: Array<number | GateControlOptions>): Simulator {
    const {targets, options} = this.processGateArgs(args)

    this.cu(SDagger, targets, options.controls, options.antiControls)
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

  phase(phi: string, ...targets: number[]): Simulator {
    this.u(PHASE(phi), ...targets)
    return this
  }

  cphase(phi: string, targets: number[], controls?: number[], antiControls?: number[]): Simulator {
    this.cu(PHASE(phi), targets, controls, antiControls)
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
    this.cswap(target0, target1, [])
    return this
  }

  cswap(target0: number, target1: number, controls: number[] = []): Simulator {
    this.x(target1, {controls: controls.concat([target0])})
      .x(target0, {controls: controls.concat([target1])})
      .x(target1, {controls: controls.concat([target0])})
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

  private processGateArgs(args: Array<number | GateControlOptions>): {targets: number[]; options: GateControlOptions} {
    const options = typeof args[args.length - 1] === 'object' ? (args.pop() as GateControlOptions) : {}
    const targets = args as number[]

    return {targets, options}
  }

  private u(u: Matrix, ...targets: number[]): void {
    for (const t of targets) {
      this.state.timesQubitOperation(u, t, 0)
    }
  }

  // TODO: 引数に GateControlOptions を受け取るようにする
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
