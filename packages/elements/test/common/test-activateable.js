import {assert} from '@esm-bundle/chai'
import {once} from './once'

export function testActivateable(operationName) {
  describe('activateable', function () {
    beforeEach(function () {
      const el = document.createElement(operationName)
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('not active by default', function () {
      const operation = document.querySelector(operationName)

      assert.isFalse(operation.isActive())
    })

    it('can be activated', function () {
      const operation = document.querySelector(operationName)

      operation.activate()

      assert.isTrue(operation.isActive())
    })

    it('can be deactivated', function () {
      const operation = document.querySelector(operationName)

      operation.deactivate()

      assert.isFalse(operation.isActive())
    })

    it('dispatches activateable:active event', async function () {
      const operation = document.querySelector(operationName)

      const activeEvent = once(operation, 'activateable:active')
      operation.activate()

      await activeEvent
    })
  })
}
