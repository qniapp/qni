import {DetailedError} from './detailed-error'
import {describe} from './describe'

export const THROW_IF_EMPTY = {if_same_instance_as_this_then_throw: true}

const EMPTY_SYGIL = {not_a_normal_value: true}

function emptyFallback<T>(
  result: T | typeof EMPTY_SYGIL,
  alternative: T | typeof THROW_IF_EMPTY,
  errorMessage: string
): T {
  if (result !== EMPTY_SYGIL) {
    return result as T
  }
  if (alternative === THROW_IF_EMPTY) {
    throw new Error(errorMessage)
  }
  return alternative as T
}

export class Seq<T> {
  public _iterable: T[] | Iterable<T>;
  declare [Symbol.iterator]: () => IterableIterator<T>

  constructor(obj: T[] | Seq<T> | Iterable<T> | unknown, isIteratorFunction = false) {
    let iterable: T[] | Iterable<T>
    let iterator: () => IterableIterator<T>

    if (obj instanceof Seq) {
      // Avoid double-wrapping.
      iterable = obj._iterable
      iterator = obj[Symbol.iterator]
    } else if (isIteratorFunction) {
      iterable = {[Symbol.iterator]: obj} as unknown as Iterable<T>
      iterator = obj as () => IterableIterator<T>
    } else {
      if (!this.isIterable(obj)) {
        throw new Error(`Not iterable: ${describe(obj)}`)
      }
      iterable = obj
      iterator = obj[Symbol.iterator].bind(obj) as () => IterableIterator<T>
    }

    this._iterable = iterable
    this[Symbol.iterator] = iterator
  }

  private isIterable(obj: unknown): obj is Iterable<T> {
    if (typeof obj === 'string') return true
    if (typeof obj === 'object' && obj !== null && Symbol.iterator in obj) {
      return true
    }
    return false
  }

  static fromGenerator<T>(generatorFunction: () => Generator<T, unknown, unknown>): Seq<T> {
    return new Seq(generatorFunction, true)
  }

  toArray(): T[] {
    return Array.from(this._iterable)
  }

  join(joiner: string): string {
    return this.toArray().join(joiner)
  }

  toString(): string {
    return `Seq[${this.join(', ')}]`
  }

  static range(count: number): Seq<number> {
    if (!Number.isInteger(count) || count < 0) {
      throw new DetailedError('bad count', {count})
    }
    return Seq.fromGenerator(function* () {
      for (let i = 0; i < count; i++) {
        yield i
      }
    })
  }

  map<R>(projection: (e: T) => R): Seq<R> {
    const _seq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const e of _seq) {
        yield projection(e)
      }
    })
  }

  flatMap<R>(sequenceProjection: (e: T) => Iterable<R>): Seq<T> {
    const _seq = this._iterable
    return Seq.fromGenerator<T>(function* () {
      for (const e of _seq) {
        yield* sequenceProjection(e)
      }
    } as () => Generator<T, unknown, unknown>)
  }

  filter(predicate: (e: T) => boolean): Seq<T> {
    const _seq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const e of _seq) {
        if (predicate(e)) {
          yield e
        }
      }
    })
  }

  maxBy(
    projection: (e: T) => number,
    emptyErrorAlternative: T | typeof THROW_IF_EMPTY = THROW_IF_EMPTY,
    isALessThanBComparator: (e1: number, e2: number) => boolean = (e1, e2) => e1 < e2
  ): T {
    let curMaxItem: T | typeof EMPTY_SYGIL = EMPTY_SYGIL
    let curMaxScore: number | typeof EMPTY_SYGIL = EMPTY_SYGIL

    for (const item of this._iterable) {
      // Delay computing the score for the first item, so that singleton lists
      // never touch the score function.
      if (curMaxItem === EMPTY_SYGIL) {
        curMaxItem = item
        continue
      }
      if (curMaxScore === EMPTY_SYGIL) {
        curMaxScore = projection(curMaxItem as T)
      }

      const score = projection(item)
      if (isALessThanBComparator(curMaxScore as number, score)) {
        curMaxItem = item
        curMaxScore = score
      }
    }

    return emptyFallback<T>(curMaxItem, emptyErrorAlternative, "Can't maxBy an empty sequence.")
  }

  any(predicate: (e: T) => boolean): boolean {
    for (const e of this._iterable) {
      if (predicate(e)) {
        return true
      }
    }
    return false
  }

  every(predicate: (e: T) => boolean): boolean {
    return !this.any((e: T) => !predicate(e))
  }

  distinctBy<K>(keySelector: (e: T) => K): Seq<T> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _seq = this
    return Seq.fromGenerator(function () {
      const keySet = new Set()
      const filtered = _seq.filter(e => {
        const key = keySelector(e)
        if (keySet.has(key)) {
          return false
        }
        keySet.add(key)
        return true
      })
      return filtered[Symbol.iterator]()
    } as () => Generator<T, unknown, unknown>)
  }

  distinct(): Seq<T> {
    return this.distinctBy((e: T) => e)
  }

  segmentBy(keySelector: (e: T) => unknown): Seq<T[]> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _seq = this
    return Seq.fromGenerator(function* () {
      let group = []
      let lastKey = undefined
      for (const item of _seq) {
        const itemKey = keySelector(item)
        if (group.length > 0 && itemKey !== lastKey) {
          yield group
          group = []
        }
        group.push(item)
        lastKey = itemKey
      }
      if (group.length > 0) {
        yield group
      }
    })
  }

  single<A>(emptyManyErrorAlternative: A | typeof THROW_IF_EMPTY = THROW_IF_EMPTY): T | A {
    const iter = this[Symbol.iterator]()

    const first = iter.next()
    if (!first.done && iter.next().done) {
      return first.value
    }

    if (emptyManyErrorAlternative === THROW_IF_EMPTY) {
      if (first.done) {
        throw new Error("Empty sequence doesn't contain a single item.")
      } else {
        throw new Error('Sequence contains more than a single item.')
      }
    }

    return emptyManyErrorAlternative as A
  }

  sortedBy(keySelector: (e: T) => T): Seq<T> {
    return seq(
      this.toArray().sort((e1, e2) => {
        const out1 = keySelector(e1)
        const out2 = keySelector(e2)
        return out1 < out2 ? -1 : out1 > out2 ? +1 : 0
      })
    )
  }
}

export function seq<T>(iterable: T[] | Seq<T> | Iterable<T>): Seq<T> {
  return new Seq(iterable)
}
