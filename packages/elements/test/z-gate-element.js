import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('z-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.ZGateElement, 'z-gate')
  })

  describe('iconable', function () {
    testIconable('z-gate')
  })

  describe('disableable', function () {
    testDisableable('z-gate')
  })

  describe('wireable', function () {
    testWireableOperation('z-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('z-gate')
  })
})
