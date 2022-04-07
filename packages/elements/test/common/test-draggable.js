import {assert} from '@esm-bundle/chai'
import {once} from './once'

export function testDraggableOperation(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it('should reach "grabbable" given "idle" when the "SET_INTERACT" event occurs', function () {
    const container = document.createElement('div')
    container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    operation.draggable = true

    assert.equal(operation.draggableService.state.value, 'grabbable')
  })

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

    assert.isTrue(operation.hasAttribute('data-grabbed'))
  })

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

    assert.isFalse(operation.hasAttribute('data-grabbed'))
  })
}

function mousedown(operation) {
  operation.dispatchEvent(new PointerEvent('pointerdown', {bubbles: true}))
}

function mouseup(operation) {
  operation.dispatchEvent(new PointerEvent('pointerup', {bubbles: true}))
}
