import {ArrayIsh, Complex, describe, equate, hasOwnProperty} from '@qni/common'

export function isEqualTo(subject: unknown, other: unknown): boolean {
  return equate(subject, other)
}

export function isApproximatelyEqualTo(subject: unknown, other: unknown, epsilon = 0.000001): boolean {
  return isApproximatelyEqualToHelper(subject, other, epsilon)
}

export function isNotApproximatelyEqualTo(subject: unknown, other: unknown, epsilon = 0.000001): boolean {
  return !isApproximatelyEqualToHelper(subject, other, epsilon)
}

export function isApproximatelyEqualToHelper(subject: unknown, other: unknown, epsilon: number): boolean {
  if (subject === null) {
    return other === null
  } else if (subject === undefined) {
    return other === undefined
  } else if (hasIsApproximatelyEqualTo(subject)) {
    return subject.isApproximatelyEqualTo(other, epsilon)
  } else if (typeof subject === 'number') {
    return (
      subject === other ||
      (typeof other === 'number' && isNaN(subject) && isNaN(other)) ||
      (typeof other === 'number' && Math.abs(subject - other) < epsilon)
    )
  } else if (isArrayIsh(subject)) {
    if (!isArrayIsh(other) || (isArrayIsh(other) && other.length !== subject.length)) {
      return false
    }
    for (let i = 0; i < subject.length; i++) {
      if (!isApproximatelyEqualToHelper(subject[i], other[i], epsilon)) {
        return false
      }
    }
    return true
  } else if (subject instanceof Object && subject.toString() === '[object Object]') {
    return isApproximatelyEqualToHelperDestructured(subject, other, epsilon)
  } else if (subject === other) {
    return true
  }

  fail(`Expected ${describe(subject)} to have an isApproximatelyEqualTo method`)
}

function hasIsApproximatelyEqualTo(object: unknown): object is Complex {
  return (
    (object as Complex).isApproximatelyEqualTo !== undefined &&
    typeof (object as Complex).isApproximatelyEqualTo === 'function'
  )
}

function isApproximatelyEqualToHelperDestructured(subject: unknown, other: unknown, epsilon: number): boolean {
  const keys = []
  for (const subjectKey in subject as Record<string, unknown>) {
    if (hasOwnProperty(subject as Record<string, unknown>, subjectKey)) {
      keys.push(subjectKey)
    }
  }
  for (const otherKey in other as Record<string, unknown>) {
    if (
      hasOwnProperty(other as Record<string, unknown>, otherKey) &&
      !hasOwnProperty(subject as Record<string, unknown>, otherKey)
    ) {
      return false
    }
  }

  return keys.every(
    key =>
      hasOwnProperty(other as Record<string, unknown>, key) &&
      isApproximatelyEqualToHelper(
        (subject as Record<string, unknown>)[key],
        (other as Record<string, unknown>)[key],
        epsilon
      )
  )
}

export function isArrayIsh(value: unknown): value is ArrayIsh {
  return (
    Array.isArray(value) ||
    value instanceof Float32Array ||
    value instanceof Float64Array ||
    value instanceof Int8Array ||
    value instanceof Int16Array ||
    value instanceof Int32Array ||
    value instanceof Uint8Array ||
    value instanceof Uint16Array ||
    value instanceof Uint32Array ||
    value instanceof Uint8ClampedArray
  )
}

function fail(message: string): never {
  throw new Error(message)
}
