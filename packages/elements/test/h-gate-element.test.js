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

describe('h-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.HGateElement, 'h-gate')
  })

  describe('hoverable', function () {
    testHoverable('h-gate')
  })

  describe('activateable', function () {
    testActivateable('h-gate')
  })

  describe('iconable', function () {
    testIconable('h-gate')
  })

  describe('disableable', function () {
    testDisableable('h-gate')
  })

  describe('wireable', function () {
    testWireableOperation('h-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('h-gate')
  })

  describe('ifable', function () {
    testIfable('h-gate')
  })

  testControllable('h-gate')
})
