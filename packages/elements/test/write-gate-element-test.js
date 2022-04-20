import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'

describe('write-gate element', function () {
  testActivateable('write-gate')
  testDraggableOperation('write-gate')
  testElementCreation(window.WriteGateElement, 'write-gate')
  testHoverable('write-gate')
  testIconable('write-gate')
})
