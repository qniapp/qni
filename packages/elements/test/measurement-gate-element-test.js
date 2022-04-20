import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'

describe('measurement-gate element', function () {
  testActivateable('measurement-gate')
  testDraggableOperation('measurement-gate')
  testElementCreation(window.MeasurementGateElement, 'measurement-gate')
  testHoverable('measurement-gate')
  testIconable('measurement-gate')
})
