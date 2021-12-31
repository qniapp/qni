/* eslint-env qunit */

import {
  angleDenominator,
  angleNumerator,
  isAngleGreaterThan,
  isAngleLessThan,
  isValidAngle,
  radian,
  reduceAngle
} from '../dist/angle-parser'

QUnit.module('angle-parser', () => {
  QUnit.module('radian', () => {
    QUnit.test('0', assert => {
      assert.equal(radian('0'), 0)
    })

    QUnit.test('-2π', assert => {
      assert.equal(radian('-2π'), -2 * Math.PI)
    })

    QUnit.test('-3π/2', assert => {
      assert.equal(radian('-3π/2'), -Math.PI * (3 / 2))
    })

    QUnit.test('-π/2', assert => {
      assert.equal(radian('-π/2'), -Math.PI / 2)
    })

    QUnit.test('π/2', assert => {
      assert.equal(radian('π/2'), Math.PI / 2)
    })

    QUnit.test('π', assert => {
      assert.equal(radian('π'), Math.PI)
    })

    QUnit.test('3π/2', assert => {
      assert.equal(radian('3π/2'), Math.PI * (3 / 2))
    })

    QUnit.test('2π', assert => {
      assert.equal(radian('2π'), Math.PI * 2)
    })
  })

  QUnit.module('angleDenominator', function () {
    QUnit.test('0', assert => {
      assert.equal(angleDenominator('0'), 1)
    })

    QUnit.test('-2π', assert => {
      assert.equal(angleDenominator('-2π'), 1)
    })

    QUnit.test('2π', assert => {
      assert.equal(angleDenominator('2π'), 1)
    })

    QUnit.test('-3π/2', assert => {
      assert.equal(angleDenominator('-3π/2'), 2)
    })

    QUnit.test('-3π/3', assert => {
      assert.equal(angleDenominator('-3π/3'), 3)
    })

    QUnit.test('3π/2', assert => {
      assert.equal(angleDenominator('3π/2'), 2)
    })

    QUnit.test('3π/3', assert => {
      assert.equal(angleDenominator('3π/3'), 3)
    })
  })

  QUnit.module('angleNumerator', function () {
    QUnit.test('0', assert => {
      assert.equal(angleNumerator('0'), 0)
    })

    QUnit.test('-2π', assert => {
      assert.equal(angleNumerator('-2π'), -2)
    })

    QUnit.test('2π', assert => {
      assert.equal(angleNumerator('2π'), 2)
    })

    QUnit.test('-3π/2', assert => {
      assert.equal(angleNumerator('-3π/2'), -3)
    })

    QUnit.test('3π/2', assert => {
      assert.equal(angleNumerator('3π/2'), 3)
    })

    QUnit.test('-3π/3', assert => {
      assert.equal(angleNumerator('-3π/3'), -3)
    })

    QUnit.test('3π/3', assert => {
      assert.equal(angleNumerator('3π/3'), 3)
    })
  })

  QUnit.module('isValidAngle', () => {
    QUnit.test('1', assert => {
      assert.false(isValidAngle('1'))
    })

    QUnit.test('0', assert => {
      assert.true(isValidAngle('0'))
    })

    QUnit.test('π/2/3', assert => {
      assert.false(isValidAngle('π/2/3'))
    })
  })

  QUnit.module('isAngleLessThan', () => {
    QUnit.test('2π > π', assert => {
      assert.false(isAngleLessThan('2π', 'π'))
    })

    QUnit.test('2π === 2π', assert => {
      assert.false(isAngleLessThan('2π', '2π'))
    })

    QUnit.test('2π < 3π', assert => {
      assert.true(isAngleLessThan('2π', '3π'))
    })

    QUnit.test('2π < 6π/2', assert => {
      assert.true(isAngleLessThan('2π', '6π/2'))
    })

    QUnit.test('-3π < -2π', assert => {
      assert.true(isAngleLessThan('-3π', '-2π'))
    })

    QUnit.test('-6π/2 < -2π', assert => {
      assert.true(isAngleLessThan('-6π/2', '-2π'))
    })
  })

  QUnit.module('isAngleGreaterThan', () => {
    QUnit.test('π < 2π', assert => {
      assert.false(isAngleGreaterThan('π', '2π'))
    })

    QUnit.test('2π === 2π', assert => {
      assert.false(isAngleGreaterThan('2π', '2π'))
    })

    QUnit.test('3π > 2π', assert => {
      assert.true(isAngleGreaterThan('3π', '2π'))
    })

    QUnit.test('6π/2 > 2π', assert => {
      assert.true(isAngleGreaterThan('6π/2', '2π'))
    })
  })

  QUnit.module('reduceAngle', () => {
    QUnit.test('π', assert => {
      assert.equal(reduceAngle('π'), 'π')
    })

    QUnit.test('-π', assert => {
      assert.equal(reduceAngle('-π'), '-π')
    })

    QUnit.test('π/1', assert => {
      assert.equal(reduceAngle('π/1'), 'π')
    })

    QUnit.test('-π/1', assert => {
      assert.equal(reduceAngle('-π/1'), '-π')
    })

    QUnit.test('2π/4', assert => {
      assert.equal(reduceAngle('2π/4'), 'π/2')
    })

    QUnit.test('4π/6', assert => {
      assert.equal(reduceAngle('4π/6'), '2π/3')
    })

    QUnit.test('-2π/4', assert => {
      assert.equal(reduceAngle('-2π/4'), '-π/2')
    })

    QUnit.test('-4π/6', assert => {
      assert.equal(reduceAngle('-4π/6'), '-2π/3')
    })
  })
})
