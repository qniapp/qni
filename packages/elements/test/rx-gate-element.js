import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

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
