import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

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
