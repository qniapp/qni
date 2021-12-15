/* eslint-env qunit */

import {describe} from '../src'

QUnit.module('.describe', () => {
  class DescribableClass {
    private x: number

    constructor() {
      this.x = 1
    }
  }

  class DescribedClass {
    private x: number

    constructor() {
      this.x = 1
    }

    toString() {
      return 'described'
    }
  }

  class SomeIterable {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    [Symbol.iterator]() {
      return [1, 2, 3][Symbol.iterator]()
    }
  }

  QUnit.test('.describe(trivial)', assert => {
    assert.equal(describe(undefined), 'undefined')
    assert.equal(describe(null), 'null')
    assert.equal(describe(false), 'false')
    assert.equal(describe(''), '""')
    assert.equal(describe(0), '0')
    assert.equal(describe(Symbol()), 'Symbol()')

    assert.equal(describe([]), '[]')
    assert.equal(describe({}), '{}')
    assert.equal(describe(new Float32Array(0)), 'Float32Array[]')
    assert.equal(describe(new Int8Array(0)), 'Int8Array[]')
    assert.equal(describe(new Map()), 'Map{}')
    assert.equal(describe(new Set()), 'Set{}')
  })

  QUnit.test('.describe(simple)', assert => {
    assert.equal(describe(true), 'true')
    assert.equal(describe(1.5), '1.5')
    assert.equal(describe('b'), '"b"')
    assert.equal(describe(Symbol('a')), 'Symbol(a)')
    assert.equal(describe(Infinity), 'Infinity')
    assert.equal(describe(-Infinity), '-Infinity')
    assert.equal(describe(NaN), 'NaN')

    assert.equal(describe([1, 2, 3]), '[1, 2, 3]')
    assert.equal(describe(new Float32Array([1, 2, 3])), 'Float32Array[1, 2, 3]')
    assert.equal(describe(new Int8Array([1, 2, 3])), 'Int8Array[1, 2, 3]')
    assert.equal(describe(new Set([2])), 'Set{2}')
    assert.equal(describe(new Map([[2, 'b']])), 'Map{2: "b"}')
    assert.equal(describe({2: 'b'}), '{"2": "b"}')

    assert.equal(describe(new DescribedClass()), 'described')
    assert.equal(describe(new DescribableClass()), '(Type: DescribableClass){"x": 1}')
    assert.equal(describe(new SomeIterable()), 'SomeIterable[1, 2, 3]')
  })

  QUnit.test('.describe(recursion)', assert => {
    const a: unknown[] = []
    a.push(a)
    assert.equal(describe(a, 2), '[[!recursion-limit!]]')
    assert.equal(describe(a, 10), '[[[[[[[[[[!recursion-limit!]]]]]]]]]]')

    const m = new Map()
    m.set(1, m)
    assert.equal(describe(m, 2), 'Map{1: Map{1: !recursion-limit!}}')
    assert.equal(
      describe(m, 10),
      'Map{1: Map{1: Map{1: Map{1: Map{1: Map{1: Map{1: Map{1: Map{1: Map{1: !recursion-limit!}}}}}}}}}}'
    )

    const s = new Set()
    s.add(s)
    assert.equal(describe(s, 2), 'Set{Set{!recursion-limit!}}')
    assert.equal(describe(s, 10), 'Set{Set{Set{Set{Set{Set{Set{Set{Set{Set{!recursion-limit!}}}}}}}}}}')

    const o: {[key: number]: unknown} = {}
    o[2] = o
    assert.equal(describe(o, 2), '{"2": {"2": !recursion-limit!}}')
    assert.equal(
      describe(o, 10),
      '{"2": {"2": {"2": {"2": {"2": {"2": {"2": {"2": {"2": {"2": !recursion-limit!}}}}}}}}}}'
    )

    // Default terminates.
    assert.notEqual(describe(a), undefined)
    assert.notEqual(describe(m), undefined)
    assert.notEqual(describe(s), undefined)
    assert.notEqual(describe(o), undefined)
  })
})
