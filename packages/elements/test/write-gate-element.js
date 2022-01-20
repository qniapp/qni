import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'

describe('write-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.WriteGateElement, 'write-gate')
  })

  describe('iconable', function () {
    testIconable('write-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('write-gate')
  })
})
