import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('qft-gate element', function () {
  testActivateable('qft-gate')
  testDraggableOperation('qft-gate')
  testElementCreation(window.QftGateElement, 'qft-gate')
  testHoverable('qft-gate')
  testIconable('qft-gate')
  testWireableOperation('qft-gate')
})
