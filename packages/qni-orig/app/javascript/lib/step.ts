import { Matrix } from "mathjs"
import { conj } from "mathjs"
import { multiply } from "mathjs"
import { transpose } from "mathjs"

interface Array<T> {
  fill(value: T): Array<T>
}

export abstract class Step {
  protected multiply(...matrices: Matrix[]): Matrix {
    return matrices.reduce((pre, value) => {
      return multiply(pre, value)
    })
  }

  protected adjoint(matrix: Matrix): Matrix {
    return conj(transpose(matrix))
  }

  protected validateControls(controls: number[], nqubit: number): void {
    const negativeControls = controls.filter((c) => {
      return c < 0
    })
    if (negativeControls.length > 0) {
      throw new Error(`Invalid controls: ${negativeControls.toString()}`)
    }

    const invalidControls = controls.filter((c) => {
      return c >= nqubit
    })
    if (invalidControls.length > 0) {
      throw new Error(`Invalid controls: ${invalidControls.toString()}`)
    }
  }

  protected validateTargets(targets: number[], nqubit: number): void {
    if (targets) {
      const negativeTargets = targets.filter((t) => {
        return t < 0
      })
      if (negativeTargets.length > 0) {
        throw new Error(`Invalid targets: ${negativeTargets.toString()}`)
      }

      const invalidTargets = targets.filter((t) => {
        return t >= nqubit
      })
      if (invalidTargets.length > 0) {
        throw new Error(`Invalid targets: ${invalidTargets.toString()}`)
      }
    }
  }
}
