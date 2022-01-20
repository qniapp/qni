import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('x-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.XGateElement, 'x-gate')
  })

  describe('iconable', function () {
    testIconable('x-gate')
  })

  describe('disableable', function () {
    testDisableable('x-gate')
  })

  describe('wireable', function () {
    testWireableOperation('x-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('x-gate')
  })
})
