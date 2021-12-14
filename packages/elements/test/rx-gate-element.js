import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('rx-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.RxGateElement, 'rx-gate')
  })

  describe('iconable', function () {
    testIconable('rx-gate')
  })

  describe('disableable', function () {
    testDisableable('rx-gate')
  })

  describe('wireable', function () {
    testWireableOperation('rx-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('rx-gate')
  })
})
