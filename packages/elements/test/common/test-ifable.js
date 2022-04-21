import {assert} from '@esm-bundle/chai'
import {isIfable} from '@qni/elements'

export function testIfable(operationName) {
  describe('ifable', function () {
    let operation

    beforeEach(function () {
      const el = document.createElement(operationName)
      document.body.append(el)
      operation = document.querySelector(operationName)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('if condition is not set by default', function () {
      assert.equal(operation.if, '')
    })

    it('can set if condition', function () {
      operation.if = 'foo'

      assert.equal(operation.if, 'foo')
    })

    it('can do type checking with isIfable', function () {
      assert.isTrue(isIfable(operation))
    })
  })
}
