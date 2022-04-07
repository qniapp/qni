import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('y-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.YGateElement, 'y-gate')
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
})
