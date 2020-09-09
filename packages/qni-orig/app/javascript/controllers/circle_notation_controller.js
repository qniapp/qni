import { Controller } from "stimulus"
import tippy from "tippy.js"

export default class extends Controller {
  static targets = ["qubitCircle"]

  connect() {
    this.tippies = {}
  }

  updateTooltips() {
    Array.prototype.forEach.call(this.qubitCircleTargets, (el, i) => {
      this.addTooltip(el, i)
    })
  }

  // Private

  addTooltip(el, i) {
    if (!this.tippies[i]) {
      this.tippies[i] = tippy(el)
    }

    this.tippies[i].setProps({
      allowHTML: true,
      content: this.tooltipContent(el),
      theme: "qni",
    })
  }

  tooltipContent(el) {
    const magnitude = parseFloat(el.getAttribute("data-magnitude"))
    const phase = el.getAttribute("data-phase")
    var html =
      el.getElementsByClassName("qubit-circle__tooltip")[0].innerHTML +
      `<div>M=${magnitude}`
    if (magnitude > 0) {
      html += `<div>φ=${phase}</div>`
    }
    return html
  }
}
