import '../dist/index'
import 'fastdom'
import {assert} from '@esm-bundle/chai'
import {setViewport} from '@web/test-runner-commands'
import {testElementCreation} from './common/test-element-creation'

describe('circle-notation element', function () {
  let circleNotation

  testElementCreation(window.CircleNotationElement, 'circle-notation')

  describe('data-qubit-count', function () {
    beforeEach(function () {
      circleNotation = document.createElement('circle-notation')
      circleNotation.style.setProperty('display', 'flex')
      circleNotation.style.setProperty('width', 'auto')
      document.body.append(circleNotation)
      flushFastDom()
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('data-qubit-count="1" by default', function () {
      assert.equal(circleNotation.qubitCount, 1)
    })

    it('data-qubit-count="1" (mobile)', async function () {
      circleNotation.style.setProperty('height', '64px')
      await setViewportMobile()

      circleNotation.qubitCount = 1
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2)
      assert.equal(circleNotation.rows, 1)
      assert.equal(circleNotation.cols, 2)
    })

    it('data-qubit-count="1"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 1
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2)
      assert.equal(circleNotation.rows, 1)
      assert.equal(circleNotation.cols, 2)
    })

    it('data-qubit-count="2" (mobile)', async function () {
      circleNotation.style.setProperty('height', '64px')
      await setViewportMobile()

      circleNotation.qubitCount = 2
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 2)
      assert.equal(circleNotation.rows, 1)
      assert.equal(circleNotation.cols, 4)
    })

    it('data-qubit-count="2"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 2
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 2)
      assert.equal(circleNotation.rows, 1)
      assert.equal(circleNotation.cols, 4)
    })

    it('data-qubit-count="3" (mobile)', async function () {
      circleNotation.style.setProperty('height', '101px') // 48px * 2 + 5
      await setViewportMobile()

      circleNotation.qubitCount = 3
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 3)
      assert.equal(circleNotation.rows, 2)
      assert.equal(circleNotation.cols, 4)
    })

    it('data-qubit-count="3"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 3
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 3)
      assert.equal(circleNotation.rows, 1)
      assert.equal(circleNotation.cols, 8)
    })

    it('data-qubit-count="4" (mobile)', async function () {
      circleNotation.style.setProperty('height', '67px') // 32px * 2 + 5
      await setViewportMobile()

      circleNotation.qubitCount = 4
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 4)
      assert.equal(circleNotation.rows, 2)
      assert.equal(circleNotation.cols, 8)
    })

    it('data-qubit-count="4"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 4
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 4)
      assert.equal(circleNotation.rows, 2)
      assert.equal(circleNotation.cols, 8)
    })

    it('data-qubit-count="5" (mobile)', async function () {
      circleNotation.style.setProperty('height', '99px') // 24px * 4 + 1 * 3
      await setViewportMobile()

      circleNotation.qubitCount = 5
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 5)
      assert.equal(circleNotation.rows, 4)
      assert.equal(circleNotation.cols, 8)
    })

    it('data-qubit-count="5"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 5
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 5)
      assert.equal(circleNotation.rows, 2)
      assert.equal(circleNotation.cols, 16)
    })

    it('data-qubit-count="6" (mobile)', async function () {
      circleNotation.style.setProperty('height', '67px') // 16px * 4 + 1 * 3
      await setViewportMobile()

      circleNotation.qubitCount = 6
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 6)
      assert.equal(circleNotation.rows, 4)
      assert.equal(circleNotation.cols, 16)
    })

    it('data-qubit-count="6"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 6
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 6)
      assert.equal(circleNotation.rows, 4)
      assert.equal(circleNotation.cols, 16)
    })

    it('data-qubit-count="7" (mobile)', async function () {
      circleNotation.style.setProperty('height', '84px') // 16px * 5 + 1 * 4
      await setViewportMobile()

      circleNotation.qubitCount = 7
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 8)
      assert.equal(circleNotation.cols, 16)
    })

    it('data-qubit-count="7"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 7
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 2 ** 7)
      assert.equal(circleNotation.rows, 4)
      assert.equal(circleNotation.cols, 32)
    })

    it('data-qubit-count="8" (mobile)', async function () {
      circleNotation.style.setProperty('height', '84px')
      await setViewportMobile()

      circleNotation.qubitCount = 8
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 16)
      assert.equal(circleNotation.cols, 16)
    })

    it('data-qubit-count="8"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 8
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 8)
      assert.equal(circleNotation.cols, 32)
    })

    it('data-qubit-count="9" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 9
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 16)
      assert.equal(circleNotation.cols, 32)
    })

    it('data-qubit-count="9"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 9
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 16)
      assert.equal(circleNotation.cols, 32)
    })

    it('data-qubit-count="10" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 10
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 32)
      assert.equal(circleNotation.cols, 32)
    })

    it('data-qubit-count="10"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 10
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 32)
      assert.equal(circleNotation.cols, 32)
    })

    it('data-qubit-count="11" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 11
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 32)
      assert.equal(circleNotation.cols, 64)
    })

    it('data-qubit-count="11"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 11
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 32)
      assert.equal(circleNotation.cols, 64)
    })

    it('data-qubit-count="12" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 12
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 64)
      assert.equal(circleNotation.cols, 64)
    })

    it('data-qubit-count="12"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 12
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 64)
      assert.equal(circleNotation.cols, 64)
    })

    it('data-qubit-count="13" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 13
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 64)
      assert.equal(circleNotation.cols, 128)
    })

    it('data-qubit-count="13"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 13
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 64)
      assert.equal(circleNotation.cols, 128)
    })

    it('data-qubit-count="14" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 14
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 128)
      assert.equal(circleNotation.cols, 128)
    })

    it('data-qubit-count="14"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 14
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 128)
      assert.equal(circleNotation.cols, 128)
    })

    it('data-qubit-count="15" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 15
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 128)
      assert.equal(circleNotation.cols, 256)
    })

    it('data-qubit-count="15"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 15
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 128)
      assert.equal(circleNotation.cols, 256)
    })

    it('data-qubit-count="16" (mobile)', async function () {
      circleNotation.style.setProperty('width', `${16 * 16}px`)
      circleNotation.style.setProperty('height', `${16 * 5 + 1 * 4}px`)
      await setViewportMobile()

      circleNotation.qubitCount = 16
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 80)
      assert.equal(circleNotation.rows, 256)
      assert.equal(circleNotation.cols, 256)
    })

    it('data-qubit-count="16"', async function () {
      await setViewportDesktop()

      circleNotation.qubitCount = 16
      flushFastDom()

      assert.equal(circleNotation.qubitCircles.length, 256)
      assert.equal(circleNotation.rows, 256)
      assert.equal(circleNotation.cols, 256)
    })
  })

  describe('data-colored-phase', function () {
    beforeEach(function () {
      circleNotation = document.createElement('circle-notation')
      circleNotation.style.setProperty('display', 'flex')
      circleNotation.style.setProperty('width', 'auto')
      document.body.append(circleNotation)
      flushFastDom()
    })

    afterEach(function () {
      document.body.textContent = ''
    })

    it('coloredPhase=false by default', function () {
      assert.isFalse(circleNotation.coloredPhase)
    })

    it('starts colored phase mode', function () {
      circleNotation.startColoredPhaseMode()

      assert.isTrue(circleNotation.coloredPhase)
    })

    it('starts basic circle notation mode', function () {
      circleNotation.startColoredPhaseMode()
      circleNotation.startBasicCircleNotationMode()

      assert.isFalse(circleNotation.coloredPhase)
    })
  })

  async function setViewportMobile() {
    await setViewport({width: 360, height: 640})
    circleNotation.detectViewportOrientation()
    flushFastDom()
  }

  async function setViewportDesktop() {
    await setViewport({width: 1200, height: 640})
    circleNotation.detectViewportOrientation()
    flushFastDom()
  }

  function flushFastDom() {
    window.fastdom.runTasks(window.fastdom.reads)
    window.fastdom.runTasks(window.fastdom.writes)
  }
})
