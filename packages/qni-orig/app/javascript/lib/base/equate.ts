import { ArrayIsh, hasOwnProperty } from "test"

const GENERIC_ARRAY_TYPES = [
  Float32Array,
  Float64Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Uint8ClampedArray,
]

/**
 * Determines if two values are currently equivalent.
 *
 * Values that are equal according to === are currently equivalent.
 * NaN is currently equivalent to NaN.
 * Values with an `isEqualTo` method are currently equivalent to values that return true when passed to that method.
 * Collections of the same type that contain currently equivalent entries are currently equivalent.
 * Objects of the same type with equivalent same own properties and iterables are currently equivalent.
 */
export function equate(subject: unknown, other: unknown): boolean {
  if (subject === other || (isExactlyNaN(subject) && isExactlyNaN(other))) {
    return true
  }

  const customEquality = tryEquateCustom(subject, other)
  if (customEquality !== undefined) {
    return customEquality
  }
  if (isAtomic(subject) || isAtomic(other) || !eqType(subject, other)) {
    return false
  }

  if (subject instanceof Map && other instanceof Map) {
    return equateMaps(subject, other)
  }
  if (subject instanceof Set && other instanceof Set) {
    return equateSets(subject, other)
  }
  if (isIndexable(subject) && isIndexable(other)) {
    return equateIndexables(subject, other)
  }

  return equateObjects(subject, other)
}

function isIndexable(value: unknown): boolean {
  return (
    Array.isArray(value) ||
    !GENERIC_ARRAY_TYPES.every((t) => !(value instanceof t))
  )
}

function isExactlyNaN(v: unknown) {
  return typeof v === "number" && isNaN(v)
}

function tryEquateCustom(
  subject: unknown,
  other: unknown,
): boolean | undefined {
  // throw new Error(`isAtomic = ${isAtomic(subject)}`)
  // throw new Error(`hasOwnProperty = ${hasOwnProperty(subject, "isEqualTo")}`)

  if (!isAtomic(subject) && hasOwnProperty(subject, "isEqualTo")) {
    return subject.isEqualTo(other) as boolean
  }
  if (!isAtomic(other) && hasOwnProperty(other, "isEqualTo")) {
    return other.isEqualTo(subject) as boolean
  }
  return undefined
}

type Atomic = null | undefined | string | number | boolean

function isAtomic(value: unknown): value is Atomic {
  return (
    value === null ||
    value === undefined ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  )
}

function equateMaps(
  subject: Map<unknown, unknown>,
  other: Map<unknown, unknown>,
) {
  if (subject.size !== other.size) {
    return false
  }
  for (const [k, v] of subject) {
    if (!other.has(k)) {
      return false
    }
    const otherV = other.get(k)
    if (!equate(v, otherV)) {
      return false
    }
  }
  return true
}

function equateSets(subject: Set<unknown>, other: Set<unknown>) {
  if (subject.size !== other.size) {
    return false
  }
  for (const k of subject) {
    if (!other.has(k)) {
      return false
    }
  }
  return true
}

function eqType(subject: unknown, other: unknown): boolean {
  return typeof subject === typeof other
}

function equateIndexables(subject: ArrayIsh, other: ArrayIsh) {
  if (subject.length !== other.length) {
    return false
  }
  for (let i = 0; i < subject.length; i++) {
    if (!equate(subject[i], other[i])) {
      return false
    }
  }
  return true
}

function objectKeys(obj: unknown) {
  const result = new Set()
  for (const k in obj as Record<PropertyKey, unknown>) {
    if (hasOwnProperty(obj, k)) {
      result.add(k)
    }
  }
  return result
}

function equateObjects(subject: unknown, other: unknown) {
  const keys = objectKeys(subject)
  if (!equateSets(keys, objectKeys(other))) {
    return false
  }

  for (const k of keys) {
    if (k === Symbol.iterator) {
      continue
    }
    if (!equate(subject[k], other[k])) {
      return false
    }
  }

  const hasSubjectIter = subject[Symbol.iterator] !== undefined
  const hasOtherIter = other[Symbol.iterator] !== undefined
  if (hasSubjectIter !== hasOtherIter) {
    return false
  }
  if (hasSubjectIter && hasOtherIter) {
    if (!equateIterables(subject, other)) {
      return false
    }
  }

  return true
}

function equateIterables(subject: Iterable<unknown>, other: Iterable<unknown>) {
  const otherIter = other[Symbol.iterator]()
  for (const subjectItem of subject) {
    const otherItemDone = otherIter.next()
    if (otherItemDone.done || !equate(subjectItem, otherItemDone.value)) {
      return false
    }
  }
  return otherIter.next().done
}
