import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testDisableable} from './common/test-disableable.js'
import {testDraggableOperation} from './common/test-draggable.js'
import {testElementCreation} from './common/test-element-creation.js'
import {testIconable} from './common/test-iconable.js'
import {testWireableOperation} from './common/test-wireable.js'

describe('h-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.HGateElement, 'h-gate')
  })

  describe('activateable', function () {
    beforeEach(function () {
      const el = document.createElement('h-gate')
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('not active by default', function () {
      const operation = document.querySelector('h-gate')

      assert.isFalse(operation.active)
      assert.isFalse(operation.hasAttribute('data-active'))
    })

    it('can be activated', function () {
      const operation = document.querySelector('h-gate')

      operation.activate()

      assert.isTrue(operation.active)
      assert.isTrue(operation.hasAttribute('data-active'))
    })

    it('can be deactivated', function () {
      const operation = document.querySelector('h-gate')

      operation.deactivate()

      assert.isFalse(operation.active)
      assert.isFalse(operation.hasAttribute('data-active'))
    })

    it('dispatches operation-active event', async function () {
      const operation = document.querySelector('h-gate')

      const activeEvent = once(operation, 'operation-active')
      operation.activate()

      await activeEvent
    })
  })

  describe('iconable', function () {
    testIconable('h-gate')
  })

  describe('disableable', function () {
    testDisableable('h-gate')
  })

  describe('wireable', function () {
    testWireableOperation('h-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('h-gate')
  })
})

function once(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, resolve, {once: true})
  })
}
