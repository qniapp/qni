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

import {format as prettyFormat} from 'pretty-format'

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
          ? prettyFormat(this.detailsObj)
          : '(failed to prettyFormat detailsObj due to possibly re-entrancy)'
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.error(ex)
      this.details = '(failed to prettyFormat detailsObj, see the console for details)'
    } finally {
      CONSTRUCTOR_CALLS_NESTING--
    }
  }
}
