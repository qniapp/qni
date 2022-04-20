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

describe('x-gate element', function () {
  testActivateable('x-gate')
  testControllable('t-gate')
  testDisableable('x-gate')
  testDraggableOperation('x-gate')
  testElementCreation(window.XGateElement, 'x-gate')
  testHoverable('x-gate')
  testIconable('x-gate')
  testIfable('x-gate')
  testWireableOperation('x-gate')
})
