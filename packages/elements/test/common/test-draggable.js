import {assert} from '@esm-bundle/chai'
import {once} from './once'

export function testDraggableOperation(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it('should reach "grabbable" when it is on a palette-dropzone', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    assert.equal(operation.draggableService.state.value, 'grabbable')
    assert.isTrue(operation.draggable)
  })

  it('should not a draggable when it is on a circuit-dropzone', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <circuit-dropzone>
    <${operationName}></${operationName}>
  </circuit-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    assert.equal(operation.draggableService, undefined)
    assert.isFalse(operation.draggable)
  })

  it('should reach "grabbable" given "idle" when the "SET_INTERACT" event occurs', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <circuit-dropzone>
    <${operationName}></${operationName}>
  </circuit-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    operation.draggable = true

    assert.equal(operation.draggableService.state.value, 'grabbable')
  })

  it('should reach "idle" given "grabbable" when the "UNSET_INTERACT" event occurs', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    operation.draggable = false

    assert.equal(operation.draggableService.state.value, 'idle')
  })

  it('should reach "grabbed" given "grabbable" when the "GRAB" event occurs', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    mousedown(operation)

    assert.isTrue(operation.grabbed)
    assert.equal(operation.draggableService.state.value, 'grabbed')
  })

  it('should reach "dragging (unsnapped)" given "grabbed" when "START_DRAGGING" event occurs', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    mousedown(operation)

    dragstart(operation)

    assert.isTrue(operation.dragging)
    assert.isFalse(operation.snapped)
    assert.deepEqual(operation.draggableService.state.value, {dragging: 'unsnapped'})
  })

  it('should reach "dragging (snapped)" given "grabbed" when the draggable is on circuit-dropzone', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <circuit-dropzone>
    <${operationName}></${operationName}>
  </circuit-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    operation.draggable = true

    mousedown(operation)

    assert.isTrue(operation.dragging)
    assert.isTrue(operation.snapped)
    assert.deepEqual(operation.draggableService.state.value, {dragging: 'snapped'})
  })

  it('should reach "deleted" given "grabbed" when "UNGRAB" event occurs (palette dropzone)', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    mousedown(operation)

    mouseup(operation)

    assert.deepEqual(operation.draggableService.state.value, 'deleted')
  })

  it('should reach "grabbable" given "dragging" when "END_DRAGGING" event occurs (circuit dropzone)', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <circuit-dropzone>
    <${operationName}></${operationName}>
  </circuit-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    operation.draggable = true
    mousedown(operation)

    dragstart(operation)
    mouseup(operation)

    assert.deepEqual(operation.draggableService.state.value, 'grabbable')
  })

  // TODO: operation-grab イベントをどこかで使っている？ 使っていないようならディスパッチしない
  it(`dispatches operation-grab event on mousedown`, async function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    const grabEvent = once(operation, 'operation-grab')
    mousedown(operation)
    await grabEvent

    assert.isTrue(operation.grabbed)
  })

  // TODO: operation-ungrab イベントをどこかで使っている？ 使っていないようならディスパッチしない
  it(`dispatches operation-ungrab event on mouseup`, async function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    mousedown(operation)

    const ungrabEvent = once(operation, 'operation-ungrab')
    mouseup(operation)
    await ungrabEvent

    assert.isFalse(operation.grabbed)
  })
}

function mousedown(operation) {
  operation.dispatchEvent(new PointerEvent('pointerdown', {bubbles: true}))
}

function mouseup(operation) {
  operation.dispatchEvent(new PointerEvent('pointerup', {bubbles: true}))
}

function dragstart(operation, dx = 1, dy = 1) {
  operation.dispatchEvent(
    new PointerEvent('pointermove', {
      clientX: operation.getBoundingClientRect().left + dx,
      clientY: operation.getBoundingClientRect().top + dy,
      bubbles: true
    })
  )
}
