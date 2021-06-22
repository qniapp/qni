import { DetailedError } from "lib/base"
import { seq } from "lib/base/seq"

function _mergeScientificFloatTokens(tokens: Array<string>): Array<string> {
  tokens = [...tokens]
  for (
    let i = tokens.indexOf("e", 1);
    i !== -1;
    i = tokens.indexOf("e", i + 1)
  ) {
    const s = i - 1
    let e = i + 1
    if (!/[0-9]/.exec(tokens[s])) {
      continue
    }
    if (/[+-]/.exec(tokens[e] + "")) {
      e += 1
    }

    if (/[0-9]/.exec(tokens[e] + "")) {
      e += 1
      tokens.splice(s, e - s, tokens.slice(s, e).join(""))
      i -= 1
    }
  }
  return tokens
}

function _tokenize(text: string): Array<string> {
  const tokens = seq(text.toLowerCase().split(/\s/))
    .flatMap((part: string) =>
      seq(part)
        .segmentBy((e: string) => {
          if (e.trim() === "") {
            return " "
          }
          if (/[.0-9]/.exec(e)) {
            return "#"
          }
          if (/[_a-z]/.exec(e)) {
            return "a"
          }
          return NaN // Always split.
        })
        .map((e: string[]) => e.join("")),
    )
    .filter((e: string) => e.trim() !== "")
    .toArray()

  return _mergeScientificFloatTokens(tokens)
}

/**
 * @param {!Map.<!string, T|!string|!number>} tokenMap
 * @returns {!string|T|!{unary_action: undefined|!function(T):T, binary_action: undefined|!function(T, T): T}}
 * @template T
 * @private
 */
function _translate_token<T>(
  token: string,
  tokenMap: Map<string, T | string | number>,
) {
  if (/[0-9]+(\.[0-9]+)?/.exec(token)) {
    return parseFloat(token)
  }

  if (tokenMap.has(token)) {
    return tokenMap.get(token)
  }

  throw new DetailedError("Unrecognized token", { token })
}

/**
 * Parses a value from an infix arithmetic expression.
 */
export function parseFormula<T>(
  text: string,
  tokenMap: Map<string, T | string | number>,
): T {
  let tokens = _tokenize(text).map((e) => _translate_token(e, tokenMap))

  // Cut off trailing operation, so parse fails less often as users are typing.
  if (tokens.length > 0 && tokens[tokens.length - 1].priority !== undefined) {
    tokens = tokens.slice(0, tokens.length - 1)
  }

  const ops = []
  const vals = []

  // Hack: use the 'priority' field as a signal of 'is an operation'
  const isValidEndToken = (token) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    token !== "(" && token.priority === undefined
  const isValidEndState = () => vals.length === 1 && ops.length === 0

  const apply = (op) => {
    if (op === "(") {
      throw new DetailedError("Bad expression: unmatched '('", { text })
    }
    if (vals.length < 2) {
      throw new DetailedError("Bad expression: operated on nothing", { text })
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const b = vals.pop()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const a = vals.pop()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    vals.push(op.f(a, b))
  }

  const closeParen = () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (ops.length === 0) {
        throw new DetailedError("Bad expression: unmatched ')'", { text })
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const op = ops.pop()
      if (op === "(") {
        break
      }
      apply(op)
    }
  }

  const burnOps = (w) => {
    while (
      ops.length > 0 &&
      vals.length >= 2 &&
      vals[vals.length - 1] !== undefined
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const top = ops[ops.length - 1]
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (top.w === undefined || top.w < w) {
        break
      }
      apply(ops.pop())
    }
  }

  const feedOp = (couldBeBinary, token) => {
    // Implied multiplication?
    const mul = tokenMap.get("*")
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (couldBeBinary && token.binary_action === undefined && token !== ")") {
      burnOps(mul.priority)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ops.push({ f: mul.binary_action, w: mul.priority })
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (couldBeBinary && token.binary_action !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      burnOps(token.priority)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      ops.push({ f: token.binary_action, w: token.priority })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    } else if (token.unary_action !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      burnOps(token.priority)
      vals.push(undefined)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      ops.push({ f: (a, b) => token.unary_action(b), w: Infinity })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    } else if (token.binary_action !== undefined) {
      throw new DetailedError("Bad expression: binary op in bad spot", { text })
    }
  }

  let wasValidEndToken = false
  for (const token of tokens) {
    feedOp(wasValidEndToken, token)

    wasValidEndToken = isValidEndToken(token)

    if (token === "(") {
      ops.push("(")
    } else if (token === ")") {
      closeParen()
    } else if (wasValidEndToken) {
      vals.push(token)
    }
  }
  burnOps(-Infinity)

  if (!isValidEndState()) {
    throw new DetailedError("Incomplete expression", { text })
  }

  return vals[0]
}
