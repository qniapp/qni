import {Complex} from '../src/complex'
import {equate} from '../src/equate'

describe('Complex', () => {
  const π = Math.PI
  const i = Complex.I
  const e = new Complex(Math.E, 0)
  const s = Math.sqrt(0.5)

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
        expect(equate(c, i)).toBeTruthy()
      })
    })

    describe('1,³⁄₂π', () => {
      beforeEach(() => {
        c = Complex.polar(1, (3 * Math.PI) / 2)
      })

      test('equal -i', () => {
        expect(equate(c, i.times(-1))).toBeTruthy()
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
        c = i
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

  describe('conjugate', () => {
    describe('0', () => {
      test('equal 0', () => {
        expect(Complex.ZERO.conjugate().isEqualTo(0)).toBeTruthy()
      })
    })

    describe('2+3i', () => {
      test('equal 2-3i', () => {
        expect(new Complex(2, 3).conjugate().isEqualTo(new Complex(2, -3))).toBeTruthy()
      })
    })
  })

  describe('neg', () => {
    describe('3+5i', () => {
      test('equal -3-5i', () => {
        expect(new Complex(3, 5).neg().isEqualTo(new Complex(-3, -5))).toBeTruthy()
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

  describe('times', () => {
    describe('2+3i x 5+7i', () => {
      test('equal -11+29i', () => {
        expect(new Complex(2, 3).times(new Complex(5, 7)).isEqualTo(new Complex(-11, 29))).toBeTruthy()
      })
    })

    describe('2+3i x 5+0i', () => {
      test('equal 10+15i', () => {
        expect(new Complex(2, 3).times(new Complex(5, 0)).isEqualTo(new Complex(10, 15))).toBeTruthy()
      })
    })
  })

  describe('dividedBy', () => {
    describe('1+0i / 0', () => {
      test('Division by Zero', () => {
        expect(Complex.ONE.dividedBy(0).isErr()).toBeTruthy()
      })
    })

    describe('2+3i / 2+0i', () => {
      test('equal 1+1.5i', () => {
        expect(
          new Complex(2, 3).dividedBy(new Complex(2, 0))._unsafeUnwrap().isEqualTo(new Complex(1, 1.5)),
        ).toBeTruthy()
      })
    })

    describe('2+3i / 0+2i', () => {
      test('equal 1.5-i', () => {
        expect(
          new Complex(2, 3).dividedBy(new Complex(0, 2))._unsafeUnwrap().isEqualTo(new Complex(1.5, -1)),
        ).toBeTruthy()
      })
    })

    describe('2-2i / 1+i', () => {
      test('equal 0-2i', () => {
        expect(
          new Complex(2, -2).dividedBy(new Complex(1, 1))._unsafeUnwrap().isEqualTo(new Complex(0, -2)),
        ).toBeTruthy()
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
        expect(i.norm2()).toBe(1)
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
        expect(i.abs()).toBe(1)
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

  describe('unit', () => {
    describe('0+0i', () => {
      test('equal 1', () => {
        expect(Complex.ZERO.unit().isEqualTo(1))
      })
    })

    describe('0.5+0i', () => {
      test('equal 1', () => {
        expect(new Complex(0.5, 0).unit().isEqualTo(1))
      })
    })

    describe('1+0i', () => {
      test('equal 1', () => {
        expect(Complex.ONE.unit().isEqualTo(1))
      })
    })

    describe('2+0i', () => {
      test('equal 1', () => {
        expect(new Complex(2, 0).unit().isEqualTo(1))
      })
    })

    describe('-0.5+0i', () => {
      test('equal -1', () => {
        expect(new Complex(-0.5, 0).unit().isEqualTo(-1))
      })
    })

    describe('-1+0i', () => {
      test('equal -1', () => {
        expect(new Complex(-1, 0).unit().isEqualTo(-1))
      })
    })

    describe('-2+0i', () => {
      test('equal -1', () => {
        expect(new Complex(-2, 0).unit().isEqualTo(-1))
      })
    })

    describe('0+0.5i', () => {
      test('equal i', () => {
        expect(new Complex(0, 0.5).unit().isEqualTo(i))
      })
    })

    describe('0+i', () => {
      test('equal i', () => {
        expect(i.unit().isEqualTo(i))
      })
    })

    describe('0+2i', () => {
      test('equal i', () => {
        expect(new Complex(0, 2).unit().isEqualTo(i))
      })
    })

    describe('0-0.5i', () => {
      test('equal -i', () => {
        expect(new Complex(0, -0.5).unit().isEqualTo(i.times(-1)))
      })
    })

    describe('0-i', () => {
      test('equal -i', () => {
        expect(new Complex(0, -1).unit().isEqualTo(i.times(-1)))
      })
    })

    describe('0-2i', () => {
      test('equal -i', () => {
        expect(new Complex(0, -2).unit().isEqualTo(i.times(-1)))
      })
    })

    describe('((1, 1).unit - 1/√2(1, 1)).norm2', () => {
      test('< 0.0000001', () => {
        expect(
          new Complex(1, 1)
            .unit()
            .minus(new Complex(Math.sqrt(0.5), Math.sqrt(0.5)))
            .norm2() < 0.0000001,
        ).toBeTruthy()
      })
    })
  })

  describe('phase', () => {
    describe('0+0i', () => {
      test('equal 0', () => {
        expect(Complex.ZERO.phase()).toBe(0)
      })
    })

    describe('1+0i', () => {
      test('equal 0', () => {
        expect(Complex.ONE.phase()).toBe(0)
      })
    })

    describe('0+i', () => {
      test('equal π/2', () => {
        expect(i.phase()).toBeCloseTo(Math.PI / 2)
      })
    })

    describe('-1+0i', () => {
      test('equal π', () => {
        expect(new Complex(-1, 0).phase()).toBeCloseTo(Math.PI)
      })
    })

    describe('0-i', () => {
      test('equal -π/2', () => {
        expect(new Complex(0, -1).phase()).toBeCloseTo(-Math.PI / 2)
      })
    })

    describe('1+i', () => {
      test('equal π/4', () => {
        expect(new Complex(1, 1).phase()).toBeCloseTo(Math.PI / 4)
      })
    })

    describe('2+i', () => {
      test('equal 0.1475836π', () => {
        expect(new Complex(2, 1).phase()).toBeCloseTo(Math.PI * 0.1475836)
      })
    })
  })

  describe('raisedTo', () => {
    describe('e^-iπ/2', () => {
      test('equal -i', () => {
        expect(e.raisedTo(i.times(-π / 2))).toEqual(new Complex(0, -1))
      })
    })

    describe('e^0', () => {
      test('equal 1', () => {
        expect(e.raisedTo(i.times(0))).toEqual(new Complex(1, 0))
      })
    })

    describe('e^iπ/2', () => {
      test('equal i', () => {
        expect(e.raisedTo(i.times(π / 2))).toEqual(i)
      })
    })

    describe('e^iπ', () => {
      test('equal -1', () => {
        expect(e.raisedTo(i.times(π))).toEqual(new Complex(-1, 0))
      })
    })

    describe('e^i3π/2', () => {
      test('equal -i', () => {
        expect(e.raisedTo(i.times((3 * π) / 2))).toEqual(new Complex(0, -1))
      })
    })

    describe('e^i2π', () => {
      test('equal 1', () => {
        expect(e.raisedTo(i.times(2 * π))).toEqual(Complex.ONE)
      })
    })

    describe('e^-iπ/4', () => {
      test('equal 1/√2(1-i)', () => {
        expect(e.raisedTo(i.times(-π / 4))).toEqual(new Complex(s, -s))
      })
    })

    describe('e^iπ/4', () => {
      test('equal 1/√2(1+i)', () => {
        expect(e.raisedTo(i.times(π / 4))).toEqual(new Complex(s, s))
      })
    })

    describe('e^i3π/4', () => {
      test('equal 1/√2(-1+i)', () => {
        expect(e.raisedTo(i.times((3 * π) / 4))).toEqual(new Complex(-s, s))
      })
    })

    describe('e^i5π/4', () => {
      test('equal 1/√2(-1-i)', () => {
        expect(e.raisedTo(i.times((5 * π) / 4))).toEqual(new Complex(-s, -s))
      })
    })

    describe('0^2', () => {
      test('equal 0', () => {
        expect(Complex.ZERO.raisedTo(2)).toEqual(Complex.ZERO)
      })
    })

    describe('0^(1+3i)', () => {
      test('equal 0', () => {
        expect(Complex.ZERO.raisedTo(new Complex(1, 3))).toEqual(Complex.ZERO)
      })
    })

    describe('(2+3i)^0', () => {
      test('equal 1', () => {
        expect(new Complex(2, 3).raisedTo(0)).toEqual(Complex.ONE)
      })
    })

    describe('(-1)^0', () => {
      test('equal 1', () => {
        expect(new Complex(-1, 0).raisedTo(0)).toEqual(Complex.ONE)
      })
    })

    describe('(-1)^½', () => {
      test('equal i', () => {
        expect(new Complex(-1, 0).raisedTo(0.5)).toEqual(i)
      })
    })

    describe('(-1)^-½', () => {
      test('equal -i', () => {
        expect(new Complex(-1, 0).raisedTo(-0.5)).toEqual(new Complex(0, -1))
      })
    })

    describe('(-1)^1', () => {
      test('equal -1', () => {
        expect(new Complex(-1, 0).raisedTo(1)).toEqual(new Complex(-1, 0))
      })
    })

    describe('2^½', () => {
      test('equal √2', () => {
        expect(new Complex(2, 0).raisedTo(0.5)).toEqual(new Complex(Math.sqrt(2), 0))
      })
    })

    describe('i^i', () => {
      test('equal e^-π/2', () => {
        expect(i.raisedTo(i).real).toBeCloseTo(Math.exp(-π / 2))
        expect(i.raisedTo(i).imag).toBe(0)
      })
    })

    describe('(1+i)^(1+i)', () => {
      test('equal 0.2739572538301+0.5837007587586i', () => {
        const res = new Complex(1, 1).raisedTo(new Complex(1, 1))
        expect(res.real).toBeCloseTo(0.2739572538301)
        expect(res.imag).toBeCloseTo(0.5837007587586)
      })
    })

    describe('(2+3i)^(5+7i)', () => {
      test('equal 0.1525582909989+0.6079153491494i', () => {
        const res = new Complex(2, 3).raisedTo(new Complex(5, 7))
        expect(res.real).toBeCloseTo(0.1525582909989)
        expect(res.imag).toBeCloseTo(0.6079153491494)
      })
    })
  })

  describe('format', () => {
    describe('ZERO', () => {
      test("'0'", () => {
        expect(Complex.ZERO.format()).toBe('0')
      })
    })

    describe('ONE', () => {
      test("'1'", () => {
        expect(Complex.ONE.format()).toBe('1')
      })
    })

    describe('I', () => {
      test("'i'", () => {
        expect(i.format()).toBe('i')
      })
    })

    describe('1+i', () => {
      test("'1+i'", () => {
        expect(new Complex(1, 1).format()).toBe('1+i')
      })
    })

    describe('-1', () => {
      test("'-1'", () => {
        expect(new Complex(-1, 0).format()).toBe('-1')
      })
    })

    describe('-i', () => {
      test("'-i'", () => {
        expect(new Complex(0, -1).format()).toBe('-i')
      })
    })

    describe('-1-i', () => {
      test("'-1-i'", () => {
        expect(new Complex(-1, -1).format()).toBe('-1-i')
      })
    })

    describe('2', () => {
      test("'2'", () => {
        expect(new Complex(2, 0).format()).toBe('2')
      })
    })

    describe('2i', () => {
      test("'2i'", () => {
        expect(new Complex(0, 2).format()).toBe('2i')
      })
    })

    describe('2+2i', () => {
      test("'2+2i'", () => {
        expect(new Complex(2, 2).format()).toBe('2+2i')
      })
    })

    describe('√½-⅓i', () => {
      test("'√½-⅓i'", () => {
        expect(new Complex(Math.sqrt(1 / 2), -1 / 3).format()).toBe('√½-⅓i')
      })
    })

    describe('2-3i', () => {
      beforeEach(() => {
        c = new Complex(2, -3)
      })

      test('formats', () => {
        expect(c.format()).toBe('2-3i')
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('+2.00-3.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('2-3i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('2-3i')
      })
    })

    describe('-2-3i', () => {
      beforeEach(() => {
        c = new Complex(-2, -3)
      })

      test('formats', () => {
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('-2.00-3.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('-2-3i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('-2-3i')
      })
    })

    describe('-i', () => {
      beforeEach(() => {
        c = new Complex(0, -1)
      })

      test('formats', () => {
        expect(c.format()).toBe('-i')
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('+0.00-1.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('-i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('-i')
      })
    })

    describe('1/3', () => {
      beforeEach(() => {
        c = new Complex(1 / 3, 0)
      })

      test('formats', () => {
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('+0.33+0.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('⅓')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('⅓')
      })
    })
  })

  describe('toString', () => {
    describe('ZERO', () => {
      test("equal '0'", () => {
        expect(Complex.ZERO.toString()).toBe('0')
      })
    })

    describe('ONE', () => {
      test("equal '1'", () => {
        expect(Complex.ONE.toString()).toBe('1')
      })
    })

    describe('I', () => {
      test("equal 'i'", () => {
        expect(i.toString()).toBe('i')
      })
    })

    describe('1+i', () => {
      test("equal '1+i'", () => {
        expect(new Complex(1, 1).toString()).toBe('1+i')
      })
    })

    describe('-1', () => {
      test("equal '-1'", () => {
        expect(new Complex(-1, 0).toString()).toBe('-1')
      })
    })

    describe('-i', () => {
      test("equal '-i'", () => {
        expect(new Complex(0, -1).toString()).toBe('-i')
      })
    })

    describe('-1-i', () => {
      test("equal '-1-i'", () => {
        expect(new Complex(-1, -1).toString()).toBe('-1-i')
      })
    })

    describe('2', () => {
      test("equal '2'", () => {
        expect(new Complex(2, 0).toString()).toBe('2')
      })
    })

    describe('2i', () => {
      test("equal '2i'", () => {
        expect(new Complex(0, 2).toString()).toBe('2i')
      })
    })

    describe('2+2i', () => {
      test("equal '2+2i'", () => {
        expect(new Complex(2, 2).toString()).toBe('2+2i')
      })
    })

    describe('2-3i', () => {
      test("equal '2-3i'", () => {
        expect(new Complex(2, -3).toString()).toBe('2-3i')
      })
    })

    describe('√½-⅓i', () => {
      test("equal '√½-⅓i'", () => {
        expect(new Complex(Math.sqrt(1 / 2), -1 / 3).toString()).toBe('√½-⅓i')
      })
    })

    describe('2-3i', () => {
      beforeEach(() => {
        c = new Complex(2, -3)
      })

      test('Format', () => {
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('+2.00-3.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('2-3i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('2-3i')
      })
    })

    describe('-2-3i', () => {
      beforeEach(() => {
        c = new Complex(-2, -3)
      })

      test('Format', () => {
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('-2.00-3.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('-2-3i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('-2-3i')
      })
    })

    describe('-i', () => {
      beforeEach(() => {
        c = new Complex(0, -1)
      })

      test('Format', () => {
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('+0.00-1.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('-i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('-i')
      })
    })

    describe('1/3', () => {
      beforeEach(() => {
        c = new Complex(1 / 3, 0)
      })

      test('Format', () => {
        expect(
          c.format({
            allowAbbreviation: false,
            maxAbbreviationError: 0,
            fixedDigits: 2,
          }),
        ).toBe('+0.33+0.00i')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0,
          }),
        ).toBe('⅓')
        expect(
          c.format({
            allowAbbreviation: true,
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        ).toBe('⅓')
      })
    })
  })
})
