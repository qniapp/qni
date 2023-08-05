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

  describe('realPartOf', () => {
    describe('1', () => {
      test('equal 1', () => {
        expect(equate(Complex.realPartOf(1), 1))
      })
    })

    describe('1.5', () => {
      test('equal 1.5', () => {
        expect(equate(Complex.realPartOf(1.5), 1.5))
      })
    })

    describe('-2', () => {
      test('equal -2', () => {
        expect(equate(Complex.realPartOf(-2), -2))
      })
    })

    describe('3+i', () => {
      test('equal 3', () => {
        expect(equate(Complex.realPartOf(new Complex(3, 1)), 3))
      })
    })

    describe('5+0i', () => {
      test('equal 5', () => {
        expect(equate(Complex.realPartOf(new Complex(5, 0)), 5))
      })
    })
  })

  describe('imagPartOf', () => {
    describe('1', () => {
      test('equal 0', () => {
        expect(equate(Complex.imagPartOf(1), 0))
      })
    })

    describe('1.5', () => {
      test('equal 0', () => {
        expect(equate(Complex.imagPartOf(1.5), 0))
      })
    })

    describe('-2', () => {
      test('equal 0', () => {
        expect(equate(Complex.imagPartOf(-2), 0))
      })
    })

    describe('3+0i', () => {
      test('equal 0', () => {
        expect(equate(Complex.imagPartOf(new Complex(3, 0)), 0))
      })
    })

    describe('3+i', () => {
      test('equal 1', () => {
        expect(equate(Complex.imagPartOf(new Complex(3, 1)), 1))
      })
    })

    describe('5-2i', () => {
      test('equal -2', () => {
        expect(equate(Complex.imagPartOf(new Complex(5, -2)), -2))
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

  describe('isEqualTo', () => {
    describe('2.5', () => {
      beforeEach(() => {
        c = new Complex(2.5, 0)
      })

      test('equal 2.5', () => {
        expect(c.isEqualTo(2.5)).toBeTruthy()
      })
    })

    describe('2.5i', () => {
      beforeEach(() => {
        c = new Complex(0, 2.5)
      })

      test('not equal 2.5', () => {
        expect(c.isEqualTo(2.5)).toBeFalsy()
      })
    })

    describe('5+7i', () => {
      beforeEach(() => {
        c = new Complex(5, 7)
      })

      test('equal 5+7i', () => {
        expect(c.isEqualTo(c)).toBeTruthy()
      })

      test('not equal null', () => {
        expect(c.isEqualTo(null)).toBeFalsy()
      })

      test("not equal ''", () => {
        expect(c.isEqualTo('')).toBeFalsy()
      })
    })

    describe('2+3i', () => {
      beforeEach(() => {
        c = new Complex(2, 3)
      })

      test('equal 2+3i', () => {
        expect(c.isEqualTo(c)).toBeTruthy()
      })

      test('not equal 3+3i', () => {
        expect(c.isEqualTo(new Complex(3, 3))).toBeFalsy()
      })

      test('not equal 2+4i', () => {
        expect(c.isEqualTo(new Complex(2, 4))).toBeFalsy()
      })

      test('not equal 3+2i', () => {
        expect(c.isEqualTo(new Complex(3, 2))).toBeFalsy()
      })
    })

    describe('ZERO', () => {
      beforeEach(() => {
        c = Complex.ZERO
      })

      test('equal 0', () => {
        expect(c.isEqualTo(0)).toBeTruthy()
      })

      test('not equal 1', () => {
        expect(c.isEqualTo(1)).toBeFalsy()
      })
    })

    describe('ONE', () => {
      beforeEach(() => {
        c = Complex.ONE
      })

      test('equal 1', () => {
        expect(c.isEqualTo(1)).toBeTruthy()
      })

      test('not equal 0', () => {
        expect(c.isEqualTo(0)).toBeFalsy()
      })
    })

    describe('I', () => {
      beforeEach(() => {
        c = Complex.I
      })

      test('equal i', () => {
        expect(c.isEqualTo(new Complex(0, 1))).toBeTruthy()
      })

      test('not equal 1', () => {
        expect(c.isEqualTo(1)).toBeFalsy()
      })
    })
  })

  describe('isApproximatelyEqualTo', () => {
    describe('5+7i', () => {
      beforeEach(() => {
        c = new Complex(5, 7)
      })

      test('approximately equal 5+7i (ε=0)', () => {
        expect(c.isApproximatelyEqualTo(c, 0)).toBeTruthy()
      })

      test('approximately equal 5+7i (ε=1)', () => {
        expect(c.isApproximatelyEqualTo(c, 1)).toBeTruthy()
      })

      test('not approximately equal 5+6i (ε=0.5)', () => {
        expect(c.isApproximatelyEqualTo(new Complex(5, 6), 0.5)).toBeFalsy()
      })

      test('approximately equal 5+6i (ε=1)', () => {
        expect(c.isApproximatelyEqualTo(new Complex(5, 6), 1)).toBeTruthy()
      })

      test('approximately equal 5+8i (ε=1)', () => {
        expect(c.isApproximatelyEqualTo(new Complex(5, 8), 1)).toBeTruthy()
      })

      test('not approximately equal null', () => {
        expect(c.isApproximatelyEqualTo(null, 0)).toBeFalsy()
      })

      test("not approximately equal ''", () => {
        expect(c.isApproximatelyEqualTo('', 0)).toBeFalsy()
      })
    })
  })

  describe('plus', () => {
    describe('2+3i + 5+7i', () => {
      test('equal 7+10i', () => {
        expect(new Complex(2, 3).plus(new Complex(5, 7)).isEqualTo(new Complex(7, 10))).toBeTruthy()
      })
    })

    describe('2+3i + 5+0i', () => {
      test('equal 7+3i', () => {
        expect(new Complex(2, 3).plus(new Complex(5, 0)).isEqualTo(new Complex(7, 3))).toBeTruthy()
      })
    })
  })

  describe('minus', () => {
    describe('2+3i - 5+7i', () => {
      test('equal -3-4i', () => {
        expect(new Complex(2, 3).minus(new Complex(5, 7)).isEqualTo(new Complex(-3, -4))).toBeTruthy()
      })
    })

    describe('2+3i - 5+0i', () => {
      test('equal -3+3i', () => {
        expect(new Complex(2, 3).minus(new Complex(5, 0)).isEqualTo(new Complex(-3, 3))).toBeTruthy()
      })
    })
  })

  describe('norm2', () => {
    describe('0+0i', () => {
      test('equal 0', () => {
        expect(Complex.ZERO.norm2()).toBe(0)
      })
    })

    describe('1+0i', () => {
      test('equal 1', () => {
        expect(Complex.ONE.norm2()).toBe(1)
      })
    })

    describe('0+i', () => {
      test('equal 1', () => {
        expect(Complex.I.norm2()).toBe(1)
      })
    })

    describe('1+i', () => {
      test('equal 2', () => {
        expect(new Complex(1, 1).norm2()).toBe(2)
      })
    })

    describe('2+0i', () => {
      test('equal 4', () => {
        expect(new Complex(2, 0).norm2()).toBe(4)
      })
    })

    describe('0+2i', () => {
      test('equal 4', () => {
        expect(new Complex(0, 2).norm2()).toBe(4)
      })
    })

    describe('-2+0i', () => {
      test('equal 4', () => {
        expect(new Complex(-2, 0).norm2()).toBe(4)
      })
    })

    describe('0-2i', () => {
      test('equal 4', () => {
        expect(new Complex(0, -2).norm2()).toBe(4)
      })
    })

    describe('2+3i', () => {
      test('equal 13', () => {
        expect(new Complex(2, 3).norm2()).toBe(13)
      })
    })

    describe('-3-4i', () => {
      test('equal 25', () => {
        expect(new Complex(-3, -4).norm2()).toBe(25)
      })
    })
  })

  describe('abs', () => {
    describe('0+0i', () => {
      test('equal 0', () => {
        expect(Complex.ZERO.abs()).toBe(0)
      })
    })

    describe('1+0i', () => {
      test('equal 1', () => {
        expect(Complex.ONE.abs()).toBe(1)
      })
    })

    describe('0+i', () => {
      test('equal 1', () => {
        expect(Complex.I.abs()).toBe(1)
      })
    })

    describe('2+0i', () => {
      test('equal 2', () => {
        expect(new Complex(2, 0).abs()).toBe(2)
      })
    })

    describe('0+2i', () => {
      test('equal 2', () => {
        expect(new Complex(0, 2).abs()).toBe(2)
      })
    })

    describe('-2+0i', () => {
      test('equal 2', () => {
        expect(new Complex(-2, 0).abs()).toBe(2)
      })
    })

    describe('0-2i', () => {
      test('equal 2', () => {
        expect(new Complex(0, -2).abs()).toBe(2)
      })
    })

    describe('2+3i', () => {
      test('equal √13', () => {
        expect(new Complex(2, 3).abs()).toBe(Math.sqrt(13))
      })
    })

    describe('-3-4i', () => {
      test('equal 5', () => {
        expect(new Complex(-3, -4).abs()).toBe(5)
      })
    })
  })
})
