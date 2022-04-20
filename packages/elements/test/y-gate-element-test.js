import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testControllable} from './common/test-controllable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('y-gate element', function () {
  testActivateable('y-gate')
  testControllable('y-gate')
  testDisableable('y-gate')
  testDraggableOperation('y-gate')
  testElementCreation(window.YGateElement, 'y-gate')
  testHoverable('y-gate')
  testIconable('y-gate')
  testIfable('y-gate')
  testWireableOperation('y-gate')
})
