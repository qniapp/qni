import { Controller } from "stimulus"
import hljs from "highlight.js"
import ruby from "highlight.js/lib/languages/ruby"

export default class extends Controller {
  static targets = [
    "body",
    "circuit",
    "circuitPill",
    "code",
    "codePill",
    "preCode",
  ];

  connect() {
    hljs.registerLanguage("ruby", ruby)
  }

  showCircuit() {
    this.codePillTarget.classList.remove(this.activePillClass)
    this.circuitPillTarget.classList.add(this.activePillClass)
    this.codeTarget.classList.add(this.hiddenClass)
    this.circuitTarget.classList.remove(this.hiddenClass)
  }

  showCode() {
    hljs.highlightBlock(this.preCodeTarget)
    this.circuitPillTarget.classList.remove(this.activePillClass)
    this.codePillTarget.classList.add(this.activePillClass)
    this.circuitTarget.classList.add(this.hiddenClass)
    this.codeTarget.classList.remove(this.hiddenClass)
  }

  get activePillClass() {
    return this.data.get("active-pill-class")
  }

  get hiddenClass() {
    return this.data.get("hidden-class")
  }
}
