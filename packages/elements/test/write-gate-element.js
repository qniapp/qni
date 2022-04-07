import '../dist/index'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'

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
