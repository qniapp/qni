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

describe('ry-gate element', function () {
  testActivateable('ry-gate')
  testControllable('ry-gate')
  testDisableable('ry-gate')
  testDraggableOperation('ry-gate')
  testElementCreation(window.RyGateElement, 'ry-gate')
  testHoverable('ry-gate')
  testIconable('ry-gate')
  testIfable('ry-gate')
  testWireableOperation('ry-gate')
})
