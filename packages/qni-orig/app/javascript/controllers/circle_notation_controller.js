import { Controller } from "stimulus"
import tippy from "tippy.js"

export default class extends Controller {
  static targets = ["qubitCircle"];

  connect() {
    Array.prototype.forEach.call(this.qubitCircleTargets, (el) => {
      const ket = el.getAttribute("data-ket")
      const magnitude = el.getAttribute("data-magnitude")
      const magnitudeString = el.getAttribute("data-magnitude-string")
      const phaseString = el.getAttribute("data-phase-string")
      var content = null

      if (parseFloat(magnitude) > 0) {
        content = `<div class="text-center font-bold">|${ket}></div><div>M=${magnitudeString}</div><div>φ=${phaseString}</div>`
      } else {
        content = `<div class="text-center font-bold">|${ket}></div><div>M=${magnitudeString}</div>`
      }

      tippy(el, {
        allowHTML: true,
        content: content,
        theme: "qni",
      })
    })
  }
}
