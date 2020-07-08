import { Controller } from "stimulus"
import tippy from "tippy.js"

export default class extends Controller {
  static targets = ["qubitCircle"];

  connect() {
    Array.prototype.forEach.call(this.qubitCircleTargets, (el) => {
      this.addTooltip(el)
    })
  }

  // Private

  addTooltip(el) {
    tippy(el, {
      allowHTML: true,
      content: this.tooltipContent(el),
      theme: "qni",
    })
  }

  tooltipContent(el) {
    return el.getElementsByClassName("qubit-circle__tooltip")[0].innerHTML
  }
}
