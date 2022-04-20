import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testControllable} from './common/test-controllable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('swap-gate element', function () {
  testActivateable('swap-gate')
  testControllable('swap-gate')
  testDisableable('swap-gate')
  testDraggableOperation('swap-gate')
  testElementCreation(window.SwapGateElement, 'swap-gate')
  testHoverable('swap-gate')
  testIconable('swap-gate')
  testWireableOperation('swap-gate')
})
