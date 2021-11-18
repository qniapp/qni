import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

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
