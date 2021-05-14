import { getLines } from 'js-snip'

describe('Directive Inserted', () => {
  beforeEach(() => {
    cy.visit('/directive')
  })

  it('Adds the element to the map', () => {
    cy.window().then(window => {
      const { elementMap } = window.__VueSnipState
      cy.get('[data-cy=paragraph1]').then(([paragraph]) => {
        expect(elementMap.has(paragraph)).to.equal(true)
      })
    })
  })

  it('Snips the element', () => {
    cy.get('[data-cy=paragraph1]').then(([paragraph]) => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(10, () => {
        expect(getLines(paragraph)).equal(3)
      })
    })
  })
})
