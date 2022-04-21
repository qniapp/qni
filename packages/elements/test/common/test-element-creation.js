import {assert} from '@esm-bundle/chai'

export function testElementCreation(elementClass, elementName) {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement(elementName)
      assert.equal(elementName, el.nodeName.toLocaleLowerCase())
      assert(el instanceof elementClass)
    })

    it('creates from constructor', function () {
      const el = new elementClass()
      assert.equal(elementName, el.nodeName.toLocaleLowerCase())
    })
  })
}
