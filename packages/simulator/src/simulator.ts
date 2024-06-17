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

type ControlOptions = {
  controls?: number[]
  antiControls?: number[]
}

export class Simulator {
  public state: StateVector
  public blochVectors!: {[bit: number]: {x: number; y: number; z: number}}
  public measuredBits: {[bit: number]: number}
  public flags: {[key: string]: boolean}

  constructor(bits: string) {
    this.state = new StateVector(bits)
    this.measuredBits = {}
    this.flags = {}
    this.blochVectors = {}
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
          this.t(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        }
        case SerializedTDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          this.tDagger(...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        }
        case SerializedPhaseGateType: {
          if (!each.angle) throw new Error('angle is not set')
          if (each.if && !this.flags[each.if]) break
          this.phase(each.angle, ...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        }
        case SerializedRxGateType:
          if (!each.angle) throw new Error('angle is not set')
          if (each.if && !this.flags[each.if]) break
          this.rx(each.angle, ...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedRyGateType:
          if (!each.angle) throw new Error('angle is not set')
          if (each.if && !this.flags[each.if]) break
          this.ry(each.angle, ...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedRzGateType:
          if (!each.angle) throw new Error('angle is not set')
          if (each.if && !this.flags[each.if]) break
          this.rz(each.angle, ...each.targets, {controls: each.controls, antiControls: each.antiControls})
          break
        case SerializedSwapGateType: {
          this.swap(each.targets[0], each.targets[1], {controls: each.controls})
          break
        }
        case SerializedControlGateType: {
          this.z(each.targets[0], {controls: each.targets.slice(1)})
          break
        }
        case SerializedBlochDisplayType:
          for (const target of each.targets) {
            this.blochDisplay(target)
          }
          break
        case SerializedWrite0GateType:
          this.write(0, ...each.targets)
          break
        case SerializedWrite1GateType:
          this.write(1, ...each.targets)
          break
        case SerializedMeasurementGateType:
          for (const target of each.targets) {
            this.measure(target)
            if (each.flag) {
              this.flags[each.flag] = this.measuredBits[target] === 1
            }
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
        /* istanbul ignore next */
        default:
          throw new Error('Unknown instruction')
      }
    }

    return this
  }

  /**
   * Applies the H gate to the specified qubit(s).
   */
  h(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(H, targets, controlOptions)
    return this
  }

  /**
   * Applies the X gate to the specified qubit(s).
   */
  x(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(X, targets, controlOptions)
    return this
  }

  /**
   * Applies the Y gate to the specified qubit(s).
   */
  y(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(Y, targets, controlOptions)
    return this
  }

  /**
   * Applies the Z gate to the specified qubit(s).
   */
  z(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(Z, targets, controlOptions)
    return this
  }

  /**
   * Applies the √X gate to the specified qubit(s).
   */
  rnot(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(RNOT, targets, controlOptions)
    return this
  }

  /**
   * Applies the S gate to the specified qubit(s).
   */
  s(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(S, targets, controlOptions)
    return this
  }

  /**
   * Applies the S† gate to the specified qubit(s).
   */
  sDagger(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(SDagger, targets, controlOptions)
    return this
  }

  /**
   * Applies the T gate to the specified qubit(s).
   */
  t(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(T, targets, controlOptions)
    return this
  }

  /**
   * Applies the T† gate to the specified qubit(s).
   */
  tDagger(...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(TDagger, targets, controlOptions)
    return this
  }

  /**
   * Applies a phase gate to the specified qubit(s).
   */
  phase(phi: string, ...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(PHASE(phi), targets, controlOptions)
    return this
  }

  /**
   * Apply an RX gate to the specified qubit(s).
   */
  rx(theta: string, ...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(RX(theta), targets, controlOptions)
    return this
  }

  /**
   * Apply an RY gate to the specified qubit(s).
   */
  ry(theta: string, ...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(RY(theta), targets, controlOptions)
    return this
  }

  /**
   * Apply an RZ gate to the specified qubit(s).
   */
  rz(theta: string, ...args: Array<number | ControlOptions>): Simulator {
    const {targets, controlOptions} = this.processGateArgs(args)

    this.cu(RZ(theta), targets, controlOptions)
    return this
  }

  /**
   * Swaps the values of two qubits.
   *
   * TODO: antiControl に対応
   */
  swap(target0: number, target1: number, controlOptions?: ControlOptions): Simulator {
    const controls = controlOptions?.controls || []

    this.x(target1, {controls: controls.concat([target0])})
      .x(target0, {controls: controls.concat([target1])})
      .x(target1, {controls: controls.concat([target0])})
    return this
  }

  /**
   * Calculates the Bloch vector for the specified qubit.
   */
  blochDisplay(target: number): Simulator {
    const [x, y, z] = this.state.blochVector(target)
    this.blochVectors[target] = {x, y, z}
    return this
  }

  /**
   * Writes a value zero or one to the specified qubit(s).
   */
  write(value: 0 | 1, ...targets: number[]): Simulator {
    for (const t of targets) {
      const pZero = round(this.pZero(t), 5)

      if ((value === 0 && pZero === 0) || (value === 1 && pZero === 1)) {
        this.x(t)
      }
    }
    return this
  }

  /**
   * Measures the specified qubits and updates the state accordingly.
   */
  measure(...targets: number[]): Simulator {
    for (const t of targets) {
      const pZero = this.pZero(t)
      const rand = Math.random()

      if (rand <= pZero) {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) !== 0) this.state.setAmplifier(bit, Complex.ZERO)
          const res = this.state.amplifier(bit).div(Math.sqrt(pZero))
          /* istanbul ignore next */
          if (res.isErr()) {
            throw Error(res.error.message)
          }
          this.state.setAmplifier(bit, res.value)
        }
        this.measuredBits[t] = 0
      } else {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) === 0) this.state.setAmplifier(bit, Complex.ZERO)
          const res = this.state.amplifier(bit).div(Math.sqrt(1 - pZero))
          /* istanbul ignore next */
          if (res.isErr()) {
            throw Error(res.error.message)
          }
          this.state.setAmplifier(bit, res.value)
        }
        this.measuredBits[t] = 1
      }
    }
    return this
  }

  /**
   * Applies the Quantum Fourier Transform (QFT) to the specified targets.
   */
  qft(span: ResizeableSpan, ...targets: number[]): Simulator {
    for (const each of targets) {
      this.qftSingleTargetBit(span, each)
    }
    return this
  }

  /**
   * Applies the inverse Quantum Fourier Transform (QFT) to the specified targets.
   */
  qftDagger(span: ResizeableSpan, ...targets: number[]): Simulator {
    for (const each of targets) {
      this.qftDaggerSingleTargetBit(span, each)
    }
    return this
  }

  private qftSingleTargetBit(span: ResizeableSpan, target: number): Simulator {
    for (let i = 0; i < span; i++) {
      this.h(target + i)
      for (let j = 1; j < span - i; j++) {
        this.phase(`π/${2 ** j}`, target + i, {controls: [target + i + j]})
      }
    }
    return this
  }

  private qftDaggerSingleTargetBit(span: ResizeableSpan, target: number): Simulator {
    for (let i = span - 1; i >= 0; i--) {
      for (let j = span - i - 1; j > 0; j--) {
        this.phase(`-π/${2 ** j}`, target + i, {controls: [target + i + j]})
      }
      this.h(target + i)
    }
    return this
  }

  private processGateArgs(args: Array<number | ControlOptions>): {
    targets: number[]
    controlOptions: ControlOptions
  } {
    const controlOptions = typeof args[args.length - 1] === 'object' ? (args.pop() as ControlOptions) : {}
    const targets = args as number[]

    return {targets, controlOptions}
  }

  private cu(u: Matrix, targets: number[], gateControlOptions: ControlOptions): void {
    for (const t of targets) {
      this.state.applyControlledGate(u, t, gateControlOptions.controls, gateControlOptions.antiControls)
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
