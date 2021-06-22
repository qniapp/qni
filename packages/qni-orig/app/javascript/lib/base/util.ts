export class Util {
  /**
   * Checks a precondition, throwing an exception containing the given message
   * in the case of failure.
   */
  static need(
    expression: boolean | unknown,
    message: string,
    args?: unknown[],
  ): void {
    if (expression !== true) {
      const argDesc =
        args === undefined
          ? "(not provided)"
          : `[${Array.prototype.slice.call(args).join(", ")}]`
      const msgDesc = message === undefined ? "(not provided)" : message
      const msg =
        "Precondition failed" +
        "\n\nMessage: " +
        msgDesc +
        "\n\nArgs: " +
        argDesc
      throw new Error(msg)
    }
  }

  static notNull<T>(v: T): asserts v is NonNullable<T> {
    Util.need(v !== null && v !== undefined, "notNull")
  }

  /**
   * Returns the cosine and sine of an angle, except that when the angle is the
   * closest approximation to a multiple of π/4 the result is snapped to a nice
   * vector by assuming the input was an exact multiple.
   */
  static snappedCosSin(radians: number): number[] {
    const unit = Math.PI / 4
    const i = Math.round(radians / unit)
    if (i * unit === radians) {
      const s = Math.sqrt(0.5)
      const snaps = [
        [1, 0],
        [s, s],
        [0, 1],
        [-s, s],
        [-1, 0],
        [-s, -s],
        [0, -1],
        [s, -s],
      ]
      return snaps[i & 7]
    }
    return [Math.cos(radians), Math.sin(radians)]
  }
}
