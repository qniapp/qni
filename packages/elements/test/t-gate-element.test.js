import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('t-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.TGateElement, 't-gate')
  })

  describe('hoverable', function () {
    testHoverable('t-gate')
  })

  describe('activateable', function () {
    testActivateable('t-gate')
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

  describe('ifable', function () {
    testIfable('t-gate')
  })
})
