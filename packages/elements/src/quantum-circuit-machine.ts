import {createMachine} from 'xstate'

export type QuantumCircuitContext = Record<string, never>
export type QuantumCircuitEvent = {type: 'EDIT'} | {type: 'EDIT_DONE'}

export const QuantumCircuitMachine = createMachine<QuantumCircuitContext, QuantumCircuitEvent>({
  id: 'quantum-circuit',
  initial: 'idle',
  states: {
    idle: {
      on: {
        EDIT: {target: 'editing'}
      }
    },
    editing: {
      on: {
        EDIT_DONE: {target: 'idle'}
      }
    }
  }
})
