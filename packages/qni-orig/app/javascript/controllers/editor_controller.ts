import CircleNotationController from "./circle_notation_controller"
import SimulatorController from "./simulator_controller"
import { Breakpoint } from "lib/base"
import { Controller } from "stimulus"
import { Editor } from "lib/editor"

export default class EditorController extends Controller {
  private _editor: Editor | undefined
  private mouseIsDown: boolean | undefined
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

    this.editor.onDraggableMouseOver(event)
  }

  onDraggableMouseLeave(event: MouseEvent): void {
    this.editor.onDraggableMouseLeave(event)
  }

  onDraggableMouseDown(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    this.mouseIsDown = true
    setTimeout(this.onDraggableMouseHold.bind(this), 100, event)
  }

  private onDraggableMouseHold(event: MouseEvent): void {
    if (!this.mouseIsDown) return

    this.mouseIsHolded = true
    this.circleNotationController.incrementNqubit()
    this.editor.onDraggableMouseHold(event)
  }

  onDraggableMouseUp(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return
    if (!this.mouseIsHolded) this.editor.onDraggableMouseClick(event)

    this.mouseIsHolded = false
    this.mouseIsDown = false
    this.editor.onDraggableMouseUp(event)
    this.circleNotationController.nqubit = this.simulatorController.nqubit
  }

  private get editor(): Editor {
    if (!this._editor) throw new Error("editor not found")
    return this._editor
  }

  private get simulatorController(): SimulatorController {
    const controller = this.application.getControllerForElementAndIdentifier(
      this.simulatorTarget,
      "simulator",
    )

    if (!controller) throw new Error("simulator controller not found")
    return controller as SimulatorController
  }

  private get circleNotationController(): CircleNotationController {
    const controller = this.application.getControllerForElementAndIdentifier(
      this.circleNotationTarget,
      "circle-notation",
    )

    if (!controller) throw new Error("circle notation controller not found")
    return controller as CircleNotationController
  }
}
