import {AntiControlGateElement} from './anti-control-gate-element'
import {BlochDisplayElement} from './bloch-display-element'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {PhaseGateElement} from './phase-gate-element'
import {QftDaggerGateElement} from './qft-dagger-gate-element'
import {QftGateElement} from './qft-gate-element'
import {RnotGateElement} from './rnot-gate-element'
import {RxGateElement} from './rx-gate-element'
import {RyGateElement} from './ry-gate-element'
import {RzGateElement} from './rz-gate-element'
import {SDaggerGateElement} from './s-dagger-gate-element'
import {SGateElement} from './s-gate-element'
import {SpacerGateElement} from './spacer-gate-element'
import {SwapGateElement} from './swap-gate-element'
import {TDaggerGateElement} from './t-dagger-gate-element'
import {TGateElement} from './t-gate-element'
import {WriteGateElement} from './write-gate-element'
import {XGateElement} from './x-gate-element'
import {YGateElement} from './y-gate-element'
import {ZGateElement} from './z-gate-element'

export type Operation =
  | AntiControlGateElement
  | BlochDisplayElement
  | ControlGateElement
  | HGateElement
  | MeasurementGateElement
  | PhaseGateElement
  | QftDaggerGateElement
  | QftGateElement
  | RnotGateElement
  | RxGateElement
  | RyGateElement
  | RzGateElement
  | SDaggerGateElement
  | SGateElement
  | SpacerGateElement
  | SwapGateElement
  | TDaggerGateElement
  | TGateElement
  | WriteGateElement
  | XGateElement
  | YGateElement
  | ZGateElement

export const isOperation = (arg: unknown): arg is Operation =>
  arg instanceof AntiControlGateElement ||
  arg instanceof BlochDisplayElement ||
  arg instanceof ControlGateElement ||
  arg instanceof HGateElement ||
  arg instanceof MeasurementGateElement ||
  arg instanceof PhaseGateElement ||
  arg instanceof QftDaggerGateElement ||
  arg instanceof QftGateElement ||
  arg instanceof RnotGateElement ||
  arg instanceof RxGateElement ||
  arg instanceof RyGateElement ||
  arg instanceof RzGateElement ||
  arg instanceof SDaggerGateElement ||
  arg instanceof SGateElement ||
  arg instanceof SpacerGateElement ||
  arg instanceof SwapGateElement ||
  arg instanceof TDaggerGateElement ||
  arg instanceof TGateElement ||
  arg instanceof WriteGateElement ||
  arg instanceof XGateElement ||
  arg instanceof YGateElement ||
  arg instanceof ZGateElement

export const isHGateElement = (arg: unknown): arg is HGateElement =>
  arg !== undefined && arg !== null && arg instanceof HGateElement

export const isXGateElement = (arg: unknown): arg is XGateElement =>
  arg !== undefined && arg !== null && arg instanceof XGateElement

export const isYGateElement = (arg: unknown): arg is YGateElement =>
  arg !== undefined && arg !== null && arg instanceof YGateElement

export const isZGateElement = (arg: unknown): arg is ZGateElement =>
  arg !== undefined && arg !== null && arg instanceof ZGateElement

export const isPhaseGateElement = (arg: unknown): arg is PhaseGateElement =>
  arg !== undefined && arg !== null && arg instanceof PhaseGateElement

export const isTGateElement = (arg: unknown): arg is TGateElement =>
  arg !== undefined && arg !== null && arg instanceof TGateElement

export const isTDaggerGateElement = (arg: unknown): arg is TDaggerGateElement =>
  arg !== undefined && arg !== null && arg instanceof TDaggerGateElement

export const isRnotGateElement = (arg: unknown): arg is RnotGateElement =>
  arg !== undefined && arg !== null && arg instanceof RnotGateElement

export const isRxGateElement = (arg: unknown): arg is RxGateElement =>
  arg !== undefined && arg !== null && arg instanceof RxGateElement

export const isRyGateElement = (arg: unknown): arg is RyGateElement =>
  arg !== undefined && arg !== null && arg instanceof RyGateElement

export const isRzGateElement = (arg: unknown): arg is RzGateElement =>
  arg !== undefined && arg !== null && arg instanceof RzGateElement

export const isSGateElement = (arg: unknown): arg is SGateElement =>
  arg !== undefined && arg !== null && arg instanceof SGateElement

export const isSDaggerGateElement = (arg: unknown): arg is SDaggerGateElement =>
  arg !== undefined && arg !== null && arg instanceof SDaggerGateElement

export const isSpacerGateElement = (arg: unknown): arg is SpacerGateElement =>
  arg !== undefined && arg !== null && arg instanceof SpacerGateElement

export const isSwapGateElement = (arg: unknown): arg is SwapGateElement =>
  arg !== undefined && arg !== null && arg instanceof SwapGateElement

export const isControlGateElement = (arg: unknown): arg is ControlGateElement =>
  arg !== undefined && arg !== null && arg instanceof ControlGateElement

export const isAntiControlGateElement = (arg: unknown): arg is AntiControlGateElement =>
  arg !== undefined && arg !== null && arg instanceof AntiControlGateElement

export const isBlochDisplayElement = (arg: unknown): arg is BlochDisplayElement =>
  arg !== undefined && arg !== null && arg instanceof BlochDisplayElement

export const isWriteGateElement = (arg: unknown): arg is WriteGateElement =>
  arg !== undefined && arg !== null && arg instanceof WriteGateElement

export const isMeasurementGateElement = (arg: unknown): arg is MeasurementGateElement =>
  arg !== undefined && arg !== null && arg instanceof MeasurementGateElement
