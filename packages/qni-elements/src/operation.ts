import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'

export type Operation = HGateElement | XGateElement | ControlGateElement
export type ControllableOperation = HGateElement | XGateElement

export const isControllableOperation = (arg: unknown): arg is ControllableOperation =>
  arg instanceof HGateElement || arg instanceof XGateElement

export const isWriteGateElement = (arg: unknown): arg is WriteGateElement =>
  arg !== undefined && arg !== null && arg instanceof WriteGateElement

export const isMeasurementGateElement = (arg: unknown): arg is MeasurementGateElement =>
  arg !== undefined && arg !== null && arg instanceof MeasurementGateElement
