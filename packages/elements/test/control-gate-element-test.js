import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('control-gate element', function () {
  testActivateable('control-gate')
  testDisableable('control-gate')
  testDraggableOperation('control-gate')
  testElementCreation(window.ControlGateElement, 'control-gate')
  testHoverable('control-gate')
  testIconable('control-gate')
  testWireableOperation('control-gate')
})
