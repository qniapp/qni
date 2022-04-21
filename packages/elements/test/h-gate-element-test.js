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

describe('h-gate element', function () {
  testActivateable('h-gate')
  testControllable('h-gate')
  testDisableable('h-gate')
  testDraggableOperation('h-gate')
  testElementCreation(window.HGateElement, 'h-gate')
  testHoverable('h-gate')
  testIconable('h-gate')
  testIfable('h-gate')
  testWireableOperation('h-gate')
})
