import {HGateElement, isControllable} from '../dist/index'
import {expect, fixture, html} from '@open-wc/testing'

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
})

function once(element: HTMLElement, eventName: string) {
  return new Promise(resolve => {
    element.addEventListener(eventName, resolve, {once: true})
  })
}
