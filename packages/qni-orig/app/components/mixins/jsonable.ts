import { Constructor } from "./constructor"

export declare class Jsonable {
  toJson(): string
}

export function JsonableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Jsonable> & TBase {
  class JsonableMixinClass extends Base {
    toJson(): string {
      throw new Error("Not implemented yet")
    }
  }

  return JsonableMixinClass as Constructor<Jsonable> & TBase
}
