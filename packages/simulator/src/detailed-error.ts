import {describe} from '@qni/common'

let CONSTRUCTOR_CALLS_NESTING = 0

export class DetailedError extends Error {
  public details: string | undefined
  private detailsObj: unknown

  constructor(message: string, detailsObj: unknown) {
    super(message)

    this.detailsObj = detailsObj
    this.name = 'Error'
    this.message = message
    this.stack = new Error().stack
    if (this.stack !== undefined) {
      this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, '\n    ')
    }

    CONSTRUCTOR_CALLS_NESTING++
    try {
      this.details =
        CONSTRUCTOR_CALLS_NESTING === 1
          ? describe(this.detailsObj)
          : '(failed to describe detailsObj due to possibly re-entrancy)'
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.error(ex)
      this.details = '(failed to describe detailsObj, see the console for details)'
    } finally {
      CONSTRUCTOR_CALLS_NESTING--
    }
  }
}
