import '../dist/index'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

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
