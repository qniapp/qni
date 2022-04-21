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

describe('z-gate element', function () {
  testActivateable('z-gate')
  testControllable('z-gate')
  testDisableable('z-gate')
  testDraggableOperation('z-gate')
  testElementCreation(window.ZGateElement, 'z-gate')
  testHoverable('z-gate')
  testIconable('z-gate')
  testIfable('z-gate')
  testWireableOperation('z-gate')
})
