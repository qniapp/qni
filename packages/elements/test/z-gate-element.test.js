import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testControllable} from './common/test-controllable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('z-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.ZGateElement, 'z-gate')
  })

  describe('hoverable', function () {
    testHoverable('z-gate')
  })

  describe('activateable', function () {
    testActivateable('z-gate')
  })

  describe('iconable', function () {
    testIconable('z-gate')
  })

  describe('disableable', function () {
    testDisableable('z-gate')
  })

  describe('wireable', function () {
    testWireableOperation('z-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('z-gate')
  })

  describe('ifable', function () {
    testIfable('z-gate')
  })

  testControllable('z-gate')
})
