import type {Draggable, Iconable, Resizeable} from './mixin'

type DraggableGateElement = HTMLElement &
  Draggable & {
    update(): void
  }

type ResizeableGateElement = DraggableGateElement & Resizeable

type IconGateElement = HTMLElement & Iconable

export function connectDraggableGate(element: DraggableGateElement): void
export function connectResizeableGate(element: ResizeableGateElement): void
export function renderIconGate(element: IconGateElement, icon: string): void
export function renderResizeableIconGate(element: IconGateElement, icon: string, resizeHandleTarget: string): void
export function toStaticGateJson(type: string): string
export function toIfableGateJson(type: string, condition: string): string
export function toAngleGateJson(type: string, angle: string): string
export function toSpannedGateJson(type: string, span: number): string
