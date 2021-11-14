import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {XGateElement} from './x-gate-element'

export type Operation = HGateElement | XGateElement | ControlGateElement
export type ControllableOperation = HGateElement | XGateElement

export const isControllableOperation = (arg: unknown): arg is ControllableOperation =>
  arg instanceof HGateElement || arg instanceof XGateElement
