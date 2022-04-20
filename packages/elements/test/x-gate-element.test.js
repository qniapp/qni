import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('x-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.XGateElement, 'x-gate')
  })

  describe('hoverable', function () {
    testHoverable('x-gate')
  })

  describe('activateable', function () {
    testActivateable('x-gate')
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

  describe('ifable', function () {
    testIfable('x-gate')
  })
})
