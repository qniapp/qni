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

describe('t-gate element', function () {
  testActivateable('t-gate')
  testControllable('t-gate')
  testDisableable('t-gate')
  testDraggableOperation('t-gate')
  testElementCreation(window.TGateElement, 't-gate')
  testHoverable('t-gate')
  testIconable('t-gate')
  testIfable('t-gate')
  testWireableOperation('t-gate')
})
