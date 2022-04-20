import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('y-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.YGateElement, 'y-gate')
  })

  describe('hoverable', function () {
    testHoverable('y-gate')
  })

  describe('activateable', function () {
    testActivateable('y-gate')
  })

  describe('iconable', function () {
    testIconable('y-gate')
  })

  describe('disableable', function () {
    testDisableable('y-gate')
  })

  describe('wireable', function () {
    testWireableOperation('y-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('y-gate')
  })

  describe('ifable', function () {
    testIfable('y-gate')
  })
})
