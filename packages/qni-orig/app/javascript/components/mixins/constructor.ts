export type Constructor<T = Record<string, unknown>> = new (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
) => T
