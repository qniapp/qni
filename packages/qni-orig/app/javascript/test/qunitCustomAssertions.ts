import { equate } from "lib/base"
import { isApproximatelyEqualToHelper } from "./util"

declare global {
  interface Assert {
    equates: (subject: unknown, other: unknown, message?: string) => void
    notEquates: (subject: unknown, other: unknown) => void
    approximatelyEquates: (
      subject: unknown,
      other: unknown,
      epsilon?: number,
    ) => void
    notApproximatelyEquates: (
      subject: unknown,
      other: unknown,
      epsilon?: number,
    ) => void
    iteratesAs: (subject: unknown, items: unknown[]) => void
    lessThan: (subject: number, other: number) => void
  }
}

QUnit.assert.equates = function (
  subject: unknown,
  other: unknown,
  message = "",
) {
  this.pushResult({
    result: equate(subject, other),
    actual: subject,
    expected: other,
    message: message,
  })
}

QUnit.assert.notEquates = function (
  subject: unknown,
  other: unknown,
  message = "",
) {
  this.pushResult({
    result: !equate(subject, other),
    actual: subject,
    expected: other,
    message: message,
  })
}

QUnit.assert.approximatelyEquates = function (
  subject: unknown,
  other: unknown,
  epsilon = 0.000001,
  message = "",
) {
  this.pushResult({
    result: isApproximatelyEqualToHelper(subject, other, epsilon),
    actual: subject,
    expected: other,
    message: message,
  })
}

QUnit.assert.notApproximatelyEquates = function (
  subject: unknown,
  other: unknown,
  epsilon = 0.000001,
  message = "",
) {
  this.pushResult({
    result: !isApproximatelyEqualToHelper(subject, other, epsilon),
    actual: subject,
    expected: other,
    message: message,
  })
}

QUnit.assert.iteratesAs = function <T>(
  subject: unknown,
  items: unknown[],
  message = "",
) {
  const actualItems = []
  for (const item of subject as string | Array<T> | Iterable<T>) {
    if (actualItems.length > items.length * 2 + 100) {
      actualItems.push("{...}")
      break
    }
    actualItems.push(item)
  }

  this.pushResult({
    result: equate(actualItems, items),
    actual: actualItems,
    expected: items,
    message: message,
  })
}

QUnit.assert.lessThan = function (
  subject: number,
  other: number,
  message = "",
) {
  this.pushResult({
    result: subject < other,
    actual: subject,
    expected: other,
    message: message,
  })
}
