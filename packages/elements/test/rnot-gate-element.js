import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('rnot-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.RnotGateElement, 'rnot-gate')
  })

  describe('activateable', function () {
    testActivateable('rnot-gate')
  })

  describe('iconable', function () {
    testIconable('rnot-gate')
  })

  describe('disableable', function () {
    testDisableable('rnot-gate')
  })

  describe('wireable', function () {
    testWireableOperation('rnot-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('rnot-gate')
  })
})
