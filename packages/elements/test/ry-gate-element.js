import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('ry-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.RyGateElement, 'ry-gate')
  })

  describe('iconable', function () {
    testIconable('ry-gate')
  })

  describe('disableable', function () {
    testDisableable('ry-gate')
  })

  describe('wireable', function () {
    testWireableOperation('ry-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('ry-gate')
  })
})
