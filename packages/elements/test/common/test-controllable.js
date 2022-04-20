import {assert} from '@esm-bundle/chai'
import {isControllable} from '@qni/elements'

export function testControllable(operationName) {
  describe('controllable', function () {
    let operation

    beforeEach(function () {
      const el = document.createElement(operationName)
      document.body.append(el)
      operation = document.querySelector(operationName)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('is not controlled by default', function () {
      assert.isFalse(operation.isControlled)
      assert.deepEqual(operation.controls, [])
    })

    it('can set controls', function () {
      operation.controls = [1, 2, 3]

      assert.deepEqual(operation.controls, [1, 2, 3])
      assert.equal(operation.getAttribute('data-controls'), '1,2,3')
      assert.isTrue(operation.isControlled)
    })

    it('can get its control bits from data-controls attribute', function () {
      operation.setAttribute('data-controls', '1,2,3')

      assert.deepEqual(operation.controls, [1, 2, 3])
      assert.isTrue(operation.isControlled)
    })

    it('can do type checking with isControllable', function () {
      assert.isTrue(isControllable(operation))
    })
  })
}
