import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('phase-gate element', function () {
  beforeEach(function () {
    const operationMenu = document.createElement('div')
    operationMenu.id = 'operation-menu'
    operationMenu.innerHTML = `<div></div>`
    document.body.append(operationMenu)
  })

  describe('element creation', function () {
    testElementCreation(window.PhaseGateElement, 'phase-gate')
  })

  describe('activateable', function () {
    testActivateable('phase-gate')
  })

  describe('iconable', function () {
    testIconable('phase-gate')
  })

  describe('disableable', function () {
    testDisableable('phase-gate')
  })

  describe('wireable', function () {
    testWireableOperation('phase-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('phase-gate')
  })
})
