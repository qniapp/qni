import CircleNotationController from "./circle_notation_controller"
import GatePopupController from "./gate_popup_controller"
import SimulatorController from "./simulator_controller"
import { Breakpoint, Util } from "lib/base"
import { Controller } from "stimulus"
import { Editor } from "lib/editor"

export default class EditorController extends Controller {
  private _editor: Editor | undefined
  // private mouseIsDown: boolean | undefined
  private mouseIsHolded: boolean | undefined

  static targets = ["simulator", "circleNotation"]
  declare readonly simulatorTarget: HTMLElement
  declare readonly circleNotationTarget: HTMLElement

  connect(): void {
    this._editor = new Editor(this.element)
  }

  onCircuitUpdate(): void {
    this.circleNotationController.nqubit = this.simulatorController.nqubit
    this.simulatorController.run()
  }

  onDraggableMouseOver(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    this.editor.onDraggableMouseOver(event, this.gatePopupController)
  }

  onDraggableMouseLeave(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    this.editor.onDraggableMouseLeave(event, this.gatePopupController)
  }

  onDraggableMouseDown(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    this.gatePopupController.hide()

    if (this.simulatorController.nqubit + 1 <= this.maxNqubit) {
      this.circleNotationController.incrementNqubit()
      this.editor.onDraggableMouseHold(event)
    } else {
      this.editor.onDraggableMouseHold(event, false)
    }
  }

  onDraggableMouseUp(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    this.editor.onDraggableMouseUp(event)
    this.circleNotationController.nqubit = this.simulatorController.nqubit
  }

  private get editor(): Editor {
    Util.notNull(this._editor)
    return this._editor
  }

  private get simulatorController(): SimulatorController {
    const controller = this.application.getControllerForElementAndIdentifier(
      this.simulatorTarget,
      "simulator",
    )
    Util.notNull(controller)
    return controller as SimulatorController
  }

  private get gatePopupController(): GatePopupController {
    const controller = this.application.getControllerForElementAndIdentifier(
      this.element,
      "gate-popup",
    )
    Util.notNull(controller)
    return controller as GatePopupController
  }

  private get circleNotationController(): CircleNotationController {
    const controller = this.application.getControllerForElementAndIdentifier(
      this.circleNotationTarget,
      "circle-notation",
    )
    Util.notNull(controller)
    return controller as CircleNotationController
  }

  get maxNqubit(): number {
    const maxNqubit = this.data.get("max-nqubit")
    Util.notNull(maxNqubit)
    return parseInt(maxNqubit)
  }
}
