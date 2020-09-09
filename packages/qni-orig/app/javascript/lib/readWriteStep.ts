import { Gate } from "lib/gate"
import { Matrix } from "mathjs"
import { Step } from "lib/step"
import { subset, index } from "mathjs"

export class ReadWriteStep extends Step {
  protected prob0(state: Matrix, matrices: Matrix[]): number {
    return (subset(
      this.multiply(this.adjoint(state), Gate.tensorProduct(matrices), state),
      index(0, 0),
    ) as unknown) as number
  }
}
