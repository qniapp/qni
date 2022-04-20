import '../dist/index'
import {testElementCreation} from './common/test-element-creation'

describe('circuit-editor element', function () {
  testElementCreation(window.CircuitEditorElement, 'circuit-editor')
})
