import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'

describe('bloch-display element', function () {
  describe('element creation', function () {
    testElementCreation(window.BlochDisplayElement, 'bloch-display')
  })

  describe('activateable', function () {
    testActivateable('bloch-display')
  })

  describe('draggable', function () {
    testDraggableOperation('bloch-display')
  })
})
