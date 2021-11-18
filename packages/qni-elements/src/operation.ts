import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'
import {YGateElement} from './y-gate-element'
import {ZGateElement} from './z-gate-element'

export type Operation =
  | HGateElement
  | XGateElement
  | YGateElement
  | ZGateElement
  | ControlGateElement
  | WriteGateElement
  | MeasurementGateElement
export type ControllableOperation = HGateElement | XGateElement | YGateElement | ZGateElement

export const isControllableOperation = (arg: unknown): arg is ControllableOperation =>
  arg instanceof HGateElement ||
  arg instanceof XGateElement ||
  arg instanceof YGateElement ||
  arg instanceof ZGateElement

export const isWriteGateElement = (arg: unknown): arg is WriteGateElement =>
  arg !== undefined && arg !== null && arg instanceof WriteGateElement

export const isMeasurementGateElement = (arg: unknown): arg is MeasurementGateElement =>
  arg !== undefined && arg !== null && arg instanceof MeasurementGateElement
