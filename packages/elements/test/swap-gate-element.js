import '../dist/index'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('swap-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.SwapGateElement, 'swap-gate')
  })

  describe('iconable', function () {
    testIconable('swap-gate')
  })

  describe('disableable', function () {
    testDisableable('swap-gate')
  })

  describe('wireable', function () {
    testWireableOperation('swap-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('swap-gate')
  })
})
