import '../dist/index'
import {testElementCreation} from './common/test-element-creation.js'

describe('circuit-editor element', function () {
  describe('element creation', function () {
    testElementCreation(window.CircuitEditorElement, 'circuit-editor')
  })
})
