import {Complex} from '../src/complex'
import {equate} from '../src/equate'

describe('Complex', () => {
  let c: Complex | null = null

  describe('2.5', () => {
    beforeEach(() => {
      c = new Complex(2.5, 0)
    })

    describe('equate', () => {
      test('equal 2.5', () => {
        expect(equate(c, 2.5)).toBeTruthy()
      })
    })
  })

  describe('2.5i', () => {
    beforeEach(() => {
      c = new Complex(0, 2.5)
    })

    describe('equate', () => {
      test('not equal 2.5', () => {
        expect(equate(c, 2.5)).toBeFalsy()
      })
    })
  })

  describe('5+7i', () => {
    beforeEach(() => {
      c = new Complex(5, 7)
    })

    describe('equate', () => {
      test('equal 5+7i', () => {
        expect(equate(c, c)).toBeTruthy()
      })

      test('not equal null', () => {
        expect(equate(c, null)).toBeFalsy()
      })

      test("not equal ''", () => {
        expect(equate(c, '')).toBeFalsy()
      })
    })
  })

  describe('2+3i', () => {
    beforeEach(() => {
      c = new Complex(2, 3)
    })

    describe('equate', () => {
      test('equal 2+3i', () => {
        expect(equate(c, c)).toBeTruthy()
      })

      test('not equal 3+3i', () => {
        expect(equate(c, new Complex(3, 3))).toBeFalsy()
      })

      test('not equal 2+4i', () => {
        expect(equate(c, new Complex(2, 4))).toBeFalsy()
      })

      test('not equal 3+2i', () => {
        expect(equate(c, new Complex(3, 2))).toBeFalsy()
      })
    })
  })

  describe('ZERO', () => {
    beforeEach(() => {
      c = Complex.ZERO
    })

    describe('equate', () => {
      test('equal 0', () => {
        expect(equate(c, 0)).toBeTruthy()
      })

      test('not equal 1', () => {
        expect(equate(c, 1)).toBeFalsy()
      })
    })
  })

  describe('ONE', () => {
    beforeEach(() => {
      c = Complex.ONE
    })

    describe('equate', () => {
      test('equal 1', () => {
        expect(equate(c, 1)).toBeTruthy()
      })

      test('not equal 0', () => {
        expect(equate(c, 0)).toBeFalsy()
      })
    })
  })

  describe('I', () => {
    beforeEach(() => {
      c = Complex.I
    })

    describe('equate', () => {
      test('equal i', () => {
        expect(equate(c, new Complex(0, 1))).toBeTruthy()
      })

      test('not equal 1', () => {
        expect(equate(c, 1)).toBeFalsy()
      })
    })
  })
})
