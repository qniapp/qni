import '../dist/index'
import {testElementCreation} from './common/test-element-creation.js'

describe('quantum-circuit element', function () {
  describe('element creation', function () {
    testElementCreation(window.QuantumSimulatorElement, 'quantum-simulator')
  })
})
