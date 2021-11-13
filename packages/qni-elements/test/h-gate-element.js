import {testDisableable} from './test-disableable'
import {testIconable} from './test-iconable'
import {testWireableOperation} from './test-wireable'

describe('h-gate element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('h-gate')
      assert.equal('H-GATE', el.nodeName)
      assert(el instanceof window.HGateElement)
    })

    it('creates from constructor', function () {
      const el = new window.HGateElement()
      assert.equal('H-GATE', el.nodeName)
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

  describe('element serialization', function () {
    beforeEach(function () {
      const el = new window.HGateElement()
      document.body.append(el)
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('converts to JSON', function () {
      const hGate = document.querySelector('h-gate')
      assert.equal('"H"', hGate.toJson())
    })
  })
})
