// import {Matrix, Simulator, StateVector} from '../src'
// import {Complex} from '@qni/common'

import {equate} from '@qni/common'
import {Simulator, StateVector} from '../src'

describe('Simulator', () => {
  describe('write', () => {
    test('|0>.write(0, 0) should be |0>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.write(0, 0).state, new StateVector('0'))).toBe(true)
    })

    test('|0>.write(1, 0) should be |1>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.write(1, 0).state, new StateVector('1'))).toBe(true)
    })

    test('|1>.write(0, 0) should be |0>', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.write(0, 0).state, new StateVector('0'))).toBe(true)
    })

    test('|1>.write(1, 0) should be |1>', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.write(1, 0).state, new StateVector('1'))).toBe(true)
    })

    test('|00>.write(0, 0, 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.write(0, 0, 1).state, new StateVector('00'))).toBe(true)
    })

    test('|00>.write(1, 0) should be |01>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.write(1, 0).state, new StateVector('01'))).toBe(true)
    })

    test('|00>.write(1, 0, 1) should be |11>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.write(1, 0, 1).state, new StateVector('11'))).toBe(true)
    })

    test('|11>.write(1, 0, 1) should be |11>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.write(1, 0, 1).state, new StateVector('11'))).toBe(true)
    })

    test('|11>.write(0, 0) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.write(0, 0).state, new StateVector('10'))).toBe(true)
    })

    test('|11>.write(0, 0, 1) should be |00>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.write(0, 0, 1).state, new StateVector('00'))).toBe(true)
    })
  })
})
