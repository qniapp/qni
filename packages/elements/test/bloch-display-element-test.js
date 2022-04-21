import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'

describe('bloch-display element', function () {
  testActivateable('bloch-display')
  testDraggableOperation('bloch-display')
  testElementCreation(window.BlochDisplayElement, 'bloch-display')
  testHoverable('bloch-display')
})
