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

import {Result} from 'neverthrow'

type ParseError = {message: string}
const toParseError = (): ParseError => ({message: 'Parse Error'})

export class Util {
  static need(expression: boolean, message: string, args?: unknown[]): asserts expression {
    if (expression !== true) {
      const argDesc = args === undefined ? '(not provided)' : `[${Array.prototype.slice.call(args).join(', ')}]`
      const msgDesc = message === undefined ? '(not provided)' : message
      const msg = `Precondition failed\n\nMessage: ${msgDesc}\n\nArgs: ${argDesc}`
      throw new Error(msg)
    }
  }

  static notNull<T>(v: T): asserts v is NonNullable<T> {
    Util.need(v !== null && v !== undefined, 'notNull')
  }

  // 現在の URL をパースし、最後の / 以降をデコードしたものを返す
  static get urlJson(): string {
    const url = new URL(location.href, window.location.origin)
    const path = decodeURIComponent(url.pathname)
    const lastSlashIndex = path.lastIndexOf('/')

    return path.substring(lastSlashIndex + 1)
  }

  static safeJsonParse = Result.fromThrowable(JSON.parse, toParseError)
}
