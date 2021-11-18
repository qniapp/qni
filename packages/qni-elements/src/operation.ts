import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {PhaseGateElement} from './phase-gate-element'
import {RnotGateElement} from './rnot-gate-element'
import {RxGateElement} from './rx-gate-element'
import {RyGateElement} from './ry-gate-element'
import {RzGateElement} from './rz-gate-element'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'
import {YGateElement} from './y-gate-element'
import {ZGateElement} from './z-gate-element'

export type Operation =
  | HGateElement
  | XGateElement
  | YGateElement
  | ZGateElement
  | PhaseGateElement
  | RnotGateElement
  | RxGateElement
  | RyGateElement
  | RzGateElement
  | ControlGateElement
  | WriteGateElement
  | MeasurementGateElement
export type ControllableOperation =
  | HGateElement
  | XGateElement
  | YGateElement
  | ZGateElement
  | PhaseGateElement
  | RnotGateElement
  | RxGateElement
  | RyGateElement
  | RzGateElement

export const isControllableOperation = (arg: unknown): arg is ControllableOperation =>
  arg instanceof HGateElement ||
  arg instanceof XGateElement ||
  arg instanceof YGateElement ||
  arg instanceof ZGateElement ||
  arg instanceof PhaseGateElement ||
  arg instanceof RnotGateElement ||
  arg instanceof RxGateElement ||
  arg instanceof RyGateElement ||
  arg instanceof RzGateElement

export const isWriteGateElement = (arg: unknown): arg is WriteGateElement =>
  arg !== undefined && arg !== null && arg instanceof WriteGateElement

export const isMeasurementGateElement = (arg: unknown): arg is MeasurementGateElement =>
  arg !== undefined && arg !== null && arg instanceof MeasurementGateElement
