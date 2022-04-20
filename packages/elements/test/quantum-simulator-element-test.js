import '../dist/index'
import {testElementCreation} from './common/test-element-creation'

describe('quantum-circuit element', function () {
  testElementCreation(window.QuantumSimulatorElement, 'quantum-simulator')
})
