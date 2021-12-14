import {testElementCreation} from './common/test-element-creation'

describe('circuit-editor element', function () {
  describe('element creation', function () {
    testElementCreation(window.CircuitEditorElement, 'circuit-editor')
  })
})
