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

describe('rz-gate element', function () {
  testActivateable('rz-gate')
  testControllable('rz-gate')
  testDisableable('rz-gate')
  testDraggableOperation('rz-gate')
  testElementCreation(window.RzGateElement, 'rz-gate')
  testHoverable('rz-gate')
  testIconable('rz-gate')
  testIfable('rz-gate')
  testWireableOperation('rz-gate')
})
