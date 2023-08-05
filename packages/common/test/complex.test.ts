import {Complex} from '../src/complex'
import {equate} from '../src/equate'

describe('Complex', () => {
  let c: Complex

  describe('from', () => {
    describe('1', () => {
      beforeEach(() => {
        c = Complex.from(1)
      })

      test('equal 1', () => {
        expect(equate(c.real, 1)).toBeTruthy()
        expect(equate(c.imag, 0)).toBeTruthy()
      })
    })

    describe('-1.5', () => {
      beforeEach(() => {
        c = Complex.from(-1.5)
      })

      test('equal -1.5', () => {
        expect(equate(c.real, -1.5)).toBeTruthy()
        expect(equate(c.imag, 0)).toBeTruthy()
      })
    })

    describe('2+3i', () => {
      beforeEach(() => {
        c = Complex.from(new Complex(2, 3))
      })

      test('equal 2+3i', () => {
        expect(equate(c.real, 2)).toBeTruthy()
        expect(equate(c.imag, 3)).toBeTruthy()
      })
    })
  })

  describe('polar', () => {
    describe('0,0', () => {
      beforeEach(() => {
        c = Complex.polar(0, 0)
      })

      test('equal 0', () => {
        expect(equate(c, 0)).toBeTruthy()
      })
    })

    describe('0,2', () => {
      beforeEach(() => {
        c = Complex.polar(0, 2)
      })

      test('equal 0', () => {
        expect(equate(c, 0)).toBeTruthy()
      })
    })

    describe('0,-5', () => {
      beforeEach(() => {
        c = Complex.polar(0, -5)
      })

      test('equal 0', () => {
        expect(equate(c, 0)).toBeTruthy()
      })
    })

    describe('1,0', () => {
      beforeEach(() => {
        c = Complex.polar(1, 0)
      })

      test('equal 1', () => {
        expect(equate(c, 1)).toBeTruthy()
      })
    })

    describe('2,0', () => {
      beforeEach(() => {
        c = Complex.polar(2, 0)
      })

      test('equal 2', () => {
        expect(equate(c, 2)).toBeTruthy()
      })
    })

    describe('1,π', () => {
      beforeEach(() => {
        c = Complex.polar(1, Math.PI)
      })

      test('equal -1', () => {
        expect(equate(c, -1)).toBeTruthy()
      })
    })

    describe('1,3π', () => {
      beforeEach(() => {
        c = Complex.polar(1, 3 * Math.PI)
      })

      test('equal -1', () => {
        expect(equate(c, -1)).toBeTruthy()
      })
    })

    describe('1,-π', () => {
      beforeEach(() => {
        c = Complex.polar(1, -Math.PI)
      })

      test('equal -1', () => {
        expect(equate(c, -1)).toBeTruthy()
      })
    })

    describe('1,π/2', () => {
      beforeEach(() => {
        c = Complex.polar(1, Math.PI / 2)
      })

      test('equal i', () => {
        expect(equate(c, Complex.I)).toBeTruthy()
      })
    })

    describe('1,³⁄₂π', () => {
      beforeEach(() => {
        c = Complex.polar(1, (3 * Math.PI) / 2)
      })

      test('equal -i', () => {
        expect(equate(c, Complex.I.times(-1))).toBeTruthy()
      })
    })

    describe('1,¼π', () => {
      beforeEach(() => {
        c = Complex.polar(1, Math.PI / 4)
      })

      test('equal 1/√2(1+i)', () => {
        expect(equate(c, new Complex(Math.sqrt(0.5), Math.sqrt(0.5)))).toBeTruthy()
      })
    })
  })

  describe('equate', () => {
    describe('2.5', () => {
      beforeEach(() => {
        c = new Complex(2.5, 0)
      })

      test('equal 2.5', () => {
        expect(equate(c, 2.5)).toBeTruthy()
      })
    })

    describe('2.5i', () => {
      beforeEach(() => {
        c = new Complex(0, 2.5)
      })

      test('not equal 2.5', () => {
        expect(equate(c, 2.5)).toBeFalsy()
      })
    })

    describe('5+7i', () => {
      beforeEach(() => {
        c = new Complex(5, 7)
      })

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

    describe('2+3i', () => {
      beforeEach(() => {
        c = new Complex(2, 3)
      })

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

    describe('ZERO', () => {
      beforeEach(() => {
        c = Complex.ZERO
      })

      test('equal 0', () => {
        expect(equate(c, 0)).toBeTruthy()
      })

      test('not equal 1', () => {
        expect(equate(c, 1)).toBeFalsy()
      })
    })

    describe('ONE', () => {
      beforeEach(() => {
        c = Complex.ONE
      })

      test('equal 1', () => {
        expect(equate(c, 1)).toBeTruthy()
      })

      test('not equal 0', () => {
        expect(equate(c, 0)).toBeFalsy()
      })
    })

    describe('I', () => {
      beforeEach(() => {
        c = Complex.I
      })

      test('equal i', () => {
        expect(equate(c, new Complex(0, 1))).toBeTruthy()
      })

      test('not equal 1', () => {
        expect(equate(c, 1)).toBeFalsy()
      })
    })
  })
})
