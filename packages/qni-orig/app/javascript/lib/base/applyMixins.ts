/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      const propertyDescriptor = Object.getOwnPropertyDescriptor(
        baseCtor.prototype,
        name,
      )
      if (propertyDescriptor) {
        Object.defineProperty(derivedCtor.prototype, name, propertyDescriptor)
      }
    })
  })
}
