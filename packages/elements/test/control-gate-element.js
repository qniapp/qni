import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('control-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.ControlGateElement, 'control-gate')
  })

  describe('activateable', function () {
    testActivateable('control-gate')
  })

  describe('iconable', function () {
    testIconable('control-gate')
  })

  describe('disableable', function () {
    testDisableable('control-gate')
  })

  describe('wireable', function () {
    testWireableOperation('control-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('control-gate')
  })
})
