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
import {H, X, Y, Z, S, SDagger, T, TDagger, PHASE} from './gate-matrices'
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
            this.ach(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.h(...each.targets)
          }
          break
        case SerializedXGateType:
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acnot(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.x(...each.targets)
          }
          break
        case SerializedYGateType:
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acy(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.y(...each.targets)
          }
          break
        case SerializedZGateType:
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acz(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.z(...each.targets)
          }
          break
        case SerializedSpacerGateType:
          break
        case SerializedPhaseGateType: {
          if (!each.angle) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acphase(each.controls || [], each.antiControls || [], each.angle, each.targets[0])
          } else {
            this.cphase(each.targets.slice(1), each.angle, each.targets[0])
          }
          break
        }
        case SerializedSGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acs(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.s(...each.targets)
          }
          break
        }
        case SerializedSDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.acsDagger(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.sDagger(...each.targets)
          }
          break
        }
        case SerializedTGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.act(each.controls || [], each.antiControls || [], ...each.targets)
          } else {
            this.t(...each.targets)
          }
          break
        }
        case SerializedTDaggerGateType: {
          if (each.if && !this.flags[each.if]) break
          if ((each.controls && each.controls.length > 0) || (each.antiControls && each.antiControls.length > 0)) {
            this.actDagger(each.controls || [], each.antiControls || [], ...each.targets)
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
    this.u(H, ...targets)
    return this
  }

  ch(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, H, ...targets)
    return this
  }

  ach(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, H, ...targets)
    this.x(...antiControls)
    return this
  }

  x(...targets: number[]): Simulator {
    this.u(X, ...targets)
    return this
  }

  cnot(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, X, ...targets)

    return this
  }

  acnot(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, X, ...targets)
    this.x(...antiControls)

    return this
  }

  y(...targets: number[]): Simulator {
    this.u(Y, ...targets)
    return this
  }

  cy(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Y, ...targets)
    return this
  }

  acy(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, Y, ...targets)
    this.x(...antiControls)
    return this
  }

  z(...targets: number[]): Simulator {
    this.u(Z, ...targets)
    return this
  }

  cz(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, Z, ...targets)
    return this
  }

  acz(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, Z, ...targets)
    this.x(...antiControls)
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    this.u(PHASE(phi), ...targets)
    return this
  }

  cphase(controls: number | number[], phi: string, ...targets: number[]): Simulator {
    this.cu(controls, PHASE(phi), ...targets)
    return this
  }

  acphase(controls: number | number[], antiControls: number[], phi: string, ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, PHASE(phi), ...targets)
    this.x(...antiControls)
    return this
  }

  s(...targets: number[]): Simulator {
    this.u(S, ...targets)
    return this
  }

  acs(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, S, ...targets)
    this.x(...antiControls)
    return this
  }

  sDagger(...targets: number[]): Simulator {
    this.u(SDagger, ...targets)
    return this
  }

  acsDagger(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, SDagger, ...targets)
    this.x(...antiControls)
    return this
  }

  t(...targets: number[]): Simulator {
    this.u(T, ...targets)
    return this
  }

  ct(controls: number | number[], ...targets: number[]): Simulator {
    this.cu(controls, T, ...targets)
    return this
  }

  act(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, T, ...targets)
    this.x(...antiControls)
    return this
  }

  tDagger(...targets: number[]): Simulator {
    this.u(TDagger, ...targets)
    return this
  }

  actDagger(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, TDagger, ...targets)
    this.x(...antiControls)
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

  crnot(controls: number | number[], antiControls: number[], ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, Matrix.RNOT, ...targets)
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
    this.cu(allControls, Matrix.RNOT, ...targets)
    this.x(...antiControls)
    return this
  }

  rx(theta: string, ...targets: number[]): Simulator {
    this.u(Matrix.RX(theta), ...targets)
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
    this.cu(allControls, Matrix.RX(theta), ...targets)
    this.x(...antiControls)
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

  acry(controls: number | number[], antiControls: number[], theta: string, ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, Matrix.RY(theta), ...targets)
    this.x(...antiControls)
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

  acrz(controls: number | number[], antiControls: number[], theta: string, ...targets: number[]): Simulator {
    let allControls
    if (typeof controls === 'number') {
      allControls = [controls].concat(antiControls)
    } else {
      allControls = controls.concat(antiControls)
    }

    this.x(...antiControls)
    this.cu(allControls, Matrix.RZ(theta), ...targets)
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
    switch (span) {
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
      case 9: {
        this.swap(target, target + 8)
          .swap(target + 1, target + 7)
          .swap(target + 2, target + 6)
          .swap(target + 3, target + 5)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .h(target + 8)
        break
      }
      case 10: {
        this.swap(target, target + 9)
          .swap(target + 1, target + 8)
          .swap(target + 2, target + 7)
          .swap(target + 3, target + 6)
          .swap(target + 4, target + 5)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .h(target + 9)
        break
      }
      case 11: {
        this.swap(target, target + 10)
          .swap(target + 1, target + 9)
          .swap(target + 2, target + 8)
          .swap(target + 3, target + 7)
          .swap(target + 4, target + 6)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .cphase(target + 10, 'π/1024', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .cphase(target + 10, 'π/512', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .cphase(target + 10, 'π/256', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .cphase(target + 10, 'π/128', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .cphase(target + 10, 'π/64', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .cphase(target + 10, 'π/32', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .cphase(target + 10, 'π/16', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .cphase(target + 10, 'π/8', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .cphase(target + 10, 'π/4', target + 8)
          .h(target + 9)
          .cphase(target + 10, 'π/2', target + 8)
          .h(target + 10)
        break
      }
      case 12: {
        this.swap(target, target + 11)
          .swap(target + 1, target + 10)
          .swap(target + 2, target + 9)
          .swap(target + 3, target + 8)
          .swap(target + 4, target + 7)
          .swap(target + 5, target + 6)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .cphase(target + 10, 'π/1024', target)
          .cphase(target + 11, 'π/2048', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .cphase(target + 10, 'π/512', target + 1)
          .cphase(target + 11, 'π/1024', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .cphase(target + 10, 'π/256', target + 2)
          .cphase(target + 11, 'π/512', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .cphase(target + 10, 'π/128', target + 3)
          .cphase(target + 11, 'π/256', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .cphase(target + 10, 'π/64', target + 4)
          .cphase(target + 11, 'π/128', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .cphase(target + 10, 'π/32', target + 5)
          .cphase(target + 11, 'π/64', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .cphase(target + 10, 'π/16', target + 6)
          .cphase(target + 11, 'π/32', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .cphase(target + 10, 'π/8', target + 7)
          .cphase(target + 11, 'π/16', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .cphase(target + 10, 'π/4', target + 8)
          .cphase(target + 11, 'π/8', target + 8)
          .h(target + 9)
          .cphase(target + 10, 'π/2', target + 8)
          .cphase(target + 11, 'π/4', target + 8)
          .h(target + 10)
          .cphase(target + 11, 'π/2', target + 9)
          .h(target + 11)
        break
      }
      case 13: {
        this.swap(target, target + 12)
          .swap(target + 1, target + 11)
          .swap(target + 2, target + 10)
          .swap(target + 3, target + 9)
          .swap(target + 4, target + 8)
          .swap(target + 5, target + 7)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .cphase(target + 10, 'π/1024', target)
          .cphase(target + 11, 'π/2048', target)
          .cphase(target + 12, 'π/4096', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .cphase(target + 10, 'π/512', target + 1)
          .cphase(target + 11, 'π/1024', target + 1)
          .cphase(target + 12, 'π/2048', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .cphase(target + 10, 'π/256', target + 2)
          .cphase(target + 11, 'π/512', target + 2)
          .cphase(target + 12, 'π/1024', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .cphase(target + 10, 'π/128', target + 3)
          .cphase(target + 11, 'π/256', target + 3)
          .cphase(target + 12, 'π/512', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .cphase(target + 10, 'π/64', target + 4)
          .cphase(target + 11, 'π/128', target + 4)
          .cphase(target + 12, 'π/256', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .cphase(target + 10, 'π/32', target + 5)
          .cphase(target + 11, 'π/64', target + 5)
          .cphase(target + 12, 'π/128', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .cphase(target + 10, 'π/16', target + 6)
          .cphase(target + 11, 'π/32', target + 6)
          .cphase(target + 12, 'π/64', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .cphase(target + 10, 'π/8', target + 7)
          .cphase(target + 11, 'π/16', target + 7)
          .cphase(target + 12, 'π/32', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .cphase(target + 10, 'π/4', target + 8)
          .cphase(target + 11, 'π/8', target + 8)
          .cphase(target + 12, 'π/16', target + 8)
          .h(target + 9)
          .cphase(target + 10, 'π/2', target + 8)
          .cphase(target + 11, 'π/4', target + 8)
          .cphase(target + 12, 'π/8', target + 8)
          .h(target + 10)
          .cphase(target + 11, 'π/2', target + 9)
          .cphase(target + 12, 'π/4', target + 9)
          .h(target + 11)
          .cphase(target + 13, 'π/2', target + 10)
          .h(target + 12)
        break
      }
      case 14: {
        this.swap(target, target + 13)
          .swap(target + 1, target + 12)
          .swap(target + 2, target + 11)
          .swap(target + 3, target + 10)
          .swap(target + 4, target + 9)
          .swap(target + 5, target + 8)
          .swap(target + 6, target + 7)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .cphase(target + 10, 'π/1024', target)
          .cphase(target + 11, 'π/2048', target)
          .cphase(target + 12, 'π/4096', target)
          .cphase(target + 13, 'π/8192', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .cphase(target + 10, 'π/512', target + 1)
          .cphase(target + 11, 'π/1024', target + 1)
          .cphase(target + 12, 'π/2048', target + 1)
          .cphase(target + 13, 'π/4096', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .cphase(target + 10, 'π/256', target + 2)
          .cphase(target + 11, 'π/512', target + 2)
          .cphase(target + 12, 'π/1024', target + 2)
          .cphase(target + 13, 'π/2048', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .cphase(target + 10, 'π/128', target + 3)
          .cphase(target + 11, 'π/256', target + 3)
          .cphase(target + 12, 'π/512', target + 3)
          .cphase(target + 13, 'π/1024', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .cphase(target + 10, 'π/64', target + 4)
          .cphase(target + 11, 'π/128', target + 4)
          .cphase(target + 12, 'π/256', target + 4)
          .cphase(target + 13, 'π/512', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .cphase(target + 10, 'π/32', target + 5)
          .cphase(target + 11, 'π/64', target + 5)
          .cphase(target + 12, 'π/128', target + 5)
          .cphase(target + 13, 'π/256', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .cphase(target + 10, 'π/16', target + 6)
          .cphase(target + 11, 'π/32', target + 6)
          .cphase(target + 12, 'π/64', target + 6)
          .cphase(target + 13, 'π/128', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .cphase(target + 10, 'π/8', target + 7)
          .cphase(target + 11, 'π/16', target + 7)
          .cphase(target + 12, 'π/32', target + 7)
          .cphase(target + 13, 'π/64', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .cphase(target + 10, 'π/4', target + 8)
          .cphase(target + 11, 'π/8', target + 8)
          .cphase(target + 12, 'π/16', target + 8)
          .cphase(target + 13, 'π/32', target + 8)
          .h(target + 9)
          .cphase(target + 10, 'π/2', target + 8)
          .cphase(target + 11, 'π/4', target + 8)
          .cphase(target + 12, 'π/8', target + 8)
          .cphase(target + 13, 'π/16', target + 8)
          .h(target + 10)
          .cphase(target + 11, 'π/2', target + 9)
          .cphase(target + 12, 'π/4', target + 9)
          .cphase(target + 13, 'π/8', target + 9)
          .h(target + 11)
          .cphase(target + 13, 'π/2', target + 10)
          .cphase(target + 14, 'π/4', target + 10)
          .h(target + 12)
          .cphase(target + 14, 'π/2', target + 11)
          .h(target + 13)
        break
      }
      case 15: {
        this.swap(target, target + 14)
          .swap(target + 1, target + 13)
          .swap(target + 2, target + 12)
          .swap(target + 3, target + 11)
          .swap(target + 4, target + 10)
          .swap(target + 5, target + 9)
          .swap(target + 6, target + 8)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .cphase(target + 10, 'π/1024', target)
          .cphase(target + 11, 'π/2048', target)
          .cphase(target + 12, 'π/4096', target)
          .cphase(target + 13, 'π/8192', target)
          .cphase(target + 14, 'π/16384', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .cphase(target + 10, 'π/512', target + 1)
          .cphase(target + 11, 'π/1024', target + 1)
          .cphase(target + 12, 'π/2048', target + 1)
          .cphase(target + 13, 'π/4096', target + 1)
          .cphase(target + 14, 'π/8192', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .cphase(target + 10, 'π/256', target + 2)
          .cphase(target + 11, 'π/512', target + 2)
          .cphase(target + 12, 'π/1024', target + 2)
          .cphase(target + 13, 'π/2048', target + 2)
          .cphase(target + 14, 'π/4096', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .cphase(target + 10, 'π/128', target + 3)
          .cphase(target + 11, 'π/256', target + 3)
          .cphase(target + 12, 'π/512', target + 3)
          .cphase(target + 13, 'π/1024', target + 3)
          .cphase(target + 14, 'π/2048', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .cphase(target + 10, 'π/64', target + 4)
          .cphase(target + 11, 'π/128', target + 4)
          .cphase(target + 12, 'π/256', target + 4)
          .cphase(target + 13, 'π/512', target + 4)
          .cphase(target + 14, 'π/1024', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .cphase(target + 10, 'π/32', target + 5)
          .cphase(target + 11, 'π/64', target + 5)
          .cphase(target + 12, 'π/128', target + 5)
          .cphase(target + 13, 'π/256', target + 5)
          .cphase(target + 14, 'π/512', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .cphase(target + 10, 'π/16', target + 6)
          .cphase(target + 11, 'π/32', target + 6)
          .cphase(target + 12, 'π/64', target + 6)
          .cphase(target + 13, 'π/128', target + 6)
          .cphase(target + 14, 'π/256', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .cphase(target + 10, 'π/8', target + 7)
          .cphase(target + 11, 'π/16', target + 7)
          .cphase(target + 12, 'π/32', target + 7)
          .cphase(target + 13, 'π/64', target + 7)
          .cphase(target + 14, 'π/128', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .cphase(target + 10, 'π/4', target + 8)
          .cphase(target + 11, 'π/8', target + 8)
          .cphase(target + 12, 'π/16', target + 8)
          .cphase(target + 13, 'π/32', target + 8)
          .cphase(target + 14, 'π/64', target + 8)
          .h(target + 9)
          .cphase(target + 10, 'π/2', target + 8)
          .cphase(target + 11, 'π/4', target + 8)
          .cphase(target + 12, 'π/8', target + 8)
          .cphase(target + 13, 'π/16', target + 8)
          .cphase(target + 14, 'π/32', target + 8)
          .h(target + 10)
          .cphase(target + 11, 'π/2', target + 9)
          .cphase(target + 12, 'π/4', target + 9)
          .cphase(target + 13, 'π/8', target + 9)
          .cphase(target + 14, 'π/16', target + 9)
          .h(target + 11)
          .cphase(target + 13, 'π/2', target + 10)
          .cphase(target + 14, 'π/4', target + 10)
          .cphase(target + 15, 'π/8', target + 10)
          .h(target + 12)
          .cphase(target + 14, 'π/2', target + 11)
          .cphase(target + 15, 'π/4', target + 11)
          .h(target + 13)
          .cphase(target + 15, 'π/2', target + 12)
          .h(target + 14)
        break
      }
      case 16: {
        this.swap(target, target + 15)
          .swap(target + 1, target + 14)
          .swap(target + 2, target + 13)
          .swap(target + 3, target + 12)
          .swap(target + 4, target + 11)
          .swap(target + 5, target + 10)
          .swap(target + 6, target + 9)
          .swap(target + 7, target + 8)
          .h(target)
          .cphase(target + 1, 'π/2', target)
          .cphase(target + 2, 'π/4', target)
          .cphase(target + 3, 'π/8', target)
          .cphase(target + 4, 'π/16', target)
          .cphase(target + 5, 'π/32', target)
          .cphase(target + 6, 'π/64', target)
          .cphase(target + 7, 'π/128', target)
          .cphase(target + 8, 'π/256', target)
          .cphase(target + 9, 'π/512', target)
          .cphase(target + 10, 'π/1024', target)
          .cphase(target + 11, 'π/2048', target)
          .cphase(target + 12, 'π/4096', target)
          .cphase(target + 13, 'π/8192', target)
          .cphase(target + 14, 'π/16384', target)
          .cphase(target + 15, 'π/32768', target)
          .h(target + 1)
          .cphase(target + 2, 'π/2', target + 1)
          .cphase(target + 3, 'π/4', target + 1)
          .cphase(target + 4, 'π/8', target + 1)
          .cphase(target + 5, 'π/16', target + 1)
          .cphase(target + 6, 'π/32', target + 1)
          .cphase(target + 7, 'π/64', target + 1)
          .cphase(target + 8, 'π/128', target + 1)
          .cphase(target + 9, 'π/256', target + 1)
          .cphase(target + 10, 'π/512', target + 1)
          .cphase(target + 11, 'π/1024', target + 1)
          .cphase(target + 12, 'π/2048', target + 1)
          .cphase(target + 13, 'π/4096', target + 1)
          .cphase(target + 14, 'π/8192', target + 1)
          .cphase(target + 15, 'π/16384', target + 1)
          .h(target + 2)
          .cphase(target + 3, 'π/2', target + 2)
          .cphase(target + 4, 'π/4', target + 2)
          .cphase(target + 5, 'π/8', target + 2)
          .cphase(target + 6, 'π/16', target + 2)
          .cphase(target + 7, 'π/32', target + 2)
          .cphase(target + 8, 'π/64', target + 2)
          .cphase(target + 9, 'π/128', target + 2)
          .cphase(target + 10, 'π/256', target + 2)
          .cphase(target + 11, 'π/512', target + 2)
          .cphase(target + 12, 'π/1024', target + 2)
          .cphase(target + 13, 'π/2048', target + 2)
          .cphase(target + 14, 'π/4096', target + 2)
          .cphase(target + 15, 'π/8192', target + 2)
          .h(target + 3)
          .cphase(target + 4, 'π/2', target + 3)
          .cphase(target + 5, 'π/4', target + 3)
          .cphase(target + 6, 'π/8', target + 3)
          .cphase(target + 7, 'π/16', target + 3)
          .cphase(target + 8, 'π/32', target + 3)
          .cphase(target + 9, 'π/64', target + 3)
          .cphase(target + 10, 'π/128', target + 3)
          .cphase(target + 11, 'π/256', target + 3)
          .cphase(target + 12, 'π/512', target + 3)
          .cphase(target + 13, 'π/1024', target + 3)
          .cphase(target + 14, 'π/2048', target + 3)
          .cphase(target + 15, 'π/4096', target + 3)
          .h(target + 4)
          .cphase(target + 5, 'π/2', target + 4)
          .cphase(target + 6, 'π/4', target + 4)
          .cphase(target + 7, 'π/8', target + 4)
          .cphase(target + 8, 'π/16', target + 4)
          .cphase(target + 9, 'π/32', target + 4)
          .cphase(target + 10, 'π/64', target + 4)
          .cphase(target + 11, 'π/128', target + 4)
          .cphase(target + 12, 'π/256', target + 4)
          .cphase(target + 13, 'π/512', target + 4)
          .cphase(target + 14, 'π/1024', target + 4)
          .cphase(target + 15, 'π/2048', target + 4)
          .h(target + 5)
          .cphase(target + 6, 'π/2', target + 5)
          .cphase(target + 7, 'π/4', target + 5)
          .cphase(target + 8, 'π/8', target + 5)
          .cphase(target + 9, 'π/16', target + 5)
          .cphase(target + 10, 'π/32', target + 5)
          .cphase(target + 11, 'π/64', target + 5)
          .cphase(target + 12, 'π/128', target + 5)
          .cphase(target + 13, 'π/256', target + 5)
          .cphase(target + 14, 'π/512', target + 5)
          .cphase(target + 15, 'π/1024', target + 5)
          .h(target + 6)
          .cphase(target + 7, 'π/2', target + 6)
          .cphase(target + 8, 'π/4', target + 6)
          .cphase(target + 9, 'π/8', target + 6)
          .cphase(target + 10, 'π/16', target + 6)
          .cphase(target + 11, 'π/32', target + 6)
          .cphase(target + 12, 'π/64', target + 6)
          .cphase(target + 13, 'π/128', target + 6)
          .cphase(target + 14, 'π/256', target + 6)
          .cphase(target + 15, 'π/512', target + 6)
          .h(target + 7)
          .cphase(target + 8, 'π/2', target + 7)
          .cphase(target + 9, 'π/4', target + 7)
          .cphase(target + 10, 'π/8', target + 7)
          .cphase(target + 11, 'π/16', target + 7)
          .cphase(target + 12, 'π/32', target + 7)
          .cphase(target + 13, 'π/64', target + 7)
          .cphase(target + 14, 'π/128', target + 7)
          .cphase(target + 15, 'π/256', target + 7)
          .h(target + 8)
          .cphase(target + 9, 'π/2', target + 8)
          .cphase(target + 10, 'π/4', target + 8)
          .cphase(target + 11, 'π/8', target + 8)
          .cphase(target + 12, 'π/16', target + 8)
          .cphase(target + 13, 'π/32', target + 8)
          .cphase(target + 14, 'π/64', target + 8)
          .cphase(target + 15, 'π/128', target + 8)
          .h(target + 9)
          .cphase(target + 10, 'π/2', target + 8)
          .cphase(target + 11, 'π/4', target + 8)
          .cphase(target + 12, 'π/8', target + 8)
          .cphase(target + 13, 'π/16', target + 8)
          .cphase(target + 14, 'π/32', target + 8)
          .cphase(target + 15, 'π/64', target + 8)
          .h(target + 10)
          .cphase(target + 11, 'π/2', target + 9)
          .cphase(target + 12, 'π/4', target + 9)
          .cphase(target + 13, 'π/8', target + 9)
          .cphase(target + 14, 'π/16', target + 9)
          .cphase(target + 15, 'π/32', target + 9)
          .h(target + 11)
          .cphase(target + 13, 'π/2', target + 10)
          .cphase(target + 14, 'π/4', target + 10)
          .cphase(target + 15, 'π/8', target + 10)
          .cphase(target + 16, 'π/16', target + 10)
          .h(target + 12)
          .cphase(target + 14, 'π/2', target + 11)
          .cphase(target + 15, 'π/4', target + 11)
          .cphase(target + 16, 'π/8', target + 11)
          .h(target + 13)
          .cphase(target + 15, 'π/2', target + 12)
          .cphase(target + 16, 'π/4', target + 12)
          .h(target + 14)
          .cphase(target + 16, 'π/2', target + 13)
          .h(target + 15)
        break
      }
      default: {
        throw new Error(`Invalid span: ${span}`)
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
    switch (span) {
      case 1: {
        this.h(target)
        break
      }
      case 2: {
        this.h(target + 1)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 1)
        break
      }
      case 3: {
        this.h(target + 2)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 2)
        break
      }
      case 4: {
        this.h(target + 3)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 3)
          .swap(target + 1, target + 2)
        break
      }
      case 5: {
        this.h(target + 4)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 4)
          .swap(target + 1, target + 3)
        break
      }
      case 6: {
        this.h(target + 5)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 5)
          .swap(target + 1, target + 4)
          .swap(target + 2, target + 3)
        break
      }
      case 7: {
        this.h(target + 6)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 6)
          .swap(target + 1, target + 5)
          .swap(target + 2, target + 4)
        break
      }
      case 8: {
        this.h(target + 7)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 7)
          .swap(target + 1, target + 6)
          .swap(target + 2, target + 5)
          .swap(target + 3, target + 4)
        break
      }
      case 9: {
        this.h(target + 8)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 8)
          .swap(target + 1, target + 7)
          .swap(target + 2, target + 6)
          .swap(target + 3, target + 5)
        break
      }
      case 10: {
        this.h(target + 9)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 9)
          .swap(target + 1, target + 8)
          .swap(target + 2, target + 7)
          .swap(target + 3, target + 6)
          .swap(target + 4, target + 5)
        break
      }
      case 11: {
        this.h(target + 10)
          .cphase(target + 10, '-π/2', target + 9)
          .h(target + 9)
          .cphase(target + 10, '-π/4', target + 8)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 10, '-π/8', target + 7)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 10, '-π/16', target + 6)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 10, '-π/32', target + 5)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 10, '-π/64', target + 4)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 10, '-π/128', target + 3)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 10, '-π/256', target + 2)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 10, '-π/512', target + 1)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 10, '-π/1024', target)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 10)
          .swap(target + 1, target + 9)
          .swap(target + 2, target + 8)
          .swap(target + 3, target + 7)
          .swap(target + 4, target + 6)
        break
      }
      case 12: {
        this.h(target + 11)
          .cphase(target + 11, '-π/2', target + 10)
          .h(target + 10)
          .cphase(target + 11, '-π/4', target + 9)
          .cphase(target + 10, '-π/2', target + 9)
          .h(target + 9)
          .cphase(target + 11, '-π/8', target + 8)
          .cphase(target + 10, '-π/4', target + 8)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 11, '-π/16', target + 7)
          .cphase(target + 10, '-π/8', target + 7)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 11, '-π/32', target + 6)
          .cphase(target + 10, '-π/16', target + 6)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 11, '-π/64', target + 5)
          .cphase(target + 10, '-π/32', target + 5)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 11, '-π/128', target + 4)
          .cphase(target + 10, '-π/64', target + 4)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 11, '-π/256', target + 3)
          .cphase(target + 10, '-π/128', target + 3)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 11, '-π/512', target + 2)
          .cphase(target + 10, '-π/256', target + 2)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 11, '-π/1024', target + 1)
          .cphase(target + 10, '-π/512', target + 1)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 11, '-π/2048', target)
          .cphase(target + 10, '-π/1024', target)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 11)
          .swap(target + 1, target + 10)
          .swap(target + 2, target + 9)
          .swap(target + 3, target + 8)
          .swap(target + 4, target + 7)
          .swap(target + 5, target + 6)
        break
      }
      case 13: {
        this.h(target + 12)
          .cphase(target + 12, '-π/2', target + 11)
          .h(target + 11)
          .cphase(target + 12, '-π/4', target + 10)
          .cphase(target + 11, '-π/2', target + 10)
          .h(target + 10)
          .cphase(target + 12, '-π/8', target + 9)
          .cphase(target + 11, '-π/4', target + 9)
          .cphase(target + 10, '-π/2', target + 9)
          .h(target + 9)
          .cphase(target + 12, '-π/16', target + 8)
          .cphase(target + 11, '-π/8', target + 8)
          .cphase(target + 10, '-π/4', target + 8)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 12, '-π/32', target + 7)
          .cphase(target + 11, '-π/16', target + 7)
          .cphase(target + 10, '-π/8', target + 7)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 12, '-π/64', target + 6)
          .cphase(target + 11, '-π/32', target + 6)
          .cphase(target + 10, '-π/16', target + 6)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 12, '-π/128', target + 5)
          .cphase(target + 11, '-π/64', target + 5)
          .cphase(target + 10, '-π/32', target + 5)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 12, '-π/256', target + 4)
          .cphase(target + 11, '-π/128', target + 4)
          .cphase(target + 10, '-π/64', target + 4)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 12, '-π/512', target + 3)
          .cphase(target + 11, '-π/256', target + 3)
          .cphase(target + 10, '-π/128', target + 3)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 12, '-π/1024', target + 2)
          .cphase(target + 11, '-π/512', target + 2)
          .cphase(target + 10, '-π/256', target + 2)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 12, '-π/2048', target + 1)
          .cphase(target + 11, '-π/1024', target + 1)
          .cphase(target + 10, '-π/512', target + 1)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 12, '-π/4096', target)
          .cphase(target + 11, '-π/2048', target)
          .cphase(target + 10, '-π/1024', target)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 12)
          .swap(target + 1, target + 11)
          .swap(target + 2, target + 10)
          .swap(target + 3, target + 9)
          .swap(target + 4, target + 8)
          .swap(target + 5, target + 7)
        break
      }
      case 14: {
        this.h(target + 13)
          .cphase(target + 13, '-π/2', target + 12)
          .h(target + 12)
          .cphase(target + 13, '-π/4', target + 11)
          .cphase(target + 12, '-π/2', target + 11)
          .h(target + 11)
          .cphase(target + 13, '-π/8', target + 10)
          .cphase(target + 12, '-π/4', target + 10)
          .cphase(target + 11, '-π/2', target)
          .h(target + 10)
          .cphase(target + 13, '-π/16', target + 9)
          .cphase(target + 12, '-π/8', target + 9)
          .cphase(target + 11, '-π/4', target + 9)
          .cphase(target + 10, '-π/2', target + 9)
          .h(target + 9)
          .cphase(target + 13, '-π/32', target + 8)
          .cphase(target + 12, '-π/16', target + 8)
          .cphase(target + 11, '-π/8', target + 8)
          .cphase(target + 10, '-π/4', target + 8)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 13, '-π/64', target + 7)
          .cphase(target + 12, '-π/32', target + 7)
          .cphase(target + 11, '-π/16', target + 7)
          .cphase(target + 10, '-π/8', target + 7)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 13, '-π/128', target + 6)
          .cphase(target + 12, '-π/64', target + 6)
          .cphase(target + 11, '-π/32', target + 6)
          .cphase(target + 10, '-π/16', target + 6)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 13, '-π/256', target + 5)
          .cphase(target + 12, '-π/128', target + 5)
          .cphase(target + 11, '-π/64', target + 5)
          .cphase(target + 10, '-π/32', target + 5)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 13, '-π/512', target + 4)
          .cphase(target + 12, '-π/256', target + 4)
          .cphase(target + 11, '-π/128', target + 4)
          .cphase(target + 10, '-π/64', target + 4)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 13, '-π/1024', target + 3)
          .cphase(target + 12, '-π/512', target + 3)
          .cphase(target + 11, '-π/256', target + 3)
          .cphase(target + 10, '-π/128', target + 3)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 13, '-π/2048', target + 2)
          .cphase(target + 12, '-π/1024', target + 2)
          .cphase(target + 11, '-π/512', target + 2)
          .cphase(target + 10, '-π/256', target + 2)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 13, '-π/4096', target + 1)
          .cphase(target + 12, '-π/2048', target + 1)
          .cphase(target + 11, '-π/1024', target + 1)
          .cphase(target + 10, '-π/512', target + 1)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 13, '-π/8192', target)
          .cphase(target + 12, '-π/4096', target)
          .cphase(target + 11, '-π/2048', target)
          .cphase(target + 10, '-π/1024', target)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 13)
          .swap(target + 1, target + 12)
          .swap(target + 2, target + 11)
          .swap(target + 3, target + 10)
          .swap(target + 4, target + 9)
          .swap(target + 5, target + 8)
          .swap(target + 6, target + 7)
        break
      }
      case 15: {
        this.h(target + 14)
          .cphase(target + 14, '-π/2', target + 13)
          .h(target + 13)
          .cphase(target + 14, '-π/4', target + 12)
          .cphase(target + 13, '-π/2', target + 12)
          .h(target + 12)
          .cphase(target + 14, '-π/8', target + 11)
          .cphase(target + 13, '-π/4', target + 11)
          .cphase(target + 12, '-π/2', target + 11)
          .h(target + 11)
          .cphase(target + 14, '-π/16', target + 10)
          .cphase(target + 13, '-π/8', target + 10)
          .cphase(target + 12, '-π/4', target + 10)
          .cphase(target + 11, '-π/2', target + 10)
          .h(target + 10)
          .cphase(target + 14, '-π/32', target + 9)
          .cphase(target + 13, '-π/16', target + 9)
          .cphase(target + 12, '-π/8', target + 9)
          .cphase(target + 11, '-π/4', target + 9)
          .cphase(target + 10, '-π/2', target + 9)
          .h(target + 9)
          .cphase(target + 14, '-π/64', target + 8)
          .cphase(target + 13, '-π/32', target + 8)
          .cphase(target + 12, '-π/16', target + 8)
          .cphase(target + 11, '-π/8', target + 8)
          .cphase(target + 10, '-π/4', target + 8)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 14, '-π/128', target + 7)
          .cphase(target + 13, '-π/64', target + 7)
          .cphase(target + 12, '-π/32', target + 7)
          .cphase(target + 11, '-π/16', target + 7)
          .cphase(target + 10, '-π/8', target + 7)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 14, '-π/256', target + 6)
          .cphase(target + 13, '-π/128', target + 6)
          .cphase(target + 12, '-π/64', target + 6)
          .cphase(target + 11, '-π/32', target + 6)
          .cphase(target + 10, '-π/16', target + 6)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 14, '-π/512', target + 5)
          .cphase(target + 13, '-π/256', target + 5)
          .cphase(target + 12, '-π/128', target + 5)
          .cphase(target + 11, '-π/64', target + 5)
          .cphase(target + 10, '-π/32', target + 5)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 14, '-π/1024', target + 4)
          .cphase(target + 13, '-π/512', target + 4)
          .cphase(target + 12, '-π/256', target + 4)
          .cphase(target + 11, '-π/128', target + 4)
          .cphase(target + 10, '-π/64', target + 4)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 14, '-π/2048', target + 3)
          .cphase(target + 13, '-π/1024', target + 3)
          .cphase(target + 12, '-π/512', target + 3)
          .cphase(target + 11, '-π/256', target + 3)
          .cphase(target + 10, '-π/128', target + 3)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 14, '-π/4096', target + 2)
          .cphase(target + 13, '-π/2048', target + 2)
          .cphase(target + 12, '-π/1024', target + 2)
          .cphase(target + 11, '-π/512', target + 2)
          .cphase(target + 10, '-π/256', target + 2)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 14, '-π/8192', target + 1)
          .cphase(target + 13, '-π/4096', target + 1)
          .cphase(target + 12, '-π/2048', target + 1)
          .cphase(target + 11, '-π/1024', target + 1)
          .cphase(target + 10, '-π/512', target + 1)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 14, '-π/16384', target)
          .cphase(target + 13, '-π/8192', target)
          .cphase(target + 12, '-π/4096', target)
          .cphase(target + 11, '-π/2048', target)
          .cphase(target + 10, '-π/1024', target)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target, target + 14)
          .swap(target + 1, target + 13)
          .swap(target + 2, target + 12)
          .swap(target + 3, target + 11)
          .swap(target + 4, target + 10)
          .swap(target + 5, target + 9)
          .swap(target + 6, target + 8)
        break
      }
      case 16: {
        this.h(target + 15)
          .cphase(target + 15, '-π/2', target + 14)
          .h(target + 14)
          .cphase(target + 15, '-π/4', target + 13)
          .cphase(target + 14, '-π/4', target + 13)
          .h(target + 13)
          .cphase(target + 15, '-π/8', target + 12)
          .cphase(target + 14, '-π/4', target + 12)
          .cphase(target + 13, '-π/2', target + 12)
          .h(target + 12)
          .cphase(target + 15, '-π/16', target + 11)
          .cphase(target + 14, '-π/8', target + 11)
          .cphase(target + 13, '-π/4', target + 11)
          .cphase(target + 12, '-π/2', target + 11)
          .h(target + 11)
          .cphase(target + 15, '-π/32', target + 10)
          .cphase(target + 14, '-π/16', target + 10)
          .cphase(target + 13, '-π/8', target + 10)
          .cphase(target + 12, '-π/4', target + 10)
          .cphase(target + 11, '-π/2', target + 10)
          .h(target + 10)
          .cphase(target + 15, '-π/64', target + 9)
          .cphase(target + 14, '-π/32', target + 9)
          .cphase(target + 13, '-π/16', target + 9)
          .cphase(target + 12, '-π/8', target + 9)
          .cphase(target + 11, '-π/4', target + 9)
          .cphase(target + 10, '-π/2', target + 9)
          .h(target + 9)
          .cphase(target + 15, '-π/128', target + 8)
          .cphase(target + 14, '-π/64', target + 8)
          .cphase(target + 13, '-π/32', target + 8)
          .cphase(target + 12, '-π/16', target + 8)
          .cphase(target + 11, '-π/8', target + 8)
          .cphase(target + 10, '-π/4', target + 8)
          .cphase(target + 9, '-π/2', target + 8)
          .h(target + 8)
          .cphase(target + 15, '-π/256', target + 7)
          .cphase(target + 14, '-π/128', target + 7)
          .cphase(target + 13, '-π/64', target + 7)
          .cphase(target + 12, '-π/32', target + 7)
          .cphase(target + 11, '-π/16', target + 7)
          .cphase(target + 10, '-π/8', target + 7)
          .cphase(target + 9, '-π/4', target + 7)
          .cphase(target + 8, '-π/2', target + 7)
          .h(target + 7)
          .cphase(target + 15, '-π/512', target + 6)
          .cphase(target + 14, '-π/256', target + 6)
          .cphase(target + 13, '-π/128', target + 6)
          .cphase(target + 12, '-π/64', target + 6)
          .cphase(target + 11, '-π/32', target + 6)
          .cphase(target + 10, '-π/16', target + 6)
          .cphase(target + 9, '-π/8', target + 6)
          .cphase(target + 8, '-π/4', target + 6)
          .cphase(target + 7, '-π/2', target + 6)
          .h(target + 6)
          .cphase(target + 15, '-π/1024', target + 5)
          .cphase(target + 14, '-π/512', target + 5)
          .cphase(target + 13, '-π/256', target + 5)
          .cphase(target + 12, '-π/128', target + 5)
          .cphase(target + 11, '-π/64', target + 5)
          .cphase(target + 10, '-π/32', target + 5)
          .cphase(target + 9, '-π/16', target + 5)
          .cphase(target + 8, '-π/8', target + 5)
          .cphase(target + 7, '-π/4', target + 5)
          .cphase(target + 6, '-π/2', target + 5)
          .h(target + 5)
          .cphase(target + 15, '-π/2048', target + 4)
          .cphase(target + 14, '-π/1024', target + 4)
          .cphase(target + 13, '-π/512', target + 4)
          .cphase(target + 12, '-π/256', target + 4)
          .cphase(target + 11, '-π/128', target + 4)
          .cphase(target + 10, '-π/64', target + 4)
          .cphase(target + 9, '-π/32', target + 4)
          .cphase(target + 8, '-π/16', target + 4)
          .cphase(target + 7, '-π/8', target + 4)
          .cphase(target + 6, '-π/4', target + 4)
          .cphase(target + 5, '-π/2', target + 4)
          .h(target + 4)
          .cphase(target + 15, '-π/4096', target + 3)
          .cphase(target + 14, '-π/2048', target + 3)
          .cphase(target + 13, '-π/1024', target + 3)
          .cphase(target + 12, '-π/512', target + 3)
          .cphase(target + 11, '-π/256', target + 3)
          .cphase(target + 10, '-π/128', target + 3)
          .cphase(target + 9, '-π/64', target + 3)
          .cphase(target + 8, '-π/32', target + 3)
          .cphase(target + 7, '-π/16', target + 3)
          .cphase(target + 6, '-π/8', target + 3)
          .cphase(target + 5, '-π/4', target + 3)
          .cphase(target + 4, '-π/2', target + 3)
          .h(target + 3)
          .cphase(target + 15, '-π/8192', target + 2)
          .cphase(target + 14, '-π/4096', target + 2)
          .cphase(target + 13, '-π/2048', target + 2)
          .cphase(target + 12, '-π/1024', target + 2)
          .cphase(target + 11, '-π/512', target + 2)
          .cphase(target + 10, '-π/256', target + 2)
          .cphase(target + 9, '-π/128', target + 2)
          .cphase(target + 8, '-π/64', target + 2)
          .cphase(target + 7, '-π/32', target + 2)
          .cphase(target + 6, '-π/16', target + 2)
          .cphase(target + 5, '-π/8', target + 2)
          .cphase(target + 4, '-π/4', target + 2)
          .cphase(target + 3, '-π/2', target + 2)
          .h(target + 2)
          .cphase(target + 15, '-π/16384', target + 1)
          .cphase(target + 14, '-π/8192', target + 1)
          .cphase(target + 13, '-π/4096', target + 1)
          .cphase(target + 12, '-π/2048', target + 1)
          .cphase(target + 11, '-π/1024', target + 1)
          .cphase(target + 10, '-π/512', target + 1)
          .cphase(target + 9, '-π/256', target + 1)
          .cphase(target + 8, '-π/128', target + 1)
          .cphase(target + 7, '-π/64', target + 1)
          .cphase(target + 6, '-π/32', target + 1)
          .cphase(target + 5, '-π/16', target + 1)
          .cphase(target + 4, '-π/8', target + 1)
          .cphase(target + 3, '-π/4', target + 1)
          .cphase(target + 2, '-π/2', target + 1)
          .h(target + 1)
          .cphase(target + 15, '-π/32768', target)
          .cphase(target + 14, '-π/16384', target)
          .cphase(target + 13, '-π/8192', target)
          .cphase(target + 12, '-π/4096', target)
          .cphase(target + 11, '-π/2048', target)
          .cphase(target + 10, '-π/1024', target)
          .cphase(target + 9, '-π/512', target)
          .cphase(target + 8, '-π/256', target)
          .cphase(target + 7, '-π/128', target)
          .cphase(target + 6, '-π/64', target)
          .cphase(target + 5, '-π/32', target)
          .cphase(target + 4, '-π/16', target)
          .cphase(target + 3, '-π/8', target)
          .cphase(target + 2, '-π/4', target)
          .cphase(target + 1, '-π/2', target)
          .h(target)
          .swap(target + 1, target + 15)
          .swap(target + 2, target + 14)
          .swap(target + 3, target + 13)
          .swap(target + 4, target + 12)
          .swap(target + 5, target + 11)
          .swap(target + 6, target + 10)
          .swap(target + 7, target + 9)
          .swap(target + 8, target + 8)
          .swap(target + 9, target + 7)
          .swap(target + 10, target + 6)
        break
      }
      default: {
        throw new Error(`Invalid span: ${span}`)
      }
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
