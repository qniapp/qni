import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('anti-control-gate element', function () {
  testActivateable('anti-control-gate')
  testDisableable('anti-control-gate')
  testDraggableOperation('anti-control-gate')
  testElementCreation(window.AntiControlGateElement, 'anti-control-gate')
  testHoverable('anti-control-gate')
  testIconable('anti-control-gate')
  testWireableOperation('anti-control-gate')
})
