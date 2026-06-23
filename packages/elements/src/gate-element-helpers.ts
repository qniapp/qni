import {html, render} from '@github/jtml'
import type {Draggable, Iconable, Resizeable} from './mixin'
import chevronSelectorVerticalIcon from '../icon/chevron_selector_vertical.svg'

type DraggableGateElement = HTMLElement &
  Draggable & {
    update(): void
  }

type ResizeableGateElement = DraggableGateElement & Resizeable

type IconGateElement = HTMLElement & Iconable

export function connectDraggableGate(element: DraggableGateElement): void {
  if (element.shadowRoot !== null) return
  element.attachShadow({mode: 'open'})
  element.update()
  element.initDraggable()
}

export function connectResizeableGate(element: ResizeableGateElement): void {
  if (element.shadowRoot !== null) return
  element.attachShadow({mode: 'open'})
  element.update()
  element.initDraggable()
  element.initResizeable()
}

export function renderIconGate(element: IconGateElement, icon: string): void {
  render(
    html`<div part="body">${element.iconHtml(icon)}</div>
      <div part="outline"></div>`,
    element.shadowRoot!,
  )
}

export function renderResizeableIconGate(element: IconGateElement, icon: string, resizeHandleTarget: string): void {
  render(
    html`<div part="layout">
        <div part="body">${element.iconHtml(icon)}</div>
        <div class="resize-handle" part="resize-handle" data-target="${resizeHandleTarget}">
          <div part="resize-handle-icon">${element.iconHtml(chevronSelectorVerticalIcon)}</div>
        </div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot!,
  )
}

export function toStaticGateJson(type: string): string {
  return `"${type}"`
}

export function toIfableGateJson(type: string, condition: string): string {
  if (condition !== '') {
    return `"${type}<${condition}"`
  } else {
    return toStaticGateJson(type)
  }
}

export function toAngleGateJson(type: string, angle: string): string {
  if (angle === '') {
    return toStaticGateJson(type)
  } else {
    return `"${type}(${angle.replace('/', '_')})"`
  }
}

export function toSpannedGateJson(type: string, span: number): string {
  return `"${type}${span}"`
}
