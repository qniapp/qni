import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('qft-dagger-gate element', function () {
  testActivateable('qft-dagger-gate')
  testDraggableOperation('qft-dagger-gate')
  testElementCreation(window.QftDaggerGateElement, 'qft-dagger-gate')
  testHoverable('qft-dagger-gate')
  testIconable('qft-dagger-gate')
  testWireableOperation('qft-dagger-gate')
})
