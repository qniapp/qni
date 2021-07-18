import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { classNameFor } from "lib/base"

export declare class Connectable {
  connectWith(bits: number[]): void
  disconnectFromLowerBit(): void
  disconnectFromUpperBit(): void
}

export const isConnectable = (arg: unknown): arg is Connectable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Connectable).connectWith === "function" &&
  typeof (arg as Connectable).disconnectFromUpperBit === "function" &&
  typeof (arg as Connectable).disconnectFromLowerBit === "function"

export function ConnectableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Connectable> & TBase {
  class ConnectableMixinClass extends Base {
    connectWith(bits: number[]): void {
      if (this.isConnectedWithLowerBit(bits)) {
        this.connectWithLowerBit()
      } else {
        this.disconnectFromLowerBit()
      }
      if (this.isConnectedWithUpperBit(bits)) {
        this.connectWithUpperBit()
      } else {
        this.disconnectFromUpperBit()
      }
    }

    private isConnectedWithLowerBit(bits: number[]): boolean {
      return bits.some((each) => {
        return each < this.bit
      })
    }

    private isConnectedWithUpperBit(bits: number[]): boolean {
      return bits.some((each) => {
        return each > this.bit
      })
    }

    private connectWithLowerBit(): void {
      this.classList.add(classNameFor("connectable:lowerBit"))
    }

    private connectWithUpperBit(): void {
      this.classList.add(classNameFor("connectable:upperBit"))
    }

    disconnectFromLowerBit(): void {
      this.classList.remove(classNameFor("connectable:lowerBit"))
    }

    disconnectFromUpperBit(): void {
      this.classList.remove(classNameFor("connectable:upperBit"))
    }
  }

  return ConnectableMixinClass as Constructor<Connectable> & TBase
}
