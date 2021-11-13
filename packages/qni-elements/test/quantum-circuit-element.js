import {testElementCreation} from './common/test-element-creation'

describe('quantum-circuit element', function () {
  describe('element creation', function () {
    testElementCreation(window.QuantumCircuitElement, 'quantum-circuit')
  })
})
