/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export function hasOwnProperty<K extends PropertyKey>(obj: unknown, key: K): obj is Record<K, unknown> {
  return obj !== null && obj !== undefined && key in (obj as Record<string, unknown>)
}

export type ArrayIsh =
  | unknown[]
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray

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

function isIndexable(value: unknown): value is ArrayIsh {
  return Array.isArray(value) || !GENERIC_ARRAY_TYPES.every(t => !(value instanceof t))
}

function isExactlyNaN(v: unknown) {
  return typeof v === 'number' && isNaN(v)
}

function tryEquateCustom(subject: unknown, other: unknown): boolean | undefined {
  if (!isAtomic(subject) && hasOwnProperty(subject, 'isEqualTo') && typeof subject.isEqualTo === 'function') {
    return subject.isEqualTo(other) as boolean
  }
  if (!isAtomic(other) && hasOwnProperty(other, 'isEqualTo') && typeof other.isEqualTo === 'function') {
    return other.isEqualTo(subject) as boolean
  }
  return undefined
}

type Atomic = null | undefined | string | number | boolean

function isAtomic(value: unknown): value is Atomic {
  return (
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

function equateMaps(subject: Map<unknown, unknown>, other: Map<unknown, unknown>) {
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
  const result = new Set<PropertyKey>()
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
    if (!equate((subject as Record<string, unknown>)[k as string], (other as Record<string, unknown>)[k as string])) {
      return false
    }
  }

  const hasSubjectIter = hasOwnProperty(subject, Symbol.iterator)
  const hasOtherIter = hasOwnProperty(other, Symbol.iterator)
  if (hasSubjectIter !== hasOtherIter) {
    return false
  }
  if (hasSubjectIter && hasOtherIter) {
    if (!equateIterables(subject as Iterable<unknown>, other as Iterable<unknown>)) {
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
