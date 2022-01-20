import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'

describe('measurement-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.MeasurementGateElement, 'measurement-gate')
  })

  describe('iconable', function () {
    testIconable('measurement-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('measurement-gate')
  })
})
