const COLLECTION_CUTOFF = 1000
const BAD_TO_STRING_RESULT = Object.prototype.toString.call({})
const RECURSE_LIMIT_DESCRIPTION = '!recursion-limit!'
const DEFAULT_RECURSION_LIMIT = 10

// Attempts to give a useful and unambiguous description of the given value.
export function describe(value: unknown, recursionLimit = DEFAULT_RECURSION_LIMIT): string {
  return (
    tryDescribeAtomic(value) || tryDescribeCollection(value, recursionLimit) || describeFallback(value, recursionLimit)
  )
}

function tryDescribeAtomic(value: unknown) {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  if (typeof value === 'string') return `"${value}"`
  if (typeof value === 'number') return String(value)

  return undefined
}

function tryDescribeCollection(value: unknown, recursionLimit: number) {
  if (recursionLimit === 0) return RECURSE_LIMIT_DESCRIPTION
  if (value instanceof Map) return describeMap(value, recursionLimit)
  if (value instanceof Set) return describeSet(value, recursionLimit)
  const isIterable = (v: unknown): v is Iterable<unknown> => {
    if ((v as Iterable<unknown>)[Symbol.iterator] !== undefined) {
      return true
    }
    return false
  }
  if (isIterable(value)) return describeIterable(value, recursionLimit)

  return undefined
}

function describeFallback(value: unknown, recursionLimit: number) {
  const defaultString = String(value)
  if (defaultString !== BAD_TO_STRING_RESULT) return defaultString

  return describeObject(value, recursionLimit)
}

function describeMap(map: Map<unknown, unknown>, limit: number) {
  const entries = []
  for (const [k, v] of map.entries()) {
    if (entries.length > COLLECTION_CUTOFF) {
      entries.push('[...]')
      break
    }
    const keyDesc = describe(k, limit - 1)
    const valDesc = describe(v, limit - 1)
    entries.push(`${keyDesc}: ${valDesc}`)
  }
  return `Map{${entries.join(', ')}}`
}

function describeSet(set: Set<unknown>, limit: number) {
  const entries = []
  for (const e of set) {
    if (entries.length > COLLECTION_CUTOFF) {
      entries.push('[...]')
      break
    }
    entries.push(describe(e, limit - 1))
  }
  return `Set{${entries.join(', ')}}`
}

function describeIterable(seq: Iterable<unknown>, limit: number): string {
  const entries = []
  for (const e of seq) {
    if (entries.length > COLLECTION_CUTOFF) {
      entries.push('[...]')
      break
    }
    entries.push(describe(e, limit - 1))
  }
  const prefix = Array.isArray(seq) ? '' : seq.constructor.name
  return `${prefix}[${entries.join(', ')}]`
}

function describeObject(value: unknown, limit: number) {
  const entries = []
  for (const k in value as Record<string, unknown>) {
    if (!Object.prototype.hasOwnProperty.call(value, k)) {
      continue
    }
    if (entries.length > COLLECTION_CUTOFF) {
      entries.push('[...]')
      break
    }
    const v = (value as Record<string, unknown>)[k]
    const keyDesc = describe(k, limit - 1)
    const valDesc = describe(v, limit - 1)
    entries.push(`${keyDesc}: ${valDesc}`)
  }

  const typeName = (value as Record<string, unknown>).constructor.name
  const prefix = typeName === {}.constructor.name ? '' : `(Type: ${typeName})`
  return `${prefix}{${entries.join(', ')}}`
}
