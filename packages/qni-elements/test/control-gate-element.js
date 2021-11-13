import {testDisableable} from './test-disableable'
import {testIconable} from './test-iconable'
import {testWireableOperation} from './test-wireable'

describe('control-gate element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('control-gate')
      assert.equal('CONTROL-GATE', el.nodeName)
      assert(el instanceof window.ControlGateElement)
    })

    it('creates from constructor', function () {
      const el = new window.ControlGateElement()
      assert.equal('CONTROL-GATE', el.nodeName)
    })
  })

  describe('iconable', function () {
    testIconable('control-gate')
  })

  describe('disableable', function () {
    testDisableable('control-gate')
  })

  describe('wireable', function () {
    testWireableOperation('control-gate')
  })
})
