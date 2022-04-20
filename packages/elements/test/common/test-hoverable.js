import {assert} from '@esm-bundle/chai'

export function testHoverable(operationName) {
  describe('hoverable', function () {
    beforeEach(function () {
      const el = document.createElement(operationName)
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('not hoverable by default', function () {
      const operation = document.querySelector(operationName)

      assert.isFalse(operation.hoverable)
      assert.isFalse(operation.hasAttribute('data-hoverable'))
    })

    it('hoverable = true', function () {
      const operation = document.querySelector(operationName)

      operation.hoverable = true

      assert.isTrue(operation.hoverable)
      assert.isTrue(operation.hasAttribute('data-hoverable'))
    })

    it('hoverable = false', function () {
      const operation = document.querySelector(operationName)
      operation.hoverable = true

      operation.hoverable = false

      assert.isFalse(operation.hoverable)
      assert.isFalse(operation.hasAttribute('data-hoverable'))
    })
  })
}
