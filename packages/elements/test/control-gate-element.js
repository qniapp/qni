import '../dist/index'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('control-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.ControlGateElement, 'control-gate')
  })

  describe('iconable', function () {
    testIconable('control-gate')
  })

  describe('disableable', function () {
    testDisableable('control-gate')
  })

  describe('wireable', function () {
    testWireableOperation('control-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('control-gate')
  })
})
