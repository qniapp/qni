import '../../dist/qni.css'
import {assert} from '@esm-bundle/chai'
import {once} from './once'
import {sendMouse} from '@web/test-runner-commands'

export function testDraggableOperation(operationName) {
  describe('draggable', function () {
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

      move(operation, 1, 1)

      assert.isTrue(operation.dragging)
      assert.isFalse(operation.snapped)
      assert.deepEqual(operation.draggableService.state.value, {dragging: 'unsnapped'})
    })

    it('should reach "dragging (unsnapped)" given "dragging (snapped)" when "UNSNAP" event occurs', async function () {
      const container = document.createElement('div')
      container.innerHTML = `
  <circuit-editor>
    <quantum-circuit data-target="circuit-editor.circuit">
      <circuit-step>
        <circuit-dropzone id="dropzone">
          <${operationName}></${operationName}>
        </circuit-dropzone>
        <circuit-dropzone style="margin-top: 128px;">
        </circuit-dropzone>
      </cicuit-step>
    </quantum-circuit>
  </circuit-editor>`
      document.body.append(container)
      const operation = document.querySelector(operationName)
      const dropzone = document.getElementById('dropzone')
      operation.draggable = true
      operation.snapTargets = [dropzone.snapTarget]
      await sendMouse({type: 'move', position: [dropzone.snapTarget.x, dropzone.snapTarget.y]})
      await sendMouse({type: 'down'})

      await sendMouse({type: 'move', position: [1000, 1000]})

      assert.isFalse(operation.snapped)
      assert.deepEqual(operation.draggableService.state.value, {dragging: 'unsnapped'})

      await sendMouse({type: 'move', position: [dropzone.snapTarget.x, dropzone.snapTarget.y]})

      assert.isTrue(operation.snapped)
      assert.deepEqual(operation.draggableService.state.value, {dragging: 'snapped'})
    })

    it('should reach "grabbable" given "grabbed" when "RELEASE" event occurs (circuit dropzone)', function () {
      const container = document.createElement('div')
      container.innerHTML = `
  <circuit-dropzone>
    <${operationName}></${operationName}>
  </circuit-dropzone>`
      document.body.append(container)
      const operation = document.querySelector(operationName)
      operation.draggable = true
      mousedown(operation)

      mouseup(operation)

      assert.deepEqual(operation.draggableService.state.value, 'grabbable')
    })

    it('should reach "deleted" given "grabbed" when "RELEASE" event occurs (palette dropzone)', function () {
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

      move(operation)
      mouseup(operation)

      assert.deepEqual(operation.draggableService.state.value, 'grabbable')
    })

    it('should reach "deleted" given "dragging" when "END_DRAGGING" event occurs', function () {
      const container = document.createElement('div')
      container.innerHTML = `
  <circuit-dropzone>
    <${operationName}></${operationName}>
  </circuit-dropzone>`
      document.body.append(container)
      const operation = document.querySelector(operationName)
      const dropzone = document.querySelector('circuit-dropzone')
      operation.draggable = true
      operation.snapTargets = dropzone.snapTarget
      mousedown(operation)
      move(operation, 100, 100)

      mouseup(operation)

      assert.deepEqual(operation.draggableService.state.value, 'deleted')
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

      assert.isTrue(operation.grabbed)
    })

    it(`dispatches operation-release event on mouseup`, async function () {
      const container = document.createElement('div')
      container.innerHTML = `
  <palette-dropzone>
    <${operationName}></${operationName}>
  </palette-dropzone>`
      document.body.append(container)
      const operation = document.querySelector(operationName)
      mousedown(operation)

      const releaseEvent = once(operation, 'operation-release')
      mouseup(operation)
      await releaseEvent

      assert.isFalse(operation.grabbed)
    })
  })
}

function mousedown(operation) {
  operation.dispatchEvent(new PointerEvent('pointerdown', {bubbles: true}))
}

function mouseup(operation) {
  operation.dispatchEvent(new PointerEvent('pointerup', {bubbles: true}))
}

function move(operation, dx = 1, dy = 1) {
  operation.dispatchEvent(
    new PointerEvent('pointermove', {
      clientX: operation.getBoundingClientRect().left + dx,
      clientY: operation.getBoundingClientRect().top + dy,
      bubbles: true
    })
  )
}
