import {HGateElement, isControllable} from '../dist/index'
import {expect, fixture, html} from '@open-wc/testing'
import {PaletteDropzoneElement} from '../src'

describe('HGateElement', () => {
  let instance: HGateElement

  beforeEach(async () => {
    instance = await fixture(html`<h-gate></h-gate>`)
  })

  it('is a Catalyst controller', () => {
    expect(instance).to.have.attribute('data-catalyst')
  })

  it('matches snapshot', () => {
    expect(instance).dom.to.equalSnapshot()
  })

  it('passes Axe tests', () => expect(instance).to.be.accessible())

  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('h-gate')
      expect(el.nodeName.toLocaleLowerCase()).to.equal('h-gate')
      expect(el).to.be.instanceOf(HGateElement)
    })

    it('creates from constructor', function () {
      const el = new HGateElement()
      expect(el.nodeName.toLocaleLowerCase()).to.equal('h-gate')
    })
  })

  describe('activateable', function () {
    it('is not active by default', function () {
      expect(instance.isActive).to.be.false
    })

    it('can be activated', function () {
      instance.activate()

      expect(instance.isActive).to.be.true
    })

    it('can be deactivated', function () {
      instance.deactivate()

      expect(instance.isActive).to.be.false
    })

    it('dispatches activateable:active event', async function () {
      const activeEvent = once(instance, 'activateable:active')
      instance.activate()

      await activeEvent
    })
  })

  describe('controllable', function () {
    it('is controllable', function () {
      expect(isControllable(instance)).to.be.true
    })

    it('is not controlled by default', function () {
      expect(instance.isControlled).to.be.false
      expect(instance.controlBits).to.deep.equal([])
    })

    it('can set control bits', function () {
      instance.controlBits = [1, 2, 3]

      expect(instance.isControlled).to.be.true
      expect(instance.controlBits).to.deep.equal([1, 2, 3])
    })
  })

  describe('disableable', function () {
    it('is not disabled by default', function () {
      expect(instance.isDisabled).to.be.false
    })

    it('can be disabled', function () {
      instance.enable()

      instance.disable()

      expect(instance.isDisabled).to.be.true
    })

    it('can be enabled', function () {
      instance.disable()

      instance.enable()

      expect(instance.isEnabled).to.be.true
    })
  })

  describe('draggable', function () {
    it('should be grabbable when it is on a palette-dropzone', async function () {
      const paletteDropzone: PaletteDropzoneElement = await fixture(html`<palette-dropzone>
        <h-gate></h-gate>
      </palette-dropzone>`)
      const operation = paletteDropzone.operation

      expect(operation.isGrabbable).to.be.true
      expect(operation.isDraggable).to.be.true
    })

    //   it('should reach "grabbable" given "idle" when the "SET_INTERACT" event occurs', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <circuit-dropzone>
    //   <h-gate></h-gate>
    // </circuit-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')

    //     operation.draggable = true

    //     assert.equal(operation.draggableService.state.value, 'grabbable')
    //   })

    //   it('should reach "idle" given "grabbable" when the "UNSET_INTERACT" event occurs', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <palette-dropzone>
    //   <h-gate></h-gate>
    // </palette-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')

    //     operation.draggable = false

    //     assert.equal(operation.draggableService.state.value, 'idle')
    //   })

    //   it('should reach "grabbed" given "grabbable" when the "GRAB" event occurs', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <palette-dropzone>
    //   <h-gate></h-gate>
    // </palette-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')

    //     mousedown(operation)

    //     assert.isTrue(operation.grabbed)
    //     assert.equal(operation.draggableService.state.value, 'grabbed')
    //   })

    //   it('should reach "dragging (unsnapped)" given "grabbed" when "START_DRAGGING" event occurs', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <palette-dropzone>
    //   <h-gate></h-gate>
    // </palette-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     mousedown(operation)

    //     move(operation, 1, 1)

    //     assert.isTrue(operation.dragging)
    //     assert.isFalse(operation.snapped)
    //     assert.deepEqual(operation.draggableService.state.value, {dragging: 'unsnapped'})
    //   })

    //   it('should reach "dragging (unsnapped)" given "dragging (snapped)" when "UNSNAP" event occurs', async function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <circuit-editor>
    //   <quantum-circuit data-target="circuit-editor.circuit">
    //     <circuit-step>
    //       <circuit-dropzone id="dropzone">
    //         <h-gate></h-gate>
    //       </circuit-dropzone>
    //       <circuit-dropzone style="margin-top: 128px;">
    //       </circuit-dropzone>
    //     </cicuit-step>
    //   </quantum-circuit>
    // </circuit-editor>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     const dropzone = document.getElementById('dropzone')
    //     operation.draggable = true
    //     operation.snapTargets = [dropzone.snapTarget]
    //     await sendMouse({type: 'move', position: [dropzone.snapTarget.x, dropzone.snapTarget.y]})
    //     await sendMouse({type: 'down'})

    //     await sendMouse({type: 'move', position: [1000, 1000]})

    //     assert.isFalse(operation.snapped)
    //     assert.deepEqual(operation.draggableService.state.value, {dragging: 'unsnapped'})

    //     await sendMouse({type: 'move', position: [dropzone.snapTarget.x, dropzone.snapTarget.y]})

    //     assert.isTrue(operation.snapped)
    //     assert.deepEqual(operation.draggableService.state.value, {dragging: 'snapped'})
    //   })

    //   it('should reach "grabbable" given "grabbed" when "RELEASE" event occurs (circuit dropzone)', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <circuit-dropzone>
    //   <h-gate></h-gate>
    // </circuit-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     operation.draggable = true
    //     mousedown(operation)

    //     mouseup(operation)

    //     assert.deepEqual(operation.draggableService.state.value, 'grabbable')
    //   })

    //   it('should reach "deleted" given "grabbed" when "RELEASE" event occurs (palette dropzone)', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <palette-dropzone>
    //   <h-gate></h-gate>
    // </palette-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     mousedown(operation)

    //     mouseup(operation)

    //     assert.deepEqual(operation.draggableService.state.value, 'deleted')
    //   })

    //   it('should reach "grabbable" given "dragging" when "END_DRAGGING" event occurs (circuit dropzone)', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <circuit-dropzone>
    //   <h-gate></h-gate>
    // </circuit-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     operation.draggable = true
    //     mousedown(operation)

    //     move(operation)
    //     mouseup(operation)

    //     assert.deepEqual(operation.draggableService.state.value, 'grabbable')
    //   })

    //   it('should reach "deleted" given "dragging" when "END_DRAGGING" event occurs', function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <circuit-dropzone>
    //   <h-gate></h-gate>
    // </circuit-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     const dropzone = document.querySelector('circuit-dropzone')
    //     operation.draggable = true
    //     operation.snapTargets = dropzone.snapTarget
    //     mousedown(operation)
    //     move(operation, 100, 100)

    //     mouseup(operation)

    //     assert.deepEqual(operation.draggableService.state.value, 'deleted')
    //   })

    //   it(`dispatches draggable:grab event on mousedown`, async function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <palette-dropzone>
    //   <h-gate></h-gate>
    // </palette-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')

    //     const grabEvent = once(operation, 'draggable:grab')
    //     mousedown(operation)
    //     await grabEvent

    //     assert.isTrue(operation.grabbed)
    //   })

    //   it(`dispatches draggable:release event on mouseup`, async function () {
    //     const container = document.createElement('div')
    //     container.innerHTML = `
    // <palette-dropzone>
    //   <h-gate></h-gate>
    // </palette-dropzone>`
    //     document.body.append(container)
    //     const operation = document.querySelector('h-gate')
    //     mousedown(operation)

    //     const releaseEvent = once(operation, 'draggable:release')
    //     mouseup(operation)
    //     await releaseEvent

    //     assert.isFalse(operation.grabbed)
    //   })
  })
})

function once(element: HTMLElement, eventName: string) {
  return new Promise(resolve => {
    element.addEventListener(eventName, resolve, {once: true})
  })
}
