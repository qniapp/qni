import {Matrix, Simulator, StateVector} from '../src'
import {Complex} from '@qni/common'

QUnit.module('Simulator', () => {
  QUnit.module('.cswap', () => {
    QUnit.test('|011>.cswap(0, 1, 2) should be |101>', assert => {
      const simulator = new Simulator('011')
      assert.approximatelyEquates(simulator.cswap(0, 1, 2).state, new StateVector('101'))
    })

    QUnit.test('|011>.cswap(2, 0, 1) should be |011>', assert => {
      const simulator = new Simulator('011')
      assert.approximatelyEquates(simulator.cswap(2, 0, 1).state, new StateVector('011'))
    })
  })
})
