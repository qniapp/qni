export class Util {
  static need(expression: boolean | unknown, message: string, args?: unknown[]): void {
    if (expression !== true) {
      const argDesc = args === undefined ? '(not provided)' : `[${Array.prototype.slice.call(args).join(', ')}]`
      const msgDesc = message === undefined ? '(not provided)' : message
      // eslint-disable-next-line i18n-text/no-en
      const msg = `Precondition failed\n\nMessage: ${msgDesc}\n\nArgs: ${argDesc}`
      throw new Error(msg)
    }
  }

  static notNull<T>(v: T): asserts v is NonNullable<T> {
    Util.need(v !== null && v !== undefined, 'notNull')
  }
}

export function isNumeric(value: string) {
  return /^-?\d+$/.test(value)
}
