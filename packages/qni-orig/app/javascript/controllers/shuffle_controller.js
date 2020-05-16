import { Controller } from "stimulus"
import Shuffle from "shufflejs"

export default class extends Controller {
  connect() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: ".shuffle-item",
    })
  }

  circuitLoaded(circuit) {
    this.shuffle.update()
    circuit.classList.remove("invisible")
  }
}
