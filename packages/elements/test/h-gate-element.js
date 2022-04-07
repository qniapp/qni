import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('h-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.HGateElement, 'h-gate')
  })

  describe('hoverable', function () {
    beforeEach(function () {
      const el = document.createElement('h-gate')
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('not hoverable by default', function () {
      const operation = document.querySelector('h-gate')

      assert.isFalse(operation.hoverable)
      assert.isFalse(operation.hasAttribute('data-hoverable'))
    })

    it('hoverable = true', function () {
      const operation = document.querySelector('h-gate')

      operation.hoverable = true

      assert.isTrue(operation.hoverable)
      assert.isTrue(operation.hasAttribute('data-hoverable'))
    })

    it('hoverable = false', function () {
      const operation = document.querySelector('h-gate')
      operation.hoverable = true

      operation.hoverable = false

      assert.isFalse(operation.hoverable)
      assert.isFalse(operation.hasAttribute('data-hoverable'))
    })
  })

  describe('activateable', function () {
    testActivateable('h-gate')
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
