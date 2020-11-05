export class InternalError extends Error {
  constructor(m: string) {
    super(m)

    Object.setPrototypeOf(this, InternalError.prototype)
  }
}
