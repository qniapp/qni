import {expect} from '@jest/globals'

expect.extend({
  toBeSameStateVector(received, expected) {
    const pass = received.toString() === expected.toString()

    if (pass) {
      return {
        message: () => `expected ${received} not to be the same state vector as ${expected}`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to be the same state vector as ${expected}`,
        pass: false,
      }
    }
  },
})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toBeSameStateVector(expected: unknown): R
    }
  }
}
