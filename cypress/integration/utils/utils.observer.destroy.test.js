import { addObserver, destroyObserver } from '../../../src/utils'

describe('addObserver', () => {
  beforeEach(() => {
    cy.visit('utils/observer')
  })

  it('Removes the observer from the element state', () => {
    cy.get('[data-cy=paragraph]').then(([el]) => {
      const elementMap = new WeakMap()
      elementMap.set(el, {})

      const snipText = () => {}
      const state = { elementMap }

      addObserver(state, snipText, el)
      destroyObserver(state, el)

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(10).then(() => {
        expect(state.elementMap.get(el).observer).eq(undefined)
        expect(state.elementMap.get(el).observer).eq(undefined)
      })
    })
  })
})
