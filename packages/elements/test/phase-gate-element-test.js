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

describe('phase-gate element', function () {
  beforeEach(function () {
    const operationMenu = document.createElement('div')
    operationMenu.id = 'operation-menu'
    operationMenu.innerHTML = `<div></div>`
    document.body.append(operationMenu)
  })

  testActivateable('phase-gate')
  testControllable('phase-gate')
  testDisableable('phase-gate')
  testDraggableOperation('phase-gate')
  testElementCreation(window.PhaseGateElement, 'phase-gate')
  testHoverable('phase-gate')
  testIconable('phase-gate')
  testIfable('phase-gate')
  testWireableOperation('phase-gate')
})
