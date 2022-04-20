import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('rx-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.RxGateElement, 'rx-gate')
  })

  describe('hoverable', function () {
    testHoverable('rx-gate')
  })

  describe('activateable', function () {
    testActivateable('rx-gate')
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

  describe('ifable', function () {
    testIfable('rx-gate')
  })
})
