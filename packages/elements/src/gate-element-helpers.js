import {html, render} from '@github/jtml'
import chevronSelectorVerticalIcon from '../icon/chevron_selector_vertical.svg'

export function connectDraggableGate(element) {
  if (element.shadowRoot !== null) return
  element.attachShadow({mode: 'open'})
  element.update()
  element.initDraggable()
}

export function connectResizeableGate(element) {
  if (element.shadowRoot !== null) return
  element.attachShadow({mode: 'open'})
  element.update()
  element.initDraggable()
  element.initResizeable()
}

export function renderIconGate(element, icon) {
  render(
    html`<div part="body">${element.iconHtml(icon)}</div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function renderResizeableIconGate(element, icon, resizeHandleTarget) {
  render(
    html`<div part="layout">
        <div part="body">${element.iconHtml(icon)}</div>
        <div class="resize-handle" part="resize-handle" data-target="${resizeHandleTarget}">
          <div part="resize-handle-icon">${element.iconHtml(chevronSelectorVerticalIcon)}</div>
        </div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function toStaticGateJson(type) {
  return `"${type}"`
}

export function toIfableGateJson(type, condition) {
  if (condition !== '') {
    return `"${type}<${condition}"`
  } else {
    return toStaticGateJson(type)
  }
}

export function toAngleGateJson(type, angle) {
  if (angle === '') {
    return toStaticGateJson(type)
  } else {
    return `"${type}(${angle.replace('/', '_')})"`
  }
}

export function toSpannedGateJson(type, span) {
  return `"${type}${span}"`
}
