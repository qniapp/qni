import {SerializedAntiControlGate} from './anti-control-gate'
import {SerializedBlochDisplay} from './bloch-display'
import {SerializedControlGate} from './control-gate'
import {SerializedHGate} from './h-gate'
import {SerializedMeasurementGate} from './measurement-gate'
import {SerializedPhaseGate} from './phase-gate'
import {SerializedQftDaggerGate} from './qft-dagger-gate'
import {SerializedQftGate} from './qft-gate'
import {SerializedRnotGate} from './rnot-gate'
import {SerializedRxGate} from './rx-gate'
import {SerializedRyGate} from './ry-gate'
import {SerializedRzGate} from './rz-gate'
import {SerializedSpacerGate} from './spacer-gate'
import {SerializedSwapGate} from './swap-gate'
import {SerializedTGate} from './t-gate'
import {SerializedWriteGate} from './write-gate'
import {SerializedXGate} from './x-gate'
import {SerializedYGate} from './y-gate'
import {SerializedZGate} from './z-gate'

export type SerializedCircuitStep = Array<
  | SerializedAntiControlGate
  | SerializedBlochDisplay
  | SerializedControlGate
  | SerializedHGate
  | SerializedMeasurementGate
  | SerializedPhaseGate
  | SerializedQftDaggerGate
  | SerializedQftGate
  | SerializedQftGate
  | SerializedRnotGate
  | SerializedRxGate
  | SerializedRyGate
  | SerializedRzGate
  | SerializedSpacerGate
  | SerializedSwapGate
  | SerializedTGate
  | SerializedWriteGate
  | SerializedXGate
  | SerializedYGate
  | SerializedZGate
>
