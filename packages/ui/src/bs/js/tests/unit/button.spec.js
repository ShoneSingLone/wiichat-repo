import Button from '../../src/button'

/** Test helpers */
import {
  getFixture,
  clearFixture,
  jQueryMock
} from '../helpers/fixture'

describe('Button', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(Button.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('data-api', () => {
    it('should toggle active class on click', () => {
      fixtureEl.innerHTML = [
        '<xBtn class="btn" data-bs-toggle="xBtn">btn</xBtn>',
        '<xBtn class="btn testParent" data-bs-toggle="xBtn"><div class="test"></div></xBtn>'
      ].join('')

      const btn = fixtureEl.querySelector('.btn')
      const divTest = fixtureEl.querySelector('.test')
      const btnTestParent = fixtureEl.querySelector('.testParent')

      expect(btn.classList.contains('active')).toEqual(false)

      btn.click()

      expect(btn.classList.contains('active')).toEqual(true)

      btn.click()

      expect(btn.classList.contains('active')).toEqual(false)

      divTest.click()

      expect(btnTestParent.classList.contains('active')).toEqual(true)
    })
  })

  describe('toggle', () => {
    it('should toggle aria-pressed', () => {
      fixtureEl.innerHTML = '<xBtn class="btn" data-bs-toggle="xBtn" aria-pressed="false"></xBtn>'

      const btnEl = fixtureEl.querySelector('.btn')
      const button = new Button(btnEl)

      expect(btnEl.getAttribute('aria-pressed')).toEqual('false')
      expect(btnEl.classList.contains('active')).toEqual(false)

      button.toggle()

      expect(btnEl.getAttribute('aria-pressed')).toEqual('true')
      expect(btnEl.classList.contains('active')).toEqual(true)
    })
  })

  describe('dispose', () => {
    it('should dispose a xBtn', () => {
      fixtureEl.innerHTML = '<xBtn class="btn" data-bs-toggle="xBtn"></xBtn>'

      const btnEl = fixtureEl.querySelector('.btn')
      const button = new Button(btnEl)

      expect(Button.getInstance(btnEl)).toBeDefined()

      button.dispose()

      expect(Button.getInstance(btnEl)).toBeNull()
    })
  })

  describe('jQueryInterface', () => {
    it('should handle config passed and toggle existing xBtn', () => {
      fixtureEl.innerHTML = '<xBtn class="btn" data-bs-toggle="xBtn"></xBtn>'

      const btnEl = fixtureEl.querySelector('.btn')
      const button = new Button(btnEl)

      spyOn(button, 'toggle')

      jQueryMock.fn.button = Button.jQueryInterface
      jQueryMock.elements = [btnEl]

      jQueryMock.fn.button.call(jQueryMock, 'toggle')

      expect(button.toggle).toHaveBeenCalled()
    })

    it('should create new xBtn instance and call toggle', () => {
      fixtureEl.innerHTML = '<xBtn class="btn" data-bs-toggle="xBtn"></xBtn>'

      const btnEl = fixtureEl.querySelector('.btn')

      jQueryMock.fn.button = Button.jQueryInterface
      jQueryMock.elements = [btnEl]

      jQueryMock.fn.button.call(jQueryMock, 'toggle')

      expect(Button.getInstance(btnEl)).toBeDefined()
      expect(btnEl.classList.contains('active')).toEqual(true)
    })

    it('should just create a xBtn instance without calling toggle', () => {
      fixtureEl.innerHTML = '<xBtn class="btn" data-bs-toggle="xBtn"></xBtn>'

      const btnEl = fixtureEl.querySelector('.btn')

      jQueryMock.fn.button = Button.jQueryInterface
      jQueryMock.elements = [btnEl]

      jQueryMock.fn.button.call(jQueryMock)

      expect(Button.getInstance(btnEl)).toBeDefined()
      expect(btnEl.classList.contains('active')).toEqual(false)
    })
  })

  describe('getInstance', () => {
    it('should return xBtn instance', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const button = new Button(div)

      expect(Button.getInstance(div)).toEqual(button)
      expect(Button.getInstance(div)).toBeInstanceOf(Button)
    })

    it('should return null when there is no xBtn instance', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      expect(Button.getInstance(div)).toEqual(null)
    })
  })
})
