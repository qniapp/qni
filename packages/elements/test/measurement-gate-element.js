import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'

describe('measurement-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.MeasurementGateElement, 'measurement-gate')
  })

  describe('activateable', function () {
    testActivateable('measurement-gate')
  })

  describe('iconable', function () {
    testIconable('measurement-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('measurement-gate')
  })
})
