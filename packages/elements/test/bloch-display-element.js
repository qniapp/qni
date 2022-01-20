import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'

describe('bloch-display element', function () {
  describe('element creation', function () {
    testElementCreation(window.BlochDisplayElement, 'bloch-display')
  })

  describe('draggable', function () {
    testDraggableOperation('bloch-display')
  })
})
