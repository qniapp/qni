import CircleNotationController from "./circle_notation_controller"
import SimulatorController from "./simulator_controller"
import { Breakpoint, Util } from "lib/base"
import { Controller } from "stimulus"
import { DraggableItem, Editor } from "lib/editor"

export default class EditorController extends Controller {
  static targets = ["simulator", "circleNotation"]

  declare editor: Editor
  declare readonly simulatorTarget: HTMLElement
  declare readonly circleNotationTarget: HTMLElement

  connect(): void {
    this.editor = new Editor(this.element)

    if (Breakpoint.isMobile()) return
    for (const each of Array.from(
      document.getElementsByClassName("draggable"),
    )) {
      const draggable = DraggableItem.create(each)
      draggable.enableDnd()
    }
  }

  clear(): void {
    this.editor.clear()
  }

  updateUrl(): void {
    this.editor.updateUrl()
  }

  runCircuit(): void {
    this.circleNotation.nqubit = this.simulator.nqubit
    this.simulator.run()
  }

  grabDraggable(event: CustomEvent): void {
    const mouseEvent = event.detail as MouseEvent

    if (this.simulator.nqubit + 1 <= this.maxNqubit) {
      this.circleNotation.incrementNqubit()
      this.editor.addNewQubit()
    }

    const draggable = DraggableItem.create(mouseEvent.target)
    this.editor.grabDraggable()

    draggable.grab(mouseEvent)

    return
  }

  grabDraggableOld(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    if (this.isRightClickEvent(event)) {
      Util.notNull(event.target)
      this.editor.showGatePopup(event.target as HTMLElement)
      return
    }

    if (this.simulator.nqubit + 1 <= this.maxNqubit) {
      this.circleNotation.incrementNqubit()
      this.editor.addNewQubit()
    }

    const draggable = DraggableItem.create(event.target)
    this.editor.grabDraggableOld(draggable, event)

    return
  }

  dropDraggable(event: CustomEvent): void {
    if (Breakpoint.isMobile()) return

    const mouseEvent = event.detail as MouseEvent
    if (this.isRightClickEvent(mouseEvent)) return

    this.editor.releaseDraggable(mouseEvent)
    this.circleNotation.nqubit = this.simulator.nqubit
  }

  // FIXME: dropDraggable に移行してこのメソッドを消す
  releaseDraggable(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return
    if (this.isRightClickEvent(event)) return

    this.editor.releaseDraggable(event)
    this.circleNotation.nqubit = this.simulator.nqubit
  }

  ignoreDraggableClick(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    event.stopPropagation()
  }

  private isRightClickEvent(event: MouseEvent): boolean {
    return event.button === 2 || event.ctrlKey
  }

  private get simulator(): SimulatorController {
    const controller = this.application.getControllerForElementAndIdentifier(
      this.simulatorTarget,
      "simulator",
    )
    Util.notNull(controller)
    return controller as SimulatorController
  }

  private get circleNotation(): CircleNotationController {
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
