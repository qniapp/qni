import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('rz-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.RzGateElement, 'rz-gate')
  })

  describe('iconable', function () {
    testIconable('rz-gate')
  })

  describe('disableable', function () {
    testDisableable('rz-gate')
  })

  describe('wireable', function () {
    testWireableOperation('rz-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('rz-gate')
  })
})
