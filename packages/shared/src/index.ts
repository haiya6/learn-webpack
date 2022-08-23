export function isString(val: unknown) {
  return typeof val === 'string'
}

export function isFunction(val: unknown) {
  return typeof val === 'function'
}

export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined'
}
