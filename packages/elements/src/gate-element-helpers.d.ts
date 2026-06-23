import type {Draggable, Iconable, Resizeable} from './mixin'

type DraggableGateElement = HTMLElement &
  Draggable & {
    update(): void
  }

type ResizeableGateElement = DraggableGateElement & Resizeable

type IconGateElement = HTMLElement & Iconable

export function cD(element: DraggableGateElement): void
export function cR(element: ResizeableGateElement): void
export function rI(element: IconGateElement, icon: string): void
export function rR(element: IconGateElement, icon: string, resizeHandleTarget: string): void
export function rM(element: IconGateElement, icon: string): void
export function rW(element: IconGateElement, icon: string): void
export function tS(type: string): string
export function tI(type: string, condition: string): string
export function tA(type: string, angle: string): string
export function tF(type: string, flag: string): string
export function tP(type: string, span: number): string
