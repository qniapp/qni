import {SerializedBlochDisplay} from './bloch-display'
import {SerializedControlGate} from './control-gate'
import {SerializedHGate} from './h-gate'
import {SerializedMeasurementGate} from './measurement-gate'
import {SerializedPhaseGate} from './phase-gate'
import {SerializedRnotGate} from './rnot-gate'
import {SerializedRxGate} from './rx-gate'
import {SerializedRyGate} from './ry-gate'
import {SerializedRzGate} from './rz-gate'
import {SerializedSwapGate} from './swap-gate'
import {SerializedWriteGate} from './write-gate'
import {SerializedXGate} from './x-gate'
import {SerializedYGate} from './y-gate'
import {SerializedZGate} from './z-gate'

export type SerializedCircuitStep = Array<
  | SerializedHGate
  | SerializedXGate
  | SerializedYGate
  | SerializedZGate
  | SerializedPhaseGate
  | SerializedRnotGate
  | SerializedRxGate
  | SerializedRyGate
  | SerializedRzGate
  | SerializedSwapGate
  | SerializedControlGate
  | SerializedBlochDisplay
  | SerializedWriteGate
  | SerializedMeasurementGate
>
