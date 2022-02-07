import '../dist/index'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('t-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.TGateElement, 't-gate')
  })

  describe('iconable', function () {
    testIconable('t-gate')
  })

  describe('disableable', function () {
    testDisableable('t-gate')
  })

  describe('wireable', function () {
    testWireableOperation('t-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('t-gate')
  })
})
