import {testDisableable} from './common/test-disableable'
import {testElementCreation} from './common/test-element-creation'
import {testIconable} from './common/test-iconable'
import {testWireableOperation} from './common/test-wireable'

describe('control-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.ControlGateElement, 'control-gate')
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
