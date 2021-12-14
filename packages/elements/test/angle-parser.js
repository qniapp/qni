import {
  angleDenominator,
  angleNumerator,
  isAngleGreaterThan,
  isAngleLessThan,
  isValidAngle,
  radian,
  reduceAngle
} from '../dist/angle-parser'

describe('angle-parser', function () {
  describe('radian', function () {
    it('0', function () {
      assert.equal(radian('0'), 0)
    })

    it('-2π', function () {
      assert.equal(radian('-2π'), -2 * Math.PI)
    })

    it('-3π/2', function () {
      assert.equal(radian('-3π/2'), -Math.PI * (3 / 2))
    })

    it('-π/2', function () {
      assert.equal(radian('-π/2'), -Math.PI / 2)
    })

    it('π/2', function () {
      assert.equal(radian('π/2'), Math.PI / 2)
    })

    it('π', function () {
      assert.equal(radian('π'), Math.PI)
    })

    it('3π/2', function () {
      assert.equal(radian('3π/2'), Math.PI * (3 / 2))
    })

    it('2π', function () {
      assert.equal(radian('2π'), Math.PI * 2)
    })
  })

  describe('angleDenominator', function () {
    it('0', function () {
      assert.equal(angleDenominator('0'), 1)
    })

    it('-2π', function () {
      assert.equal(angleDenominator('-2π'), 1)
    })

    it('2π', function () {
      assert.equal(angleDenominator('2π'), 1)
    })

    it('-3π/2', function () {
      assert.equal(angleDenominator('-3π/2'), 2)
    })

    it('-3π/3', function () {
      assert.equal(angleDenominator('-3π/3'), 3)
    })

    it('3π/2', function () {
      assert.equal(angleDenominator('3π/2'), 2)
    })

    it('3π/3', function () {
      assert.equal(angleDenominator('3π/3'), 3)
    })
  })

  describe('angleNumerator', function () {
    it('0', function () {
      assert.equal(angleNumerator('0'), 0)
    })

    it('-2π', function () {
      assert.equal(angleNumerator('-2π'), -2)
    })

    it('2π', function () {
      assert.equal(angleNumerator('2π'), 2)
    })

    it('-3π/2', function () {
      assert.equal(angleNumerator('-3π/2'), -3)
    })

    it('3π/2', function () {
      assert.equal(angleNumerator('3π/2'), 3)
    })

    it('-3π/3', function () {
      assert.equal(angleNumerator('-3π/3'), -3)
    })

    it('3π/3', function () {
      assert.equal(angleNumerator('3π/3'), 3)
    })
  })

  describe('isValidAngle', function () {
    it('1', function () {
      assert.isFalse(isValidAngle('1'))
    })

    it('0', function () {
      assert.isTrue(isValidAngle('0'))
    })

    it('π/2/3', function () {
      assert.isFalse(isValidAngle('π/2/3'))
    })
  })

  describe('isAngleLessThan', function () {
    it('2π > π', function () {
      assert.isFalse(isAngleLessThan('2π', 'π'))
    })

    it('2π === 2π', function () {
      assert.isFalse(isAngleLessThan('2π', '2π'))
    })

    it('2π < 3π', function () {
      assert.isTrue(isAngleLessThan('2π', '3π'))
    })

    it('2π < 6π/2', function () {
      assert.isTrue(isAngleLessThan('2π', '6π/2'))
    })

    it('-3π < -2π', function () {
      assert.isTrue(isAngleLessThan('-3π', '-2π'))
    })

    it('-6π/2 < -2π', function () {
      assert.isTrue(isAngleLessThan('-6π/2', '-2π'))
    })
  })

  describe('isAngleGreaterThan', function () {
    it('π < 2π', function () {
      assert.isFalse(isAngleGreaterThan('π', '2π'))
    })

    it('2π === 2π', function () {
      assert.isFalse(isAngleGreaterThan('2π', '2π'))
    })

    it('3π > 2π', function () {
      assert.isTrue(isAngleGreaterThan('3π', '2π'))
    })

    it('6π/2 > 2π', function () {
      assert.isTrue(isAngleGreaterThan('6π/2', '2π'))
    })
  })

  describe('reduceAngle', function () {
    it('π', function () {
      assert.equal(reduceAngle('π'), 'π')
    })

    it('-π', function () {
      assert.equal(reduceAngle('-π'), '-π')
    })

    it('π/1', function () {
      assert.equal(reduceAngle('π/1'), 'π')
    })

    it('-π/1', function () {
      assert.equal(reduceAngle('-π/1'), '-π')
    })

    it('2π/4', function () {
      assert.equal(reduceAngle('2π/4'), 'π/2')
    })

    it('4π/6', function () {
      assert.equal(reduceAngle('4π/6'), '2π/3')
    })

    it('-2π/4', function () {
      assert.equal(reduceAngle('-2π/4'), '-π/2')
    })

    it('-4π/6', function () {
      assert.equal(reduceAngle('-4π/6'), '-2π/3')
    })
  })
})
