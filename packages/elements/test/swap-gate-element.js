import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

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
