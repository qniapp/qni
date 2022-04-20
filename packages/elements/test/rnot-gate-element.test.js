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

describe('rnot-gate element', function () {
  testActivateable('rnot-gate')
  testControllable('rnot-gate')
  testDisableable('rnot-gate')
  testDraggableOperation('rnot-gate')
  testElementCreation(window.RnotGateElement, 'rnot-gate')
  testHoverable('rnot-gate')
  testIconable('rnot-gate')
  testIfable('rnot-gate')
  testWireableOperation('rnot-gate')
})
