import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('h-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.HGateElement, 'h-gate')
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
})
