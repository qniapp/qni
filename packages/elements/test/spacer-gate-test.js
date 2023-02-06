import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('spacer-gate element', function () {
  testActivateable('spacer-gate')
  testDisableable('spacer-gate')
  testDraggableOperation('spacer-gate')
  testElementCreation(window.SpacerGateElement, 'spacer-gate')
  testHoverable('spacer-gate')
  testIconable('spacer-gate')
  testWireableOperation('spacer-gate')
})
