import {DetailedError} from './detailedError'
import {seq} from './seq'

function _mergeScientificFloatTokens(tokens: string[]): string[] {
  tokens = [...tokens]
  for (let i = tokens.indexOf('e', 1); i !== -1; i = tokens.indexOf('e', i + 1)) {
    const s = i - 1
    let e = i + 1
    if (!/[0-9]/.exec(tokens[s])) {
      continue
    }
    if (/[+-]/.exec(`${tokens[e]}`)) {
      e += 1
    }

    if (/[0-9]/.exec(`${tokens[e]}`)) {
      e += 1
      tokens.splice(s, e - s, tokens.slice(s, e).join(''))
      i -= 1
    }
  }
  return tokens
}

function _tokenize(text: string): string[] {
  const tokens = seq(text.toLowerCase().split(/\s/))
    .flatMap((part: string) =>
      seq(part)
        .segmentBy((e: string) => {
          if (e.trim() === '') {
            return ' '
          }
          if (/[.0-9]/.exec(e)) {
            return '#'
          }
          if (/[_a-z]/.exec(e)) {
            return 'a'
          }
          return NaN // Always split.
        })
        .map((e: string[]) => e.join(''))
    )
    .filter((e: string) => e.trim() !== '')
    .toArray()

  return _mergeScientificFloatTokens(tokens)
}

/**
 * @param {!Map.<!string, T|!string|!number>} tokenMap
 * @returns {!string|T|!{unary_action: undefined|!function(T):T, binary_action: undefined|!function(T, T): T}}
 * @template T
 * @private
 */
function _translate_token<T>(token: string, tokenMap: Map<string, T | string | number>) {
  if (/[0-9]+(\.[0-9]+)?/.exec(token)) {
    return parseFloat(token)
  }

  if (tokenMap.has(token)) {
    return tokenMap.get(token)
  }

  throw new DetailedError('Unrecognized token', {token})
}

/**
 * Parses a value from an infix arithmetic expression.
 */
export function parseFormula<T>(text: string, tokenMap: Map<string, T | string | number>): T {
  let tokens = _tokenize(text).map(e => _translate_token(e, tokenMap))

  // Cut off trailing operation, so parse fails less often as users are typing.
  // @ts-ignore
  if (tokens.length > 0 && tokens[tokens.length - 1].priority !== undefined) {
    tokens = tokens.slice(0, tokens.length - 1)
  }

  const ops: Array<string | {f: unknown; w: unknown}> = []
  const vals: Array<string | undefined> = []

  // Hack: use the 'priority' field as a signal of 'is an operation'
  const isValidEndToken = (token: string) => token !== '(' && (token as any).priority === undefined
  const isValidEndState = () => vals.length === 1 && ops.length === 0

  const apply = (op: string) => {
    if (op === '(') {
      throw new DetailedError("Bad expression: unmatched '('", {text})
    }
    if (vals.length < 2) {
      throw new DetailedError('Bad expression: operated on nothing', {text})
    }
    const b = vals.pop()
    const a = vals.pop()
    vals.push((op as any).f(a, b))
  }

  const closeParen = () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (ops.length === 0) {
        throw new DetailedError("Bad expression: unmatched ')'", {text})
      }
      const op = ops.pop()
      if (op === '(') {
        break
      }
      apply(op as string)
    }
  }

  const burnOps = (w: number) => {
    while (ops.length > 0 && vals.length >= 2 && vals[vals.length - 1] !== undefined) {
      const top = ops[ops.length - 1]
      if ((top as any).w === undefined || (top as any).w < w) {
        break
      }
      apply(ops.pop()! as string)
    }
  }

  const feedOp = (couldBeBinary: boolean, token: string) => {
    // Implied multiplication?
    const mul = tokenMap.get('*')
    if (couldBeBinary && (token as any).binary_action === undefined && token !== ')') {
      // @ts-ignore
      burnOps(mul.priority)
      // @ts-ignore
      ops.push({f: mul.binary_action, w: mul.priority})
    }

    if (couldBeBinary && (token as any).binary_action !== undefined) {
      burnOps((token as any).priority)
      ops.push({f: (token as any).binary_action, w: (token as any).priority})
    } else if ((token as any).unary_action !== undefined) {
      burnOps((token as any).priority)
      vals.push(undefined)
      ops.push({
        f: (_a: unknown, b: unknown) => (token as any).unary_action(b),
        w: Infinity
      })
    } else if ((token as any).binary_action !== undefined) {
      throw new DetailedError('Bad expression: binary op in bad spot', {text})
    }
  }

  let wasValidEndToken = false
  for (const token of tokens) {
    feedOp(wasValidEndToken, token as string)

    wasValidEndToken = isValidEndToken(token as string)

    if (token === '(') {
      ops.push('(')
    } else if (token === ')') {
      closeParen()
    } else if (wasValidEndToken) {
      vals.push(token as string)
    }
  }
  burnOps(-Infinity)

  if (!isValidEndState()) {
    throw new DetailedError('Incomplete expression', {text})
  }

  return vals[0] as unknown as T
}
