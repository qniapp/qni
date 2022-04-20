import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testControllable} from './common/test-controllable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('swap-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.SwapGateElement, 'swap-gate')
  })

  describe('hoverable', function () {
    testHoverable('swap-gate')
  })

  describe('activateable', function () {
    testActivateable('swap-gate')
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

  testControllable('swap-gate')
})
