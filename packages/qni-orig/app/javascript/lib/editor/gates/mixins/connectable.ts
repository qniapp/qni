import { classNameFor } from "lib/base"

export abstract class Connectable {
  public element!: HTMLElement

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

  protected isConnectedWithLowerBit(bits: number[]): boolean {
    return bits.some((each) => {
      return each < this.bit
    })
  }

  protected isConnectedWithUpperBit(bits: number[]): boolean {
    return bits.some((each) => {
      return each > this.bit
    })
  }

  protected connectWithLowerBit(): void {
    this.element.classList.add(classNameFor("gate:connection:lowerBit"))
  }

  protected connectWithUpperBit(): void {
    this.element.classList.add(classNameFor("gate:connection:upperBit"))
  }

  disconnectFromLowerBit(): void {
    this.element.classList.remove(classNameFor("gate:connection:lowerBit"))
  }

  disconnectFromUpperBit(): void {
    this.element.classList.remove(classNameFor("gate:connection:upperBit"))
  }

  abstract get bit(): number
}
