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

describe('rx-gate element', function () {
  testActivateable('rx-gate')
  testControllable('rx-gate')
  testDisableable('rx-gate')
  testDraggableOperation('rx-gate')
  testElementCreation(window.RxGateElement, 'rx-gate')
  testHoverable('rx-gate')
  testIconable('rx-gate')
  testIfable('rx-gate')
  testWireableOperation('rx-gate')
})
