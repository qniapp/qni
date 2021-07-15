import { DetailedError } from "./detailedError"
import { describe } from "./describe"
import { hasOwnProperty } from "test"

export const THROW_IF_EMPTY = { if_same_instance_as_this_then_throw: true }

/**
 * A private sygil/sentinel value that shouldn't ever be present in a sequence,
 * and so can be used as a placeholder for "not set yet" (unlike undefined or
 * null, which are allowed to appear in sequences).
 */
const EMPTY_SYGIL = { not_a_normal_value: true }

const emptyFallback = (
  result: unknown,
  alternative: unknown,
  errorMessage: string,
) => {
  if (result !== EMPTY_SYGIL) {
    return result
  }
  if (alternative === THROW_IF_EMPTY) {
    throw new Error(errorMessage)
  }
  return alternative
}

/**
 * A fluent wrapper for iterable sequences of values, exposing useful methods
 * and properties.
 */
export class Seq<T> {
  /**
   * The generator, array, or other iterable object wrapped by this Seq
   * instance.
   */
  public _iterable: T[] | Iterable<T>;
  declare [Symbol.iterator]: () => IterableIterator<T>

  /**
   * Wraps the given array, collection, or other iterable.
   * Use [[fromGenerator]] for wrapping generator functions.
   */
  constructor(
    obj: T[] | Seq<T> | Iterable<T> | unknown,
    isIteratorFunction = false,
  ) {
    let iterable: T[] | Iterable<T>
    let iterator: Iterator<T>

    if (obj instanceof Seq) {
      // Avoid double-wrapping.
      iterable = obj._iterable
      iterator = obj[Symbol.iterator]
    } else if (isIteratorFunction) {
      iterable = { [Symbol.iterator]: obj } as unknown as Iterable<T>
      iterator = obj as Iterator<T>
    } else {
      if (!this.isIterable(obj)) {
        throw new Error(`Not iterable: ${describe(obj)}`)
      }
      iterable = obj
      iterator = obj[Symbol.iterator].bind(obj)
    }

    this._iterable = iterable
    this[Symbol.iterator] = iterator
  }

  private isIterable(obj: unknown): obj is Iterable<T> {
    if (typeof obj === "string") return true
    if (typeof obj === "object" && obj !== null && Symbol.iterator in obj) {
      return true
    }
    return false
  }

  /**
   * Creates a re-usable iterable from a generator function like
   * `function*() { yield 1; }`.
   *
   * Note that the obvious alternative, `new Seq(function*(){yield 1;}()}`,
   * stops working after the iterable has been iterated once.
   */
  static fromGenerator<T>(generatorFunction: Iterable<T>): Seq<T> {
    return new Seq(generatorFunction, true)
  }

  /**
   * Determines if the given iterable contains the same items as this sequence.
   */
  isEqualTo(
    other: T[] | Seq<T> | Iterable<T> | unknown,
    comparator: (e1: T, e2: T | unknown) => boolean = (e1, e2) => e1 === e2,
  ): boolean {
    if (!this.isIterable(other)) return false
    if (other === this) return true

    const iter2 = other[Symbol.iterator]()
    for (const e1 of this._iterable) {
      const e2 = iter2.next()
      if (e2.done || !comparator(e1, e2.value)) {
        return false
      }
    }
    return iter2.next().done
  }

  /**
   * Returns an array containing the items of this sequence.
   */
  toArray(): T[] {
    return Array.from(this._iterable)
  }

  /**
   * Returns a Float32Array containing the items of this sequence.
   * @returns {!Float32Array}
   */
  toFloat32Array(): Float32Array {
    const n = this.tryPeekCount()
    if (n === undefined) {
      return new Float32Array(this.toArray())
    }

    const buf = new Float32Array(n)
    let i = 0
    for (const item of this._iterable) {
      buf[i++] = item
    }
    return buf
  }

  /**
   * Returns a set containing the distinct items of this sequence.
   */
  toSet(): Set<T> {
    return new Set(this._iterable)
  }

  /**
   * Returns a string representation of the receiving sequence's items,
   * separated by the given joiner.
   */
  join(joiner: string): string {
    return this.toArray().join(joiner)
  }

  /**
   * Returns a string representation of the receiving sequence.
   */
  toString(): string {
    return `Seq[${this.join(", ")}]`
  }

  /**
   * Returns a sequence of natural numbers, starting at 0 and incrementing until
   * just before the given count.
   */
  static range(count: number): Seq<number> {
    if (!Number.isInteger(count) || count < 0) {
      throw new DetailedError("bad count", { count })
    }

    return Seq.fromGenerator(function* () {
      for (let i = 0; i < count; i++) {
        yield i
      }
    })
  }

  /**
   * Returns the sequence of natural numbers, starting at 0 and incrementing
   * without bound.
   */
  static naturals(): Seq<number> {
    return Seq.fromGenerator(function* () {
      let i = 0
      while (true) {
        yield i
        i++
      }
    })
  }

  /**
   * Returns a sequence of the same item repeated the given number of times.
   */
  static repeat(item: unknown, repeatCount: number): Seq<unknown> {
    if (repeatCount < 0) {
      throw new Error("needed repeatCount >= 0")
    }

    return Seq.fromGenerator(function* () {
      for (let i = 0; i < repeatCount; i++) {
        yield item
      }
    })
  }

  /**
   * Returns a sequence with the same items, but precomputed and stored. If the
   * sequence is already solid, e.g. it is backed by an array, then it is
   * returned directly (and unchanged).
   */
  solidify(): Seq<T> {
    const knownSolidTypes = [
      Float32Array,
      Float64Array,
      Int8Array,
      Int16Array,
      Int32Array,
      Uint8Array,
      Uint16Array,
      Uint32Array,
    ]

    if (Array.isArray(this._iterable)) {
      return this
    }
    for (const t of knownSolidTypes) {
      if (this._iterable instanceof t) {
        return this
      }
    }
    return new Seq(this.toArray())
  }

  /**
   * Returns a sequence iterating the results of applying a transformation to
   * the items of the receiving sequence.
   */
  map<R>(projection: (e: T) => R): Seq<R> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const e of seq) {
        yield projection(e)
      }
    })
  }

  /**
   * Returns a sequence iterating the results of applying a transformation to
   * the indexed items of the receiving sequence.
   */
  mapWithIndex(projection: (e: T, index: number) => unknown): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let i = 0
      for (const e of seq) {
        yield projection(e, i)
        i += 1
      }
    })
  }

  /**
   * Returns a sequence iterating the concatenated results of applying an
   * iterable-returning transformation to the items of the receiving sequence.
   */
  flatMap<R>(sequenceProjection: (e: T) => Iterable<R>): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const e of seq) {
        yield* sequenceProjection(e)
      }
    })
  }

  /**
   * Returns a sequence iterating the items of the receiving sequence that match
   * a predicate. Items that don't match the predicate, by causing it to return
   * a falsy value, are skipped.
   */
  filter(predicate: (e: T) => boolean): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const e of seq) {
        if (predicate(e)) {
          yield e
        }
      }
    })
  }

  /**
   * Returns a sequence iterating the items of the receiving sequence that match
   * a predicate over the item and the item's index. Items that don't match the
   * predicate are skipped.
   */
  filterWithIndex(predicate: (e: T, i: number) => boolean): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let i = 0
      for (const e of seq) {
        if (predicate(e, i)) {
          yield e
        }
        i++
      }
    })
  }

  /**
   * Combines the items of a sequence into a single result by iteratively
   * applying a combining function. If the sequence is empty, then either an
   * error is thrown or the given alternative value is returned.
   *
   * @param emptyErrorAlternative The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   */
  fold<A>(
    combiner: (a: T, b: T) => T,
    emptyErrorAlternative: A = THROW_IF_EMPTY,
  ): T | A {
    let accumulator = EMPTY_SYGIL
    for (const e of this._iterable) {
      accumulator = accumulator === EMPTY_SYGIL ? e : combiner(accumulator, e)
    }
    return emptyFallback(
      accumulator,
      emptyErrorAlternative,
      "Folded empty sequence without providing an alternative result.",
    )
  }

  /**
   * Combines the items of a sequence into a single result by starting with a
   * seed accumulator and iteratively applying an aggregation function to the
   * accumulator and next item to get the next accumulator.
   *
   * @param seed  The initial accumulator value.
   * @param aggregator  Computes the next accumulator value.
   */
  aggregate<A>(seed: A, aggregator: (a: A, e: T) => A): A {
    let accumulator = seed
    for (const e of this._iterable) {
      accumulator = aggregator(accumulator, e)
    }
    return accumulator
  }

  /**
   * Combines this sequence with another by passing items with the same index
   * through a combining function. If one sequence is longer than the other, the
   * lonely tail is discarded.
   */
  zip<T2, R>(
    other: T2[] | Seq<T2> | Iterable<T2>,
    combiner: (a: T, b: T2) => R,
  ): Seq<R> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      const iter2 = other[Symbol.iterator]()
      for (const item1 of seq) {
        const item2 = iter2.next()
        if (item2.done) {
          break
        }
        yield combiner(item1, item2.value)
      }
    })
  }

  /**
   * Returns the largest value in the sequence, as determined by the `<`
   * operator. If the sequence is empty, then either an error is thrown or the
   * given alternative value is returned.
   *
   * @param emptyErrorAlternative The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   */
  max<A>(emptyErrorAlternative: A = THROW_IF_EMPTY): T | A {
    return this.fold((e1, e2) => (e1 < e2 ? e2 : e1), emptyErrorAlternative)
  }

  /**
   * Returns the smallest value in the sequence, as determined by the `<`
   * operator. If the sequence is empty, then either an error is thrown or the
   * given alternative value is returned.
   *
   * @param emptyErrorAlternative The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   */
  min<A>(emptyErrorAlternative: A = THROW_IF_EMPTY): T | A {
    return this.fold((e1, e2) => (e1 < e2 ? e1 : e2), emptyErrorAlternative)
  }

  /**
   * Returns the highest-scoring item in the sequence, as determined by a
   * scoring function.
   *
   * @param projection  Determines the score of an item.
   * @param emptyErrorAlternative  The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   * @param isALessThanBComparator  The operation used to compare scores.
   */
  maxBy<A>(
    projection: (e: T) => number,
    emptyErrorAlternative: A = THROW_IF_EMPTY,
    isALessThanBComparator: (e1: A, e2: A) => boolean = (e1, e2) => e1 < e2,
  ): T | A {
    let curMaxItem = EMPTY_SYGIL
    let curMaxScore = EMPTY_SYGIL
    for (const item of this._iterable) {
      // Delay computing the score for the first item, so that singleton lists
      // never touch the score function.
      if (curMaxItem === EMPTY_SYGIL) {
        curMaxItem = item
        continue
      }
      if (curMaxScore === EMPTY_SYGIL) {
        curMaxScore = projection(curMaxItem)
      }

      const score = projection(item)
      if (isALessThanBComparator(curMaxScore, score)) {
        curMaxItem = item
        curMaxScore = score
      }
    }

    return emptyFallback(
      curMaxItem,
      emptyErrorAlternative,
      "Can't maxBy an empty sequence.",
    )
  }

  /**
   * Returns the lowest-scoring item in the sequence, as determined by a scoring
   * function.
   *
   * @param projection  Determines the score of an item.
   * @param emptyErrorAlternative The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   * @param isALessThanBComparator  The operation used to compare scores.
   */
  minBy<A>(
    projection: (e: T) => number,
    emptyErrorAlternative: A = THROW_IF_EMPTY,
    isALessThanBComparator: (e1: A, e2: A) => boolean = (e1, e2) => e1 < e2,
  ): T | A {
    return this.maxBy(projection, emptyErrorAlternative, (e1, e2) =>
      isALessThanBComparator(e2, e1),
    )
  }

  /**
   * Determines if any of the items in the sequence matches the given predicate.
   */
  any(predicate: (e: T) => boolean): boolean {
    for (const e of this._iterable) {
      if (predicate(e)) {
        return true
      }
    }
    return false
  }

  /**
   * Determines if every item in the sequence matches the given predicate.
   */
  every(predicate: (e: T) => boolean): boolean {
    return !this.any((e: T) => !predicate(e))
  }

  /**
   * Determines if the sequence contains a given value or not, as determined by
   * the `===` operator.
   */
  contains(value: T | unknown): boolean {
    return this.any((e) => e === value)
  }

  /**
   * Adds up the numbers in the sequence, using the `+` operator, and returns
   * the total. The empty sum is defined to be 0, to satisfy the invariant that
   * X.concat([s]).sum() === X.sum() + s.
   */
  sum(): T | number | unknown {
    let total = undefined
    for (const e of this._iterable) {
      total = this.add(e, total)
    }
    return total || 0
  }

  private add(
    e: number | string | unknown,
    total: number | string | unknown | undefined,
  ): number | string {
    if (typeof e === "number") {
      if (total === undefined) {
        return e
      } else if (typeof total === "number") {
        return total + e
      }
    }

    if (typeof e === "string") {
      if (total === undefined) {
        return e
      } else if (typeof total === "string") {
        return `${total}${e}`
      }
    }

    throw new Error(`Unsupported add type: ${typeof e}`)
  }

  /**
   * Multiplies up the numbers in the sequence, using the `*` operator, and
   * returns the total. The empty product is defined to be 1, to satisfy the
   * invariant that X.concat([s]).product() === X.product() * s.
   */
  product(): T | number | unknown {
    return this.fold((a, e) => a * e, 1)
  }

  /**
   * Accumulates the items of a sequence into a seed, while yielding the
   * results. For example,
   * `[1, 2, 3].scan((a, e) => a + e, "a")` yields `["a", "a1", "a12", "a123"]` and
   * `[1, 2, 3].scan((e1, e2) => e1 + e2, 0)` yields `[0, 1, 3, 6]`.
   */
  scan<A>(seed: A, aggregator: (a: A, e: T) => A): Seq<A> {
    const seq = this._iterable

    return Seq.fromGenerator(function* () {
      let accumulator = seed
      yield accumulator
      for (const e of seq) {
        accumulator = aggregator(accumulator, e)
        yield accumulator
      }
    })
  }

  /**
   * Returns a sequence containing the same items, but in the opposite order.
   */
  reverse(): Seq<T> {
    return new Seq(this.toArray().reverse())
  }

  /**
   * Flattens this sequence of iterables into a concatenated sequence.
   */
  flatten(): Seq<unknown> {
    const seqSeq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const seq of seqSeq) {
        yield* seq
      }
    })
  }

  /**
   * Returns a sequence that iterates the receiving sequence's items and then
   * the given iterable's items.
   */
  concat<A>(other: unknown | A[] | Seq<A>): Seq<T | A> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      yield* seq
      yield* other
    })
  }

  /**
   * Returns a sequence with the same items, except the item at the given index
   * is replaced.
   * If the index is not reached during iteration, an exception is thrown.
   */
  withOverlayedItem<A>(index: number, overlayedItem: A): Seq<T | A> {
    if (index < 0) {
      throw new Error("needed index >= 0")
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return Seq.fromGenerator(function* () {
      if (self.tryPeekCount() !== undefined && index >= self.tryPeekCount()) {
        throw new Error("needed index <= count")
      }
      let i = 0
      for (const e of self._iterable) {
        yield i === index ? overlayedItem : e
        i++
      }
      if (i <= index) {
        throw new Error(
          "sequence ended before overlay " +
            "[withOverlayedItem(${index}, ${overlayedItem})]",
        )
      }
    })
  }

  /**
   * Returns a sequence with the same items, except the item at the given index
   * is transformed by the given function. If the index is not reached during
   * iteration, an exception is thrown.
   */
  withTransformedItem<A>(
    index: number,
    itemTransformation: (e: T) => A,
  ): Seq<T | A> {
    if (index < 0) {
      throw new Error("needed index >= 0")
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return Seq.fromGenerator(function* () {
      if (self.tryPeekCount() !== undefined && index >= self.tryPeekCount()) {
        throw new Error("needed index <= count")
      }
      let i = 0
      for (const e of self._iterable) {
        yield i === index ? itemTransformation(e) : e
        i++
      }
      if (i <= index) {
        throw new Error(
          "sequence ended before transformation " +
            "[withTransformedItem(${index}, ${itemTransformation})]",
        )
      }
    })
  }

  /**
   * Returns a sequence with the same items, except the given extra item is
   * yielded when the given index is reached. If the insertion index is the
   * length of the sequence, the inserted item is the last yielded item. If the
   * insertion index is past the length of the sequence, an error is thrown (but
   * only at the end of iteration).
   */
  withInsertedItem<A>(index: number, item: A): Seq<T | A> {
    if (index < 0) {
      throw new Error("needed index >= 0")
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return Seq.fromGenerator(function* () {
      if (self.tryPeekCount() !== undefined && index > self.tryPeekCount()) {
        throw new Error("needed index <= count")
      }
      let i = 0
      for (const e of self._iterable) {
        if (i === index) {
          yield item
        }
        i++
        yield e
      }
      if (i === index) {
        yield item
      }
      if (i < index) {
        throw new Error(
          "sequence ended before insertion [withInsertedItem(${index}, ${item})]",
        )
      }
    })
  }

  /**
   * Returns a sequence with the same items, until one of the items fails to
   * match the given predicate. Then the sequence is cut short just before
   * yielding that item.
   */
  takeWhile(predicate: (e: T) => boolean): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      for (const e of seq) {
        if (!predicate(e)) {
          break
        }
        yield e
      }
    })
  }

  /**
   * Returns a sequence with the same items, except items are dropped from the
   * end of the sequence until the last item doesn't satisfy the given
   * predicate.
   */
  skipTailWhile(predicate: (e: T) => boolean): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let tail = []
      for (const e of seq) {
        if (predicate(e)) {
          tail.push(e)
        } else {
          yield* tail
          tail = []
          yield e
        }
      }
    })
  }

  /**
   * Returns a sequence with the same items, except items at the start of the
   * sequence are skipped until an item doesn't satisfy the given predicate.
   */
  skipWhile(predicate: (e: T) => boolean): Seq<T> {
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let matched = true
      for (const e of seq) {
        matched = matched && predicate(e)
        if (!matched) {
          yield e
        }
      }
    })
  }

  /**
   * Returns a sequence with the same items, except cut short if it exceeds the
   * given maximum count.
   */
  take(maxTakeCount: number): Seq<T> {
    if (maxTakeCount < 0) {
      throw new Error("needed maxTakeCount >= 0")
    }
    if (maxTakeCount === 0) {
      return new Seq([])
    }
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let i = 0
      for (const e of seq) {
        yield e
        i++
        if (i >= maxTakeCount) {
          break
        }
      }
    })
  }

  /**
   * Returns a sequence with the same items, except the give number are skipped
   * at the start.
   */
  skip(maxSkipCount: number): Seq<T> {
    if (maxSkipCount < 0) {
      throw new Error("needed maxSkipCount >= 0")
    }
    if (maxSkipCount === 0) {
      return this
    }

    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let i = 0
      for (const e of seq) {
        if (i >= maxSkipCount) {
          yield e
        }
        i++
      }
    })
  }

  /**
   * Returns a sequence with the same items, except later items with the same
   * key as earlier items get skipped.
   *
   * @param keySelector Items are considered distinct when their image, through
   * this function, is not already in the Set of seen images. The return type
   * must support being inserted into a Set.
   */
  distinctBy<K>(keySelector: (e: T) => K): Seq<T> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const seq = this
    return Seq.fromGenerator(function () {
      const keySet = new Set()
      const filtered = seq.filter((e) => {
        const key = keySelector(e)
        if (keySet.has(key)) {
          return false
        }
        keySet.add(key)
        return true
      })
      return filtered[Symbol.iterator]()
    })
  }

  /**
   * Returns a sequence with the same items, except duplicate items are omitted.
   * The items must support being inserted into / found in a Set.
   */
  distinct(): Seq<T> {
    return this.distinctBy((e: T) => e)
  }

  segmentBy(keySelector: (e: T) => unknown): Seq<T[]> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const seq = this
    return Seq.fromGenerator(function* () {
      let group = []
      let lastKey = undefined
      for (const item of seq) {
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

  /**
   * Returns the single item in the sequence. If there are no items or multiple
   * items in the sequence, either an error is thrown or an alternative value is
   * returned.
   *
   * @param emptyManyErrorAlternative The value to return if the sequence is
   * empty. If not provided, an error is thrown when the sequence is empty or
   * has more than one value.
   */
  single<A>(emptyManyErrorAlternative: A = THROW_IF_EMPTY): T | A {
    const iter = this[Symbol.iterator]()

    const first = iter.next()
    if (!first.done && iter.next().done) {
      return first.value
    }

    if (emptyManyErrorAlternative === THROW_IF_EMPTY) {
      if (first.done) {
        throw new Error("Empty sequence doesn't contain a single item.")
      } else {
        throw new Error("Sequence contains more than a single item.")
      }
    }

    return emptyManyErrorAlternative
  }

  /**
   * Returns the first item in the sequence.
   *
   * @param emptyErrorAlternative The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   */
  first<A>(emptyErrorAlternative: A = THROW_IF_EMPTY): T | A {
    const iter = this[Symbol.iterator]()

    const first = iter.next()
    if (!first.done) {
      return first.value
    }

    if (emptyErrorAlternative === THROW_IF_EMPTY) {
      throw new Error("Empty sequence has no first item.")
    }

    return emptyErrorAlternative
  }

  /**
   * Returns the last item in the sequence.
   *
   * @param emptyErrorAlternative The value to return if the sequence is empty.
   * If not provided, an error is thrown when the sequence is empty.
   */
  last<A>(emptyErrorAlternative: A = THROW_IF_EMPTY): T | A {
    let result = EMPTY_SYGIL
    for (const e of this._iterable) {
      result = e
    }
    return emptyFallback(
      result,
      emptyErrorAlternative,
      "Empty sequence has no last item.",
    )
  }

  /**
   * If the sequence is of a known type with a known number of items, then
   * returns the length of the sequence. Otherwise, returns undefined.
   * It is guaranteed that the sequence will not be iterated by this method.
   */
  tryPeekCount(): number | undefined {
    if (Array.isArray(this._iterable)) {
      return this._iterable.length
    }
    if (
      hasOwnProperty(this._iterable, "length") &&
      typeof this._iterable.length === "number"
    ) {
      return this._iterable.length
    }
    if (this._iterable instanceof Map || this._iterable instanceof Set) {
      return this._iterable.size
    }
    return undefined
  }

  /**
   * Determines the number of items in the sequence.
   * Uses length/size methods of known types, when possible, but otherwise falls
   * back to iterating all the items.
   * Gets stuck in a loop if the sequence is unbounded.
   */
  count(): number {
    const known = this.tryPeekCount()
    if (known !== undefined) {
      return known
    }

    let n = 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of this._iterable) {
      n++
    }
    return n
  }

  /**
   * Returns a sequence starting with the same items, but padded up to the given
   * length with the given item. If the
   * sequence already exceeds the given length, no items are added.
   */
  padded<A>(minCount: number, paddingItem: A = undefined): Seq<T | A> {
    if (minCount < 0) {
      throw new Error("needed minCount >= 0")
    }
    const seq = this._iterable
    return Seq.fromGenerator(function* () {
      let remaining = minCount
      for (const e of seq) {
        yield e
        remaining -= 1
      }
      while (remaining > 0) {
        yield paddingItem
        remaining -= 1
      }
    })
  }

  /**
   * Returns a sequence containing the same items, but in ascending order.
   */
  sorted(): Seq<T> {
    return seq(this.toArray().sort())
  }

  /**
   * Returns a sequence containing the same items, but in ascending order of
   * outputs from the given function.
   */
  sortedBy(keySelector: (e: T) => T): Seq<T> {
    return seq(
      this.toArray().sort((e1, e2) => {
        const out1 = keySelector(e1)
        const out2 = keySelector(e2)
        return out1 < out2 ? -1 : out1 > out2 ? +1 : 0
      }),
    )
  }

  /**
   * Conditionally applies a transformation to the sequence. If the given
   * condition is false, the original sequence is returned. If the given
   * condition is true, the sequence is run through the given transformation and
   * the result is returned.
   *
   * This method mainly exists for syntactic convenience, so a dotted pipeline
   * can be done in a single expression. For example,
   * `seq.map(e => e + 1).ifThen(filterFlag, s => s.filter(e => e == 1)).toArray()`
   */
  ifThen(
    condition: boolean,
    sequenceTransformation: (e: Seq<T>) => Seq<T> | Iterable<T> | T[] | unknown,
  ): Seq<unknown> {
    return condition ? new Seq(sequenceTransformation(this)) : this
  }

  /**
   * Returns a map containing the key/value pairs created by projecting each of
   * the items in the sequence through key and value selector functions.
   *
   * If any duplicate keys are generated, an exception is thrown.
   */
  toMap<K, V>(
    keySelector: (e: T) => K,
    valueSelector: (e: T) => V,
  ): Map<K, V> | Map<unknown, unknown> {
    const map = new Map()
    for (const item of this._iterable) {
      const key = keySelector(item)
      const val = valueSelector(item)

      if (map.has(key)) {
        throw new Error(
          `Duplicate key <${describe(key)}>. Came from item <${describe(
            item,
          )}>.`,
        )
      }
      map.set(key, val)
    }
    return map
  }

  /**
   * Returns a map where the items from the sequence are indexed by the result
   * of running them through the given key selector function.
   *
   * If any duplicate keys are generated, an exception is thrown.
   */
  keyedBy<K>(keySelector: (e: T) => K): Map<K, V> {
    return this.toMap(keySelector, (e) => e)
  }

  /**
   * Returns a map, with keys generated by passing the sequence's items through
   * the given key selector, where each key maps to an array of the items (from
   * the sequence) that mapped to said key.
   */
  groupBy<K>(keySelector: (e: T) => K): Map<K, T[]> {
    const map = new Map()
    for (const item of this._iterable) {
      const key = keySelector(item)
      if (!map.has(key)) {
        map.set(key, [])
      }
      (map.get(key) as T[]).push(item)
    }
    return map as Map<K, T[]>
  }

  /**
   * Groups elements into arrays of the given size (except for the last
   * partition, which may be smaller) and yields the groups instead of
   * individual items.
   */
  partitioned(partitionSize: number): Seq<T[]> {
    if (partitionSize <= 0) {
      throw new Error("need partitionSize > 0")
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const seq = this
    return Seq.fromGenerator(function* () {
      let buffer = []
      for (const item of seq) {
        buffer.push(item)
        if (buffer.length >= partitionSize) {
          yield buffer
          buffer = []
        }
      }
      if (buffer.length > 0) {
        yield buffer
      }
    })
  }

  /**
   * Iterates the elements in the subsequence that are at indices congruent to 0
   * modulo the given step size.
   */
  stride(stepSize: number): Seq<T> {
    return this.filterWithIndex((e, i) => i % stepSize === 0)
  }

  /**
   * Iterates elements reachable by starting from the given sequence and
   * applying the given neighbor yielding function to known nodes.
   */
  breadthFirstSearch(
    neighborSelector: (e: T) => T[],
    keySelector = (e: T) => e,
  ): Seq<T> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const seq = this
    return Seq.fromGenerator(function* () {
      const visited = new Set()
      const schedule = seq.toArray()
      for (let i = 0; i < schedule.length; i++) {
        const e = schedule[i]
        const k = keySelector(e)
        if (visited.has(k)) {
          continue
        }
        visited.add(k)
        for (const neighbor of neighborSelector(e)) {
          schedule.push(neighbor)
        }
        yield e
      }
    })
  }
}

/**
 * Wraps an iterable into a Seq.
 */
export const seq = function <T>(iterable: T[] | Seq<T> | Iterable<T>): Seq<T> {
  return new Seq(iterable)
}
